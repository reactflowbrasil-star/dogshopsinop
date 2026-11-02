import { createFileRoute } from "@tanstack/react-router";
import { Bath, Bone, Stethoscope, Truck, Heart, ShieldCheck, Clock, MapPin, Phone, Instagram, MessageCircle } from "lucide-react";
import logoDark from "@/assets/dogshop_logo_dark.png.asset.json";
import logoLight from "@/assets/dogshop_logo_light.png.asset.json";
import heroImg from "@/assets/hero-pets.jpg";
import banhoImg from "@/assets/banho-tosa.jpg";
import produtosImg from "@/assets/produtos.jpg";
import vetImg from "@/assets/veterinario.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DOG SHOP — Banho, tosa e tudo para o seu pet" },
      { name: "description", content: "Petshop DOG SHOP: banho e tosa, rações, acessórios, veterinário e entrega. Carinho de verdade para cães e gatos." },
      { property: "og:title", content: "DOG SHOP — Tudo para o seu pet" },
      { property: "og:description", content: "Banho e tosa, rações, acessórios e cuidado veterinário com muito carinho." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/5500000000000";

const services = [
  { icon: Bath, title: "Banho & Tosa", text: "Produtos suaves, secagem cuidadosa e tosa no estilo que seu pet merece.", img: banhoImg },
  { icon: Bone, title: "Rações & Acessórios", text: "Rações, petiscos, brinquedos, coleiras e caminhas para cães e gatos.", img: produtosImg },
  { icon: Stethoscope, title: "Veterinário", text: "Consultas, vacinas e acompanhamento para a saúde do seu melhor amigo.", img: vetImg },
];

const perks = [
  { icon: Heart, title: "Cuidado com carinho", text: "Cada pet é tratado como da família." },
  { icon: ShieldCheck, title: "Ambiente seguro", text: "Higiene e atenção em cada etapa." },
  { icon: Truck, title: "Entrega rápida", text: "Receba suas compras em casa." },
  { icon: Clock, title: "Agendamento fácil", text: "Marque pelo WhatsApp em minutos." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#inicio" aria-label="DOG SHOP">
            <img src={logoDark.url} alt="DOG SHOP" className="h-12 w-auto md:h-14" width={1738} height={842} />
          </a>
          <nav className="hidden items-center gap-8 font-bold md:flex">
            <a href="#servicos" className="transition-colors hover:text-primary">Serviços</a>
            <a href="#sobre" className="transition-colors hover:text-primary">Sobre</a>
            <a href="#contato" className="transition-colors hover:text-primary">Contato</a>
          </nav>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="btn-pop rounded-full border-2 border-secondary bg-primary px-5 py-2 text-sm font-extrabold text-primary-foreground"
          >
            Agendar
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative overflow-hidden bg-primary">
        <img
          src={heroImg}
          alt="Cachorro golden retriever e gato sentados juntos"
          width={1600}
          height={1104}
          className="absolute inset-0 h-full w-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent md:via-primary/40" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-5 py-20">
          <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-bold text-secondary-foreground">
            🐾 Petshop completo
          </span>
          <h1 className="max-w-xl text-5xl leading-[1.05] text-secondary md:text-7xl">
            Seu pet feliz, <br />do focinho ao rabo.
          </h1>
          <p className="mt-6 max-w-md text-lg font-semibold text-secondary/85">
            Banho e tosa, rações, acessórios e cuidado veterinário — tudo em um só lugar, com muito carinho.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="btn-pop inline-flex items-center gap-2 rounded-full border-2 border-secondary bg-secondary px-7 py-3.5 font-extrabold text-secondary-foreground"
            >
              <MessageCircle className="h-5 w-5" /> Agende pelo WhatsApp
            </a>
            <a
              href="#servicos"
              className="btn-pop inline-flex items-center rounded-full border-2 border-secondary bg-card px-7 py-3.5 font-extrabold text-card-foreground"
            >
              Ver serviços
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="mx-auto max-w-6xl px-5 py-24">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 font-extrabold uppercase tracking-widest text-muted-foreground">Nossos serviços</p>
          <h2 className="text-4xl md:text-5xl">
            Tudo o que seu <span className="text-primary [-webkit-text-stroke:1px_var(--secondary)]">pet</span> precisa
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map(({ icon: Icon, title, text, img }) => (
            <article
              key={title}
              className="group overflow-hidden rounded-3xl border-2 border-secondary bg-card shadow-pop transition-transform hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl">{title}</h3>
                <p className="mt-2 text-muted-foreground">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* About / perks */}
      <section id="sobre" className="bg-secondary text-secondary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-24 md:grid-cols-2">
          <div>
            <img src={logoLight.url} alt="DOG SHOP" className="mb-8 h-20 w-auto animate-float" width={1738} height={842} loading="lazy" />
            <h2 className="text-4xl md:text-5xl">
              Amor por pets é o <span className="text-primary">nosso negócio</span>.
            </h2>
            <p className="mt-6 max-w-md text-lg text-secondary-foreground/75">
              Na DOG SHOP, cães e gatos são recebidos com atenção, paciência e produtos de qualidade. Aqui seu pet se sente em casa.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {perks.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-3xl border border-secondary-foreground/15 p-6">
                <Icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="text-xl">{title}</h3>
                <p className="mt-1 text-secondary-foreground/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contato" className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-10 rounded-[2.5rem] border-2 border-secondary bg-primary p-10 shadow-pop md:grid-cols-[1.3fr_1fr] md:p-14">
          <div>
            <h2 className="text-4xl text-primary-foreground md:text-5xl">Bora deixar seu pet ainda mais feliz?</h2>
            <p className="mt-4 max-w-md text-lg font-semibold text-primary-foreground/80">
              Fale com a gente e agende banho, tosa ou consulta. Respondemos rapidinho!
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="btn-pop mt-8 inline-flex items-center gap-2 rounded-full border-2 border-secondary bg-secondary px-7 py-3.5 font-extrabold text-secondary-foreground"
            >
              <MessageCircle className="h-5 w-5" /> Chamar no WhatsApp
            </a>
          </div>
          <ul className="space-y-5 self-center font-bold text-primary-foreground">
            <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-6 w-6 shrink-0" /> Rua dos Pets, 123 — Centro</li>
            <li className="flex items-start gap-3"><Phone className="mt-0.5 h-6 w-6 shrink-0" /> (00) 00000-0000</li>
            <li className="flex items-start gap-3"><Clock className="mt-0.5 h-6 w-6 shrink-0" /> Seg a Sáb, 8h às 19h</li>
            <li className="flex items-start gap-3"><Instagram className="mt-0.5 h-6 w-6 shrink-0" /> @dogshop</li>
          </ul>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 md:flex-row">
          <img src={logoDark.url} alt="DOG SHOP" className="h-9 w-auto" width={1738} height={842} loading="lazy" />
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} DOG SHOP. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
