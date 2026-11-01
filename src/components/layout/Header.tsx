"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Terminal, X } from "lucide-react";

import { navLinks, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { GithubIcon } from "@/components/ui/GithubIcon";
import { ThemeToggle } from "./ThemeToggle";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Cierra el menú móvil al navegar o al pulsar Escape
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-mono text-sm font-medium text-ink"
        >
          <span className="flex size-8 items-center justify-center rounded-lg border border-accent/40 bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
            <Terminal className="size-4" aria-hidden="true" />
          </span>
          <span>
            {siteConfig.handle}
            <span className="text-accent">.lab</span>
          </span>
        </Link>

        {/* Navegación de escritorio */}
        <nav aria-label="Principal" className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ href, label }) => {
            const active = isActive(pathname, href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-md px-3 py-1.5 text-sm transition-colors",
                  active
                    ? "bg-accent/10 text-accent"
                    : "text-muted hover:text-ink",
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Acciones */}
        <div className="flex items-center gap-2">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub (se abre en una pestaña nueva)"
            className="inline-flex h-9 items-center gap-2 rounded-lg border border-line px-3 text-sm text-muted transition-colors hover:border-accent/50 hover:text-accent"
          >
            <GithubIcon className="size-4" />
            <span className="hidden lg:inline">GitHub</span>
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex size-9 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:text-ink md:hidden"
          >
            {open ? (
              <X className="size-4" aria-hidden="true" />
            ) : (
              <Menu className="size-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Navegación móvil */}
      <nav
        id="mobile-nav"
        aria-label="Principal (móvil)"
        hidden={!open}
        className="border-t border-line bg-canvas md:hidden"
      >
        <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6">
          {navLinks.map(({ href, label }) => {
            const active = isActive(pathname, href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "block rounded-md px-3 py-2.5 text-sm",
                    active
                      ? "bg-accent/10 text-accent"
                      : "text-muted hover:text-ink",
                  )}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
