import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { menu } from "@/lib/menu";
import { unsplash, photos } from "@/lib/images";
import { site } from "@/lib/site";

export function Menu() {
  return (
    <section id="menu" className="relative scroll-mt-20 bg-ivory py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Menú destacado"
            title="Seis razones para volver."
            intro="Una carta corta, hecha en serio. Todo se hornea al momento sobre masa de fermentación lenta."
          />
        </div>

        <Stagger className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {menu.map((pizza) => (
            <StaggerItem
              key={pizza.name}
              as="article"
              className="group flex flex-col overflow-hidden rounded-[var(--radius-xl2)] border border-soft-black/8 bg-cream/40 shadow-soft transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-lift"
            >
              <div className="grain relative aspect-[5/4] overflow-hidden">
                <Image
                  src={unsplash(photos[pizza.photo], 900)}
                  alt={`Pizza ${pizza.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                />
                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  {pizza.badges.map((b) => (
                    <Badge key={b} tone="pastel">
                      {b}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl font-bold text-soft-black">
                    {pizza.name}
                  </h3>
                  <span className="font-display text-xl font-extrabold text-tomato">
                    ${pizza.price}
                  </span>
                </div>
                <p className="text-[0.95rem] leading-relaxed text-muted">
                  {pizza.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-soft-black/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-muted">
            Precios en MXN · Carta de muestra, sujeta a temporada.
          </p>
          <a
            href={site.whatsapp.pedido}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-soft-black transition-colors hover:text-tomato"
          >
            Pedir para llevar por WhatsApp
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
