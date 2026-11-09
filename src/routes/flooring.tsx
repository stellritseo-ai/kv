import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/service-page-template";
import { flooringData } from "@/data/services-data";

export const Route = createFileRoute("/flooring")({
  head: () => ({
    meta: [
      { title: flooringData.metaTitle },
      { name: "description", content: flooringData.metaDescription },
      { property: "og:title", content: flooringData.metaTitle },
      { property: "og:description", content: flooringData.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `https://www.kvpropertyinc.com/${flooringData.slug}` },
      { property: "og:site_name", content: "KV Property Inc." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: flooringData.metaTitle },
      { name: "twitter:description", content: flooringData.metaDescription },
    ],
    links: [
      {
        rel: "canonical",
        href: `https://www.kvpropertyinc.com/${flooringData.slug}`,
      },
    ],
  }),
  component: FlooringPage,
});

function FlooringPage() {
  return <ServicePageTemplate data={flooringData} />;
}
