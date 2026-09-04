import { createFileRoute } from "@tanstack/react-router";

import { AppShell } from "@/components/app-shell/AppShell";
import { ADMIN_NAV } from "@/lib/app-nav";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin — WebWarheads" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminLayout,
});

function AdminLayout() {
  return (
    <AppShell
      items={ADMIN_NAV}
      areaLabel="Admin"
      contextLabel="WebWarheads platform"
      contextNote="Internal operations"
    />
  );
}
