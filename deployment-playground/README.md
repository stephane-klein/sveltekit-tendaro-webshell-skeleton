## Deployment playground

I use this playground to test the version of the application packaged as in production, in a Docker container.

```sh
$ docker compose up -d --wait
```

Inject fixture to deployment playground:

```sh
$ ../load-fixtures.js
Load fixtures...
Fixtures loaded
```

Go to http://localhost:5173/

Try this login / password.

- Login: `john.doe1@example.com`
- Password: `secret1`

More info, see [`../fixtures.yml`](../fixtures.yml).
