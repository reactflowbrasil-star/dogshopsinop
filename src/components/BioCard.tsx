import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Globe, MessageCircle, Star, PawPrint, Pointer, ArrowUpRight } from "lucide-react";
import logoLight from "@/assets/dogshop_logo_light.png.asset.json";
import dogAsset from "@/assets/cartao-dog.png.asset.json";
const dogImg = dogAsset.url;

const links = [
  { icon: Instagram, label: "Instagram", value: "@dogshop.sinop", href: "https://instagram.com/dogshop.sinop" },
  {
    icon: MapPin,
    label: "Localização",
    value: "Sinop – MT",
    href: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Av. das Palmeiras, 1966, Jd. das Palmeiras, Sinop - MT"),
  },
  { icon: Globe, label: "Nosso site", value: "dogshopsinop.com.br", href: "/", internal: true },
  {
    icon: Star,
    label: "Avalie no Google",
    value: "Deixe sua avaliação",
    href: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Dog Shop Sinop MT"),
  },
];

export function BioCard() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#171514] via-[#2c2724] to-[#1b1918] px-4 py-7 text-secondary-foreground sm:py-10">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bio-blob absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="bio-blob absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl" style={{ animationDelay: "-7s" }} />
        <div className="bio-blob absolute left-1/3 top-1/2 h-64 w-64 rounded-full bg-primary/10 blur-3xl" style={{ animationDelay: "-3s" }} />
        <div className="bio-sweep absolute -top-1/4 h-[150%] w-24 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        {[8, 22, 40, 58, 74, 90].map((left, i) => (
          <PawPrint
            key={left}
            className="bio-paw absolute -bottom-12 text-primary/40"
            style={{ left: `${left}%`, width: 18 + (i % 3) * 10, height: 18 + (i % 3) * 10, animationDuration: `${16 + i * 3}s`, animationDelay: `${-i * 4}s` }}
          />
        ))}
      </div>
      <div className="bio-stagger relative mx-auto flex max-w-md flex-col items-center text-center">
        <img src={logoLight.url} alt="Dog Shop" className="hero-in w-40 sm:w-48" />
        <div className="mt-3 flex w-full items-center gap-3 text-[9px] font-bold tracking-[0.28em] text-white/80 sm:text-[10px]">
          <span className="h-px flex-1 bg-primary/80" />CUIDADO COM CARINHO, EM CADA DETALHE<span className="h-px flex-1 bg-primary/80" />
        </div>

        <img
          src={dogImg}
          alt="Chow chow após banho e tosa na Dog Shop"
          className="hero-in mt-3 w-full max-w-[180px] drop-shadow-[0_18px_28px_rgba(0,0,0,0.45)] sm:max-w-[220px]"
        />

        <span className="mt-2 rounded-full border border-primary/40 bg-white/[0.06] px-5 py-1.5 text-[10px] font-extrabold tracking-[0.22em] text-primary shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
          FALE COM A DOG SHOP
        </span>
        <h1 className="mt-3 text-2xl sm:text-3xl">
          Seu pet merece esse <span className="text-primary">carinho.</span>
        </h1>
        <p className="mt-1 text-sm text-white/75">Encontre a gente e acompanhe nosso dia a dia.</p>

        <a
          href="https://wa.me/5566999622228"
          target="_blank"
          rel="noopener noreferrer"
          className="bio-cta group mt-5 flex w-full items-center gap-3 rounded-[1.4rem] border border-white/20 bg-gradient-to-r from-[#ffd04b] via-[#ffc233] to-[#f5a91a] p-3.5 text-left text-[#211a10] shadow-[0_14px_34px_rgba(255,190,48,0.22)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_42px_rgba(255,190,48,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#211d1a]"
        >
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#211a10]/10 ring-1 ring-[#211a10]/10 transition group-hover:bg-[#211a10]/15"><MessageCircle className="h-5 w-5" /></span>
          <span className="min-w-0 flex-1">
            <span className="block text-[9px] font-extrabold tracking-[0.24em] opacity-75">WHATSAPP</span>
            <span className="block text-base font-extrabold">Inicie uma conversa</span>
            <span className="block text-xs opacity-80">(66) 99962-2228</span>
          </span>
          <ArrowUpRight className="mr-1 h-5 w-5 shrink-0 opacity-60 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
        </a>

        <div className="bio-links mt-3 grid w-full grid-cols-2 gap-3">
          {links.map(({ icon: Icon, label, value, href, internal }) => {
            const cls = "group flex min-h-[76px] items-center gap-2 rounded-[1.2rem] border border-white/15 bg-white/[0.055] p-3 text-left shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-primary/70 hover:bg-white/[0.10] hover:shadow-[0_14px_30px_rgba(0,0,0,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";
            const inner = (
              <>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground shadow-[0_5px_14px_rgba(255,190,48,0.18)] transition group-hover:scale-105"><Icon className="h-4 w-4" /></span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[8px] font-bold tracking-[0.18em] uppercase text-white/65">{label}</span>
                  <span className="block truncate text-xs font-extrabold text-white sm:text-sm">{value}</span>
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-white/35 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </>
            );
            return internal ? (
              <Link key={label} to="/" className={cls}>{inner}</Link>
            ) : (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
            );
          })}
        </div>

        <p className="mt-6 text-[10px] font-bold tracking-[0.32em] text-white/75">BANHO • TOSA • AMOR DE VERDADE</p>
        <p className="mt-2 flex items-center gap-2 text-[11px] text-white/55"><Pointer className="h-4 w-4 text-primary" />Toque nos cartões para abrir cada link</p>
      </div>
    </main>
  );
}
