#!/usr/bin/env sh
set -eu

envsubst '${COUCH_HOST} ${COUCH_PORT}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

exec "$@"