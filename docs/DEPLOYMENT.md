# Deployment

## Requirements

- Node.js LTS (22.x)
- npm (do not use pnpm)

## Commands

    npm ci
    npm run build
    npm run start

`npm ci` installs exactly what the lockfile pins, so builds are reproducible.

## Environment

Copy `.env.example` and fill it in on the server. Never commit real values.
Variables prefixed `VITE_` are bundled into the browser; everything else is
server-only and must be read inside server function handlers, not at module
scope.

## Hostinger notes

- Use a Node.js application (not static hosting): the app server-renders.
- Entry: the build output's Node server; start with `npm run start`.
- Set the application root to the repository root and the Node version to LTS.
- Provide all server-side environment variables in the panel before first boot.
- No microservices, containers or orchestration are required.

## Current hosting deviation

This repository is presently developed on Lovable, whose default target is an
edge runtime and whose toolchain writes a Bun lockfile. For a Hostinger
deployment, run `npm install` once to generate `package-lock.json` and commit
it, then deploy with `npm ci`.
