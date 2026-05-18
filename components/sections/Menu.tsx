import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import {
  pizzas,
  extras,
  bebidas,
  postres,
  type MenuLine,
} from "@/lib/menu";
import { site } from "@/lib/site";

function ListBlock({
  title,
  items,
}: {
  title: string;
  items: MenuLine[];
}) {
  return (
    <div className="flex flex-col gap-5 rounded-[var(--radius-xl2)] border border-soft-black/8 bg-cream/40 p-7">
      <h3 className="font-display text-xl font-bold text-soft-black">
        {title}
      </h3>
      <ul className="flex flex-col">
        {items.map((item, i) => (
          <li
            key={item.name}
            className={`flex items-baseline justify-between gap-4 py-3 ${
              i !== items.length - 1 ? "border-b border-soft-black/8" : ""
            }`}
          >
            <span className="text-[0.95rem] text-ink">{item.name}</span>
            <span className="shrink-0 font-display text-sm font-bold text-burnt">
              {item.price}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Menu() {
  return (
    <section id="menu" className="relative scroll-mt-20 bg-ivory py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Menú"
          title="Pizzería estilo New Haven."
          intro="Carta corta, hecha en serio. Todo al horno sobre masa de fermentación lenta."
        />

        <Stagger className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {pizzas.map((pizza) => (
            <StaggerItem
              key={pizza.name}
              as="article"
              className="group flex flex-col overflow-hidden rounded-[var(--radius-xl2)] border border-soft-black/8 bg-cream/40 shadow-soft transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-lift"
            >
              <div className="grain relative aspect-[5/4] overflow-hidden">
                <Image
                  src={pizza.image}
                  alt={`Pizza ${pizza.name} de FORNO`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                />
                {pizza.badge && (
                  <div className="absolute left-4 top-4">
                    <Badge tone="pastel">{pizza.badge}</Badge>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl font-bold leading-tight text-soft-black">
                    {pizza.name}
                  </h3>
                  <span className="shrink-0 font-display text-lg font-extrabold text-tomato">
                    ${pizza.price}
                  </span>
                </div>
                <p className="text-[0.9rem] leading-relaxed text-muted">
                  {pizza.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-20">
          <Reveal>
            <h3 className="font-display text-2xl font-extrabold text-soft-black sm:text-3xl">
              Para acompañar
            </h3>
          </Reveal>
          <Stagger
            step={0.09}
            className="mt-8 grid gap-6 md:grid-cols-3"
          >
            <StaggerItem>
              <ListBlock title="Extras" items={extras} />
            </StaggerItem>
            <StaggerItem>
              <ListBlock title="Bebidas" items={bebidas} />
            </StaggerItem>
            <StaggerItem>
              <ListBlock title="Postres" items={postres} />
            </StaggerItem>
          </Stagger>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-soft-black/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-muted">
            Precios en MXN · Carta sujeta a temporada y disponibilidad.
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
