#!/bin/bash

# Exit on error
set -e

# Get the root directory of the monorepo
ROOT_DIR="$(pwd)"
echo "Setting up environment variables from root .env file..."

# Check if root .env exists
if [ ! -f "$ROOT_DIR/.env" ]; then
  echo "Error: Root .env file doesn't exist!"
  echo "Please create a .env file in the root directory with your Clerk variables."
  echo "You can use the .env.example file as a template."
  exit 1
fi

# Function to create symlink
create_env_link() {
  local target_dir="$1"
  
  # If the .env file in the target directory exists and is not a symlink, back it up
  if [ -f "$target_dir/.env" ] && [ ! -L "$target_dir/.env" ]; then
    echo "Backing up existing .env in $target_dir to .env.backup"
    mv "$target_dir/.env" "$target_dir/.env.backup"
  fi
  
  # Remove any existing symlink
  if [ -L "$target_dir/.env" ]; then
    rm "$target_dir/.env"
  fi
  
  # Create symlink
  echo "Linking $target_dir/.env to root .env"
  ln -s "$ROOT_DIR/.env" "$target_dir/.env"
}

# Link .env file to all apps
for app_dir in apps/*/; do
  echo "Processing $app_dir..."
  create_env_link "$ROOT_DIR/$app_dir"
done

# Also link to common packages that might need environment variables
PACKAGES_WITH_ENV=("packages/auth" "packages/database")
for pkg_dir in "${PACKAGES_WITH_ENV[@]}"; do
  if [ -d "$ROOT_DIR/$pkg_dir" ]; then
    echo "Processing $pkg_dir..."
    create_env_link "$ROOT_DIR/$pkg_dir"
  fi
done

echo "Environment setup complete!"
echo "Your Clerk variables from the root .env file are now available to all apps."
echo "Remember to add these same variables to your Vercel project settings for deployment." 