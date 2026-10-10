import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/service-page-template";
import { generalContractingData } from "@/data/services-data";

export const Route = createFileRoute("/general-contracting")({
  head: () => ({
    meta: [
      { title: generalContractingData.metaTitle },
      { name: "description", content: generalContractingData.metaDescription },
      { property: "og:title", content: generalContractingData.metaTitle },
      { property: "og:description", content: generalContractingData.metaDescription },
    ],
  }),
  component: GeneralContractingPage,
});

function GeneralContractingPage() {
  return <ServicePageTemplate data={generalContractingData} />;
}
