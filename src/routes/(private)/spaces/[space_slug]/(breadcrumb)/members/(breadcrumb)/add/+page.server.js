import { redirect } from "@sveltejs/kit";
import { z } from "zod";
import { superValidate } from "sveltekit-superforms/server";
import jwt from "jsonwebtoken";
import logger from "$lib/server/logger.js";
import mail from "$lib/server/mail.js";

const schema = z.object({
    email: z.string(),
});

export async function load({locals}) {
    const form = await superValidate({}, schema);

    return { form };
};

export const actions = {
    default: async({ locals, request }) => {
        const form = await superValidate(request, schema);

        // Test if the user already has an account
        const user = (await locals.sql`
            SELECT auth.get_user_by_email(${form.data.email})
        `)[0].get_user_by_email;

        if (user !== null) {
            if (
                (
                    await locals.sql`
                        SELECT COUNT(*)::INTEGER AS count FROM auth.space_users
                        WHERE
                            (user_id=${user.id}) AND
                            (space_id=${locals.client.current_space.id})
                    `
                )[0].count === 0
            ) {
                await locals.sql`
                    INSERT INTO auth.space_users
                    (
                        user_id,
                        space_id,
                        role
                    )
                    VALUES(
                        ${user.id},
                        ${locals.client.current_space.id},
                        'space.MEMBER'
                    )
                `;

                logger.info(
                    {
                        user_id: user.id,
                        space_id: locals.client.current_space.id
                    },
                    "User added to workspace"
                );
            } else {
                logger.info(
                    {
                        user_id: user.id,
                        space_id: locals.client.current_space.id
                    },
                    "User already present in workspace"
                );
            }
        } else {
            const token = jwt.sign(
                {
                    user_id: locals.client.user.id,
                    email: form.data.email
                },
                process.env.SECRET || "secret",
                {
                    expiresIn: "7d"
                }
            );

            await locals.sql`
                WITH _invitation AS (
                    INSERT INTO auth.invitations
                    ${
                        locals.sql({
                            "invited_by": locals.client.user.id,
                            "email": form.data.email,
                            "token": token,
                        })
                    }
                    RETURNING id
                ),
                _space_invitations AS (
                    INSERT INTO auth.space_invitations
                    (
                        invitation_id,
                        space_id,
                        role
                    )
                    VALUES(
                        (SELECT id FROM _invitation),
                        ${locals.client.current_space.id},
                        'space.MEMBER'
                    )
                )
                INSERT INTO auth.audit_events
                    (
                        entity_type,
                        entity_id,
                        space_ids,
                        event_type
                    )
                    VALUES(
                        'auth.invitations',
                        (SELECT id FROM _invitation),
                        ${[locals.client.current_space.id]},
                        'CREATED'
                    );
            `;

            const invitationUrl = new URL(request.url);
            invitationUrl.pathname = "/signup/";
            invitationUrl.searchParams.set("token", token);

            const { messageId } = await mail.sendMail({
                from: "noreply@example.com",
                to: form.data.email,
                subject: "[MyApp] Invitation",
                text: `Invitation ${invitationUrl}`,
                html: `<a href="${invitationUrl}">Invitation</a>`
            });

            logger.info(
                {
                    invited_by: locals.client.user.id,
                    email: form.data.email,
                    token: token,
                    messageId: messageId
                },
                "Send invitation"
            );
        }

        throw redirect(302, "./../");
    }
};
