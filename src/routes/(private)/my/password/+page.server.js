import { z } from "zod";
import { fail } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms/server";

const schema = z.object({
    new_password: z.string(),
    confirm_new_password: z.string()
});

export async function load({locals}) {
    const form = await superValidate(locals.client.user, schema);
    return { form };
};

export const actions = {
    default: async({ locals, request }) => {
        const form = await superValidate(request, schema);

        if (!form.valid) {
            return fail(400, { form });
        }

        if (
            (form.data.new_password) &&
            (form.data.new_password.trim().length > 0)
        ) {
            const result = await locals.sql`
                SELECT auth.user_change_password(${form.data.new_password})
            `;
            if (result[0].status_code !== 200) {
                return fail(result[0].status_code, result[0]);
            }
        }

        return { form };
    }
};
