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
    ],
  }),
  component: DeckOutdoorLivingPage,
});

function DeckOutdoorLivingPage() {
  return <ServicePageTemplate data={deckOutdoorLivingData} />;
}
