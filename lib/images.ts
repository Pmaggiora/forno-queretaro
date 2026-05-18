/**
 * Curated Unsplash photo IDs — each verified visually for subject + quality.
 * Swap any `id` here to restyle the whole site.
 * `unsplash()` builds an optimized delivery URL; `next/image` then resizes it.
 */

export function unsplash(id: string, width = 1600): string {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${width}`;
}

export const photos = {
  heroPizza: "1513104890138-7c749659a591", // pizza al horno, primer plano
  ovenHeat: "1593504049359-74330189a345", // cheese pull + vapor, calor
  doughCraft: "1509440159596-0249088772ff", // pan artesanal + trigo, fermentación
  pizzaBoard: "1565299624946-b28f40a0ae38", // pizza sobre tabla de madera
  margherita: "1574071318508-1cdbab80d002", // margherita clásica con albahaca
  slice: "1571407970349-bc81e7e96d47", // rebanada fina, manos
  pizzaGreen: "1593560708920-61dd98c46a4e", // pizza verde, ricotta y hojas
  ambienceTable: "1517248135467-4c7edcad34c4", // interior moderno de restaurante
  ambienceNight: "1538488881038-e252a119ace7", // bar cálido nocturno, Brooklyn
  ingredients: "1592417817098-8fd3d9eb14a5", // tomate, muzzarella, albahaca
  pizzaTop: "1604382354936-07c5d9983bd3", // pizza completa cenital
  closeCheese: "1571066811602-716837d681de", // pizza rústica, borde carbonizado
} as const;

export type PhotoKey = keyof typeof photos;
