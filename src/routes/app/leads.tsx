import { createFileRoute } from "@tanstack/react-router";

import { ModuleStub } from "@/components/app-shell/ModuleStub";

export const Route = createFileRoute("/app/leads")({
  component: CustomerLeads,
});

function CustomerLeads() {
  return (
    <ModuleStub
      title={"Leads"}
      description={"Quote requests submitted through your website."}
      stage={"Stage 10"}
      planned={["Collect enquiries from every form on your site.", "Email you when one arrives.", "Keep a list with status, so nothing is missed."]}
      dependsOn="A published website"
    />
  );
}
