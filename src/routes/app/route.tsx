import { createFileRoute } from "@tanstack/react-router";

import { AppShell } from "@/components/app-shell/AppShell";
import { CUSTOMER_NAV } from "@/lib/app-nav";

export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      { title: "Customer app — WebWarheads" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CustomerLayout,
});

function CustomerLayout() {
  return (
    <AppShell
      items={CUSTOMER_NAV}
      areaLabel="Customer app"
      contextLabel="No business selected"
      contextNote="Accounts arrive in Stage 02"
    />
  );
}
