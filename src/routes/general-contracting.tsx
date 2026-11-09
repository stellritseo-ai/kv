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
      { property: "og:type", content: "website" },
      { property: "og:url", content: `https://www.kvpropertyinc.com/${generalContractingData.slug}` },
      { property: "og:site_name", content: "KV Property Inc." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: generalContractingData.metaTitle },
      { name: "twitter:description", content: generalContractingData.metaDescription },
    ],
    links: [
      {
        rel: "canonical",
        href: `https://www.kvpropertyinc.com/${generalContractingData.slug}`,
      },
    ],
  }),
  component: GeneralContractingPage,
});

function GeneralContractingPage() {
  return <ServicePageTemplate data={generalContractingData} />;
}
