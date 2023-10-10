export async function load({locals, parent}) {
    return {
        space: (
            (await locals.sql`
                SELECT
                    id          AS id,
                    slug        AS slug,
                    title       AS title,
                    description AS description,
                    (
                        SELECT array_agg(row_to_json(_space_users))
                        FROM
                            (
                                SELECT
                                    users.id         AS id,
                                    users.first_name AS first_name,
                                    users.last_name  AS last_name
                                FROM auth.space_users
                                LEFT JOIN auth.users
                                       ON users.id = space_users.user_id
                                WHERE
                                    space_users.space_id = spaces.id
                                LIMIT 8
                            ) AS _space_users
                    ) AS users
                FROM auth.spaces
                WHERE
                    id=${locals.client.current_space.id}
            `)[0]
        ),
        ...(await parent())
    };
}
