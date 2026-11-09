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
      { property: "og:type", content: "website" },
      { property: "og:url", content: `https://www.kvpropertyinc.com/${bathroomRemodelingData.slug}` },
      { property: "og:site_name", content: "KV Property Inc." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: bathroomRemodelingData.metaTitle },
      { name: "twitter:description", content: bathroomRemodelingData.metaDescription },
    ],
    links: [
      {
        rel: "canonical",
        href: `https://www.kvpropertyinc.com/${bathroomRemodelingData.slug}`,
      },
    ],
  }),
  component: BathroomRemodelingPage,
});

function BathroomRemodelingPage() {
  return <ServicePageTemplate data={bathroomRemodelingData} />;
}
