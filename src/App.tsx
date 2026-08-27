import { useEffect, useState } from "react"
import heroImage from "./imports/profile_photo.jpg"
import realizacja1 from "./imports/image-1.jpg"
import realizacja2 from "./imports/image-2.jpg"
import realizacja3 from "./imports/image-3.jpg"
import realizacja4 from "./imports/image-4.jpg"
import realizacja5 from "./imports/image-5.jpg"
import realizacja6 from "./imports/image-6.jpg"
import realizacja7 from "./imports/image-7.jpg"
import realizacja8 from "./imports/image-8.jpg"
import realizacja9 from "./imports/image-9.jpg"
import realizacja10 from "./imports/image-10.jpg"
import realizacja11 from "./imports/image-11.jpg"
import realizacja12 from "./imports/image-12.jpg"
import realizacja13 from "./imports/image-13.jpg"
import realizacja14 from "./imports/image-14.jpg"
import realizacja15 from "./imports/image-15.jpg"
import aboutImage from "./imports/image.jpg"

/* ------------------------------------------------------------------ *
 *  KONTAKT — placeholdery. Podmień na prawdziwe dane firmy.
 * ------------------------------------------------------------------ */
const PHONE_DISPLAY = "+48 883 982 224"
const PHONE_HREF = "tel:+48883982224"
const EMAIL = "studnie.stroynowski@gmail.com"

