"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { site } from "@/lib/site";
import { unsplash, photos } from "@/lib/images";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="grain relative flex min-h-dvh flex-col justify-end overflow-hidden"
    >
      <Image
        src={unsplash(photos.heroPizza, 2000)}
        alt="Pizza estilo New Haven recién salida del horno en FORNO"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-soft-black via-soft-black/55 to-soft-black/35" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_10%,transparent_25%,rgba(21,17,13,0.55)_100%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-32 sm:px-8 sm:pb-28">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex max-w-3xl flex-col gap-7"
        >
          <motion.span
            variants={item}
            className="inline-flex w-fit items-center gap-2.5 rounded-full border border-ivory/20 bg-ivory/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ivory/85 backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-tomato" />
            New Haven · Querétaro
          </motion.span>

          <motion.h1
            variants={item}
            className="text-edge font-display text-5xl font-extrabold leading-[0.98] text-ivory sm:text-7xl lg:text-8xl"
          >
            La pizza como
            <br />
            <span className="text-pastel">debería ser.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-edge max-w-xl text-lg leading-relaxed text-ivory/75 sm:text-xl"
          >
            Fermentación lenta. Horno caliente. No hacemos otra cosa. Pizza
            artesanal estilo New Haven en el corazón de Querétaro.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
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
              href="#menu"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ivory/30 px-8 py-4 text-base font-semibold text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:border-ivory hover:bg-ivory/5"
            >
              Ver el menú
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#nuestra-pizza"
        aria-label="Bajar a la siguiente sección"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 sm:block"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/25 text-ivory/70"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </motion.a>
    </section>
  );
}
