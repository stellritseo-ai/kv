import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/service-page-template";
import { handymanServicesData } from "@/data/services-data";

export const Route = createFileRoute("/handyman-services")({
  head: () => ({
    meta: [
      { title: handymanServicesData.metaTitle },
      { name: "description", content: handymanServicesData.metaDescription },
      { property: "og:title", content: handymanServicesData.metaTitle },
      { property: "og:description", content: handymanServicesData.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `https://www.kvpropertyinc.com/${handymanServicesData.slug}` },
      { property: "og:site_name", content: "KV Property Inc." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: handymanServicesData.metaTitle },
      { name: "twitter:description", content: handymanServicesData.metaDescription },
    ],
    links: [
      {
        rel: "canonical",
        href: `https://www.kvpropertyinc.com/${handymanServicesData.slug}`,
      },
    ],
  }),
  component: HandymanServicesPage,
});

function HandymanServicesPage() {
  return <ServicePageTemplate data={handymanServicesData} />;
}
