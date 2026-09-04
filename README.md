# WebWarheads

Website-as-a-service for local service businesses, starting with cleaning
companies. The architecture is niche-independent.

    Business data + Template + Customisation = Website

## Status

Stage 01 (foundation) only. The marketing site, customer app shell and admin
shell are real and navigable. Authentication, the database, the website engine
and every business feature are not built yet — each module says so in place,
with the stage that delivers it.

## Requirements

- Node.js LTS (22.x)
- npm

## Commands

    npm ci        # reproducible install
    npm run dev   # local development
    npm run build # production build
    npm run start # serve the production build

## Environment

Copy `.env.example` to `.env` and fill it in locally. Only variable names are
committed. `VITE_`-prefixed values reach the browser; everything else is
server-only.

## Structure

    src/domain/       framework-free business types
    src/templates/    template registry
    src/lib/          site copy and navigation config
    src/components/   marketing chrome and app shell
    src/routes/       file-based routes (public, /app, /admin)
    docs/             architecture, database, deployment, roadmap

## Docs

- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)
- [docs/DATABASE.md](docs/DATABASE.md)
- [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)
- [docs/PRODUCT-ROADMAP.md](docs/PRODUCT-ROADMAP.md)
