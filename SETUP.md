# Ventriloquist Web Application Setup Guide

This document provides step-by-step instructions for setting up and running the Ventriloquist web application locally.

## Prerequisites

- Node.js 18.x or later
- pnpm 10.x or later (preferred package manager)
- Git

## Initial Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd VentriloquistWeb
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   ```bash
   # Copy the example environment files
   cp .env.example .env
   cp apps/web/.env.example apps/web/.env.local
   cp apps/app/.env.example apps/app/.env.local
   cp apps/api/.env.example apps/api/.env.local
   
   # Then edit them with your specific values
   ```

## Running the Application

There are multiple apps in this monorepo that can be run independently:

### Running the Web App (Marketing Site)

```bash
cd apps/web
pnpm next dev
```

The web app will be available at http://localhost:3001 (or another port if 3001 is in use).

### Running the Main App

```bash
cd apps/app
pnpm next dev
```

The app will be available at http://localhost:3000 (or another port if 3000 is in use).

### Running the API

```bash
cd apps/api
pnpm next dev
```

The API will be available at http://localhost:3002 (or another port if 3002 is in use).

## Troubleshooting

### Tailwind CSS Issues

If you encounter Tailwind CSS module errors like `Cannot find module '@tailwindcss/postcss'`, you may need to install the missing dependencies:

```bash
cd packages/design-system && pnpm add @tailwindcss/postcss
cd apps/web && pnpm add @tailwindcss/postcss
cd apps/app && pnpm add @tailwindcss/postcss
```

### BaseHub Integration Issues

The application uses custom implementations for BaseHub components. If you encounter errors related to BaseHub, ensure that the custom components in `packages/cms/components/` are properly implemented.

### Next.js "Command not found" Error

If you see `sh: next: command not found` when running `pnpm dev`, make sure:
1. All dependencies are installed
2. You're running the command from the correct directory
3. Try running `pnpm next dev` instead of `pnpm dev`

## Development Workflow

1. Make changes in the relevant app or package
2. Run tests with `pnpm test`
3. Lint your code with `pnpm lint`
4. Build the project with `pnpm build`
5. Commit your changes and push to the repository

## Additional Commands

- `pnpm build`: Build all apps and packages
- `pnpm dev`: Run all apps in development mode
- `pnpm lint`: Lint all code
- `pnpm test`: Run all tests
- `pnpm migrate`: Run database migrations (Prisma)
- `pnpm setup:env`: Set up environment variables using the setup script

## Vercel Deployment

To deploy the apps to Vercel:

1. Make sure you've linked your Vercel account:
   ```bash
   vercel login
   vercel link
   ```

2. Deploy the apps individually:
   ```bash
   cd apps/web && vercel
   cd apps/app && vercel
   cd apps/api && vercel
   ```

3. To add environment variables to Vercel, use the provided script:
   ```bash
   ./add-env-to-vercel.sh
   ``` 