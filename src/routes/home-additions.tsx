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
    ],
  }),
  component: HomeAdditionsPage,
});

function HomeAdditionsPage() {
  return <ServicePageTemplate data={homeAdditionsData} />;
}
