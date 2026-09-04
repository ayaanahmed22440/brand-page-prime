import { createFileRoute } from "@tanstack/react-router";

import { MarketingPage, Section } from "@/components/marketing/MarketingPage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/signin")({
  head: () => ({
    meta: [
      { title: "Sign in — WebWarheads" },
      { name: "description", content: "Sign in to manage your WebWarheads business website." },
      { property: "og:title", content: "Sign in — WebWarheads" },
      {
        property: "og:description",
        content: "Sign in to manage your WebWarheads business website.",
      },
    ],
  }),
  component: SignInPage,
});

function SignInPage() {
  return (
    <MarketingPage>
      <Section className="border-b-0">
        <div className="mx-auto max-w-sm">
          <h1 className="text-2xl font-semibold text-foreground">Sign in</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Accounts are not live yet. This form arrives with authentication in Stage 02.
          </p>
          <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <Label htmlFor="signin-email">Email</Label>
              <Input id="signin-email" type="email" autoComplete="email" disabled />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signin-password">Password</Label>
              <Input
                id="signin-password"
                type="password"
                autoComplete="current-password"
                disabled
              />
            </div>
            <Button type="submit" className="w-full" disabled>
              Sign in
            </Button>
          </form>
        </div>
      </Section>
    </MarketingPage>
  );
}
