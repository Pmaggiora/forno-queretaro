import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeProps = {
  children: ReactNode;
  tone?: "tomato" | "ink" | "pastel";
  className?: string;
};

const tones = {
  tomato: "bg-tomato/12 text-burnt ring-tomato/25",
  ink: "bg-soft-black/8 text-ink ring-soft-black/15",
  pastel: "bg-pastel/45 text-burnt-deep ring-burnt/15",
} as const;

export function Badge({ children, tone = "tomato", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] ring-1 ring-inset",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
