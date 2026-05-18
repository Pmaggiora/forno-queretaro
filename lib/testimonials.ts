export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "La masa más honesta que he probado fuera de Connecticut. El borde carbonizado es perfecto.",
    name: "Mariana R.",
    detail: "Local, Querétaro",
  },
  {
    quote:
      "Vine por una foto en Instagram y me quedé toda la noche. El ambiente se siente como otra ciudad.",
    name: "Diego A.",
    detail: "Primera visita",
  },
  {
    quote:
      "La White Clam es una locura. No esperaba encontrar New Haven de verdad en el Centro.",
    name: "Sofía M.",
    detail: "Reseña Google · 5★",
  },
  {
    quote:
      "Pedí para llevar y aún así llegó crujiente. Se nota la fermentación lenta en cada mordida.",
    name: "Carlos T.",
    detail: "Pedido a casa",
  },
];
