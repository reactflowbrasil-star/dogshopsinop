import { createFileRoute } from "@tanstack/react-router";
import {
  Bath,
  Scissors,
  Stethoscope,
  Syringe,
  ShoppingBag,
  Truck,
  Heart,
  ShieldCheck,
  Clock,
  MapPin,
  Phone,
  Instagram,
  MessageCircle,
  Star,
  Check,
  CalendarCheck,
  Sparkles,
  PawPrint,
  ArrowRight,
  Quote,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import logoDark from "@/assets/dogshop_logo_dark.png.asset.json";
import logoLight from "@/assets/dogshop_logo_light.png.asset.json";
import heroImg from "@/assets/hero-pets.jpg";
import banhoImg from "@/assets/banho-tosa.jpg";
import produtosImg from "@/assets/produtos.jpg";
import vetImg from "@/assets/veterinario.jpg";
import galeria1 from "@/assets/galeria-1.jpg";
import galeria2 from "@/assets/galeria-2.jpg";
import galeria3 from "@/assets/galeria-3.jpg";
import sobreImg from "@/assets/sobre-equipe.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DOG SHOP — Banho, tosa e tudo para o seu pet" },
      {
        name: "description",
        content:
          "Petshop DOG SHOP: banho e tosa, veterinário, vacinas, rações, acessórios e entrega. Cuidado profissional para cães e gatos.",
      },
      { property: "og:title", content: "DOG SHOP — Tudo para o seu pet" },
      {
        property: "og:description",
        content: "Banho e tosa, veterinário, rações e acessórios com cuidado profissional e muito carinho.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/5500000000000";

const nav = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#galeria", label: "Galeria" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

const stats = [
  { value: "+5.000", label: "pets atendidos" },
  { value: "4,9", label: "avaliação média" },
  { value: "10 anos", label: "de experiência" },
  { value: "6 dias", label: "abertos por semana" },
];

const services = [
  { icon: Bath, title: "Banho", text: "Shampoos dermatológicos, hidratação e secagem cuidadosa para cada tipo de pelo." },
  { icon: Scissors, title: "Tosa", text: "Tosa higiênica, na máquina ou na tesoura, sempre respeitando o conforto do pet." },
  { icon: Stethoscope, title: "Veterinário", text: "Consultas, check-ups e acompanhamento com profissionais experientes." },
  { icon: Syringe, title: "Vacinação", text: "Vacinas e vermífugos em dia, com carteirinha e lembrete das próximas doses." },
  { icon: ShoppingBag, title: "Rações & Acessórios", text: "Rações premium, petiscos, brinquedos, coleiras, camas e muito mais." },
  { icon: Truck, title: "Leva e Traz", text: "Buscamos e entregamos seu pet com segurança e conforto na sua casa." },
];

const steps = [
  { icon: MessageCircle, title: "Fale com a gente", text: "Chame no WhatsApp e conte o que seu pet precisa." },
  { icon: CalendarCheck, title: "Escolha o horário", text: "Encontramos o melhor dia e horário para você." },
  { icon: Sparkles, title: "Pet feliz e cuidado", text: "Seu pet volta limpinho, cheiroso e feliz." },
];

const gallery = [
  { src: galeria1, alt: "Poodle branco após banho e tosa", w: 1024, h: 1280, className: "row-span-2" },
  { src: banhoImg, alt: "Cachorro tomando banho", w: 1024, h: 1024, className: "" },
  { src: galeria2, alt: "Filhote de corgi com bandana amarela na loja", w: 1024, h: 1024, className: "" },
  { src: galeria3, alt: "Gato laranja descansando em caminha", w: 1024, h: 1024, className: "" },
  { src: vetImg, alt: "Atendimento veterinário", w: 1024, h: 1024, className: "" },
  { src: produtosImg, alt: "Rações e acessórios", w: 1024, h: 1024, className: "md:col-span-2" },
];

const testimonials = [
  {
    name: "Mariana Costa",
    pet: "tutora do Thor, golden retriever",
    text: "O Thor ama ir na DOG SHOP! Volta sempre cheiroso e tranquilo. Dá pra ver o carinho da equipe com ele.",
  },
  {
    name: "Rafael Almeida",
    pet: "tutor da Mel, shih-tzu",
    text: "Atendimento impecável do agendamento à entrega. A tosa ficou exatamente como eu pedi. Recomendo demais.",
  },
  {
    name: "Juliana Ribeiro",
    pet: "tutora do Frajola, gato",
    text: "Meu gato é bem ansioso e mesmo assim foi super bem tratado na consulta. Equipe paciente e atenciosa.",
  },
];

const faqs = [
  {
    q: "Preciso agendar o banho e tosa?",
    a: "Sim, trabalhamos com agendamento para garantir que seu pet seja atendido sem espera. É só chamar no WhatsApp.",
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

function SectionHeading({ eyebrow, title, text, center = false }: { eyebrow: string; title: string; text?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto mb-14 max-w-2xl text-center" : "mb-14 max-w-2xl"}>
      <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-primary-deep">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-lg text-muted-foreground">{text}</p>}
    </div>
  );
}

function Index() {
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
            <MessageCircle className="h-4 w-4" /> Agendar
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-14 md:grid-cols-2 md:pb-24 md:pt-20">
          <div>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-bold text-accent-foreground">
              <PawPrint className="h-4 w-4" /> Petshop completo para cães e gatos
            </span>
            <h1 className="text-4xl leading-[1.1] sm:text-5xl md:text-6xl">
              Seu pet feliz, <span className="text-primary-deep">do focinho ao rabo.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Banho e tosa, veterinário, rações e acessórios — tudo em um só lugar, com cuidado profissional e muito carinho.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-extrabold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-5 w-5" /> Agende pelo WhatsApp
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 font-bold text-card-foreground transition-colors hover:bg-muted"
              >
                Ver serviços <ArrowRight className="h-4 w-4" />
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
          <div className="relative">
            <div className="absolute -right-10 -top-10 h-72 w-72 rounded-full bg-primary/30 blur-3xl" aria-hidden />
            <div className="relative overflow-hidden rounded-[2rem] shadow-soft">
              <img
                src={heroImg}
                alt="Cachorro golden retriever e gato sentados juntos"
                width={1600}
                height={1104}
                className="aspect-[4/3.4] w-full object-cover object-right"
              />
            </div>
            <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-soft">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Heart className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display text-lg leading-none">+5.000</p>
                <p className="text-sm text-muted-foreground">pets felizes</p>
              </div>
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
          title="Cuidado completo para o seu melhor amigo"
          text="Do banho à consulta, oferecemos tudo o que seu pet precisa para viver com saúde e bem-estar."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl">{title}</h3>
              <p className="mt-2 text-muted-foreground">{text}</p>
            </article>
          ))}
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
              {[
                "Profissionais treinados",
                "Produtos hipoalergênicos",
                "Ambiente higienizado",
                "Atendimento sem estresse",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 font-semibold">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
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
            title="Nossos clientes de quatro patas"
            text="Alguns dos pets que passaram por aqui e saíram ainda mais lindos."
          />
          <div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[220px] md:grid-cols-4">
            {gallery.map((g) => (
              <div key={g.alt} className={`group overflow-hidden rounded-2xl ${g.className}`}>
                <img
                  src={g.src}
                  alt={g.alt}
                  width={g.w}
                  height={g.h}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href="https://instagram.com/dogshop"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-bold transition-colors hover:bg-background"
            >
              <Instagram className="h-5 w-5" /> Veja mais no Instagram
            </a>
          </div>
        </div>
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
              Pronto para deixar seu pet <span className="text-primary">ainda mais feliz?</span>
            </h2>
            <p className="mt-4 max-w-md text-lg text-secondary-foreground/75">
              Agende banho, tosa ou consulta em poucos minutos. Respondemos rapidinho!
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
              { icon: MapPin, label: "Endereço", value: "Rua dos Pets, 123 — Centro" },
              { icon: Phone, label: "Telefone", value: "(00) 00000-0000" },
              { icon: Clock, label: "Horário", value: "Seg a Sáb, 8h às 19h" },
              { icon: Instagram, label: "Instagram", value: "@dogshop" },
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
              Banho e tosa, veterinário, rações e acessórios para cães e gatos, com cuidado profissional.
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
              <li>Rua dos Pets, 123 — Centro</li>
              <li>(00) 00000-0000</li>
              <li>Seg a Sáb, 8h às 19h</li>
              <li>@dogshop</li>
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

      <img src={logoLight.url} alt="" className="hidden" width={1738} height={842} loading="lazy" aria-hidden />
    </div>
  );
}
