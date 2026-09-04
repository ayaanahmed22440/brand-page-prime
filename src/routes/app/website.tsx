import { createFileRoute } from "@tanstack/react-router";

import { ModuleStub } from "@/components/app-shell/ModuleStub";

export const Route = createFileRoute("/app/website")({
  component: CustomerWebsite,
});

function CustomerWebsite() {
  return (
    <ModuleStub
      title={"Website"}
      description={"Your live site: its template, its pages and its publish state."}
      stage={"Stage 06"}
      planned={["Choose or change your template.", "Edit page content through forms rather than a canvas.", "Preview changes, then publish when you are happy."]}
      dependsOn="Template engine (Stage 05)"
    />
  );
}
