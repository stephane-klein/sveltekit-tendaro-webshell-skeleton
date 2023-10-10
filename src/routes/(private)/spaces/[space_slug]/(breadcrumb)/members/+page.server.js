export async function load({locals}) {
    return {
        members: (
            await locals.sql`
                SELECT
                    users.id         AS id,
                    users.username   AS username,
                    users.first_name AS first_name,
                    users.last_name  AS last_name,
                    users.email      AS email,
                    TO_CHAR(users.last_login, 'YYYY-MM-dd') AS last_login,
                    TO_CHAR(users.created_at, 'YYYY-MM-dd') AS created_at,
                    space_users.role AS role

                FROM auth.space_users

                LEFT JOIN auth.users
                       ON space_users.user_id=users.id

                    WHERE space_users.space_id=${locals.client.current_space.id}

                 ORDER BY users.created_at
            `
        ),
        invitations: (
            await locals.sql`
                SELECT
                    invitations.id                                 AS id,
                    TO_CHAR(invitations.invited_at, 'YYYY-MM-dd')  AS invited_at,
                    invitations.invited_by                         AS invited_by,
                    users.username                                 AS invited_by_username,
                    users.first_name                               AS invited_by_first_name,
                    users.last_name                                AS invited_by_last_name,
                    invitations.email                              AS email,
                    TO_CHAR(invitations.expires, 'YYYY-MM-dd')     AS expires_at
                FROM auth.space_invitations

                INNER JOIN auth.invitations
                        ON space_invitations.invitation_id = invitations.id

                LEFT JOIN auth.users
                       ON invitations.invited_by = users.id

                WHERE space_invitations.space_id = ${locals.client.current_space.id}

                ORDER BY invitations.expires
            `
        )
    };
}
