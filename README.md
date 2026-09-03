# Local Business Sites

WEBWARHEADS — DAY 1 FOUNDATION BUILD

Prompt 01 of 30 — Production-Ready SaaS Foundation

Build the Day 1 foundation of WebWarheads.

This is the first stage of a larger 30-stage product build. Do NOT attempt to build every future feature today.

The objective for this task is to create a clean, production-oriented, human-designed foundation that we can continue developing through GitHub and other AI coding agents.

1. WHAT WEBWARHEADS IS

WebWarheads is a Website-as-a-Service platform for local businesses.

We are initially targeting:

Cleaning businesses

The long-term platform will allow businesses to:

create an account

enter business information

upload their logo and photos

choose a professionally designed website template

generate a website from their business data

edit their website

switch templates

publish their website

connect a custom domain

purchase a domain

connect Google Business Profile

display Google reviews

receive website leads

manage leads

manage billing

contact human support

Eventually the platform can expand into:

painters

landscapers

plumbers

HVAC

roofers

contractors

handymen

auto detailing

other local businesses

The architecture must therefore be niche-independent, even though the first implementation is for cleaning companies.

2. CORE PRODUCT CONCEPT

We are NOT building Wix.

We are NOT building WordPress.

We are NOT building a completely unrestricted drag-and-drop website builder.

The core system is:

Business Data + Template + Customization = Website

A customer's business information must remain separate from the visual template.

Example:

Business Data:

Business name

Phone

Email

Location

Service area

Services

Business description

Hours

Logo

Photos

Social links

Testimonials

Template:

Navigation

Hero

Services

About

Gallery

Reviews

CTA

Contact

Footer

The same business data must eventually be reusable across multiple templates.

3. TODAY'S OBJECTIVE

Today, build the foundation only.

At the end of this task we need:

A clean WebWarheads application

A professional landing page

A basic customer application shell

A basic admin application shell

A clean routing architecture

A clean component architecture

A scalable data model foundation

Environment-variable structure

Production build configuration

Hostinger-conscious deployment configuration

Documentation

A clean GitHub-ready repository

No fake production functionality

Do not build billing, domains, Google integrations, CRM, support tickets, or the complete website editor yet.

Those are later stages.

4. DESIGN DIRECTION — EXTREMELY IMPORTANT

The website must look like it was designed by a real professional product/design team.

It must NOT look AI-generated.

Avoid the visual patterns that make modern AI-generated websites immediately recognizable.

STRICTLY AVOID:

purple gradients

blue/purple gradients

rainbow gradients

glassmorphism

glowing cards

floating blobs

floating orbs

excessive shadows

excessive rounded cards

excessive pill-shaped elements

emoji-based UI

fake dashboards

fake testimonials

fake statistics

fake customer logos

unnecessary decorative illustrations

excessive animations

excessive hover animations

cursor-following effects

parallax gimmicks

noisy backgrounds

excessive icons

generic SaaS template layouts

huge meaningless typography

cramped layouts

random Tailwind-demo effects

Do not add an element simply because it looks impressive.

Every visual element should have a purpose.

5. TYPOGRAPHY

Use a highly professional, readable, human-looking typography system.

Prefer a restrained modern font combination such as:

Inter

or another genuinely professional UI font if technically more appropriate.

Use typography intentionally.

Pay close attention to:

font weight

line height

letter spacing

paragraph width

heading hierarchy

whitespace

Do not use futuristic display fonts.

Do not use cartoonish fonts.

Do not use excessive bold text.

Do not make every heading enormous.

The design should feel calm, premium and credible.

6. COLOR SYSTEM

Use a restrained professional color system.

Do NOT use gradients.

Use:

one primary brand color

one restrained accent

neutral backgrounds

strong but comfortable text contrast

subtle borders

The interface should work equally well on desktop and mobile.

The color system must be centralized so it can easily be changed later.

7. ANIMATION

Animation is allowed, but only when it improves usability.

Use subtle transitions for:

navigation

buttons

page transitions

opening/closing panels

useful feedback states

Avoid:

bouncing

spinning

floating

glowing

excessive entrance animations

unnecessary movement

The product should feel polished, not animated for the sake of animation.

8. COPYWRITING

All visible copy must sound like it was written by a professional human copywriter.

Use plain English.

Do NOT use generic AI phrases such as:

Revolutionize your business

Unlock your potential

Transform your business

Empower your growth

Supercharge your business

Unleash the power of AI

