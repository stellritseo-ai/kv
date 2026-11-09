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
      { property: "og:type", content: "website" },
      { property: "og:url", content: `https://www.kvpropertyinc.com/${propertyMaintenanceData.slug}` },
      { property: "og:site_name", content: "KV Property Inc." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: propertyMaintenanceData.metaTitle },
      { name: "twitter:description", content: propertyMaintenanceData.metaDescription },
    ],
    links: [
      {
        rel: "canonical",
        href: `https://www.kvpropertyinc.com/${propertyMaintenanceData.slug}`,
      },
    ],
  }),
  component: PropertyMaintenancePage,
});

function PropertyMaintenancePage() {
  return <ServicePageTemplate data={propertyMaintenanceData} />;
}
