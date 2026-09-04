import { createFileRoute } from "@tanstack/react-router";

import { ModuleStub } from "@/components/app-shell/ModuleStub";

export const Route = createFileRoute("/app/reviews")({
  component: CustomerReviews,
});

function CustomerReviews() {
  return (
    <ModuleStub
      title={"Reviews"}
      description={"Reviews from your Google Business Profile, shown on your site."}
      stage={"Stage 09"}
      planned={["Connect your Google Business Profile.", "Pull in reviews and ratings.", "Choose which reviews appear on your website."]}
      dependsOn="Google Business Profile connection"
    />
  );
}
