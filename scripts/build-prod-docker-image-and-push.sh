#!/usr/bin/env bash
set -e

cd "$(dirname "$0")/../"

docker build ./ -f Dockerfile -t stephaneklein/tendaro_app:prod --platform linux/amd64
docker push stephaneklein/tendaro_app:prod
