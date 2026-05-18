import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
  className,
}: SectionHeadingProps) {
  const isLight = tone === "light";

  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col gap-5",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      <Reveal>
        <span
          className={cn(
            "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em]",
            isLight ? "text-pastel" : "text-tomato",
          )}
        >
          <span
            className={cn(
              "h-px w-8",
              isLight ? "bg-pastel/60" : "bg-tomato/50",
            )}
          />
          {eyebrow}
        </span>
      </Reveal>

      <Reveal delay={0.05}>
        <h2
          className={cn(
            "text-edge text-4xl font-extrabold leading-[1.04] sm:text-5xl lg:text-6xl",
            isLight ? "text-ivory" : "text-soft-black",
          )}
        >
          {title}
        </h2>
      </Reveal>

      {intro && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "text-edge max-w-2xl text-lg leading-relaxed",
              isLight ? "text-ivory/70" : "text-muted",
            )}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
