import { createFileRoute } from "@tanstack/react-router";
import { BioCard } from "@/components/BioCard";

export const Route = createFileRoute("/cartao")({
  head: () => ({
    meta: [
      { title: "Cartão Virtual — DOG SHOP Sinop" },
      { name: "description", content: "Cartão virtual da DOG SHOP: WhatsApp, Instagram, localização e avaliação no Google." },
      { property: "og:title", content: "Cartão Virtual — DOG SHOP Sinop" },
      { property: "og:description", content: "Fale com a DOG SHOP: banho, tosa e amor de verdade." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BioCard,
});
