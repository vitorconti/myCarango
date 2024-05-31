#!/bin/bash

# Define source and destination paths
SOURCE_DB="./src/infra/db/sqlite/myCarango-database.db"
DEST_DIR="./dist/src/infra/db/sqlite"

# Ensure the destination directory exists
mkdir -p "$DEST_DIR"

# Copy the database file
cp "$SOURCE_DB" "$DEST_DIR"

# Print success message
echo "Database file copied to $DEST_DIR"
