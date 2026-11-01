import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type TerminalWindowProps = {
  /** Nombre de archivo o comando mostrado en la barra de título. */
  title: string;
  children: ReactNode;
  className?: string;
};

/** Ventana estilo terminal/IDE. Decorativa: los puntos son aria-hidden. */
export function TerminalWindow({
  title,
  children,
  className,
}: TerminalWindowProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-line-strong bg-surface",
        "shadow-[0_24px_60px_-24px_color-mix(in_oklab,var(--accent)_25%,transparent)]",
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-line bg-surface-2 px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-accent/70" />
        </div>
        <span className="font-mono text-xs text-muted">{title}</span>
      </div>
      <div className="p-4 font-mono text-[13px] leading-relaxed sm:p-5">
        {children}
      </div>
    </div>
  );
}
