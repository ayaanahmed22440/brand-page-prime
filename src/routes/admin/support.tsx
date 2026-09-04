import { createFileRoute } from "@tanstack/react-router";

import { ModuleStub } from "@/components/app-shell/ModuleStub";

export const Route = createFileRoute("/admin/support")({
  component: AdminSupport,
});

function AdminSupport() {
  return (
    <ModuleStub
      title={"Support"}
      description={"Customer support requests."}
      stage={"Stage 12"}
      planned={["Queue of open requests.", "Reply as WebWarheads.", "History against each customer."]}
      
    />
  );
}
