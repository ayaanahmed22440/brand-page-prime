# WebWarheads — Day 1 Foundation

Goal: a clean, professional, GitHub-ready foundation. Landing page, customer app shell, admin app shell, typed domain model, template registry, documentation. No fake functionality.

## Design direction

Restrained, human-designed: no gradients, no glassmorphism, no glow, no floating shapes, no emoji UI, no fake dashboards or testimonials. One primary brand color (deep ink navy), one restrained accent (warm amber-clay for actions only), neutral warm-grey surfaces, hairline borders, generous whitespace. Inter for UI and headings; measured sizes (hero headline ~clamp 2.5–3.5rem, not larger), tight tracking on headings, 65–75ch paragraph width. Motion limited to 150–200ms color/opacity transitions and menu/panel open-close.

All tokens centralized in `src/styles.css` (oklch), so the palette can be swapped in one place.

## What gets built

### Public site
- `/` — landing: header nav (Product, How It Works, Pricing, Sign in, Get started), hero ("Websites for local businesses, without the hassle."), How It Works (Add your business → Choose your website → Publish), Product Preview rendered from the real app shell UI (a static, honest composition of our own components — no invented analytics), Capabilities section describing planned features and labelling what is not live yet, final CTA, footer.
- `/product`, `/how-it-works`, `/pricing` — real routes with their own metadata and honest copy. Pricing shows the intended structure with a clear "pricing not final" note rather than invented numbers presented as live.
- `/signin`, `/signup` — static forms, accessible and labelled, wired to nothing, with a visible note that accounts arrive in Stage 02. No fake auth, no local session faking.

### Customer app shell
Layout with sidebar + mobile drawer nav, tenant switcher placeholder, at routes:
`/app`, `/app/website`, `/app/business`, `/app/leads`, `/app/reviews`, `/app/domain`, `/app/billing`, `/app/support`, `/app/settings`.
Each non-implemented page uses a shared `ModuleStub` component stating plainly what it will do and which stage delivers it.

### Admin app shell
Same shell pattern, distinct chrome, at:
`/admin`, `/admin/customers`, `/admin/websites`, `/admin/templates`, `/admin/domains`, `/admin/leads`, `/admin/billing`, `/admin/support`, `/admin/analytics`, `/admin/settings`.

Both shells are unauthenticated placeholders today; the route structure is prepared so an auth gate can wrap them in Stage 02. This is documented, not disguised.

### Domain model and template registry (types only, no fake services)
`src/domain/`: `business.ts`, `website.ts`, `template.ts`, `content.ts`, `customization.ts`, `lead.ts`, `domain.ts`, `subscription.ts`, plus `tenant.ts` for the `businessId` ownership convention.
`src/templates/registry.ts`: typed registry with section descriptors, niche, version, status, preview — registered with one placeholder cleaning template entry so adding Cleaning 01/02/03 later needs no refactor. Business data is never embedded in a template; templates declare sections and read from `WebsiteContent`.

### Config, SEO, docs
- `.env.example` with placeholder names only (database, storage, email, Whop, Google, domain provider, Cloudflare, monitoring). No secrets committed.
- `public/robots.txt` updated; `/sitemap.xml` served as a route generated from the public route list.
- Per-route `head()` metadata: unique title, description, og/twitter tags, canonical.
- `README.md` rewritten; `docs/ARCHITECTURE.md`, `docs/DEPLOYMENT.md`, `docs/PRODUCT-ROADMAP.md` (30-stage outline, Stage 02 next), and `docs/DATABASE.md` with the documented planned schema (users, businesses, websites, templates, website_content, website_customizations, assets, domains, leads, google_connections, subscriptions, support_requests, activity_logs) including tenant-isolation and row-level-security intent.

## Technical notes

- Stack is fixed by this environment: TanStack Start v1 + React 19 + Vite 7 + Tailwind v4, TypeScript throughout. File-based routes under `src/routes/`.
- Two deviations from the brief, called out rather than silently ignored: (a) the toolchain here uses Bun's lockfile, and (b) the default deploy target is Lovable's edge hosting, not Hostinger. `docs/DEPLOYMENT.md` will document Node LTS + `npm ci` / `npm run build` / `npm run start` as the portable path for self-hosting on Hostinger VPS, and note what must change if you leave Lovable hosting. Nothing in the code will depend on Lovable-only tooling.
- No database is enabled today — no backend calls, no mock API layer, no seeded customer data.
- Components split by area: `src/components/marketing/*`, `src/components/app-shell/*`, `src/components/ui/*` (shadcn primitives as needed). Business logic stays out of presentation components.
- Accessibility: semantic landmarks, single H1 per page, visible focus rings, labelled inputs, keyboard-operable nav and mobile drawer, no color-only status.
- Audit before finishing: typecheck, production build, route smoke check in the preview, console clean, responsive check at mobile/tablet/desktop widths.

## Explicitly not in this stage

Billing, domain purchase/connect, Google Business Profile, reviews sync, lead capture and CRM, support tickets, website editor and publishing, real authentication, database provisioning.
