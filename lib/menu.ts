import { photos, type PhotoKey } from "@/lib/images";

export type Pizza = {
  name: string;
  description: string;
  price: number;
  photo: PhotoKey;
  badge?: string;
};

export const pizzas: Pizza[] = [
  {
    name: "Clásica Tomato Pie",
    description:
      "Salsa de tomate italiana, ajo rostizado, pecorino romano, aceite de oliva extra virgen y albahaca fresca.",
    price: 240,
    photo: "margherita",
    badge: "New Haven clásica",
  },
  {
    name: "White Clam Pizza",
    description:
      "Base blanca con mozzarella fresca, almejas, ajo, perejil, limón y hojuelas de chile.",
    price: 320,
    photo: "closeCheese",
    badge: "Especialidad",
  },
  {
    name: "Pepperoni Hot Honey",
    description:
      "Mozzarella, pepperoni artesanal, miel picante y parmesano añejo.",
    price: 295,
    photo: "pizzaTop",
    badge: "Dulce-picante",
  },
  {
    name: "Smoky Sausage",
    description:
      "Salsa de tomate, salchicha italiana, cebolla caramelizada, mozzarella ahumada y orégano.",
    price: 285,
    photo: "pizzaBoard",
    badge: "Ahumada",
  },
  {
    name: "Mushroom & Truffle",
    description:
      "Mozzarella fior di latte, mezcla de hongos rostizados, ricotta y aceite de trufa.",
    price: 310,
    photo: "pizzaMushroom",
    badge: "Vegetariana",
  },
  {
    name: "Vodka Pie",
    description:
      "Salsa vodka cremosa, mozzarella fresca, parmesano y albahaca.",
    price: 290,
    photo: "slice",
    badge: "Cremosa",
  },
  {
    name: "Roasted Pepper & Burrata",
    description:
      "Pimientos rostizados, tomate cherry, burrata fresca, pesto y aceite de oliva.",
    price: 325,
    photo: "pizzaGreen",
    badge: "Vegetariana",
  },
  {
    name: "The New Haven Special",
    description:
      "Pepperoni, salchicha italiana, tocino ahumado, cebolla morada y chile calabrés.",
    price: 340,
    photo: "pizzaDark",
    badge: "La más intensa",
  },
];

export type MenuLine = { name: string; price: string };

export const extras: MenuLine[] = [
  { name: "Burrata fresca", price: "$70" },
  { name: "Pepperoni artesanal", price: "$45" },
  { name: "Hongos rostizados", price: "$40" },
  { name: "Chile calabrés", price: "$35" },
  { name: "Miel picante", price: "$30" },
  { name: "Anchovies", price: "$50" },
  { name: "Extra mozzarella", price: "$45" },
];

export const bebidas: MenuLine[] = [
  { name: "Soda italiana", price: "$65" },
  { name: "Lemonade artesanal", price: "$55" },
  { name: "Cerveza artesanal", price: "$90" },
  { name: "Vino tinto de la casa", price: "$120 copa" },
  { name: "Espresso frío", price: "$60" },
];

export const postres: MenuLine[] = [
  { name: "Cannoli relleno de ricotta", price: "$95" },
  { name: "Gelato artesanal", price: "$90" },
  { name: "Tiramisú clásico", price: "$110" },
];

export const heroPhoto = photos.heroPizza;
