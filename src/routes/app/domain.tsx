import { createFileRoute } from "@tanstack/react-router";

import { ModuleStub } from "@/components/app-shell/ModuleStub";

export const Route = createFileRoute("/app/domain")({
  component: CustomerDomain,
});

function CustomerDomain() {
  return (
    <ModuleStub
      title={"Domain"}
      description={"The address your website is served from."}
      stage={"Stage 08"}
      planned={["Use a free WebWarheads address while you set up.", "Connect a domain you already own.", "Automatic HTTPS certificates and DNS guidance."]}
      dependsOn="A published website"
    />
  );
}
