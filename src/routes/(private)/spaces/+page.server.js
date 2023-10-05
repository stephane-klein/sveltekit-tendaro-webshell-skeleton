export async function load({locals, parent}) {
    return {
        spaces: (
            await locals.sql`
                SELECT
                    spaces.id          AS id,
                    spaces.slug        AS slug,
                    spaces.title       AS title,
                    spaces.description AS description,
                    space_users.role   AS role,
                    (
                        SELECT COUNT(*)
                        FROM auth.space_users
                        WHERE space_id = spaces.id
                    ) AS users_count,
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
                FROM auth.space_users
                INNER JOIN auth.spaces
                        ON space_users.space_id=spaces.id
                WHERE
                    space_users.user_id=${locals.client.user.id}
            `
        ),
        ...(await parent())
    };
}
