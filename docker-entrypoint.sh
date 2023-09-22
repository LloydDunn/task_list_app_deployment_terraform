#!/bin/sh

echo "Running Docker entrypoint script ..."

cd /usr/src/app/server

echo "Starting server ..."
node server.js
