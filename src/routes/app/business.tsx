import { createFileRoute } from "@tanstack/react-router";

import { ModuleStub } from "@/components/app-shell/ModuleStub";

export const Route = createFileRoute("/app/business")({
  component: CustomerBusiness,
});

function CustomerBusiness() {
  return (
    <ModuleStub
      title={"Business"}
      description={"The single record of your business, reused by every page of your site."}
      stage={"Stage 04"}
      planned={["Business name, phone, email and address.", "Service area, services offered and opening hours.", "Logo and photo library."]}
      
    />
  );
}
