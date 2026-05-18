import type { PhotoKey } from "@/lib/images";

export type GalleryItem = {
  photo: PhotoKey;
  alt: string;
  /** Magazine-grid span on large screens. */
  span: "tall" | "wide" | "regular";
};

export const gallery: GalleryItem[] = [
  {
    photo: "ovenHeat",
    alt: "Queso fundido y vapor: el calor del horno en FORNO",
    span: "tall",
  },
  {
    photo: "pizzaBoard",
    alt: "Pizza recién salida del horno sobre tabla de madera",
    span: "wide",
  },
  {
    photo: "doughCraft",
    alt: "Pan artesanal de fermentación lenta",
    span: "regular",
  },
  {
    photo: "ambienceNight",
    alt: "Ambiente nocturno y cálido del local en Querétaro",
    span: "regular",
  },
  {
    photo: "closeCheese",
    alt: "Borde carbonizado estilo New Haven, recién horneado",
    span: "wide",
  },
  {
    photo: "ingredients",
    alt: "Ingredientes frescos: tomate, muzzarella y albahaca",
    span: "tall",
  },
];
