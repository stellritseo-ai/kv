import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/service-page-template";
import { bathroomRemodelingData } from "@/data/services-data";

export const Route = createFileRoute("/bathroom-remodeling")({
  head: () => ({
    meta: [
      { title: bathroomRemodelingData.metaTitle },
      { name: "description", content: bathroomRemodelingData.metaDescription },
      { property: "og:title", content: bathroomRemodelingData.metaTitle },
      { property: "og:description", content: bathroomRemodelingData.metaDescription },
    ],
  }),
  component: BathroomRemodelingPage,
});

function BathroomRemodelingPage() {
  return <ServicePageTemplate data={bathroomRemodelingData} />;
}