The future of business

Game-changing

Next-generation

Seamless solution

Do not invent fake customer claims.

Do not invent fake statistics.

Do not invent fake testimonials.

The product should communicate clearly and honestly.

9. LANDING PAGE

Create a polished initial WebWarheads landing page.

The landing page should communicate:

Websites for local businesses, without the hassle.

The exact copy can be improved later.

Create sections that make sense for the product rather than blindly following a SaaS template.

Suggested structure:

Navigation

WebWarheads logo/wordmark

Product

How It Works

Pricing

Sign In

Get Started

Keep navigation clean.

Hero

Clear value proposition.

Explain that WebWarheads helps local businesses launch a professional website without needing to deal with technical setup.

Primary CTA:

Get Started

Secondary CTA:

See How It Works

Do not use fake product screenshots.

If the actual product UI exists, use it.

How It Works

Show the real basic process:

Add your business

Choose your website

Publish

Keep this section simple.

Product Preview

Create a tasteful representation of the actual WebWarheads product interface.

Do NOT create a fake analytics dashboard just for decoration.

Features

Focus on real planned capabilities:

Professional templates

Simple editing

Custom domains

Google Business integration

Lead capture

Human support

These are product capabilities, not fake claims that everything is already live.

Final CTA

Clear call to action.

Footer

Professional footer with appropriate navigation.

10. CUSTOMER APPLICATION SHELL

Create the basic customer application structure.

Routes should be prepared for:

/app
/app/website
/app/business
/app/leads
/app/reviews
/app/domain
/app/billing
/app/support
/app/settings

Do not fully implement all functionality.

Instead, establish a consistent application shell.

The customer dashboard should eventually contain:

Website

Business

Leads

Reviews

Domain

Billing

Support

Settings

Create the navigation architecture and appropriate placeholder states where functionality is not yet implemented.

Placeholders must clearly indicate that the functionality is coming later.

Do not pretend integrations already work.

11. ADMIN APPLICATION SHELL

Prepare the admin application structure.

Routes:

/admin
/admin/customers
/admin/websites
/admin/templates
/admin/domains
/admin/leads
/admin/billing
/admin/support
/admin/analytics
/admin/settings

Create the admin shell and navigation.

Do not implement the complete functionality yet.

The architecture must allow these modules to be developed independently later.

12. WEBSITE ENGINE FOUNDATION

Create the basic conceptual architecture for the future website engine.

Introduce clear structures/types/interfaces for:

Business
Website
Template
WebsiteContent
WebsiteCustomization

The exact implementation can evolve later.

The important requirement is:

Business information must not be hard-coded into a template.

Templates must eventually be reusable.

13. TEMPLATE FOUNDATION

Create the foundation for a template registry.

For example, conceptually:

Template

id

name

niche

version

status

preview

sections

configuration

Do not create a complicated visual template editor yet.

Create the architecture so we can later add:

Cleaning Template 01
Cleaning Template 02
Cleaning Template 03

without rebuilding the platform.

14. DATABASE FOUNDATION

Establish a clean database architecture suitable for a multi-tenant SaaS.

Prepare the structure for entities such as:

users

businesses

websites

templates

website_content

website_customizations

assets

domains

leads

google_connections

subscriptions

support_requests

activity_logs

Do not implement every field and relationship for future features today unless necessary.

However, document the planned schema clearly.

Every tenant-owned resource must eventually be isolated by business/tenant ID.

15. MULTI-TENANCY

The architecture must support:

User
→ Business
→ Website
→ Content
→ Leads
→ Domains
→ Subscription
→ Support

Do not assume one global website.

Do not use a single hard-coded customer.

Do not build customer data directly into frontend code.

The system must be designed so thousands of businesses can eventually use the same application.

16. AUTHENTICATION FOUNDATION

Prepare the authentication architecture.

The eventual system requires:

customer accounts

admin accounts

role-based permissions

secure sessions

tenant isolation

Do not create fake authentication.

If authentication is implemented today, use a real supported authentication mechanism.

If not, create the architecture and document exactly what will be implemented in Stage 02.

Never store passwords in plaintext.

17. HOSTINGER-FIRST ENGINEERING

This project will ultimately run on:

Hostinger

Design the project around predictable deployment.

Requirements:

Use Node.js LTS

Use npm

Do not introduce PNPM

Use a reproducible lockfile

Do not depend on undocumented local tooling

Avoid unnecessary server complexity

