/**
 * Single source of truth for brand + contact data.
 * Editing the site's real-world info should only ever require this file.
 */

// Deploy-time overrides (optional). Falls back to sensible demo values.
const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5214421234567"; // país+lada+número
const phoneDisplay = process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? "+52 442 123 4567";
const phoneRaw = process.env.NEXT_PUBLIC_PHONE_RAW ?? "+524421234567";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://forno-queretaro.vercel.app";

function whatsappLink(message: string): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const site = {
  name: "FORNO",
  legalName: "FORNO Pizza New Haven",
  shortName: "FORNO",
  tagline: "La pizza como debería ser.",
  description:
    "Pizza estilo New Haven en el corazón de Querétaro. Fermentación lenta, horno tradicional e ingredientes premium. No hacemos otra cosa.",
  url: siteUrl,
  locale: "es-MX",

  phone: {
    display: phoneDisplay,
    href: `tel:${phoneRaw}`,
  },

  whatsapp: {
    number: whatsappNumber,
    reserva: whatsappLink(
      "Hola FORNO 🍕 Quiero reservar una mesa. ¿Me ayudan con disponibilidad?",
    ),
    pedido: whatsappLink(
      "Hola FORNO 🍕 Quiero hacer un pedido para llevar. ¿Me pasan el menú y tiempos?",
    ),
    general: whatsappLink("Hola FORNO 🍕 Tengo una pregunta:"),
  },

  address: {
    street: "Andador 5 de Mayo 21, Centro Histórico",
    city: "Santiago de Querétaro",
    state: "Querétaro",
    country: "México",
    full: "Andador 5 de Mayo 21, Centro Histórico, 76000 Santiago de Querétaro, Qro.",
    mapsUrl: "https://maps.google.com/?q=Centro+Historico+Queretaro",
  },

  hours: [
    { day: "Lunes", value: "Cerrado" },
    { day: "Martes – Jueves", value: "5:00 pm – 11:00 pm" },
    { day: "Viernes – Sábado", value: "1:00 pm – 12:30 am" },
    { day: "Domingo", value: "1:00 pm – 10:00 pm" },
  ],

  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },

  nav: [
    { label: "Nuestra pizza", href: "#nuestra-pizza" },
    { label: "Menú", href: "#menu" },
    { label: "Galería", href: "#galeria" },
    { label: "El local", href: "#local" },
    { label: "Reseñas", href: "#resenas" },
  ],
} as const;

export type Site = typeof site;
