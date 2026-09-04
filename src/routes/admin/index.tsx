import { createFileRoute } from "@tanstack/react-router";

import { ModuleStub } from "@/components/app-shell/ModuleStub";

export const Route = createFileRoute("/admin/")({
  component: AdminOverview,
});

function AdminOverview() {
  return (
    <ModuleStub
      title={"Overview"}
      description={"Platform-wide state across every customer."}
      stage={"Stage 13"}
      planned={["Counts of customers, websites and domains.", "Recent activity from the activity log.", "Anything failing that needs an operator."]}
      
    />
  );
}
