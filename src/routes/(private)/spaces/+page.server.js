export async function load({locals}) {
    return {
        spaces: (
            await locals.sql`
                SELECT
                    spaces.id          AS id,
                    spaces.slug        AS slug,
                    spaces.title       AS title,
                    spaces.description AS description,
                    space_users.role AS role
                FROM auth.space_users
                INNER JOIN auth.spaces
                        ON space_users.space_id=spaces.id
                WHERE
                    space_users.user_id=${locals.client.user.id}
            `
        )
    };
}
