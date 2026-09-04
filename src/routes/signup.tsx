import { createFileRoute } from "@tanstack/react-router";

import { MarketingPage, Section } from "@/components/marketing/MarketingPage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Get started — WebWarheads" },
      {
        name: "description",
        content: "Create a WebWarheads account to publish a website for your local business.",
      },
      { property: "og:title", content: "Get started — WebWarheads" },
      {
        property: "og:description",
        content: "Create a WebWarheads account to publish a website for your local business.",
      },
    ],
  }),
  component: SignUpPage,
});

function SignUpPage() {
  return (
    <MarketingPage>
      <Section className="border-b-0">
        <div className="mx-auto max-w-sm">
          <h1 className="text-2xl font-semibold text-foreground">Get started</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign-ups are not open yet. Account creation arrives in Stage 02.
          </p>
          <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <Label htmlFor="signup-business">Business name</Label>
              <Input id="signup-business" type="text" disabled />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-email">Email</Label>
              <Input id="signup-email" type="email" autoComplete="email" disabled />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-password">Password</Label>
              <Input id="signup-password" type="password" autoComplete="new-password" disabled />
            </div>
            <Button type="submit" className="w-full" disabled>
              Create account
            </Button>
          </form>
        </div>
      </Section>
    </MarketingPage>
  );
}
