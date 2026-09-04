import { createFileRoute } from "@tanstack/react-router";

import { ModuleStub } from "@/components/app-shell/ModuleStub";

export const Route = createFileRoute("/admin/domains")({
  component: AdminDomains,
});

function AdminDomains() {
  return (
    <ModuleStub
      title={"Domains"}
      description={"Domains connected to customer sites."}
      stage={"Stage 08"}
      planned={["DNS and certificate status per domain.", "Diagnose misconfigured records.", "Renewals for domains bought through us."]}
      
    />
  );
}
