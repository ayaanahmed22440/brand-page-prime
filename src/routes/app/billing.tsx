import { createFileRoute } from "@tanstack/react-router";

import { ModuleStub } from "@/components/app-shell/ModuleStub";

export const Route = createFileRoute("/app/billing")({
  component: CustomerBilling,
});

function CustomerBilling() {
  return (
    <ModuleStub
      title={"Billing"}
      description={"Your subscription, invoices and payment method."}
      stage={"Stage 11"}
      planned={["View your plan and renewal date.", "Update your payment method.", "Download invoices."]}
      dependsOn="Published pricing"
    />
  );
}
