#!/usr/bin/env bash
set -e

cd "$(dirname "$0")/../"

gomplate -f _deploy_tendaro_app.sh | ssh root@$SERVER1_IP 'bash -s'
