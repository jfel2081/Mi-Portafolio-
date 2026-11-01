import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "bg-accent text-on-accent hover:brightness-110 shadow-[0_0_0_1px_color-mix(in_oklab,var(--accent)_60%,transparent),0_8px_24px_-8px_color-mix(in_oklab,var(--accent)_55%,transparent)]",
  secondary:
    "border border-line-strong bg-surface text-ink hover:border-accent/60 hover:text-accent",
  ghost: "text-muted hover:text-ink",
} as const;

/** Botón/CTA renderizado como <Link> de Next.js. */
export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <Link
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5",
        "text-sm font-medium transition-all duration-200",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
