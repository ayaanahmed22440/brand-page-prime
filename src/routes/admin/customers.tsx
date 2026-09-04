import { createFileRoute } from "@tanstack/react-router";

import { ModuleStub } from "@/components/app-shell/ModuleStub";

export const Route = createFileRoute("/admin/customers")({
  component: AdminCustomers,
});

function AdminCustomers() {
  return (
    <ModuleStub
      title={"Customers"}
      description={"Every business on the platform."}
      stage={"Stage 13"}
      planned={["Search and open a customer record.", "See their websites, domain and subscription.", "Act on their behalf when they ask for help."]}
      
    />
  );
}