Avoid unnecessary microservices

Avoid Kubernetes

Avoid infrastructure that Hostinger cannot reasonably support

Keep the build deterministic

Keep production configuration explicit

Create/document:

Node version

package manager

install command

development command

production build command

production start command

The project should have a clear path to Hostinger deployment.

18. ENVIRONMENT VARIABLES

Create:

.env.example

Use placeholder names only.

Never commit:

API keys

passwords

database credentials

OAuth secrets

webhook secrets

private tokens

Future integrations may include:

database

storage

email

Whop

Google APIs

domain provider

Cloudflare

monitoring

Prepare the architecture without requiring real credentials today.

19. CODE QUALITY

Use TypeScript wherever appropriate.

Keep components modular.

Avoid giant components.

Avoid duplicated code.

Use clear naming.

Use reusable UI components.

Keep business logic separate from presentation.

Do not create hundreds of unnecessary files.

Do not install dependencies without a reason.

Do not create fake services.

Do not create fake APIs.

Do not hide errors.

20. RESPONSIVE DESIGN

The entire interface must work properly on:

desktop

laptop

tablet

mobile

Do not simply shrink the desktop design.

Create proper responsive layouts.

Navigation, forms, cards, tables and dashboard elements must remain usable on small screens.

21. ACCESSIBILITY

Establish good accessibility practices from the beginning:

semantic HTML

keyboard navigation

visible focus states

accessible labels

appropriate contrast

meaningful button text

accessible forms

Do not rely solely on color to communicate status.

22. SEO FOUNDATION

Prepare the public website for strong SEO.

Establish support for:

title

description

canonical URL

Open Graph metadata

clean URLs

robots.txt

sitemap architecture

Do not attempt the full local SEO system yet.

23. DOCUMENTATION

Create/update:

README.md

Create:

docs/ARCHITECTURE.md
docs/DEPLOYMENT.md
docs/PRODUCT-ROADMAP.md

Document:

technology stack

folder structure

architecture

database strategy

multi-tenancy strategy

environment variables

local development

production build

Hostinger deployment

future implementation stages

Future AI agents will use this repository documentation to continue the project.

Write documentation for another developer who has never seen this project.

24. GITHUB COMPATIBILITY

The project will be pushed to GitHub after this stage.

Ensure:

clean repository

no secrets

no unnecessary generated files

correct .gitignore

reproducible installation

clear README

clean commit-ready structure

Do not assume Lovable will remain the only development environment.

The code must be understandable by:

Claude

ChatGPT

Kimi

Manus

Bolt

human developers

25. DEVELOPMENT RULE

This is DAY 1.

Do not jump into future implementation.

The next stages will separately build:

authentication

database

customer onboarding

website engine

templates

editor

publishing

domains

Google Business

reviews

leads

billing

support

admin platform

analytics

security hardening

production deployment

Today is about making the foundation correct.

26. FINAL QUALITY AUDIT

Before finishing, run the project through a foundation audit.

Check:

TypeScript errors

build errors

broken imports

dependency problems

routing errors

responsive layout problems

console errors

obvious security problems

environment configuration

production build

npm installation

Node compatibility

Fix any errors you introduce.

Do not claim something works if it is only a visual placeholder.

Clearly distinguish:

Implemented

from

Architecture prepared for future implementation

27. FINAL RESPONSE FROM LOVABLE

When finished, provide:

Technology

Framework

Node version

npm version/package manager

Database approach

Styling approach

Architecture

Folder structure

Customer architecture

Admin architecture

Website engine architecture

Multi-tenant strategy

Deployment

Build command

Start command

Environment variables

Hostinger considerations

Validation

Build status

TypeScript status

Known issues

Files

List the important files created or modified.

Next Stage

Give a short recommendation for what Stage 02 should implement.

MOST IMPORTANT DESIGN RULE

The final interface must look like a real, professionally designed software company.

If you have to choose between:

"looks flashy"

and

"looks professionally designed"

always choose:

professionally designed.

If you have to choose between:

"looks like an AI-generated SaaS"

and

"looks like a human product designer carefully designed it"

always choose:

human-designed.

No gradients.
No glassmorphism.
No floating blobs.
No fake UI.
No fake testimonials.
No unnecessary animations.
No generic AI copy.

Clean.
Confident.
Useful.
Professional.
Human.

Build the foundation properly rather than rushing into future features.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ba09d272-3a64-46c9-bb4b-06488c8cc2ea).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
