import { createFileRoute, Link } from "@tanstack/react-router";

import { MarketingPage, Section, SectionHeading } from "@/components/marketing/MarketingPage";
import { Button } from "@/components/ui/button";
import { HOW_IT_WORKS } from "@/lib/site";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How it works \u2014 WebWarheads" },
      { name: "description", content: "Add your business details, choose a template, publish. How building a site with WebWarheads works, step by step." },
      { property: "og:title", content: "How it works \u2014 WebWarheads" },
      { property: "og:description", content: "Add your business details, choose a template, publish. How building a site with WebWarheads works, step by step." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://brand-page-prime.lovable.app/how-it-works" }],
  }),
  component: HowItWorksPage,
});

function HowItWorksPage() {
  return (
    <MarketingPage>
      <Section aria-labelledby="steps">
        <SectionHeading
          id="steps"
          eyebrow="How it works"
          title="From business details to a published site"
          description="Three steps, in order. Nothing is hidden behind a wizard you cannot go back through."
        />
        <ol className="mt-10 divide-y divide-border rounded-md border border-border">
          {HOW_IT_WORKS.map((step) => (
            <li key={step.step} className="flex gap-6 p-6">
              <span className="text-sm font-semibold text-muted-foreground">{step.step}</span>
              <div>
                <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                <p className="measure mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section aria-labelledby="after">
        <SectionHeading
          id="after"
          eyebrow="Afterwards"
          title="Changing things later"
          description="Update your business record and every page that uses those details updates with it. Switching to a different template keeps your text and photos, because they were never part of the design."
        />
        <div className="mt-8">
          <Button asChild>
            <Link to="/signup">Get started</Link>
          </Button>
        </div>
      </Section>
    </MarketingPage>
  );
}
