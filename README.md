# next-forge

**Production-grade Turborepo template for Next.js apps.**

<div>
  <img src="https://img.shields.io/npm/dy/next-forge" alt="" />
  <img src="https://img.shields.io/npm/v/next-forge" alt="" />
  <img src="https://img.shields.io/github/license/haydenbleasel/next-forge" alt="" />
</div>

[next-forge](https://github.com/haydenbleasel/next-forge) is a [Next.js](https://nextjs.org/) project boilerplate for modern web application. It is designed to be a comprehensive starting point for new apps, providing a solid, opinionated foundation with a minimal amount of configuration.

Clone the repo using:

```sh
npx next-forge@latest init
```

Then read the [docs](https://docs.next-forge.com) for more information.

<a href="https://github.com/haydenbleasel/next-forge/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=haydenbleasel/next-forge" />
</a>

Made with [contrib.rocks](https://contrib.rocks).

# Ventriloquist

**Deep web crawling with N8N made simple.**

Ventriloquist is an N8N node that abstracts Playwright commands to perform powerful, deep, custom web crawling actions. This repository contains the infrastructure to make it a paid service for people who want to use it.

## Development

### Running the application

To start the development server:

```sh
pnpm --filter web dev
```

**IMPORTANT NOTE:** For some reason, you need to access the application using your machine's IP address instead of localhost:

```
http://192.168.1.193:3001  # Use your actual IP address shown in the terminal output
```

The server will display both URLs when started:
- Local: http://localhost:3001 (may not work properly)
- Network: http://YOUR_IP_ADDRESS:3001 (use this one)

### Testing

To run the tests:

```sh
pnpm test
```

### Building

To build all apps:

```sh
pnpm build
```

## Deployment to Vercel

To deploy the project to Vercel:

1. Create separate projects in Vercel for:
   - `apps/web` (marketing site)
   - `apps/app` (application)
   - `apps/api` (backend API)

2. For each project:
   - Select your repository
   - Change the Root Directory to the specific app (e.g., `apps/web`)
   - Add all required environment variables
   - Click "Deploy"

## Tech Stack

This project is built with:
- Next.js 15
- Turborepo
- Tailwind CSS
- TypeScript