const IMG = (id: string, w = 1200, h = 900) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format`

/* Realizacje — zdjęcia z prac firmy. */
const GALLERY = [
  { src: realizacja1, alt: "Wiertnica podczas odwiertu studni głębinowej", span: "feature" },
  { src: realizacja2, alt: "Sprzęt wiertniczy na placu budowy" },
  { src: realizacja3, alt: "Montaż obudowy studni głębinowej", span: "tall" },
  { src: realizacja4, alt: "Operator przy wiertnicy w terenie" },
  { src: realizacja5, alt: "Gotowy odwiert studni na posesji" },
  { src: realizacja6, alt: "Skrzynka studzienna po zakończeniu prac" },
  { src: realizacja7, alt: "Wiertnica i pojazdy firmy na miejscu realizacji" },
  { src: realizacja8, alt: "Zakończona instalacja studni głębinowej" },
  { src: realizacja9, alt: "Prace wiertnicze na działce" },
  { src: realizacja10, alt: "Sprzęt i ekipa podczas odwiertu" },
  { src: realizacja11, alt: "Montaż rur osłonowych studni głębinowej" },
  { src: realizacja12, alt: "Teren po zakończeniu odwiertu", span: "feature" },
  { src: realizacja13, alt: "Wiertnica w akcji — odwiert studni" },
  { src: realizacja14, alt: "Gotowa studnia głębinowa na posesji" },
  { src: realizacja15, alt: "Realizacja odwiertu studni głębinowej" },
]

const NAV = [
  { href: "#oferta", label: "Oferta" },
  { href: "#proces", label: "Jak pracujemy" },
  { href: "#realizacje", label: "Realizacje" },
  { href: "#o-firmie", label: "O nas" },
  { href: "#kontakt", label: "Kontakt" },
]

/* ------------------------------------------------------------------ *
 *  Ikony (inline SVG, stroke-based, techniczny charakter)
 * ------------------------------------------------------------------ */
type IconProps = { className?: string }
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
}

function IconRig({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M12 3 6 21M12 3l6 18M9 9h6M7.5 15h9M4 21h16" />
      <path d="M12 3v18" />
    </svg>
  )
}
function IconExperience({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M12 3l7 3.5v5c0 4.2-3 7.3-7 8.5-4-1.2-7-4.3-7-8.5v-5L12 3Z" />
      <path d="m8.5 12 2.3 2.3L15.5 10" />
    </svg>
  )
}
function IconHandshake({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M3 8h4l3 3 2-2 2 2 3-3h4" />
      <path d="M3 8v7l4 3 3-2M21 8v7l-4 3-3-2" />
      <path d="m10 11 2 2 2-2" />
    </svg>
  )
}
function IconMap({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" />
      <path d="M9 4v14M15 6v14" />
    </svg>
  )
}
function IconPhone({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M6 3h3l1.5 5-2 1.5a12 12 0 0 0 6 6l1.5-2 5 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2Z" />
    </svg>
  )
}
function IconDrop({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M12 3s6 6.6 6 11a6 6 0 0 1-12 0c0-4.4 6-11 6-11Z" />
      <path d="M9.5 14a2.5 2.5 0 0 0 2.5 2.5" />
    </svg>
  )
}
function IconDrill({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M12 3v9M10 6h4M10 9h4M9 12h6l-1.5 4h-3L9 12ZM12 16v3l-1.5 2h3L12 19" />
    </svg>
  )
}
function IconHome({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M4 11 12 4l8 7" />
      <path d="M6 10v9h12v-9M10 19v-5h4v5" />
    </svg>
  )
}
function IconBuilding({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M5 21V5l7-2v18M12 21V9l7 2v10M3 21h18" />
      <path d="M8 8v0M8 12v0M8 16v0M15.5 13v0M15.5 17v0" />
    </svg>
  )
}
function IconMail({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}
function IconPin({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

/* ------------------------------------------------------------------ *
 *  Sekcje
 * ------------------------------------------------------------------ */
function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled ? "bg-navy-900/95 backdrop-blur-sm shadow-lg shadow-navy-950/20" : "bg-navy-900"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3 text-white">
          <span className="grid size-10 place-items-center rounded-md bg-water-500 text-white">
            <IconDrop className="size-6" />
          </span>
          <span className="font-display leading-none">
            <span className="block text-lg font-semibold tracking-wide uppercase">Studnie Głębinowe</span>
            <span className="block text-[13px] font-normal text-water-300 tracking-[0.2em] uppercase">
              Karol Stroynowski
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-water-300"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 rounded-md bg-water-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-water-400"
          >
            <IconPhone className="size-4" />
            <span className="hidden sm:inline">Zadzwoń</span>
            <span className="sm:hidden">{PHONE_DISPLAY}</span>
          </a>
          <button
            type="button"
            aria-label="Otwórz menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-md text-white lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="size-6" {...stroke}>
              {open ? <path d="M6 6l12 12M6 18 18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-navy-900 lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block border-b border-white/5 py-3 text-base font-medium text-white/90 last:border-0"
              >
                {n.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

function TrustChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm text-white/90">
      <span className="size-1.5 rounded-full bg-water-400" />
      {children}
    </span>
  )
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-navy-900">
      <img
        src={heroImage}
        alt="Wiertnica przy realizacji studni głębinowej na terenie posesji"
        className="absolute inset-0 -z-10 size-full object-cover object-[87.5%_center] lg:object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950/95 via-navy-900/85 to-navy-900/40" />

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-water-300">
            <IconPin className="size-4" /> Zielona Góra i okolice — promień 70 km
          </p>
          <h1 className="text-4xl font-bold uppercase leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            Studnie głębinowe w Zielonej Górze i okolicy
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            Wykonujemy odwierty i studnie głębinowe dla klientów indywidualnych oraz firm. Działamy w Zielonej Górze
            i w promieniu 70 km — z fachowym wykonaniem i indywidualnym podejściem do każdego zlecenia.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-water-500 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-water-600/30 transition-colors hover:bg-water-400"
            >
              Zapytaj o odwiert
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              <IconPhone className="size-5" /> Zadzwoń
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2.5">
            <TrustChip>Zielona Góra oraz okolice do 70 km</TrustChip>
            <TrustChip>Klienci indywidualni i firmy</TrustChip>
            <TrustChip>Indywidualna wycena</TrustChip>
          </div>
        </div>
      </div>
    </section>
  )
}

const SERVICES = [
  {
    icon: IconDrop,
    title: "Studnie głębinowe",
    text: "Wykonywanie studni głębinowych dopasowanych do warunków na działce i potrzeb klienta.",
  },
  {
    icon: IconDrill,
    title: "Odwierty",
    text: "Profesjonalne wykonywanie odwiertów z wykorzystaniem specjalistycznego sprzętu.",
  },
  {
    icon: IconHome,
    title: "Klienci indywidualni",
    text: "Studnie dla domów, działek, ogrodów i gospodarstw.",
  },
  {
    icon: IconBuilding,
    title: "Obsługa firm",
    text: "Realizacja odwiertów i studni dla przedsiębiorstw oraz inwestycji.",
  },
]

function SectionHead({
  eyebrow,
  title,
  subtitle,
  light,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  light?: boolean
}) {
  return (
    <div className="mb-12 max-w-3xl">
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-[0.2em] ${
            light ? "text-water-300" : "text-water-600"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-bold uppercase leading-tight sm:text-4xl ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? "text-white/80" : "text-navy-800/75"}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

function Offer() {
  return (
    <section id="oferta" className="bg-sand-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow="Nasza oferta" title="W czym możemy pomóc?" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group flex flex-col rounded-xl border border-stone-200 bg-white p-6 transition-all hover:border-water-400 hover:shadow-lg hover:shadow-navy-950/5"
            >
              <span className="mb-5 grid size-12 place-items-center rounded-lg bg-navy-900 text-water-300 transition-colors group-hover:bg-water-500 group-hover:text-white">
                <Icon className="size-6" />
              </span>
              <h3 className="text-xl font-semibold uppercase text-navy-900">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-navy-800/70">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const BENEFITS = [
  { icon: IconRig, title: "Specjalistyczny sprzęt", text: "Realizujemy odwierty z użyciem profesjonalnych maszyn wiertniczych." },
  { icon: IconExperience, title: "Doświadczenie w terenie", text: "Ciężkie prace terenowe wykonane rzetelnie i z uwagą na warunki gruntowe." },
  { icon: IconHandshake, title: "Indywidualne podejście", text: "Każde zlecenie omawiamy osobno — dopasowujemy zakres do potrzeb klienta." },
  { icon: IconMap, title: "Zielona Góra i okolice", text: "Dojeżdżamy do Zielonej Góry i miejscowości w promieniu 70 km." },
]

function Benefits() {
  return (
    <section className="bg-navy-900 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead light eyebrow="Dlaczego my" title="Dlaczego warto z nami współpracować?" />
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="border-t border-white/15 pt-5">
              <span className="mb-4 grid size-12 place-items-center rounded-lg bg-water-500/15 text-water-300">
                <Icon className="size-7" />
              </span>
              <h3 className="text-lg font-semibold uppercase text-white">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/70">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const STEPS = [
  { n: "01", title: "Kontakt", text: "Klient kontaktuje się telefonicznie lub przez formularz." },
  { n: "02", title: "Ustalenie szczegółów", text: "Poznajemy lokalizację, potrzeby klienta i zakres prac." },
  { n: "03", title: "Wycena i termin", text: "Ustalamy zakres realizacji, orientacyjny koszt oraz termin." },
  { n: "04", title: "Wykonanie odwiertu", text: "Przyjeżdżamy ze sprzętem i realizujemy prace na miejscu." },
]

function Process() {
  return (
    <section id="proces" className="bg-sand-100 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow="Jak pracujemy" title="Jak wygląda realizacja?" />
        <ol className="grid gap-6 md:grid-cols-4">
          {STEPS.map((s, i) => (
            <li key={s.n} className="relative">
              <div className="flex h-full flex-col rounded-xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
                <span className="font-display text-4xl font-bold text-water-500">{s.n}</span>
                <h3 className="mt-3 text-lg font-semibold uppercase text-navy-900">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-navy-800/70">{s.text}</p>
              </div>
              {i < STEPS.length - 1 && (
                <span className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-water-500 md:block">
                  <svg viewBox="0 0 24 24" className="size-6" {...stroke}>
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section id="realizacje" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="Realizacje"
          title="Zobacz nasze realizacje"
          subtitle="Realizujemy odwierty w Zielonej Górze i okolicy — w promieniu 70 km od miasta."
        />
        <div className="grid auto-rows-[180px] grid-cols-2 grid-flow-dense gap-3 sm:auto-rows-[220px] lg:grid-cols-4">
          {GALLERY.map((g, i) => (
            <figure
              key={i}
              className={`overflow-hidden rounded-xl bg-navy-800 ${
                g.span === "feature" ? "col-span-2 row-span-2" : ""
              } ${g.span === "tall" ? "row-span-2" : ""}`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="size-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </figure>
          ))}
        </div>
        <p className="mt-4 text-sm text-navy-800/60">
          Zdjęcia z realizacji w Zielonej Górze i okolicy.
        </p>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="o-firmie" className="bg-sand-50 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <SectionHead eyebrow="O firmie" title="Studnie Głębinowe Karol Stroynowski" />
          <p className="-mt-6 text-lg leading-relaxed text-navy-800/80">
            Studnie Głębinowe Karol Stroynowski to firma z Zielonej Góry specjalizująca się w wykonywaniu odwiertów i
            studni głębinowych dla klientów indywidualnych i firm. Działamy w Zielonej Górze oraz w promieniu 70 km od
            miasta, zapewniając fachowe wykonanie prac oraz indywidualne podejście do każdego zlecenia.
          </p>
          <a
            href="#kontakt"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-navy-900 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-navy-800"
          >
            Poproś o wycenę
          </a>
        </div>
        <div className="relative">
          <img
            src={aboutImage}
            alt="Wiertnica i oznakowane pojazdy firmy Studnie Głębinowe Karol Stroynowski podczas odwiertu w terenie"
            className="aspect-[4/5] w-full rounded-2xl object-cover shadow-xl shadow-navy-950/20"
          />
          <div className="absolute -bottom-4 -left-4 hidden rounded-xl bg-water-500 px-5 py-4 text-white shadow-lg sm:block">
            <p className="font-display text-2xl font-bold uppercase leading-none">Zielona Góra i okolice</p>
            <p className="text-sm text-white/85">70 km — promień naszej działalności</p>
          </div>
        </div>
      </div>
    </section>
  )
}

const CITIES = ["Zielona Góra", "Nowa Sól", "Sulechów", "Świebodzin", "Żary", "Żagań", "i okolice"]

function Area() {
  return (
    <section className="bg-navy-800 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-16">
          <div>
            <SectionHead
              light
              eyebrow="Obszar działania"
              title="Zielona Góra i okolice w promieniu 70 km"
            />
            <p className="-mt-6 text-white/75">
              Nie widzisz swojej miejscowości? Skontaktuj się z nami i zapytaj o możliwość realizacji.
            </p>
            <a
              href={PHONE_HREF}
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-water-500 px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-water-400"
            >
              <IconPhone className="size-5" /> {PHONE_DISPLAY}
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            {CITIES.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-base font-medium text-white"
              >
                <IconPin className="size-5 text-water-300" />
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const FAQ = [
  {
    q: "Ile kosztuje wykonanie studni głębinowej?",
    a: "Średnia cena to 230 zł za metr udanej studni, ale cena może się różnić w zależności od warunków gruntowych. Skontaktuj się z nami, aby omówić szczegóły i otrzymać wycenę.",
  },
  {
    q: "Czy cena odwiertu obejmuje montaż pompy i zabudowy?",
    a: "Nie. Montaż nowej pompy głębinowej oraz ewentualnej zabudowy (w zależności od potrzeb klienta) to osobna usługa.",
  },
  {
    q: "Jak długo trwa wykonanie odwiertu?",
    a: "Najczęściej odwiert trwa od 4 do 7 godzin. Czas realizacji zależy od warunków na miejscu oraz wymaganej głębokości studni.",
  },
  {
    q: "Na jakim terenie działacie?",
    a: "Obsługujemy Zieloną Górę oraz miejscowości w promieniu około 70 km od miasta. Nie masz pewności, czy dojedziemy? Zadzwoń i zapytaj.",
  },
  {
    q: "Czy obsługujecie klientów indywidualnych?",
    a: "Tak. Realizujemy zlecenia zarówno dla klientów indywidualnych, jak i firm.",
  },
]

function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className="bg-sand-50 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow="FAQ" title="Najczęściej zadawane pytania" />
        <div className="divide-y divide-stone-200 border-y border-stone-200">
          {FAQ.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={i}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-lg font-semibold text-navy-900">{item.q}</span>
                  <span
                    className={`grid size-8 shrink-0 place-items-center rounded-full border border-stone-200 text-water-600 transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <svg viewBox="0 0 24 24" className="size-4" {...stroke}>
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                  }`}
                >
                  <p className="overflow-hidden text-[15px] leading-relaxed text-navy-800/75">{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function CtaBand() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 py-20 sm:py-24">
      <img
        src={IMG("1780415493102-9d9fbb669bf4", 2000, 800)}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full object-cover opacity-20"
      />
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold uppercase leading-tight text-white sm:text-4xl">
          Potrzebujesz studni głębinowej?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
          Skontaktuj się z nami. Porozmawiamy o lokalizacji, potrzebach i możliwościach wykonania odwiertu.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-water-500 px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-water-400"
          >
            <IconPhone className="size-5" /> Zadzwoń
          </a>
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/5 px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            Zapytaj o wycenę
          </a>
        </div>
      </div>
    </section>
  )
}

const FORMSPREE_ID = "mjyvbayy"

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [rodo, setRodo] = useState(false)
  const [cooldown, setCooldown] = useState(0)
  const inputCls =
    "w-full rounded-md border border-stone-200 bg-white px-4 py-3 text-navy-900 outline-none transition-colors placeholder:text-navy-800/40 focus:border-water-500 focus:ring-2 focus:ring-water-500/30"

  useEffect(() => {
    if (cooldown <= 0) return
    const id = setTimeout(() => setCooldown((s) => s - 1), 1000)
    return () => clearTimeout(id)
  }, [cooldown])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })
      if (res.ok) {
        setStatus("sent")
        setRodo(false)
        setCooldown(180)
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="kontakt" className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <SectionHead eyebrow="Kontakt" title="Porozmawiajmy o Twoim odwiercie" />
          <p className="-mt-6 text-navy-800/75">
            Telefon to najszybszy sposób kontaktu — zadzwoń, a wspólnie ustalimy szczegóły realizacji.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="text-lg font-semibold uppercase text-navy-900 font-display">Studnie Głębinowe Karol Stroynowski</li>
            <li className="flex items-center gap-3 text-navy-800/80">
              <IconPin className="size-5 text-water-600" /> Zielona Góra, woj. lubuskie
            </li>
            <li>
              <a href={PHONE_HREF} className="flex items-center gap-3 text-navy-900 hover:text-water-600">
                <IconPhone className="size-5 text-water-600" />
                <span className="text-xl font-semibold">{PHONE_DISPLAY}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-navy-800/80 hover:text-water-600">
                <IconMail className="size-5 text-water-600" /> {EMAIL}
              </a>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-sand-50 p-6 sm:p-8">
          {status === "sent" ? (
            <div className="flex h-full flex-col items-center justify-center py-10 text-center">
              <span className="mb-4 grid size-14 place-items-center rounded-full bg-water-500/15 text-water-600">
                <IconMail className="size-7" />
              </span>
              <h3 className="text-xl font-semibold uppercase text-navy-900">Dziękujemy za wiadomość</h3>
              <p className="mt-2 text-navy-800/70">Skontaktujemy się z Tobą najszybciej, jak to możliwe.</p>
              {cooldown > 0 ? (
                <p className="mt-4 text-sm text-navy-800/50">
                  Kolejne zapytanie możliwe za{" "}
                  <span className="font-semibold text-navy-900">
                    {Math.floor(cooldown / 60)}:{String(cooldown % 60).padStart(2, "0")}
                  </span>
                </p>
              ) : (
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm text-water-600 underline hover:text-water-500"
                >
                  Wyślij kolejne zapytanie
                </button>
              )}
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-navy-900">Imię</span>
                  <input required name="name" className={inputCls} placeholder="Jan" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-navy-900">Telefon</span>
                  <input required name="phone" type="tel" className={inputCls} placeholder="600 000 000" />
                </label>
              </div>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-navy-900">Miejscowość</span>
                <input name="city" className={inputCls} placeholder="Zielona Góra" />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-navy-900">Wiadomość</span>
                <textarea
                  name="message"
                  rows={4}
                  className={inputCls}
                  placeholder="Napisz kilka słów o planowanym odwiercie…"
                />
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={rodo}
                  onChange={(e) => setRodo(e.target.checked)}
                  className="mt-0.5 size-4 shrink-0 accent-water-500"
                />
                <span className="text-sm text-navy-800/70">
                  Wyrażam zgodę na przetwarzanie moich danych osobowych (imię, numer telefonu, miejscowość) przez firmę Studnie Głębinowe Karol Stroynowski w celu udzielenia odpowiedzi na zapytanie, zgodnie z{" "}
                  <abbr title="Rozporządzenie o Ochronie Danych Osobowych">RODO</abbr>. Dane nie będą udostępniane osobom trzecim. <span className="text-red-500">*</span>
                </span>
              </label>
              {status === "error" && (
                <p className="text-sm text-red-600">Coś poszło nie tak. Spróbuj ponownie lub zadzwoń bezpośrednio.</p>
              )}
              <button
                type="submit"
                disabled={status === "sending" || !rodo || cooldown > 0}
                className="w-full rounded-md bg-water-500 px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-water-400 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending"
                  ? "Wysyłanie…"
                  : cooldown > 0
                  ? `Kolejne zapytanie za ${Math.floor(cooldown / 60)}:${String(cooldown % 60).padStart(2, "0")}`
                  : "Wyślij zapytanie"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-display text-lg font-semibold uppercase text-white">Studnie Głębinowe</p>
          <p className="font-display text-sm tracking-[0.2em] uppercase text-water-300">Karol Stroynowski</p>
          <p className="mt-3 max-w-xs text-sm">
            Odwierty i studnie głębinowe w Zielonej Górze i okolicy — w promieniu 70 km.
          </p>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">Nawigacja</p>
          <ul className="space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-water-300">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">Kontakt</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={PHONE_HREF} className="hover:text-water-300">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="hover:text-water-300">
                {EMAIL}
              </a>
            </li>
            <li>Zielona Góra, woj. lubuskie</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Studnie Głębinowe Karol Stroynowski. Wszelkie prawa zastrzeżone.</p>
          <a href="#" className="hover:text-water-300">
            Polityka prywatności
          </a>
        </div>
      </div>
    </footer>
  )
}

/* Mobilny sticky pasek CTA */
function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-navy-900/95 p-3 backdrop-blur-sm lg:hidden">
      <div className="flex gap-2">
        <a
          href={PHONE_HREF}
          className="flex flex-1 items-center justify-center gap-2 rounded-md bg-water-500 py-3.5 text-base font-semibold text-white"
        >
          <IconPhone className="size-5" /> Zadzwoń
        </a>
        <a
          href="#kontakt"
          className="flex flex-1 items-center justify-center gap-2 rounded-md border border-white/25 py-3.5 text-base font-semibold text-white"
        >
          Zapytaj o wycenę
        </a>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="bg-sand-50">
      <Header />
      <main className="pb-20 lg:pb-0">
        <Hero />
        <Offer />
        <Benefits />
        <Process />
        <Gallery />
        <About />
        <Area />
        <FaqSection />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  )
}
