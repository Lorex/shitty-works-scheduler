#!/bin/sh

docker-compose down
docker-compose rm
docker-compose pull
docker-compose -p shitty-works up -d
