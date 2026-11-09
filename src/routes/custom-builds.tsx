import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/service-page-template";
import { customBuildsData } from "@/data/services-data";

export const Route = createFileRoute("/custom-builds")({
  head: () => ({
    meta: [
      { title: customBuildsData.metaTitle },
      { name: "description", content: customBuildsData.metaDescription },
      { property: "og:title", content: customBuildsData.metaTitle },
      { property: "og:description", content: customBuildsData.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `https://www.kvpropertyinc.com/${customBuildsData.slug}` },
      { property: "og:site_name", content: "KV Property Inc." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: customBuildsData.metaTitle },
      { name: "twitter:description", content: customBuildsData.metaDescription },
    ],
    links: [
      {
        rel: "canonical",
        href: `https://www.kvpropertyinc.com/${customBuildsData.slug}`,
      },
    ],
  }),
  component: CustomBuildsPage,
});

function CustomBuildsPage() {
  return <ServicePageTemplate data={customBuildsData} />;
}
