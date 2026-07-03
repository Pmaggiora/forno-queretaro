"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled
            ? "border-b border-soft-black/8 bg-ivory/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a
            href="#top"
            aria-label={`${site.name} — inicio`}
            className="relative inline-flex items-center"
          >
            <Image
              src="/brand/forno-negativo.svg"
              alt={site.name}
              width={1678}
              height={331}
              priority
              className={cn(
                "h-6 w-auto transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                scrolled ? "opacity-0" : "opacity-100",
              )}
            />
            <Image
              src="/brand/forno-negro.svg"
              alt=""
              aria-hidden
              width={1678}
              height={331}
              className={cn(
                "absolute left-0 h-6 w-auto transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                scrolled ? "opacity-100" : "opacity-0",
              )}
            />
          </a>

          <div className="hidden items-center gap-9 lg:flex">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  scrolled
                    ? "text-ink/80 hover:text-tomato"
                    : "text-ivory/80 hover:text-ivory",
                )}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={site.whatsapp.reserva}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "hidden rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 sm:inline-flex",
                scrolled
                  ? "bg-tomato text-ivory hover:bg-burnt"
                  : "bg-ivory/95 text-soft-black hover:bg-ivory",
              )}
            >
              Reservar
            </a>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Abrir menú"
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden",
                scrolled
                  ? "text-soft-black hover:bg-soft-black/8"
                  : "text-ivory hover:bg-ivory/15",
              )}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col bg-soft-black text-ivory lg:hidden"
          >
            <div className="flex h-18 items-center justify-between px-5 py-4">
              <Image
                src="/brand/forno-negativo.svg"
                alt={site.name}
                width={1678}
                height={331}
                className="h-6 w-auto"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full hover:bg-ivory/10"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex flex-1 flex-col justify-center gap-2 px-6">
              {site.nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06 }}
                  className="font-display text-4xl font-bold text-ivory/90 transition-colors hover:text-tomato"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col gap-3 px-6 pb-10">
              <a
                href={site.whatsapp.reserva}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-tomato px-6 py-4 text-center text-base font-semibold text-ivory"
              >
                Reservar por WhatsApp
              </a>
              <a
                href={site.phone.href}
                className="rounded-full border border-ivory/25 px-6 py-4 text-center text-base font-semibold text-ivory"
              >
                Llamar {site.phone.display}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
