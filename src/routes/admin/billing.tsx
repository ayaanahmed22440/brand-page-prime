import { createFileRoute } from "@tanstack/react-router";

import { ModuleStub } from "@/components/app-shell/ModuleStub";

export const Route = createFileRoute("/admin/billing")({
  component: AdminBilling,
});

function AdminBilling() {
  return (
    <ModuleStub
      title={"Billing"}
      description={"Subscriptions and payment state."}
      stage={"Stage 11"}
      planned={["Subscription status per customer.", "Failed payments and dunning.", "Refunds and manual adjustments."]}
      
    />
  );
}
