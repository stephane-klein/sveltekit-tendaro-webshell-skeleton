import { redirect, fail } from "@sveltejs/kit";
import { z } from "zod";
import { superValidate } from "sveltekit-superforms/server";

const schema = z.object({
    title: z.string(),
    description: z.string().optional()
});

export async function load({parent}) {
    const form = await superValidate((await parent()).space, schema);
    return { form };
};

export const actions = {
    default: async({ locals, request }) => {
        const form = await superValidate(request, schema);

        if (!form.valid) {
            return fail(400, { form });
        }
        console.log('locals');
        console.log(locals);
        console.log(locals.client.current_space.id);

        await locals.sql`
            UPDATE auth.spaces
            SET
                title=${form.data.title},
                description=${form.data.description}
            WHERE id=${locals.client.current_space.id}
        `;

        throw redirect(302, "./");
    }
};
