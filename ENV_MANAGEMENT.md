# Vercel Environment Variable Management

This document explains how to manage environment variables for the Ventriloquist monorepo projects deployed on Vercel.

## Available Scripts

### 1. `add-env-to-vercel.sh`

This script reads environment variables from a local `.env` file and adds them to a specified Vercel project. The script supports adding variables to all three environments: Production, Preview, and Development.

#### Features:
- Reads variables from `.env` file
- Detects existing variables to avoid duplicates
- Supports dry-run mode to preview changes
- Option to force overwrite existing variables
- Adds variables to all environments (Production, Preview, Development)
- Temporary project linking for seamless deployment

#### Usage:

Basic usage:
```bash
./add-env-to-vercel.sh
```

This will add all variables from `.env` to the currently linked Vercel project.

#### Options:

| Option | Description |
|--------|-------------|
| `--dry-run` | Show what would be added without making changes |
| `--force` | Overwrite existing variables |
| `--project NAME` | Specify the Vercel project name |
| `--scope NAME` | Specify the Vercel scope/team (default: tablemateios-projects) |
| `-h, --help` | Show help message |

#### Examples:

Add variables to a specific project:
```bash
./add-env-to-vercel.sh --project ventriloquist-app
```

Preview what would be added without making changes:
```bash
./add-env-to-vercel.sh --dry-run --project ventriloquist-api
```

Force overwrite existing variables:
```bash
./add-env-to-vercel.sh --force --project ventriloquist-web
```

### 2. `vercel-env.cjs`

This CommonJS script generates a JSON file containing all environment variables from a `.env` file, ready to be imported to Vercel. The script attempts to auto-detect the project ID and organization ID from `.vercel/project.json`.

#### Usage:
```bash
node vercel-env.cjs
```

This will generate a timestamped JSON file (e.g., `vercel-env-2023_04_01T12_34_56_789Z.json`) that can be used with Vercel's CLI.

## Monorepo Project Structure

The Ventriloquist monorepo contains multiple applications, each deployed to its own Vercel project:

| Directory | Vercel Project | Description |
|-----------|---------------|-------------|
| apps/web | ventriloquist-web | Marketing site |
| apps/app | ventriloquist-app | Main authenticated application |
| apps/api | ventriloquist-api | API services |

When adding environment variables, make sure to add them to all relevant projects.

## Setting Environment Variables for All Projects

To add the same environment variables to all projects, use the following command:

```bash
for project in ventriloquist-web ventriloquist-app ventriloquist-api; do
  ./add-env-to-vercel.sh --project $project
done
```

This will apply all the variables from your `.env` file to all three projects. 