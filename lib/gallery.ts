import type { PhotoKey } from "@/lib/images";

export type GalleryItem = {
  photo: PhotoKey;
  alt: string;
  /** Magazine-grid span on large screens. */
  span: "tall" | "wide" | "regular";
};

export const gallery: GalleryItem[] = [
  {
    photo: "ovenFire",
    alt: "Horno tradicional de FORNO con el fuego encendido",
    span: "tall",
  },
  {
    photo: "pizzaBoard",
    alt: "Pizza recién salida del horno sobre tabla de madera",
    span: "wide",
  },
  {
    photo: "doughCraft",
    alt: "Masa de fermentación lenta trabajada a mano",
    span: "regular",
  },
  {
    photo: "ambienceNight",
    alt: "Ambiente nocturno y cálido del local en Querétaro",
    span: "regular",
  },
  {
    photo: "closeCheese",
    alt: "Detalle de queso fundido y borde carbonizado",
    span: "wide",
  },
  {
    photo: "ingredients",
    alt: "Ingredientes frescos y premium sobre la barra",
    span: "tall",
  },
];
