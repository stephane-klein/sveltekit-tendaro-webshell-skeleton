import { z } from "zod";
import { fail } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms/server";

const schema = z.object({
    username: z.string(),
    first_name: z.string().optional(),
    last_name: z.string().optional(),
    email: z.string().email(),
    password: z.string().optional()
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

        console.log(form.data);
        if (
            (form.data.password) &&
            (form.data.password.trim().length > 0)
        ) {
            const result = await locals.sql`
                SELECT auth.user_change_password(${form.data.password})
            `;
            if (result[0].status_code !== 200) {
                return fail(result[0].status_code, result[0]);
            }
        }
        await locals.sql`
            UPDATE auth.users
            SET
                username=${form.data.username},
                first_name=${form.data.first_name},
                last_name=${form.data.last_name},
                email=${form.data.email}
            WHERE id=1
        `;

        return { form };
    }
};
