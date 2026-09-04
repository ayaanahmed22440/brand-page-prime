import { createFileRoute, Link } from "@tanstack/react-router";

import { MarketingPage, Section, SectionHeading } from "@/components/marketing/MarketingPage";
import { Button } from "@/components/ui/button";
import { CAPABILITIES } from "@/lib/site";
import { TEMPLATES } from "@/templates/registry";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Product \u2014 WebWarheads" },
      { name: "description", content: "How WebWarheads separates your business data from the website template, and what each part of the platform does." },
      { property: "og:title", content: "Product \u2014 WebWarheads" },
      { property: "og:description", content: "How WebWarheads separates your business data from the website template, and what each part of the platform does." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://brand-page-prime.lovable.app/product" }],
  }),
  component: ProductPage,
});

function ProductPage() {
  return (
    <MarketingPage>
      <Section aria-labelledby="product-intro">
        <SectionHeading
          id="product-intro"
          eyebrow="Product"
          title="One business record, many possible websites"
          description="Your business details, services and photos are stored once. A template decides how they are presented. Swapping template changes the design, not your content."
        />
        <div className="mt-10 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-3">
          {[
            { title: "Business data", body: "Name, contact details, service area, services, hours, logo and photos. Owned by you, reusable anywhere." },
            { title: "Template", body: "A designed set of sections for a specific trade, with a fixed structure and a small number of configuration options." },
            { title: "Customisation", body: "Palette, typography set and section-level overrides, applied on top of the template without forking it." },
          ].map((item) => (
            <div key={item.title} className="bg-card p-6">
              <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section aria-labelledby="templates">
        <SectionHeading
          id="templates"
          eyebrow="Templates"
          title="Designs in the registry"
          description="The template registry is in place so new designs can be added without changing the application."
        />
        <ul className="mt-10 divide-y divide-border rounded-md border border-border">
          {TEMPLATES.map((template) => (
            <li key={template.id} className="flex flex-wrap items-baseline justify-between gap-3 p-5">
              <div>
                <h3 className="text-base font-semibold text-foreground">{template.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {template.niche} &middot; version {template.version} &middot; {template.sections.length} sections
                </p>
              </div>
              <span className="rounded-sm border border-border px-2 py-0.5 text-xs text-muted-foreground">
                {template.status}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section aria-labelledby="product-capabilities">
        <SectionHeading id="product-capabilities" eyebrow="Roadmap" title="Planned capabilities" />
        <ul className="measure mt-8 space-y-4">
          {CAPABILITIES.map((c) => (
            <li key={c.title}>
              <h3 className="text-sm font-semibold text-foreground">
                {c.title} <span className="font-normal text-muted-foreground">&mdash; {c.stage}</span>
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Button asChild variant="outline">
            <Link to="/how-it-works">See how it works</Link>
          </Button>
        </div>
      </Section>
    </MarketingPage>
  );
}
