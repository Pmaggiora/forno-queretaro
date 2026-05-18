import Image from "next/image";
import { Clock, MapPin, Navigation } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";
import { unsplash, photos } from "@/lib/images";

export function Experience() {
  return (
    <section id="local" className="relative scroll-mt-20 bg-cream/50 py-24 lg:py-36">
      <div className="mx-auto grid max-w-7xl items-stretch gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal y={36}>
          <div className="grain relative h-full min-h-[420px] overflow-hidden rounded-[var(--radius-xl2)] shadow-lift lg:min-h-[560px]">
            <Parallax distance={50} className="absolute inset-0 scale-110">
              <Image
                src={unsplash(photos.ambienceNight, 1300)}
                alt="Ambiente nocturno y cálido del local de FORNO en el Centro de Querétaro"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </Parallax>
            <div className="absolute inset-0 bg-gradient-to-t from-soft-black/60 to-transparent" />
            <p className="absolute bottom-6 left-6 right-6 font-display text-2xl font-semibold text-ivory">
              Luz tenue, fuego al fondo, gente buena.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col justify-center gap-8">
          <SectionHeading
            eyebrow="El local"
            title="Un rincón cálido en el Centro."
            intro="Mesas comunales, vinilos de fondo y el horno como protagonista. FORNO es para quedarse, no solo para comer."
          />

          <div className="flex flex-col gap-4">
            <Reveal>
              <a
                href={site.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-2xl border border-soft-black/10 bg-ivory/70 p-5 transition-colors hover:border-tomato/40"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-tomato/10 text-tomato">
                  <MapPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-semibold text-soft-black">
                    {site.address.street}
                  </span>
                  <span className="text-sm text-muted">
                    {site.address.city}, {site.address.state}
                  </span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={0.07}>
              <div className="flex items-start gap-4 rounded-2xl border border-soft-black/10 bg-ivory/70 p-5">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-tomato/10 text-tomato">
                  <Clock className="h-5 w-5" />
                </span>
                <ul className="grid w-full grid-cols-1 gap-1.5 text-sm sm:grid-cols-2">
                  {site.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex justify-between gap-3 text-muted sm:flex-col sm:gap-0"
                    >
                      <span className="text-soft-black">{h.day}</span>
                      <span>{h.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <a
              href={site.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-soft-black px-7 py-3.5 text-sm font-semibold text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:bg-burnt"
            >
              <Navigation className="h-4 w-4" />
              Cómo llegar
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
