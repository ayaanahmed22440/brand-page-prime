import { createFileRoute } from "@tanstack/react-router";

import { ModuleStub } from "@/components/app-shell/ModuleStub";

export const Route = createFileRoute("/admin/templates")({
  component: AdminTemplates,
});

function AdminTemplates() {
  return (
    <ModuleStub
      title={"Templates"}
      description={"The template registry."}
      stage={"Stage 05"}
      planned={["List registered templates with version and status.", "Promote a template from draft to published.", "See which sites use which template version."]}
      
    />
  );
}
