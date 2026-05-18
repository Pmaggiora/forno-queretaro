"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export function MobileStickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 lg:hidden"
        >
          <div className="grain relative border-t border-soft-black/10 bg-ivory/90 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl">
            <div className="relative z-10 flex gap-2.5">
              <a
                href={site.whatsapp.reserva}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center rounded-full bg-tomato py-3.5 text-sm font-semibold text-ivory active:scale-[0.98]"
              >
                Reservar mesa
              </a>
              <a
                href={site.phone.href}
                aria-label={`Llamar a ${site.name}`}
                className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-soft-black/20 text-soft-black active:scale-[0.98]"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
