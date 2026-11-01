import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/** Contenedor base: superficie con borde fino y hover con acento. */
export function Card({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "rounded-xl border border-line bg-surface transition-colors duration-200",
        "hover:border-accent/40",
        className,
      )}
      {...props}
    />
  );
}
