import { fail } from "@sveltejs/kit";
import { redirect, setFlash } from "sveltekit-flash-message/server";
import { z } from "zod";
import { superValidate } from "sveltekit-superforms/server";

const schema = z.object({
    username: z.string(),
    first_name: z.string().optional(),
    last_name: z.string().optional(),
    email: z.string().email()
});

export async function load({locals}) {
    const form = await superValidate(locals.client.user, schema);
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
            UPDATE auth.users
            SET
                username=${form.data.username},
                first_name=${form.data.first_name},
                last_name=${form.data.last_name},
                email=${form.data.email}
            WHERE id=1
        `;

        throw redirect(
            303,
            "./",
            {
                type: "success",
                message: "Great, we got those edits"
            },
            event
        );
    }
};
