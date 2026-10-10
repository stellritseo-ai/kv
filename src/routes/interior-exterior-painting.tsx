import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/service-page-template";
import { interiorExteriorPaintingData } from "@/data/services-data";

export const Route = createFileRoute("/interior-exterior-painting")({
  head: () => ({
    meta: [
      { title: interiorExteriorPaintingData.metaTitle },
      { name: "description", content: interiorExteriorPaintingData.metaDescription },
      { property: "og:title", content: interiorExteriorPaintingData.metaTitle },
      { property: "og:description", content: interiorExteriorPaintingData.metaDescription },
    ],
  }),
  component: InteriorExteriorPaintingPage,
});

function InteriorExteriorPaintingPage() {
  return <ServicePageTemplate data={interiorExteriorPaintingData} />;
}
