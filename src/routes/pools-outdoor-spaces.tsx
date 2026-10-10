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
    ],
  }),
  component: PoolsOutdoorSpacesPage,
});

function PoolsOutdoorSpacesPage() {
  return <ServicePageTemplate data={poolsOutdoorSpacesData} />;
}
