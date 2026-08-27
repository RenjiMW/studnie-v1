# Landing page — Studnie Głębinowe Karol Stroynowski

## Context
The client wants a Polish-language, mobile-first landing page for a well-drilling
company (studnie głębinowe) in Zielona Góra / woj. lubuskie. The primary goal is
lead generation via phone calls and inquiry forms — the phone number and CTAs
("Zadzwoń", "Zapytaj o odwiert", "Poproś o wycenę") must be highly visible,
especially on mobile.

The project is a bare Vite + React 19 + Tailwind v4 scaffold: `src/App.tsx` is an
empty placeholder, `src/index.css` only imports Tailwind, and there is no icon
library or design system installed. So this is a from-scratch, single-page build
that must fit the existing entrypoint (`main.tsx` → `App.tsx`, global CSS in
`index.css`).

## Aesthetic direction
- Invoke the `aesthetic-stance` skill and call `create_make_theme` (full-page brief)
  before writing UI. Commit to a **rugged, technical, trustworthy local-trade**
  stance — NOT startup/luxury. Base: dark navy/graphite (`#0f1b2d`-ish) with blue
  water accents; light backgrounds for main content sections; strong, legible
  typography; gently rounded elements.
- Avoid (per brief): heavy gradients, glassmorphism, futuristic UI, excessive
  animation, suited-businessmen stock art.
- Fonts: pick a sturdy sans pairing via Google Fonts wired through `index.css`
  (`@import` first, per AGENTS.md). A strong condensed/geometric display + a
  neutral body sans.
- Design tokens (colors, radii, fonts) as Tailwind v4 `@theme` in `index.css`.

## Imagery
- Use the `unsplash` skill to fetch real field-work photos: drilling rig
  (wiertnica), borehole in progress, equipment, terrain, completed work. Used in
  hero + Realizacje gallery. Structure the gallery so photos are easy to swap for
  the company's real images later (clearly-labeled placeholder array).

## Icons
- No icon lib installed. Build small inline SVG icons (per `icon-illustration`
  skill guidance) for benefits and process steps — stroke-based, technical feel.

## Implementation
Build the full page in `src/App.tsx`, split into local section components (kept in
`App.tsx` or a small `src/components/` folder following codebase conventions). Use
semantic HTML and heading hierarchy for future local-SEO. Sections in order:

1. **Sticky header** — left: two-line wordmark "Studnie Głębinowe / Karol
   Stroynowski"; right nav: Oferta, Jak pracujemy, Realizacje, O nas, Kontakt +
   highlighted "Zadzwoń" (`tel:` link). Mobile: hamburger menu + always-visible
   phone button.
2. **Hero** — full-bleed drilling-rig photo, H1 "Studnie głębinowe w Zielonej
   Górze i całym województwie lubuskim", subtitle, primary CTA "Zapytaj o odwiert",
   secondary "Zadzwoń", + 3 trust chips (Zielona Góra i całe Lubuskie / Klienci
   indywidualni i firmy / Indywidualna wycena).
3. **Oferta** — "W czym możemy pomóc?" + 4 service cards (Studnie głębinowe,
   Odwierty, Klienci indywidualni, Firmy). Only the confirmed services.
4. **Korzyści** — "Dlaczego warto...?" 4 benefits with inline-SVG icons.
5. **Jak wygląda realizacja?** — 4-step process timeline (Kontakt → Ustalenie
   szczegółów → Wycena i termin → Wykonanie odwiertu).
6. **Realizacje** — "Zobacz nasze realizacje" + subtitle + swappable image gallery
   (Unsplash placeholders).
7. **O firmie** — heading + provided company text, space for an owner/equipment photo.
8. **Obszar działania** — "Działamy w całym województwie lubuskim" + city list
   (Zielona Góra, Nowa Sól, Sulechów, Świebodzin, Żary, Żagań, okolice) + simple
   visual + "Nie widzisz swojej miejscowości?" note.
9. **FAQ** — accordion (native `<details>`/`<summary>` or React state) with the 4
   provided Q&As.
10. **CTA band** — dark, high-emphasis: "Potrzebujesz studni głębinowej?" + text +
    "Zadzwoń" / "Zapytaj o wycenę".
11. **Kontakt** — left: company name, Zielona Góra, woj. lubuskie, phone, email;
    right: simple form (Imię, Telefon, Miejscowość, Wiadomość) + "Wyślij zapytanie"
    (client-side only, no backend).
12. **Footer** — company name, phone, email, nav, privacy-policy link, copyright.

Plus a **mobile sticky bottom CTA bar** ("Zadzwoń", `tel:` one-tap).

### Notes
- Phone/email are placeholders (e.g. `+48 000 000 000`, `kontakt@...`) — flagged in
  a code comment for the client to fill in. All phone CTAs use `tel:` links.
- Mobile-first Tailwind: large tap targets, single-column cards, short hero, no
  large text blocks.
- Copy stays natural/human; no keyword spamming. Content mirrors the brief so future
  sub-pages (Realizacje, O firmie, per-city pages) can be split out later.
- Respect `prefers-reduced-motion`; keep animation minimal (subtle reveal/hover only).

## Verification
- Vite dev server is already running; confirm the page renders in the preview panel.
- Check responsive layout at mobile (~375px) and desktop widths: sticky header,
  hamburger, mobile bottom CTA bar, single-column cards, accordion open/close.
- Verify `tel:` links and form fields work; no console errors.
