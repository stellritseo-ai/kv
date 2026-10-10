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
    ],
  }),
  component: CustomBuildsPage,
});

function CustomBuildsPage() {
  return <ServicePageTemplate data={customBuildsData} />;
}
