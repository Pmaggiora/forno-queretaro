import Image from "next/image";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/site";
import { unsplash, photos } from "@/lib/images";

export function FinalCTA() {
  return (
    <section className="grain relative overflow-hidden">
      <Image
        src={unsplash(photos.ovenFire, 2000)}
        alt="Horno encendido de FORNO"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-soft-black/82" />
      <div className="absolute inset-0 bg-[radial-gradient(110%_90%_at_50%_30%,rgba(216,64,47,0.22),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-8 px-5 py-28 text-center sm:px-8 lg:py-40">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-ivory/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ivory/80">
            Reserva tu mesa
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="text-edge font-display text-4xl font-extrabold leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
            New Haven pizza en el corazón de Querétaro.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-edge max-w-xl text-lg text-ivory/70">
            Reserva, pide para llevar o simplemente llega. El horno ya está
            caliente.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <a
              href={site.whatsapp.reserva}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-tomato px-8 py-4 text-base font-semibold text-ivory shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:bg-burnt"
            >
              Reservar mesa
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={site.whatsapp.pedido}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ivory/95 px-8 py-4 text-base font-semibold text-soft-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-ivory"
            >
              <MessageCircle className="h-4 w-4" />
              Pedir para llevar
            </a>
            <a
              href={site.phone.href}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ivory/30 px-8 py-4 text-base font-semibold text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:border-ivory hover:bg-ivory/5"
            >
              <Phone className="h-4 w-4" />
              Llamar
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-sm text-ivory/55">
            {site.address.full} · {site.phone.display}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
