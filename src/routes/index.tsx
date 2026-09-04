import { createFileRoute, Link } from "@tanstack/react-router";

import { MarketingPage, Section, SectionHeading } from "@/components/marketing/MarketingPage";
import { Button } from "@/components/ui/button";
import { CAPABILITIES, HOW_IT_WORKS, SITE } from "@/lib/site";
import { CUSTOMER_NAV } from "@/lib/app-nav";

const TITLE = "WebWarheads — Websites for local service businesses";
const DESCRIPTION = SITE.description;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://brand-page-prime.lovable.app/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <MarketingPage>
      <Hero />
      <HowItWorks />
      <ProductPreview />
      <Capabilities />
      <FinalCta />
    </MarketingPage>
  );
}

function Hero() {
  return (
    <section className="border-b border-border py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            Website as a service
          </p>
          <h1 className="mt-4 text-3xl leading-tight font-semibold text-foreground md:text-5xl">
            {SITE.tagline}
          </h1>
          <p className="measure mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Cleaning companies and other local trades need a site that explains what they do,
            where they work, and how to get a quote. WebWarheads keeps your business details in
            one place and builds the site around them.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/signup">Get started</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/how-it-works">See how it works</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            The product is in active development. Pages below describe what is built and what is
            planned, with no placeholder claims.
          </p>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <Section aria-labelledby="how-it-works">
      <SectionHeading
        id="how-it-works"
        eyebrow="How it works"
        title="Three steps from details to a live site"
        description="Your business information is stored separately from the design, so changing template never means retyping your content."
      />
      <ol className="mt-10 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-3">
        {HOW_IT_WORKS.map((step) => (
          <li key={step.step} className="bg-card p-6">
            <p className="text-xs font-semibold text-muted-foreground">{step.step}</p>
            <h3 className="mt-3 text-base font-semibold text-foreground">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function ProductPreview() {
  return (
    <Section aria-labelledby="product-preview">
      <SectionHeading
        id="product-preview"
        eyebrow="Product"
        title="The customer app"
        description="This is the actual navigation of the customer area, not a mock-up. Sections without functionality say so plainly inside the app."
      />
      <div className="mt-10 overflow-hidden rounded-md border border-border">
        <div className="flex items-center justify-between border-b border-border bg-muted px-4 py-3">
          <p className="text-sm font-medium text-foreground">Customer app</p>
          <p className="text-xs text-muted-foreground">Signed-in view</p>
        </div>
        <div className="grid md:grid-cols-[15rem_1fr]">
          <nav aria-label="Customer app sections" className="border-b border-border bg-sidebar p-3 md:border-r md:border-b-0">
            <ul className="space-y-0.5">
              {CUSTOMER_NAV.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="block rounded-sm px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="bg-card p-6">
            <h3 className="text-base font-semibold text-foreground">Website</h3>
            <p className="measure mt-2 text-sm leading-relaxed text-muted-foreground">
              Each section of the app maps to one part of running a small business website: the
              site itself, your business record, incoming leads, reviews, your domain, billing and
              support. Open any of them to see the current state.
            </p>
            <div className="mt-5">
              <Button asChild variant="outline" size="sm">
                <Link to="/app">Open the app</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Capabilities() {
  return (
    <Section aria-labelledby="capabilities">
      <SectionHeading
        id="capabilities"
        eyebrow="Capabilities"
        title="What the platform will do"
        description="Each item lists the stage it is scheduled for. Nothing here is described as finished before it is."
      />
      <ul className="mt-10 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
        {CAPABILITIES.map((capability) => (
          <li key={capability.title} className="bg-card p-6">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-base font-semibold text-foreground">{capability.title}</h3>
              <span className="shrink-0 rounded-sm border border-border px-2 py-0.5 text-xs text-muted-foreground">
                {capability.status === "available" ? "Available" : capability.stage}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {capability.description}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function FinalCta() {
  return (
    <Section aria-labelledby="get-started">
      <h2 id="get-started" className="text-2xl font-semibold text-foreground md:text-3xl">
        Ready when you are
      </h2>
      <p className="measure mt-3 leading-relaxed text-muted-foreground">
        Accounts open in the next stage of the build. In the meantime you can read what is
        planned, or email us at {SITE.supportEmail}.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild>
          <Link to="/signup">Get started</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/pricing">See pricing</Link>
        </Button>
      </div>
    </Section>
  );
}
