import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Bath,
  Scissors,
  Droplets,
  ShoppingBag,
  Truck,
  Heart,
  ShieldCheck,
  Clock,
  MapPin,
  Instagram,
  MessageCircle,
  Star,
  Check,
  CalendarCheck,
  Sparkles,
  PawPrint,
  ArrowRight,
  Quote,
  Crown,
  BadgePercent,
  Wifi,
  Play,
  X,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import logoDark from "@/assets/dogshop_logo_dark.png.asset.json";
import logoLight from "@/assets/dogshop_logo_light.png.asset.json";
import heroImg from "@/assets/hero-pets.jpg";
import banhoImg from "@/assets/banho-tosa.jpg";
import cidaMoreiraImg from "@/assets/IMG-20261110-WA0003.jpg";
import produtosImg from "@/assets/produtos.jpg";
import galeria1 from "@/assets/galeria-1.jpg";
import galeria2 from "@/assets/galeria-2.jpg";
import galeria3 from "@/assets/galeria-3.jpg";
import sobreImg from "@/assets/sobre-equipe.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DOG SHOP — Banho e tosa com carinho de verdade" },
      {
        name: "description",
        content:
          "DOG SHOP: banho e tosa profissional para cães e gatos, planos mensalistas com desconto, leva e traz, rações e acessórios.",
      },
      { property: "og:title", content: "DOG SHOP — Banho e tosa para o seu pet" },
      {
        property: "og:description",
        content: "Banho e tosa profissional, planos mensalistas VIP com economia, rações e acessórios.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/5566999622228";
const WHATSAPP_NUMBER = "(66) 99962-2228";
const INSTAGRAM_URL = "https://instagram.com/dogshop.sinop";
const INSTAGRAM_HANDLE = "@dogshop.sinop";
const ADDRESS = "Av. das Palmeiras, nº 1966 — Jd. das Palmeiras, Sinop - MT";
const HOURS = "Seg a Sex: 7h às 11h30 e 13h às 18h";
const HOURS_SAT = "Sáb: 7h às 11h30";

const heroSlides = [galeria1, banhoImg, sobreImg, galeria2, galeria3];

const nav = [
  { href: "#servicos", label: "Serviços" },
  { href: "#planos", label: "Planos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#galeria", label: "Galeria" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

const stats = [
  { value: "+5.000", label: "banhos realizados" },
  { value: "4,9", label: "avaliação média" },
  { value: "7 anos", label: "de experiência" },
  { value: "6 dias", label: "abertos por semana" },
];

const heroPerks = ["Banho com hidratação", "Tosa na máquina ou tesoura", "Leva e traz"];

const services = [
  { icon: Bath, title: "Banho", text: "Shampoos dermatológicos, hidratação e secagem cuidadosa para cada tipo de pelo.", featured: true },
  { icon: Scissors, title: "Tosa", text: "Tosa higiênica, na máquina ou na tesoura, sempre respeitando o conforto do pet.", featured: true },
  { icon: Droplets, title: "Hidratação & Spa", text: "Hidratação profunda, perfume suave e laço ou bandana para sair ainda mais lindo." },
  { icon: Sparkles, title: "Cuidados extras", text: "Corte de unhas, limpeza de ouvidos e escovação de dentes durante o banho." },
  { icon: Truck, title: "Leva e Traz", text: "Buscamos e entregamos seu pet com segurança e conforto na sua casa." },
  { icon: ShoppingBag, title: "Rações & Acessórios", text: "Rações premium, petiscos, brinquedos, coleiras, camas e muito mais." },
];

const plans = [
  {
    name: "Mensal Banho",
    desc: "4 banhos por mês",
    from: 200,
    price: 160,
    items: ["4 banhos com hidratação", "Corte de unhas", "Limpeza de ouvidos", "Perfume e laço"],
    highlight: false,
  },
  {
    name: "Banho & Tosa",
    desc: "4 banhos + 1 tosa por mês",
    from: 290,
    price: 220,
    items: ["4 banhos com hidratação", "1 tosa completa", "Corte de unhas e ouvidos", "Prioridade no agendamento"],
    highlight: true,
  },
  {
    name: "VIP Premium",
    desc: "Tudo incluso + leva e traz",
    from: 380,
    price: 280,
    items: ["4 banhos + 1 tosa", "Hidratação spa em todos", "Leva e traz incluso", "10% off em rações e acessórios"],
    highlight: false,
  },
];

const steps = [
  { icon: MessageCircle, title: "Fale com a gente", text: "Chame no WhatsApp e conte o que seu pet precisa." },
  { icon: CalendarCheck, title: "Escolha o horário", text: "Encontramos o melhor dia e horário para o banho e tosa." },
  { icon: Sparkles, title: "Pet feliz e cuidado", text: "Seu pet volta limpinho, cheiroso e feliz." },
];

type GalleryItem = {
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
  className?: string;
};

// Para adicionar vídeos: { type: "video", src: "URL do .mp4", poster: "URL da capa", alt: "..." }
const gallery: GalleryItem[] = Array.from({ length: 54 }, (_, index) => {
  const number = index + 1;

  return {
    type: "image",
    src: `/galeria/foto-${String(number).padStart(2, "0")}.jpeg`,
    alt: `Foto ${number} da DOG SHOP`,
  };
});

const testimonials = [
  {
    name: "Mariana Costa",
    pet: "tutora do Thor, golden retriever",
    text: "O Thor ama ir na DOG SHOP! Volta sempre cheiroso e tranquilo. Dá pra ver o carinho da equipe com ele.",
  },
  {
    name: "Rafael Almeida",
    pet: "tutor da Mel, shih-tzu",
    text: "A tosa ficou exatamente como eu pedi. Virei mensalista e economizo todo mês. Recomendo demais.",
  },
  {
    name: "Juliana Ribeiro",
    pet: "tutora do Frajola, gato",
    text: "Meu gato é bem ansioso e mesmo assim o banho foi super tranquilo. Equipe paciente e atenciosa.",
  },
];

const faqs = [
  {
    q: "Preciso agendar o banho e tosa?",
    a: "Sim, trabalhamos com agendamento para garantir que seu pet seja atendido sem espera. É só chamar no WhatsApp.",
  },
  {
    q: "Como funciona o plano mensalista?",
    a: "Você paga um valor fixo por mês e garante os banhos e tosas do seu pet com desconto, prioridade na agenda e benefícios exclusivos.",
  },
  {
    q: "Vocês atendem gatos?",
    a: "Sim! Atendemos cães e gatos, com cuidados e produtos específicos para cada um.",
  },
  {
    q: "Quanto tempo leva o banho?",
    a: "Em média de 1h30 a 2h, dependendo do porte, da pelagem e dos serviços escolhidos.",
  },
  {
    q: "Como funciona o leva e traz?",
    a: "Buscamos seu pet em casa em horário combinado e o devolvemos após o atendimento, com transporte seguro.",
  },
  {
    q: "Quais formas de pagamento vocês aceitam?",
    a: "Aceitamos Pix, cartões de crédito e débito e dinheiro.",
  },
];

const brl = (n: number) => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

function SectionHeading({ eyebrow, title, text, center = false }: { eyebrow: string; title: string; text?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto mb-14 max-w-2xl text-center" : "mb-14 max-w-2xl"}>
      <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-primary-deep">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-lg text-muted-foreground">{text}</p>}
    </div>
  );
}

function VipCard({ className = "" }: { className?: string }) {
  return (
    <div className={`vip-card relative aspect-[1.586/1] w-full max-w-md overflow-hidden rounded-3xl p-5 sm:p-7 text-secondary-foreground shadow-soft ${className}`}>
      <div className="vip-shine pointer-events-none absolute inset-0" aria-hidden />
      <PawPrint className="pointer-events-none absolute -bottom-8 -right-6 h-48 w-48 rotate-[-18deg] text-primary/10" aria-hidden />
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-start justify-between">
          <img src={logoLight.url} alt="DOG SHOP" className="h-9 w-auto" width={1738} height={842} loading="lazy" />
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-primary-foreground">
            <Crown className="h-3.5 w-3.5" /> VIP
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="vip-chip h-9 w-12 rounded-md" aria-hidden />
          <Wifi className="h-5 w-5 rotate-90 text-secondary-foreground/60" aria-hidden />
        </div>
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-display text-base tracking-[0.2em] text-primary sm:text-lg sm:tracking-[0.25em]">MENSALISTA</p>
            <p className="mt-1 text-xs uppercase tracking-widest text-secondary-foreground/60">Clube de benefícios DOG SHOP</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-widest text-secondary-foreground/60">Economia</p>
            <p className="whitespace-nowrap font-display text-xl leading-none text-primary sm:text-2xl">até 30%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Index() {
  const [active, setActive] = useState<GalleryItem | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#inicio" aria-label="DOG SHOP">
            <img src={logoDark.url} alt="DOG SHOP" className="h-10 w-auto md:h-12" width={1738} height={842} />
          </a>
          <nav className="hidden items-center gap-7 text-sm font-bold text-muted-foreground lg:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-foreground">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-bold text-secondary-foreground transition-opacity hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" /> Agendar banho
          </a>
        </div>
      </header>

      {/* Hero — foco em Banho & Tosa */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          {heroSlides.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              className="hero-slide absolute inset-0 h-full w-full object-cover"
              style={{ animationDelay: `${i * 6}s` }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-background/30" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
          <PawPrint className="paw-float absolute left-[8%] top-[18%] h-10 w-10 text-primary/40" />
          <PawPrint className="paw-float absolute left-[45%] bottom-[14%] h-8 w-8 text-primary/30 [animation-delay:2s]" />
          <PawPrint className="paw-float absolute right-[6%] top-[10%] h-12 w-12 text-primary/30 [animation-delay:4s]" />
        </div>
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-14 md:grid-cols-2 md:pb-24 md:pt-20">
          <div className="hero-in">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-bold text-secondary-foreground">
              <Bath className="h-4 w-4 text-primary" /> Especialistas em Banho & Tosa
            </span>
            <h1 className="text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
              Banho e tosa <span className="text-primary-deep">com carinho de verdade.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Seu cão ou gato limpinho, cheiroso e bem cuidado — com produtos de qualidade, profissionais treinados e
              zero estresse.
            </p>
            <ul className="mt-7 flex flex-wrap gap-2">
              {heroPerks.map((p) => (
                <li
                  key={p}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card/90 px-4 py-2 text-sm font-bold"
                >
                  <Check className="h-4 w-4 text-primary-deep" strokeWidth={3} /> {p}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-extrabold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-5 w-5" /> Agendar banho e tosa
              </a>
              <a
                href="#planos"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 font-bold text-card-foreground transition-colors hover:bg-muted"
              >
                <Crown className="h-4 w-4 text-primary-deep" /> Planos mensalistas
              </a>
            </div>
            <div className="mt-10 flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span>
                <strong className="text-foreground">4,9</strong> de avaliação de tutores
              </span>
            </div>
          </div>
          <div className="hero-in relative [animation-delay:200ms]">
            <div className="absolute -right-10 -top-10 h-72 w-72 rounded-full bg-primary/30 blur-3xl" aria-hidden />
            <div className="relative overflow-hidden rounded-[2rem] shadow-soft">
              <img
                src={cidaMoreiraImg}
                alt="Cida Moreira, proprietária e fundadora da DogShop, com um cachorro"
                width={1024}
                height={1024}
                className="block h-auto w-full object-contain"
              />
            </div>
            <div className="absolute -top-5 right-6 flex items-center gap-2 rounded-2xl bg-secondary px-4 py-3 text-secondary-foreground shadow-soft">
              <BadgePercent className="h-5 w-5 text-primary" />
              <p className="text-sm font-bold">
                Mensalista economiza <span className="text-primary">até 30%</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-5 py-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl text-foreground md:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm font-semibold text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading
          eyebrow="Nossos serviços"
          title="Banho e tosa é a nossa especialidade"
          text="Cuidamos da higiene e da beleza do seu pet com técnica, paciência e produtos de qualidade."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text, featured }) => (
            <article
              key={title}
              className={`group rounded-3xl border p-7 transition-all hover:-translate-y-1 hover:shadow-soft ${
                featured ? "border-secondary bg-secondary text-secondary-foreground" : "border-border bg-card"
              }`}
            >
              <div
                className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-colors ${
                  featured
                    ? "bg-primary text-primary-foreground"
                    : "bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground"
                }`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl">{title}</h3>
              <p className={`mt-2 ${featured ? "text-secondary-foreground/75" : "text-muted-foreground"}`}>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Plans */}
      <section id="planos" className="relative overflow-hidden bg-secondary text-secondary-foreground">
        <PawPrint className="pointer-events-none absolute -left-10 top-10 h-64 w-64 rotate-12 text-primary/5" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5 py-24">
          <div className="mb-16 grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-primary">Clube VIP Mensalista</p>
              <h2 className="text-3xl md:text-5xl">
                Seja mensalista e <span className="text-primary">economize todo mês.</span>
              </h2>
              <p className="mt-5 max-w-md text-lg text-secondary-foreground/75">
                Com o cartão VIP DOG SHOP seu pet tem banho e tosa garantidos, prioridade na agenda e benefícios
                exclusivos — pagando bem menos do que no avulso.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {["Até 30% de economia", "Prioridade na agenda", "Valor fixo mensal", "Descontos na loja"].map((b) => (
                  <li key={b} className="flex items-center gap-3 font-semibold">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center md:justify-end">
              <VipCard className="animate-float" />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((p) => (
              <article
                key={p.name}
                className={`relative flex flex-col rounded-3xl border p-8 ${
                  p.highlight
                    ? "border-primary bg-primary text-primary-foreground md:-translate-y-4"
                    : "border-secondary-foreground/15 bg-secondary-foreground/5"
                }`}
              >
                {p.highlight && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-4 py-1 text-xs font-extrabold uppercase tracking-widest text-secondary-foreground">
                    Mais escolhido
                  </span>
                )}
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl">{p.name}</h3>
                  <Crown className={`h-6 w-6 ${p.highlight ? "" : "text-primary"}`} />
                </div>
                <p className={`mt-1 text-sm ${p.highlight ? "text-primary-foreground/75" : "text-secondary-foreground/65"}`}>
                  {p.desc}
                </p>
                <div className="mt-6">
                  <p className={`text-sm line-through ${p.highlight ? "text-primary-foreground/60" : "text-secondary-foreground/50"}`}>
                    Avulso {brl(p.from)}
                  </p>
                  <p className="font-display text-4xl">
                    {brl(p.price)}
                    <span className="font-sans text-base font-bold">/mês</span>
                  </p>
                  <span
                    className={`mt-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-extrabold ${
                      p.highlight ? "bg-secondary text-primary" : "bg-primary text-primary-foreground"
                    }`}
                  >
                    <BadgePercent className="h-4 w-4" /> Economize {brl(p.from - p.price)}
                  </span>
                </div>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-sm font-semibold">
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${p.highlight ? "" : "text-primary"}`} strokeWidth={3} />
                      {it}
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-extrabold transition-transform hover:-translate-y-0.5 ${
                    p.highlight ? "bg-secondary text-secondary-foreground" : "bg-primary text-primary-foreground"
                  }`}
                >
                  Quero ser VIP <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-secondary-foreground/55">
            Valores para pets de porte pequeno. Consulte valores para porte médio e grande.
          </p>
        </div>
      </section>

      {/* About */}
      <section id="sobre" className="bg-muted/60">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-24 md:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] shadow-soft">
            <img
              src={sobreImg}
              alt="Profissional da DOG SHOP secando um golden retriever"
              width={1280}
              height={1024}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-primary-deep">Sobre a DOG SHOP</p>
            <h2 className="text-3xl md:text-4xl">Amor por pets é o nosso negócio</h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Somos uma equipe apaixonada por animais. Cada cão e gato é recebido com atenção, paciência e produtos de
              qualidade — para que ele se sinta em casa e você tenha total tranquilidade.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Profissionais treinados", "Produtos hipoalergênicos", "Ambiente higienizado", "Atendimento sem estresse"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-3 font-semibold">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ),
              )}
            </ul>
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border bg-card p-5">
                <ShieldCheck className="mb-3 h-6 w-6 text-primary-deep" />
                <p className="font-bold">Segurança</p>
                <p className="text-sm text-muted-foreground">Acompanhamento em cada etapa.</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-5">
                <Clock className="mb-3 h-6 w-6 text-primary-deep" />
                <p className="font-bold">Pontualidade</p>
                <p className="text-sm text-muted-foreground">Seu horário é respeitado.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading eyebrow="Como funciona" title="Agendar é simples e rápido" center />
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="relative text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                <Icon className="h-7 w-7" />
              </div>
              <span className="mb-2 block text-sm font-extrabold text-primary-deep">Passo {i + 1}</span>
              <h3 className="text-xl">{title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="galeria" className="bg-muted/60">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <SectionHeading
            eyebrow="Galeria"
            title="Fotos e vídeos dos nossos clientes"
            text="Alguns dos pets que passaram por aqui e saíram ainda mais lindos. Toque para ampliar."
          />
          <div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[220px] md:grid-cols-4">
            {gallery.map((g) => (
              <button
                type="button"
                key={g.src}
                onClick={() => setActive(g)}
                aria-label={`Abrir ${g.type === "video" ? "vídeo" : "foto"}: ${g.alt}`}
                className={`group relative overflow-hidden rounded-2xl ${g.className ?? ""}`}
              >
                {g.type === "video" ? (
                  <>
                    <video
                      src={g.src}
                      poster={g.poster}
                      muted
                      loop
                      autoPlay
                      playsInline
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft">
                        <Play className="ml-0.5 h-6 w-6 fill-current" />
                      </span>
                    </span>
                  </>
                ) : (
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </button>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-bold transition-colors hover:bg-background"
            >
              <Instagram className="h-5 w-5" /> Veja mais no Instagram
            </a>
          </div>
        </div>
        <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
          <DialogContent className="max-w-4xl overflow-hidden border-0 bg-transparent p-0 shadow-none [&>button]:hidden">
            <DialogTitle className="sr-only">{active?.alt ?? "Galeria"}</DialogTitle>
            {active &&
              (active.type === "video" ? (
                <video src={active.src} poster={active.poster} controls autoPlay playsInline className="max-h-[85vh] w-full rounded-2xl" />
              ) : (
                <img src={active.src} alt={active.alt} className="max-h-[85vh] w-full rounded-2xl object-contain" />
              ))}
            <div className="absolute right-3 top-3">
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Fechar"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </DialogContent>
        </Dialog>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading eyebrow="Depoimentos" title="O que os tutores dizem" center />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-3xl border border-border bg-card p-8">
              <Quote className="mb-4 h-8 w-8 text-primary" />
              <div className="mb-4 flex text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="flex-1 text-foreground/90">"{t.text}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary font-display text-secondary-foreground">
                  {t.name.split(" ").map((p) => p[0]).join("")}
                </div>
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.pet}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/60">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-primary-deep">Dúvidas frequentes</p>
            <h2 className="text-3xl md:text-4xl">Perguntas frequentes</h2>
            <p className="mt-4 text-lg text-muted-foreground">Não encontrou sua resposta? Fale com a gente pelo WhatsApp.</p>
          </div>
          <Accordion type="single" collapsible className="rounded-3xl border border-border bg-card px-6">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className={i === faqs.length - 1 ? "border-b-0" : ""}>
                <AccordionTrigger className="text-left text-base font-bold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contato" className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-10 overflow-hidden rounded-[2rem] bg-secondary p-10 text-secondary-foreground md:grid-cols-[1.3fr_1fr] md:p-14">
          <div>
            <h2 className="text-3xl md:text-4xl">
              Pronto para deixar seu pet <span className="text-primary">limpinho e cheiroso?</span>
            </h2>
            <p className="mt-4 max-w-md text-lg text-secondary-foreground/75">
              Agende banho e tosa ou conheça os planos mensalistas. Respondemos rapidinho!
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-extrabold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5" /> Chamar no WhatsApp
            </a>
          </div>
          <ul className="space-y-5 self-center">
            {[
              { icon: MapPin, label: "Endereço", value: ADDRESS },
              { icon: MessageCircle, label: "WhatsApp", value: WHATSAPP_NUMBER },
              { icon: Clock, label: "Horário", value: `${HOURS} · ${HOURS_SAT}` },
              { icon: Instagram, label: "Instagram", value: INSTAGRAM_HANDLE },
            ].map(({ icon: Icon, label, value }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary-foreground/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-secondary-foreground/60">{label}</p>
                  <p className="font-bold">{value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <img src={logoDark.url} alt="DOG SHOP" className="h-12 w-auto" width={1738} height={842} loading="lazy" />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Banho e tosa, planos mensalistas, rações e acessórios para cães e gatos, com cuidado profissional.
            </p>
          </div>
          <div>
            <p className="mb-4 font-display">Navegação</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="transition-colors hover:text-foreground">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 font-display">Contato</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{ADDRESS}</li>
              <li>WhatsApp: {WHATSAPP_NUMBER}</li>
              <li>{HOURS}</li>
              <li>{HOURS_SAT}</li>
              <li>{INSTAGRAM_HANDLE}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <p className="mx-auto max-w-6xl px-5 py-6 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} DOG SHOP. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft transition-transform hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
