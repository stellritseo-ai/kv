import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/service-page-template";
import { poolsOutdoorSpacesData } from "@/data/services-data";

export const Route = createFileRoute("/pools-outdoor-spaces")({
  head: () => ({
    meta: [
      { title: poolsOutdoorSpacesData.metaTitle },
      { name: "description", content: poolsOutdoorSpacesData.metaDescription },
      { property: "og:title", content: poolsOutdoorSpacesData.metaTitle },
      { property: "og:description", content: poolsOutdoorSpacesData.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `https://www.kvpropertyinc.com/${poolsOutdoorSpacesData.slug}` },
      { property: "og:site_name", content: "KV Property Inc." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: poolsOutdoorSpacesData.metaTitle },
      { name: "twitter:description", content: poolsOutdoorSpacesData.metaDescription },
    ],
    links: [
      {
        rel: "canonical",
        href: `https://www.kvpropertyinc.com/${poolsOutdoorSpacesData.slug}`,
      },
    ],
  }),
  component: PoolsOutdoorSpacesPage,
});

function PoolsOutdoorSpacesPage() {
  return <ServicePageTemplate data={poolsOutdoorSpacesData} />;
}
