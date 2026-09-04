import { createFileRoute, Link } from "@tanstack/react-router";

import { MarketingPage, Section, SectionHeading } from "@/components/marketing/MarketingPage";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing \u2014 WebWarheads" },
      { name: "description", content: "Pricing for WebWarheads websites is not published yet. Here is what we can say about how it will work." },
      { property: "og:title", content: "Pricing \u2014 WebWarheads" },
      { property: "og:description", content: "Pricing for WebWarheads websites is not published yet. Here is what we can say about how it will work." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://brand-page-prime.lovable.app/pricing" }],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <MarketingPage>
      <Section aria-labelledby="pricing">
        <SectionHeading
          id="pricing"
          eyebrow="Pricing"
          title="Not published yet"
          description="Plans and prices are being worked out alongside billing, which is scheduled for a later stage of the build. We would rather leave this page honest than fill it with numbers that will change."
        />
        <div className="measure mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p>
            What we can say now: one monthly price per website, covering hosting, the template,
            support and the tools in the customer app. Domains bought through us are charged at
            cost plus the registrar fee.
          </p>
          <p>
            If you want to be told when pricing is published, email {SITE.supportEmail}.
          </p>
        </div>
        <div className="mt-8">
          <Button asChild variant="outline">
            <Link to="/product">Read about the product</Link>
          </Button>
        </div>
      </Section>
    </MarketingPage>
  );
}
