import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/** Sección con ancho máximo y espaciado vertical consistente. */
export function Section({ className, ...props }: ComponentProps<"section">) {
  return (
    <section
      className={cn(
        "mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
        className,
      )}
      {...props}
    />
  );
}
