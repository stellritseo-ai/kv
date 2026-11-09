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
      { property: "og:type", content: "website" },
      { property: "og:url", content: `https://www.kvpropertyinc.com/${kitchenRemodelingData.slug}` },
      { property: "og:site_name", content: "KV Property Inc." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: kitchenRemodelingData.metaTitle },
      { name: "twitter:description", content: kitchenRemodelingData.metaDescription },
    ],
    links: [
      {
        rel: "canonical",
        href: `https://www.kvpropertyinc.com/${kitchenRemodelingData.slug}`,
      },
    ],
  }),
  component: KitchenRemodelingPage,
});

function KitchenRemodelingPage() {
  return <ServicePageTemplate data={kitchenRemodelingData} />;
}
