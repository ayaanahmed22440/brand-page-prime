import { createFileRoute } from "@tanstack/react-router";

import { ModuleStub } from "@/components/app-shell/ModuleStub";

export const Route = createFileRoute("/admin/leads")({
  component: AdminLeads,
});

function AdminLeads() {
  return (
    <ModuleStub
      title={"Leads"}
      description={"Lead volume across the platform."}
      stage={"Stage 10"}
      planned={["Delivery failures for lead notification emails.", "Volume per customer, to spot broken forms."]}
      
    />
  );
}
