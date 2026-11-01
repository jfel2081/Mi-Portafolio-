import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  /** tech = tecnología (mono, neutro) · tag = etiqueta con acento · outline = discreto */
  variant?: "tech" | "tag" | "outline";
  className?: string;
};

const variants = {
  tech: "border-line-strong bg-surface-2 text-ink-soft",
  tag: "border-accent/30 bg-accent/10 text-accent",
  outline: "border-line text-muted",
} as const;

export function Badge({ children, variant = "tech", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-xs",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
