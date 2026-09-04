import { createFileRoute } from "@tanstack/react-router";

import { ModuleStub } from "@/components/app-shell/ModuleStub";

export const Route = createFileRoute("/admin/analytics")({
  component: AdminAnalytics,
});

function AdminAnalytics() {
  return (
    <ModuleStub
      title={"Analytics"}
      description={"Platform metrics from real data only."}
      stage={"Stage 14"}
      planned={["Signups, published sites and churn over time.", "Template adoption.", "No numbers are shown until they are measured."]}
      
    />
  );
}
