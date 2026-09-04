import { createFileRoute } from "@tanstack/react-router";

import { ModuleStub } from "@/components/app-shell/ModuleStub";

export const Route = createFileRoute("/app/")({
  component: CustomerOverview,
});

function CustomerOverview() {
  return (
    <ModuleStub
      title={"Overview"}
      description={"A summary of your website, recent leads and anything that needs your attention."}
      stage={"Stage 04"}
      planned={["Show whether your website is draft, published or has unpublished changes.", "List the most recent quote requests.", "Flag missing business details that would weaken the site."]}
      dependsOn="Accounts and the business record"
    />
  );
}
