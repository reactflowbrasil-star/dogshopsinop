import { createFileRoute } from "@tanstack/react-router";
import { BioCard } from "@/components/BioCard";

export const Route = createFileRoute("/bio")({
  head: () => ({
    meta: [
      { title: "Links — DOG SHOP Sinop" },
      { name: "description", content: "Todos os links da DOG SHOP Sinop: WhatsApp, Instagram, mapa e avaliação no Google." },
      { property: "og:title", content: "Links — DOG SHOP Sinop" },
      { property: "og:description", content: "Seu pet merece esse carinho. Encontre a DOG SHOP." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BioCard,
});
