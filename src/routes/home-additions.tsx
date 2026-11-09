import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/service-page-template";
import { homeAdditionsData } from "@/data/services-data";

export const Route = createFileRoute("/home-additions")({
  head: () => ({
    meta: [
      { title: homeAdditionsData.metaTitle },
      { name: "description", content: homeAdditionsData.metaDescription },
      { property: "og:title", content: homeAdditionsData.metaTitle },
      { property: "og:description", content: homeAdditionsData.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `https://www.kvpropertyinc.com/${homeAdditionsData.slug}` },
      { property: "og:site_name", content: "KV Property Inc." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: homeAdditionsData.metaTitle },
      { name: "twitter:description", content: homeAdditionsData.metaDescription },
    ],
    links: [
      {
        rel: "canonical",
        href: `https://www.kvpropertyinc.com/${homeAdditionsData.slug}`,
      },
    ],
  }),
  component: HomeAdditionsPage,
});

function HomeAdditionsPage() {
  return <ServicePageTemplate data={homeAdditionsData} />;
}
