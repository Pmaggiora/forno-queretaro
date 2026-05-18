import Image from "next/image";
import { Clock, Flame, Wheat } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { unsplash, photos } from "@/lib/images";

const pillars = [
  {
    icon: Clock,
    title: "Fermentación lenta",
    body: "48 horas de reposo en frío. La masa desarrolla sabor, no atajos.",
  },
  {
    icon: Flame,
    title: "Horno tradicional",
    body: "Piso ardiente y borde carbonizado: la firma inconfundible de New Haven.",
  },
  {
    icon: Wheat,
    title: "Ingredientes premium",
    body: "Tomate San Marzano, muzzarella fresca y producto local de temporada.",
  },
];

export function Story() {
  return (
    <section
      id="nuestra-pizza"
      className="bg-warm-radial relative scroll-mt-20 py-24 lg:py-36"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col gap-9">
          <SectionHeading
            eyebrow="Nuestra pizza"
            title="New Haven, hecha con paciencia."
            intro="No inventamos un estilo: lo respetamos. La pizza de New Haven es fina, ahumada y honesta. Cada disco pasa por días de fermentación antes de tocar el fuego."
          />

          <div className="flex flex-col divide-y divide-soft-black/10 border-y border-soft-black/10">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="flex items-start gap-5 py-6">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-tomato/10 text-tomato">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-soft-black">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-[0.975rem] leading-relaxed text-muted">
                      {p.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="text-edge font-display text-2xl font-medium leading-snug text-burnt-deep">
              “Artesanal hasta el último detalle.”
            </p>
          </Reveal>
        </div>

        <Reveal y={36}>
          <div className="relative">
            <div className="grain relative aspect-[4/5] overflow-hidden rounded-[var(--radius-xl2)] shadow-lift">
              <Parallax distance={40} className="absolute inset-0 scale-110">
                <Image
                  src={unsplash(photos.doughCraft, 1200)}
                  alt="Masa de fermentación lenta trabajada a mano en FORNO"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </Parallax>
            </div>

            <div className="absolute -bottom-7 -left-4 w-44 rounded-2xl bg-soft-black px-6 py-5 text-ivory shadow-lift sm:-left-7">
              <p className="font-display text-4xl font-extrabold leading-none">
                48h
              </p>
              <p className="mt-1.5 text-xs uppercase tracking-[0.16em] text-ivory/60">
                de fermentación
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
