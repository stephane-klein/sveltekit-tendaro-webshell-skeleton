import { redirect } from "@sveltejs/kit";

export async function load({locals}) {
    if (locals.client.user)
        throw redirect(302, "/spaces/");

    throw redirect(302, "/login/");
}
