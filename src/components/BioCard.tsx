import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Globe, MessageCircle, Star, PawPrint, Pointer } from "lucide-react";
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
    <main className="relative min-h-screen overflow-hidden bg-secondary px-4 py-10 text-secondary-foreground">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bio-blob absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="bio-blob absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" style={{ animationDelay: "-7s" }} />
        <div className="bio-blob absolute left-1/3 top-1/2 h-64 w-64 rounded-full bg-primary/10 blur-3xl" style={{ animationDelay: "-3s" }} />
        <div className="bio-sweep absolute -top-1/4 h-[150%] w-24 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        {[8, 22, 40, 58, 74, 90].map((left, i) => (
          <PawPrint
            key={left}
            className="bio-paw absolute -bottom-12 text-primary"
            style={{ left: `${left}%`, width: 18 + (i % 3) * 10, height: 18 + (i % 3) * 10, animationDuration: `${16 + i * 3}s`, animationDelay: `${-i * 4}s` }}
          />
        ))}
      </div>
      <div className="relative mx-auto flex max-w-md flex-col items-center text-center">
        <img src={logoLight.url} alt="Dog Shop" className="hero-in w-56" />
        <div className="mt-4 flex w-full items-center gap-3 text-[11px] font-bold tracking-[0.3em]">
          <span className="h-px flex-1 bg-primary" />CUIDADO COM CARINHO, EM CADA DETALHE<span className="h-px flex-1 bg-primary" />
        </div>

        <img
          src={dogImg}
          alt="Chow chow após banho e tosa na Dog Shop"
          className="hero-in mt-4 w-full max-w-sm drop-shadow-2xl"
        />

        <span className="mt-2 rounded-full bg-primary px-6 py-2 text-sm font-extrabold tracking-[0.2em] text-primary-foreground">
          FALE COM A DOG SHOP
        </span>
        <h1 className="mt-4 text-3xl">
          Seu pet merece esse <span className="text-primary">carinho.</span>
        </h1>
        <p className="mt-1 opacity-80">Encontre a gente e acompanhe nosso dia a dia.</p>

        <a
          href="https://wa.me/5566999622228"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex w-full items-center gap-4 rounded-2xl bg-primary p-4 text-left text-primary-foreground shadow-soft transition hover:scale-[1.02]"
        >
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-secondary text-primary"><MessageCircle /></span>
          <span>
            <span className="block text-[11px] font-extrabold tracking-[0.25em]">WHATSAPP</span>
            <span className="block text-lg font-extrabold">Inicie uma conversa</span>
            <span className="block text-xs">(66) 99962-2228</span>
          </span>
        </a>

        <div className="mt-3 grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
          {links.map(({ icon: Icon, label, value, href, internal }) => {
            const cls = "flex items-center gap-3 rounded-2xl border border-primary/50 bg-secondary-foreground/5 p-4 text-left transition hover:scale-[1.02] hover:border-primary";
            const inner = (
              <>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground"><Icon className="h-5 w-5" /></span>
                <span className="min-w-0">
                  <span className="block text-[10px] font-bold tracking-[0.25em] uppercase opacity-80">{label}</span>
                  <span className="block truncate font-extrabold">{value}</span>
                </span>
              </>
            );
            return internal ? (
              <Link key={label} to="/" className={cls}>{inner}</Link>
            ) : (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
            );
          })}
        </div>

        <p className="mt-8 text-sm font-bold tracking-[0.35em]">BANHO • TOSA • AMOR DE VERDADE</p>
        <p className="mt-3 flex items-center gap-2 text-sm opacity-80"><Pointer className="h-4 w-4 text-primary" />Toque nos cartões para abrir cada link</p>
      </div>
    </main>
  );
}
