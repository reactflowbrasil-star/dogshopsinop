import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, MessageCircle, PawPrint, Pointer, Phone, Globe, Star } from "lucide-react";
import logoLight from "@/assets/dogshop_logo_light.png.asset.json";
import dogAsset from "@/assets/cartao-dog.png.asset.json";
const dogImg = dogAsset.url;

const links = [
  { icon: MessageCircle, kind: "whatsapp", label: "WhatsApp", value: "(66) 99962-2228", href: "https://wa.me/5566999622228" },
  { icon: Instagram, kind: "instagram", label: "Instagram", value: "@dogshop.sinop", href: "https://instagram.com/dogshop.sinop" },
  {
    kind: "google",
    label: "Avalie no Google",
    value: "★★★★★",
    href: "https://search.google.com/local/writereview?placeid=ChIJhWqCw-uBp5MRhQaALO4k4yA",
  },
  {
    icon: MapPin,
    kind: "maps",
    label: "Como chegar",
    value: "Sinop – MT",
    href: "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent("Av. das Palmeiras, 1966, Jd. das Palmeiras, Sinop - MT"),
  },
];

function GoogleMark() {
  return (
    <svg aria-label="Google" role="img" viewBox="0 0 48 48" className="h-14 w-14 drop-shadow-[0_4px_10px_rgba(0,0,0,0.2)]">
      <path fill="#4285F4" d="M47.5 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h13.2c-.58 2.96-2.26 5.48-4.77 7.18l7.73 6C44.67 37.77 47.5 31.67 47.5 24.55z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.15 15.91-5.8l-7.73-6c-2.15 1.45-4.92 2.3-8.18 2.3-6.29 0-11.62-4.24-13.52-9.95l-7.98 6.19C6.48 42.62 14.62 48 24 48z" />
      <path fill="#FBBC05" d="M10.48 28.55A14.4 14.4 0 0 1 9.73 24c0-1.48.25-2.9.75-4.25L2.5 13.56A23.9 23.9 0 0 0 0 24c0 3.85.92 7.49 2.55 10.69z" />
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.7 9.5 24 9.5z" />
    </svg>
  );
}

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
      <div className="bio-stagger relative mx-auto flex max-w-lg flex-col items-center text-center">
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

        <div className="bio-links mt-6 grid w-full grid-cols-2 gap-3 sm:gap-4">
          {links.map(({ icon: Icon, kind, label, value, href }) => {
            const isGoogleReview = kind === "google";
            const cls = `group relative flex aspect-square flex-col items-center justify-center gap-3 overflow-hidden rounded-[1.8rem] border border-[#3a414f]/80 bg-gradient-to-br from-[#202633] to-[#171c27] p-3 text-center shadow-[0_12px_32px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:from-[#262e3d] hover:to-[#1a202c] hover:shadow-[0_18px_38px_rgba(0,0,0,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${isGoogleReview ? "google-review-card" : ""}`;
            const iconTile = kind === "whatsapp"
              ? "bg-[#20c963] shadow-[0_8px_20px_rgba(32,201,99,0.22)]"
              : kind === "instagram"
                ? "bg-gradient-to-tr from-[#ffd776] via-[#f44755] to-[#a837d5] shadow-[0_8px_20px_rgba(221,65,139,0.24)]"
                : kind === "maps"
                  ? "bg-gradient-to-br from-[#4285f4] via-[#34a853] to-[#fbbc05] shadow-[0_8px_20px_rgba(66,133,244,0.24)]"
                  : "bg-transparent";
            const card = (
              <>
                <span className={`relative grid h-[68px] w-[68px] shrink-0 place-items-center rounded-[1.25rem] transition duration-300 group-hover:scale-105 sm:h-[76px] sm:w-[76px] ${iconTile}`}>
                  {kind === "google" ? (
                    <GoogleMark />
                  ) : kind === "maps" ? (
                    <span className="grid h-full w-full place-items-center rounded-[1.25rem] bg-[#1b2230]/15">
                      <Icon className="h-10 w-10 text-white drop-shadow-md" strokeWidth={2.2} />
                    </span>
                  ) : kind === "whatsapp" ? (
                    <>
                      <Icon className="h-10 w-10 text-white" strokeWidth={2.5} />
                      <Phone className="absolute h-4 w-4 text-white" strokeWidth={2.8} />
                    </>
                  ) : (
                    <Icon className="h-10 w-10 text-white" strokeWidth={2.1} />
                  )}
                </span>
                <span className="max-w-full">
                  <span className="block text-sm font-extrabold text-white sm:text-base">{label}</span>
                  {kind === "google" ? (
                    <span className="mt-1 block text-lg leading-none tracking-[0.1em] text-[#ffc233]" aria-label="5 estrelas">★★★★★</span>
                  ) : (
                    <span className="mt-1 block truncate text-[10px] font-semibold text-white/65 sm:text-xs">{value}</span>
                  )}
                </span>
              </>
            );
            return (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={cls}>
                {card}
              </a>
            );
          })}
        </div>

        <Link
          to="/"
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-bold text-white/75 transition hover:border-primary/50 hover:bg-white/[0.1] hover:text-white"
        >
          <Globe className="h-4 w-4 text-primary" />
          Visite nosso site
        </Link>

        <p className="mt-6 text-[10px] font-bold tracking-[0.32em] text-white/75">BANHO • TOSA • AMOR DE VERDADE</p>
        <p className="mt-2 flex items-center gap-2 text-[11px] text-white/55"><Pointer className="h-4 w-4 text-primary" />Toque nos cartões para abrir cada link</p>
      </div>
    </main>
  );
}
