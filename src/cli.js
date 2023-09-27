import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

import sql from "./db.js";

yargs(hideBin(process.argv))
    .command("user", "Manage users", (yargs) =>
        yargs.command(
            "create",
            "create a user",
            (yargs) =>
                yargs.options({
                    username: {
                        string: true,
                        demandOption: true
                    },
                    firstname: {
                        default: undefined,
                        string: true
                    },
                    lastname: {
                        default: undefined,
                        string: true
                    },
                    email: {
                        string: true,
                        demandOption: true
                    },
                    password: {
                        string: true,
                        demandOption: true
                    }
                }),
            async(argv) => {
                try {
                    await sql`
                        SELECT auth.create_user(
                            _username     => ${argv.username},
                            _first_name   => ${argv?.firstname || ""},
                            _last_name    => ${argv?.lastname || ""},
                            _email        => ${argv.email},
                            _password     => ${argv.password},
                            _is_active    => TRUE,
                            _is_superuser => FALSE,
                            _spaces       => NULL,
                            _lang         => 'EN'
                        );
                    `;
                } catch (err) {
                    console.log(err.message);
                } finally {
                    sql.end();
                }
            }
        )
    )
    .parse();
