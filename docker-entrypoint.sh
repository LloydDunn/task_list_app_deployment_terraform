#!/bin/sh

echo "Running Docker entrypoint script ..."

# Runs the command passed in to this script.
# The command is defined in the Dockerfile using CMD.
# https://stackoverflow.com/a/9994328
exec "$@"
