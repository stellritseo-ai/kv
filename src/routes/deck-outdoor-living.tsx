import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/service-page-template";
import { deckOutdoorLivingData } from "@/data/services-data";

export const Route = createFileRoute("/deck-outdoor-living")({
  head: () => ({
    meta: [
      { title: deckOutdoorLivingData.metaTitle },
      { name: "description", content: deckOutdoorLivingData.metaDescription },
      { property: "og:title", content: deckOutdoorLivingData.metaTitle },
      { property: "og:description", content: deckOutdoorLivingData.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `https://www.kvpropertyinc.com/${deckOutdoorLivingData.slug}` },
      { property: "og:site_name", content: "KV Property Inc." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: deckOutdoorLivingData.metaTitle },
      { name: "twitter:description", content: deckOutdoorLivingData.metaDescription },
    ],
    links: [
      {
        rel: "canonical",
        href: `https://www.kvpropertyinc.com/${deckOutdoorLivingData.slug}`,
      },
    ],
  }),
  component: DeckOutdoorLivingPage,
});

function DeckOutdoorLivingPage() {
  return <ServicePageTemplate data={deckOutdoorLivingData} />;
}
