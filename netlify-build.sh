#!/bin/bash

# Netlify build script for Angular project
echo "Starting Netlify build for GIS Ingeniería..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the project
echo "Building Angular project..."
npm run build:deploy

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "Build completed successfully!"
    ls -la dist/gis-ingenieria-web/browser/
else
    echo "Build failed!"
    exit 1
fi
