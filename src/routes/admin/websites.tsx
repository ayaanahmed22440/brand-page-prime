import { createFileRoute } from "@tanstack/react-router";

import { ModuleStub } from "@/components/app-shell/ModuleStub";

export const Route = createFileRoute("/admin/websites")({
  component: AdminWebsites,
});

function AdminWebsites() {
  return (
    <ModuleStub
      title={"Websites"}
      description={"Every website, with its template and publish state."}
      stage={"Stage 13"}
      planned={["Filter by template, status or niche.", "Inspect content and customisation for a site.", "Republish a site after a template update."]}
      
    />
  );
}
