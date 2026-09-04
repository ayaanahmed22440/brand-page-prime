# Architecture

## Concept

    Business data + Template + Customisation = Website

Business data is owned by the tenant and never stored inside a template. A
template describes structure; customisation applies palette, typography and
section overrides on top. Swapping template preserves content.

## Layers

- `src/domain/*` — framework-free TypeScript types: `Tenant`, `Business`,
  `Template`, `WebsiteContent`, `WebsiteCustomization`, `Website`, `Domain`,
  `Lead`, `Subscription`.
- `src/templates/registry.ts` — typed template registry (`id`, `name`, `niche`,
  `version`, `status`, `preview`, `sections`, `configuration`). New designs are
  added by registering an entry; no application code changes.
- `src/lib/*` — static site copy, navigation config.
- `src/components/marketing/*` — public-site chrome and section primitives.
- `src/components/app-shell/*` — shared shell for customer and admin apps.
- `src/routes/*` — file-based routes (TanStack Router). `routeTree.gen.ts` is
  generated; never edit it.

## Routing

- Public: `/`, `/product`, `/how-it-works`, `/pricing`, `/signin`, `/signup`,
  `/sitemap.xml`.
- Customer app: `/app` layout + nine module routes.
- Admin: `/admin` layout + ten module routes.

Both app areas are `noindex`. Modules that have no functionality render
`ModuleStub`, which states the delivery stage and dependencies rather than
simulating a working screen.

## Multi-tenancy

    User -> Business -> Website -> Content -> Leads -> Domains -> Subscription -> Support

Every tenant-owned type carries `businessId`. When the database is enabled,
isolation is enforced at the database layer (row-level security keyed on the
business the user belongs to), not in the frontend. There is no global website
and no hardcoded customer.

## Styling

Tailwind v4 with all tokens centralised in `src/styles.css`: one primary
(ink navy), one accent (clay), warm neutral surfaces, hairline borders, Inter.
Changing the brand means changing those variables only.
