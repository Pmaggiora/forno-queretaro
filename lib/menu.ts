import { photos, type PhotoKey } from "@/lib/images";

export type Pizza = {
  name: string;
  description: string;
  price: number;
  photo: PhotoKey;
  badges: string[];
};

export const menu: Pizza[] = [
  {
    name: "New Haven Roja",
    description:
      "La original. Salsa de tomate San Marzano, orégano, ajo y un hilo de oliva. Sin muzzarella, como manda New Haven.",
    price: 215,
    photo: "margherita",
    badges: ["New Haven clásica", "Más pedida"],
  },
  {
    name: "Mootz",
    description:
      "Muzzarella fresca tirada a mano, tomate lento y albahaca cortada al momento sobre masa de fermentación de 48 h.",
    price: 248,
    photo: "pizzaBoard",
    badges: ["Favorita de la casa"],
  },
  {
    name: "White Clam",
    description:
      "La leyenda de Wooster Street: almeja fresca, ajo, oliva, orégano y limón. Sin salsa, puro carácter.",
    price: 289,
    photo: "closeCheese",
    badges: ["Edición de temporada"],
  },
  {
    name: "Sopressata Picante",
    description:
      "Sopressata curada, miel de chile de árbol, muzzarella y un toque de tomate quemado en horno.",
    price: 268,
    photo: "pizzaTop",
    badges: ["Picante"],
  },
  {
    name: "Hongos & Trufa",
    description:
      "Mezcla de hongos salteados, ricotta, aceite de trufa y tomillo. Tierra y humo en cada borde.",
    price: 276,
    photo: "slice",
    badges: ["Vegetariana"],
  },
  {
    name: "Verde Quemada",
    description:
      "Pesto de albahaca, burrata, pistache y ralladura de limón sobre masa carbonizada al punto.",
    price: 259,
    photo: "ingredients",
    badges: ["Nueva"],
  },
];

export const heroPhoto = photos.heroPizza;
