#!/bin/bash

# Install dependencies
echo "Installing dependencies..."
npm install

# Start the frontend server directly since npm is having issues in the background
echo "Starting frontend server..."
npx next dev 