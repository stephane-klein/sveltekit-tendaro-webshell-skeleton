#!/usr/bin/env bash
set -e

cd "$(dirname "$0")/../"

docker build ./ -f Dockerfile -t stephaneklein/tendaro_app:develop --platform linux/amd64
