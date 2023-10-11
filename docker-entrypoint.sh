#!/usr/bin/env sh

set -e

./node_modules/.bin/graphile-migrate migrate
node ./index.js
