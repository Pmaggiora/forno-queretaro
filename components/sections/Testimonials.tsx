import { Quote, Star } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/testimonials";

export function Testimonials() {
  return (
    <section
      id="resenas"
      className="bg-warm-radial relative scroll-mt-20 py-24 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow="Reseñas"
          title="Lo dicen mejor ellos."
          intro="Tráfico que llega por una foto y se queda por la masa."
        />

        <Stagger
          step={0.1}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-7"
        >
          {testimonials.map((t) => (
            <StaggerItem
              key={t.name}
              as="article"
              className="group relative flex flex-col gap-6 rounded-[var(--radius-xl2)] border border-soft-black/8 bg-ivory/80 p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
            >
              <Quote className="h-9 w-9 text-tomato/25 transition-colors group-hover:text-tomato/45" />
              <p className="text-edge text-lg leading-relaxed text-ink">
                {t.quote}
              </p>
              <div className="mt-auto flex items-center justify-between border-t border-soft-black/10 pt-5">
                <div>
                  <p className="font-display font-bold text-soft-black">
                    {t.name}
                  </p>
                  <p className="text-sm text-muted">{t.detail}</p>
                </div>
                <div className="flex gap-0.5 text-tomato">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
