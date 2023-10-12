#!/usr/bin/env bash
set -e

PROJECT_FOLDER="/srv/tendaro_app/"

mkdir -p ${PROJECT_FOLDER}

cat <<EOF > ${PROJECT_FOLDER}docker-compose.yaml
version: '3.8'
services:
  tendaro_app:
    image: stephaneklein/tendaro_app:prod
    ports:
    - 80:3000
    environment:
      POSTGRES_URL: postgres://postgres:password@postgres/myapp
      # Used by graphile-migrate
      DATABASE_URL: postgres://postgres:password@postgres/myapp
      ORIGIN: http://{{ .Env.SERVER1_IP }}
      DISABLE_COOKIE_SECURE: 1
    depends_on:
      postgres:
        condition: service_healthy

  postgres:
    image: postgres:16
    restart: unless-stopped
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
    ports:
      - 127.0.0.1:5432:5432
    volumes:
      - /var/lib/tendaro_app/postgres/:/var/lib/postgresql/data
    healthcheck:
      test: ['CMD', 'pg_isready']
      interval: 10s
      start_period: 30s

EOF

cd ${PROJECT_FOLDER}

docker compose pull
docker compose up -d tendaro_app
