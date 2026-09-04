import { createFileRoute } from "@tanstack/react-router";

import { ModuleStub } from "@/components/app-shell/ModuleStub";

export const Route = createFileRoute("/app/settings")({
  component: CustomerSettings,
});

function CustomerSettings() {
  return (
    <ModuleStub
      title={"Settings"}
      description={"Your account details and access."}
      stage={"Stage 02"}
      planned={["Name, email and password.", "Notification preferences.", "Who else can access this business."]}
      dependsOn="Authentication"
    />
  );
}
