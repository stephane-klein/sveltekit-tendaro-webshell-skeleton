import { redirect, fail } from "@sveltejs/kit";
import { z } from "zod";
import { superValidate } from "sveltekit-superforms/server";

const schema = z.object({
    lang: z.string()
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

        await locals.sql`
            UPDATE auth.users
            SET
                lang=${form.data.lang}
            WHERE id=1
        `;

        throw redirect(302, "./");
    }
};
