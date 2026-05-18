# FORNO — Landing Page · Design Spec

**Date:** 2026-05-18
**Status:** Approved (design + scope confirmed with user)

## Goal

Premium, cinematic, mobile-first landing page for **FORNO**, a New Haven–style
artisan pizzeria in Querétaro, México. Optimized for Meta/Instagram ad traffic,
reservation conversion, menu discovery, and strong brand expression.

## Scope decisions (locked)

| Decision | Choice |
| --- | --- |
| Conversion CTAs | WhatsApp (prefilled message) + `tel:` links. **No backend.** |
| Images | Curated Unsplash via `next/image` + `remotePatterns`. |
| Language | Español (es-MX) only. |
| Brand / repo | **FORNO** · `forno-queretaro` |

## Stack

Next.js 16 (App Router, Turbopack) · React 19.2 · TypeScript · Tailwind CSS v4
· Framer Motion v12 · lucide-react · `next/font/google` (Bricolage Grotesque
display + Manrope body).

## Next 16 constraints observed

- Turbopack is default; scripts contain no `--turbopack` flag.
- `images.remotePatterns` required for `images.unsplash.com`.
- `images.qualities` defaults to `[75]` — declare needed qualities in config.
- `metadataBase` set so OG/Twitter image URLs resolve.
- Root-level `opengraph-image.tsx` uses `next/og` `ImageResponse` (no params).
- CSS `scroll-behavior: smooth` for in-page anchor nav (single page, no route nav).

## Architecture

Content is centralized in `lib/` as the single source of truth (brand contact,
menu, gallery, testimonials) so the site is editable without touching JSX.

```
app/        layout (fonts, metadata, OG, lang es-MX) · page · globals.css
            opengraph-image.tsx · sitemap.ts · robots.ts
components/
  motion/   Reveal · Stagger · Parallax           (Framer Motion primitives)
  ui/       Button · Badge · SectionHeading
  layout/   Navbar (sticky) · Footer · MobileStickyCTA
  sections/ Hero · Story · Menu · Gallery · Experience · Testimonials · FinalCTA
lib/        site.ts · menu.ts · gallery.ts · testimonials.ts
```

## Design language

- **Palette:** ivory `#F7F1E6`, cream `#EFE4D2`, pastel `#E9CDA9`, burnt red
  `#9E2B23`, tomato `#D8402F`, soft-black `#15110D`.
- Grain/paper SVG overlay, warm gradients, soft shadows, modern rounded edges,
  generous negative space, editorial typographic hierarchy.
- Motion: fade+rise reveal (viewport once), staggered grids, elegant hover
  micro-interactions, light parallax. Respects `prefers-reduced-motion`.

## Sections (8) + sticky mobile CTA bar

1. **Hero** — fullscreen night image, warm overlay + grain, sticky nav, H1
   "La pizza como debería ser.", primary CTA Reservar (WhatsApp) + Ver menú.
2. **Nuestra Pizza** — editorial 2-col story: New Haven, slow ferment, premium
   ingredients, traditional oven. Light parallax image.
3. **Menú Destacado** — 6 pizza cards: name, short copy, MXN price, badges,
   hover lift/zoom.
4. **Galería Visual** — asymmetric magazine grid, staggered reveal.
5. **Experiencia del Local** — ambience, Querétaro location + map link.
6. **Testimonios** — minimal cards, stagger, micro-interactions.
7. **CTA Final** — high-conversion block: Reservar / Pedir (WhatsApp) / Llamar.
8. **Footer** — brand, social, hours, address, links.
- **MobileStickyCTA** — fixed bottom bar (Reservar · Llamar) on mobile.

## SEO / a11y / perf

Metadata + Open Graph + Twitter + dynamic `opengraph-image`, semantic HTML
(single h1, ordered h2s), `next/image` responsive sizing, font `display: swap`,
`sitemap.ts` + `robots.ts`, `lang="es-MX"`, focus-visible states, aria-labels on
icon-only controls, verified contrast.

## Deploy

GitHub-ready (`.gitignore` from scaffold), professional README (setup, scripts,
Vercel deploy, env table), `.env.example`, clear commits, Vercel zero-config.

## Out of scope (YAGNI)

Online ordering backend, reservation database, CMS, i18n, auth, analytics
wiring (left as documented env placeholders).
