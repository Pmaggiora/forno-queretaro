import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "light" | "ghost";
type Size = "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-tomato disabled:opacity-60";

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-tomato text-ivory shadow-soft hover:bg-burnt hover:-translate-y-0.5 hover:shadow-lift",
  outline:
    "border border-soft-black/25 text-soft-black hover:border-soft-black hover:-translate-y-0.5",
  light:
    "bg-ivory/95 text-soft-black shadow-soft hover:bg-ivory hover:-translate-y-0.5 hover:shadow-lift",
  ghost: "text-ivory/80 hover:text-ivory",
};

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
} & ComponentProps<"a">;

export function Button({
  children,
  variant = "primary",
  size = "lg",
  className,
  ...props
}: ButtonProps) {
  return (
    <a className={cn(base, sizes[size], variants[variant], className)} {...props}>
      {children}
    </a>
  );
}
