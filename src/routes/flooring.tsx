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
    ],
  }),
  component: FlooringPage,
});

function FlooringPage() {
  return <ServicePageTemplate data={flooringData} />;
}
