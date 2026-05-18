/**
 * Curated Unsplash photo IDs. Swap any `id` here to restyle the whole site.
 * `unsplash()` builds an optimized delivery URL; `next/image` then resizes it.
 */

export function unsplash(id: string, width = 1600): string {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${width}`;
}

export const photos = {
  heroPizza: "1513104890138-7c749659a591",
  ovenFire: "1556909114-f6e7ad7d3136",
  doughCraft: "1593958812614-2db6a598c71c",
  pizzaBoard: "1565299624946-b28f40a0ae38",
  margherita: "1574071318508-1cdbab80d002",
  slice: "1571407970349-bc81e7e96d47",
  ambienceTable: "1517248135467-4c7edcad34c4",
  ambienceNight: "1424847651672-bf20a4b0982b",
  ingredients: "1546069901-ba9599a7e63c",
  pizzaTop: "1604382354936-07c5d9983bd3",
  basil: "1556910103-1c02745aae4d",
  closeCheese: "1542281286-9e0a16bb7366",
} as const;

export type PhotoKey = keyof typeof photos;
