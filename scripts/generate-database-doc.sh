#!/usr/bin/env bash
set -e

cd "$(dirname "$0")/../"

docker compose run --rm tbls doc --rm-dist
