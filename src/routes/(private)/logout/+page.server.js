import { redirect } from "@sveltejs/kit";

export async function load({ locals, cookies }) {
    await locals.sql`
        SELECT auth.logout()
    `;
    cookies.set(
        "session",
        "",
        {
            path: "/",
            secure: (process.env.DISABLE_COOKIE_SECURE !== "1")
        }
    );
    throw redirect(302, "/");
}
