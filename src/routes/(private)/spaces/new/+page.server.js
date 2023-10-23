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
            SELECT auth.create_space(
                _slug => ${form.data.slug},
                _title => ${form.data.title},
                _description => ${form.data.description || ""},
                _is_publicly_browsable => ${form.data.is_publicly_browsable},
                _invitation_required => ${form.data.invitation_required}
            );
        `;

        throw redirect(302, `../${form.data.slug}/`);
    }
};
