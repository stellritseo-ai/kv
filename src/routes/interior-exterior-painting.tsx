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
      { property: "og:type", content: "website" },
      { property: "og:url", content: `https://www.kvpropertyinc.com/${interiorExteriorPaintingData.slug}` },
      { property: "og:site_name", content: "KV Property Inc." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: interiorExteriorPaintingData.metaTitle },
      { name: "twitter:description", content: interiorExteriorPaintingData.metaDescription },
    ],
    links: [
      {
        rel: "canonical",
        href: `https://www.kvpropertyinc.com/${interiorExteriorPaintingData.slug}`,
      },
    ],
  }),
  component: InteriorExteriorPaintingPage,
});

function InteriorExteriorPaintingPage() {
  return <ServicePageTemplate data={interiorExteriorPaintingData} />;
}
