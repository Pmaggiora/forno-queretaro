import Image from "next/image";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { gallery } from "@/lib/gallery";
import { unsplash, photos } from "@/lib/images";
import { cn } from "@/lib/cn";

const spanClass: Record<string, string> = {
  tall: "lg:row-span-2",
  wide: "sm:col-span-2",
  regular: "",
};

export function Gallery() {
  return (
    <section
      id="galeria"
      className="grain relative scroll-mt-20 overflow-hidden bg-soft-black py-24 lg:py-36"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          tone="light"
          eyebrow="Galería"
          title="Una noche en FORNO."
          intro="Fuego, masa y luz cálida. Así se siente el lugar antes de que llegue tu pizza."
        />

        <Stagger
          step={0.08}
          className="mt-14 grid auto-rows-[230px] grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4"
        >
          {gallery.map((g) => (
            <StaggerItem
              key={g.photo}
              className={cn(
                "group relative overflow-hidden rounded-2xl",
                spanClass[g.span],
              )}
            >
              <Image
                src={unsplash(photos[g.photo], 1100)}
                alt={g.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-soft-black/55 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
