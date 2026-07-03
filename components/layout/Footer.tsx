import { Clock, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-soft-black text-ivory">
      <div className="grain pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-5">
            <Image
              src="/brand/forno-negativo.svg"
              alt={site.name}
              width={1678}
              height={331}
              className="h-9 w-auto"
            />
            <p className="max-w-xs text-sm leading-relaxed text-ivory/55">
              {site.description}
            </p>
            <div className="mt-2 flex gap-3">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de FORNO"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ivory/15 transition-colors hover:border-tomato hover:text-tomato"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de FORNO"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ivory/15 transition-colors hover:border-tomato hover:text-tomato"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <nav className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ivory/40">
              Explorar
            </p>
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-ivory/70 transition-colors hover:text-ivory"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ivory/40">
              Horario
            </p>
            <ul className="flex flex-col gap-3">
              {site.hours.map((h) => (
                <li key={h.day} className="text-sm text-ivory/70">
                  <span className="block text-ivory/90">{h.day}</span>
                  <span className="inline-flex items-center gap-1.5 text-ivory/55">
                    <Clock className="h-3.5 w-3.5" />
                    {h.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ivory/40">
              Visítanos
            </p>
            <a
              href={site.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-start gap-2 text-sm text-ivory/70 transition-colors hover:text-ivory"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-tomato" />
              {site.address.full}
            </a>
            <a
              href={site.phone.href}
              className="inline-flex items-center gap-2 text-sm text-ivory/70 transition-colors hover:text-ivory"
            >
              <Phone className="h-4 w-4 shrink-0 text-tomato" />
              {site.phone.display}
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-ivory/10 pt-8 text-xs text-ivory/40 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Hecho en Querétaro.
          </p>
          <p>Fermentación lenta. Horno caliente. No hacemos otra cosa.</p>
        </div>
      </div>
    </footer>
  );
}
