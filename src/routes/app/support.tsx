import { createFileRoute } from "@tanstack/react-router";

import { ModuleStub } from "@/components/app-shell/ModuleStub";

export const Route = createFileRoute("/app/support")({
  component: CustomerSupport,
});

function CustomerSupport() {
  return (
    <ModuleStub
      title={"Support"}
      description={"Ask a person for help with your site."}
      stage={"Stage 12"}
      planned={["Send a message and get a reply from a human.", "See the history of your previous requests."]}
      
    />
  );
}
