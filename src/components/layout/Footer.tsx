import Link from "next/link";
import { Mail } from "lucide-react";

import { navLinks, siteConfig, stackBadges } from "@/lib/site";
import { Badge } from "@/components/ui/Badge";
import { GithubIcon } from "@/components/ui/GithubIcon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        {/* Marca */}
        <div>
          <p className="font-mono text-sm font-medium text-ink">
            {siteConfig.handle}
            <span className="text-accent">.lab</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            {siteConfig.description}
          </p>
        </div>

        {/* Enlaces rápidos */}
        <nav aria-label="Enlaces rápidos">
          <h2 className="font-mono text-xs tracking-wider text-muted uppercase">
            Navegación
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-ink-soft transition-colors hover:text-accent"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contacto */}
        <div>
          <h2 className="font-mono text-xs tracking-wider text-muted uppercase">
            Contacto
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ink-soft transition-colors hover:text-accent"
              >
                <GithubIcon className="size-4" /> GitHub
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-ink-soft transition-colors hover:text-accent"
              >
                <Mail className="size-4" aria-hidden="true" /> Correo
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-xs text-muted">
            © {year} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <ul
            className="flex flex-wrap gap-2"
            aria-label="Tecnologías utilizadas en este sitio"
          >
            {stackBadges.map((tech) => (
              <li key={tech}>
                <Badge variant="outline">{tech}</Badge>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
