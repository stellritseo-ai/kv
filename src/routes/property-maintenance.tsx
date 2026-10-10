import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/service-page-template";
import { propertyMaintenanceData } from "@/data/services-data";

export const Route = createFileRoute("/property-maintenance")({
  head: () => ({
    meta: [
      { title: propertyMaintenanceData.metaTitle },
      { name: "description", content: propertyMaintenanceData.metaDescription },
      { property: "og:title", content: propertyMaintenanceData.metaTitle },
      { property: "og:description", content: propertyMaintenanceData.metaDescription },
    ],
  }),
  component: PropertyMaintenancePage,
});

function PropertyMaintenancePage() {
  return <ServicePageTemplate data={propertyMaintenanceData} />;
}
