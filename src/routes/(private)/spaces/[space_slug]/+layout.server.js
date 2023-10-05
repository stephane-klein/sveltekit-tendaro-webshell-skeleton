export async function load({locals, parent}) {
    return {
        space: (
            (await locals.sql`
                SELECT
                    id          AS id,
                    slug        AS slug,
                    title       AS title,
                    description AS description
                FROM auth.spaces
                WHERE
                    id=${locals.client.current_space.id}
            `)[0]
        ),
        ...(await parent())
    };
}
