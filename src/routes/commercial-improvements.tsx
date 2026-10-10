import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/service-page-template";
import { commercialImprovementsData } from "@/data/services-data";

export const Route = createFileRoute("/commercial-improvements")({
  head: () => ({
    meta: [
      { title: commercialImprovementsData.metaTitle },
      { name: "description", content: commercialImprovementsData.metaDescription },
      { property: "og:title", content: commercialImprovementsData.metaTitle },
      { property: "og:description", content: commercialImprovementsData.metaDescription },
    ],
  }),
  component: CommercialImprovementsPage,
});

function CommercialImprovementsPage() {
  return <ServicePageTemplate data={commercialImprovementsData} />;
}
