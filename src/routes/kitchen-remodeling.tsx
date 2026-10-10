import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/service-page-template";
import { kitchenRemodelingData } from "@/data/services-data";

export const Route = createFileRoute("/kitchen-remodeling")({
  head: () => ({
    meta: [
      { title: kitchenRemodelingData.metaTitle },
      { name: "description", content: kitchenRemodelingData.metaDescription },
      { property: "og:title", content: kitchenRemodelingData.metaTitle },
      { property: "og:description", content: kitchenRemodelingData.metaDescription },
    ],
  }),
  component: KitchenRemodelingPage,
});

function KitchenRemodelingPage() {
  return <ServicePageTemplate data={kitchenRemodelingData} />;
}
