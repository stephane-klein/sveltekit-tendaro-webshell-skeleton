import { redirect, fail } from "@sveltejs/kit";
import { z } from "zod";
import { superValidate } from "sveltekit-superforms/server";

const schema = z.object({
    slug: z.string(),
    title: z.string(),
    description: z.string().optional(),
    is_publicly_browsable: z.boolean(),
    invitation_required: z.boolean()
});

export async function load() {
    const form = await superValidate({}, schema);
    return { form };
};

export const actions = {
    default: async({ locals, request }) => {
        const form = await superValidate(request, schema);

        if (!form.valid) {
            return fail(400, { form });
        }

        await locals.sql`
            WITH _space AS (
                INSERT INTO auth.spaces
                (
                    slug,
                    title,
                    description,
                    is_publicly_browsable,
                    invitation_required
                )
                VALUES(
                    ${form.data.slug},
                    ${form.data.title},
                    ${form.data.description},
                    ${form.data.is_publicly_browsable},
                    ${form.data.invitation_required}
                ) RETURNING id
            )
            INSERT INTO auth.space_users
                (
                    user_id,
                    space_id,
                    role
                )
                VALUES(
                    (NULLIF(CURRENT_SETTING('auth.user_id', TRUE), ''))::INTEGER,
                    (SELECT id FROM _space LIMIT 1),
                    'space.OWNER'
                )
        `;

        throw redirect(302, `../${form.data.slug}/`);
    }
};
