import { z } from "zod";
import { fail } from "@sveltejs/kit";
import { redirect, setFlash } from "sveltekit-flash-message/server";
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

        if (
            (form.data.new_password) &&
            (form.data.new_password.trim().length > 0)
        ) {
            const result = (await locals.sql`
                SELECT auth.user_change_password(${form.data.new_password})
            `)[0].user_change_password;
            console.log(result);
            if (result.status_code !== 200) {
                setFlash(
                    {
                        type: "error",
                        message: `Error ${ result.status_code }`
                    },
                    event
                );
                return fail(400, { form });
            }
        }

        throw redirect(
            302,
            "./",
            {
                type: "success",
                message: "Great, we got those edits"
            },
            event
        );
    }
};
