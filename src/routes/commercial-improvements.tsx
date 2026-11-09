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
      { property: "og:type", content: "website" },
      { property: "og:url", content: `https://www.kvpropertyinc.com/${commercialImprovementsData.slug}` },
      { property: "og:site_name", content: "KV Property Inc." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: commercialImprovementsData.metaTitle },
      { name: "twitter:description", content: commercialImprovementsData.metaDescription },
    ],
    links: [
      {
        rel: "canonical",
        href: `https://www.kvpropertyinc.com/${commercialImprovementsData.slug}`,
      },
    ],
  }),
  component: CommercialImprovementsPage,
});

function CommercialImprovementsPage() {
  return <ServicePageTemplate data={commercialImprovementsData} />;
}
