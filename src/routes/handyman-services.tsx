import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/service-page-template";
import { handymanServicesData } from "@/data/services-data";

export const Route = createFileRoute("/handyman-services")({
  head: () => ({
    meta: [
      { title: handymanServicesData.metaTitle },
      { name: "description", content: handymanServicesData.metaDescription },
      { property: "og:title", content: handymanServicesData.metaTitle },
      { property: "og:description", content: handymanServicesData.metaDescription },
    ],
  }),
  component: HandymanServicesPage,
});

function HandymanServicesPage() {
  return <ServicePageTemplate data={handymanServicesData} />;
}
