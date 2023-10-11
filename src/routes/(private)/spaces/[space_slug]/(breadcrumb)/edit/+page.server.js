import { fail } from "@sveltejs/kit";
import { z } from "zod";
import { redirect, setFlash } from "sveltekit-flash-message/server";
import { superValidate } from "sveltekit-superforms/server";

const schema = z.object({
    slug: z.string(),
    title: z.string(),
    description: z.string().optional(),
    is_publicly_browsable: z.boolean(),
    invitation_required: z.boolean()
});

export async function load({locals}) {
    const form = await superValidate(
        (await locals.sql`
            SELECT
                slug,
                title,
                description,
                is_publicly_browsable,
                invitation_required
            FROM
                auth.spaces
            WHERE
                id=${locals.client.current_space.id}
        `)[0],
        schema
    );
    return { form };
};

export const actions = {
    default: async(event) => {
        const { locals, request } = event;
        const form = await superValidate(request, schema);

        if (!form.valid) {
            setFlash(
                {
                    type: "error",
                    message: "Error"
                },
                event
            );
            return fail(400, { form });
        }

        await locals.sql`
            UPDATE auth.spaces
            SET
                slug=${form.data.slug},
                title=${form.data.title},
                description=${form.data.description},
                is_publicly_browsable=${form.data.is_publicly_browsable},
                invitation_required=${form.data.invitation_required}
            WHERE id=${locals.client.current_space.id}
        `;

        throw redirect(
            302,
            `../../${form.data.slug}/edit/`,
            {
                type: "success",
                message: "Great, we got those edits"
            },
            event
        );
    }
};
