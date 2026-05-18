# FORNO — Pizza New Haven · Querétaro

Landing page premium, cinematográfica y _mobile-first_ para **FORNO**, una
pizzería artesanal estilo New Haven en Querétaro, México. Diseñada para
convertir tráfico de anuncios de Meta/Instagram en reservas y pedidos.

> _"Fermentación lenta. Horno caliente. No hacemos otra cosa."_

---

## ✦ Stack

| Capa        | Tecnología                                  |
| ----------- | ------------------------------------------- |
| Framework   | Next.js 16 (App Router · Turbopack)         |
| Lenguaje    | TypeScript                                  |
| UI          | React 19.2                                  |
| Estilos     | Tailwind CSS v4 (`@theme` tokens)           |
| Animación   | Framer Motion v12                           |
| Iconos      | lucide-react                                |
| Tipografía  | Bricolage Grotesque + Manrope (`next/font`) |
| Imágenes    | `next/image` + Unsplash (`remotePatterns`)  |

## ✦ Características

- **8 secciones**: Hero, Nuestra Pizza, Menú, Galería, El Local, Reseñas, CTA
  final y Footer + barra CTA fija en mobile.
- **Conversión sin backend**: CTAs a WhatsApp con mensaje prellenado y enlaces
  `tel:` — deploy trivial, ideal para campañas.
- **Dirección de arte**: paleta marfil/crema/rojo quemado/tomate, textura
  _grain_, gradientes cálidos, jerarquía editorial y mucho espacio negativo.
- **Movimiento**: reveals con _fade + rise_, _stagger_ en grids, parallax
  ligero y micro-interacciones. Respeta `prefers-reduced-motion`.
- **SEO técnico**: metadata + Open Graph + Twitter, `opengraph-image` dinámico,
  JSON-LD `Restaurant`, `sitemap.ts`, `robots.ts`, HTML semántico, `lang="es-MX"`.
- **Accesibilidad**: `focus-visible`, `aria-label` en controles de solo icono,
  contraste verificado, navegación por teclado.

## ✦ Estructura

```
app/          layout · page · globals.css · opengraph-image · sitemap · robots
components/
  motion/     Reveal · Stagger · Parallax        (primitivas Framer Motion)
  ui/         Button · Badge · SectionHeading
  layout/     Navbar · Footer · MobileStickyCTA
  sections/   Hero · Story · Menu · Gallery · Experience · Testimonials · FinalCTA
lib/          site.ts · menu.ts · gallery.ts · testimonials.ts · images.ts · cn.ts
docs/         spec de diseño
```

Todo el contenido (contacto, menú, galería, reseñas) vive en `lib/` como
**única fuente de verdad** — editar el sitio no requiere tocar JSX.

## ✦ Inicio rápido

Requisitos: **Node.js 20.9+**.

```bash
npm install
npm run dev      # http://localhost:3000
```

Scripts:

| Comando         | Acción                              |
| --------------- | ----------------------------------- |
| `npm run dev`   | Servidor de desarrollo (Turbopack)  |
| `npm run build` | Build de producción                 |
| `npm run start` | Sirve el build de producción        |
| `npm run lint`  | ESLint (flat config)                |

## ✦ Variables de entorno

Todas son **opcionales** — el sitio funciona con valores demo. Copia
`.env.example` a `.env.local` o configúralas en Vercel:

| Variable                       | Uso                                       |
| ------------------------------ | ----------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`         | URL canónica (metadata, OG, sitemap)      |
| `NEXT_PUBLIC_WHATSAPP_NUMBER`  | Número de WhatsApp para CTAs              |
| `NEXT_PUBLIC_PHONE_DISPLAY`    | Teléfono mostrado al usuario              |
| `NEXT_PUBLIC_PHONE_RAW`        | Teléfono para enlaces `tel:`              |

## ✦ Personalización

| Quiero cambiar…        | Edito…                          |
| ---------------------- | ------------------------------- |
| Teléfono, horario, red | `lib/site.ts`                   |
| Pizzas y precios       | `lib/menu.ts`                   |
| Fotos de galería       | `lib/gallery.ts` + `lib/images.ts` |
| Reseñas                | `lib/testimonials.ts`           |
| Paleta y tipografía    | `app/globals.css` (`@theme`)    |

## ✦ Deploy en Vercel

1. Sube el repo a GitHub.
2. En [vercel.com/new](https://vercel.com/new) importa el repositorio.
3. Framework **Next.js** se detecta solo — sin configuración extra.
4. (Opcional) añade las variables de entorno.
5. **Deploy**. Cada push a `main` despliega automáticamente.

> Las imágenes se sirven desde `images.unsplash.com` (declarado en
> `next.config.ts`). Para producción real, reemplaza por fotografía propia.

## ✦ Licencia

Proyecto de demostración. Las imágenes provienen de
[Unsplash](https://unsplash.com) bajo su licencia.
