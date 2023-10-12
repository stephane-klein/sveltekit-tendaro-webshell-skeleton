# Application deployment on Scaleway

Prerequisites:

- https://asdf-vm.com/

Initialize _asdf_:

```sh
$ asdf plugin add scaleway-cli
$ asdf plugin-add jq https://github.com/AZMCode/asdf-jq.git
$ asdf plugin-add gomplate https://github.com/sneakybeaky/asdf-gomplate.git
$ asdf install
```

```sh
$ cp .secret.skel .secret
```

Update `.secret` and `.envrc` with your personnal access key, secret key…

Load variable env:

```sh
$ direnv allow
```

## Part 1: deploy the server

```sh
$ terraform init
```

```sh
$ terraform apply
Apply complete! Resources: 3 added, 0 changed, 0 destroyed.
```

```sh
$ scw instance server list
ID                                    NAME                   TYPE    STATE    ZONE      PUBLIC IP     PRIVATE IP   TAGS  IMAGE NAME
b17673c5-2b8c-4f36-8d4d-a6bbd933b4c6  tf-srv-frosty-dewdney  DEV1-S  running  fr-par-1  51.15.192.91  10.68.40.41  []    Ubuntu 22.04 Jammy Jellyfish
```

Fetch public ip:

```sh
$ scw instance server list name=server1 -o json | jq -r ".[0].public_ip.address"
```

or:

```sh
$ direnv reload
$ echo $SERVER1_IP
51.158.119.141
```

Add server fingerprint to you `known_hosts`:

```sh
$ ssh -o "StrictHostKeyChecking no" root@$SERVER1_IP
# exit
```

```sh
$ ./scripts/install_basic_server_configuration.sh
```

## Part 2: deploy application

```sh
$ ./scripts/deploy_tendaro_app.sh
```

Inject fixture to instance deployed:

```sh
$ ssh -L 5435:127.0.0.1:5432 root@${SERVER1_IP}
$ ../load-fixtures.js
Load fixtures...
Fixtures loaded
```

```sh
$ echo "Go to http://$SERVER1_IP"
Go to http://51.158.119.141
```

Try this login / password.

- Login: `john.doe1@example.com`
- Password: `secret1`

More info, see [`../fixtures.yml`](../fixtures.yml).

## Part 3: destroy the server

```sh
$ terraform destroy
```
