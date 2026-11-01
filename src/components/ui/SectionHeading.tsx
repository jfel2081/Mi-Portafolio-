import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  /** Etiqueta mono sobre el título, p. ej. "01 / áreas". */
  eyebrow: string;
  title: string;
  /** id del <h2>, para enlazarlo con aria-labelledby de la sección. */
  headingId?: string;
  description?: ReactNode;
  /** Enlace opcional alineado a la derecha ("Ver todos"). */
  link?: { href: string; label: string };
};

export function SectionHeading({
  eyebrow,
  title,
  headingId,
  description,
  link,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        <p className="mb-3 font-mono text-xs tracking-wider text-accent uppercase">
          <span aria-hidden="true">// </span>
          {eyebrow}
        </p>
        <h2
          id={headingId}
          className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
        >
          {title}
        </h2>
        {description && (
          <p className="mt-3 text-base leading-relaxed text-muted">
            {description}
          </p>
        )}
      </div>
      {link && (
        <Link
          href={link.href}
          className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
        >
          {link.label}
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      )}
    </div>
  );
}
