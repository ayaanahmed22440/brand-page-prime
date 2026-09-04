import { createFileRoute } from "@tanstack/react-router";

import { ModuleStub } from "@/components/app-shell/ModuleStub";

export const Route = createFileRoute("/admin/settings")({
  component: AdminSettings,
});

function AdminSettings() {
  return (
    <ModuleStub
      title={"Settings"}
      description={"Platform configuration and operator access."}
      stage={"Stage 13"}
      planned={["Operator accounts and roles.", "Feature flags per stage.", "Environment configuration references."]}
      
    />
  );
}
