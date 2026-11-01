import { ArrowRight, BookOpen } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { Tex } from "@/components/math/Tex";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-line">
      {/* Fondos decorativos */}
      <div className="bg-lab-glow pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div className="bg-lab-grid pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:py-28">
        {/* Texto */}
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inline-flex size-full rounded-full bg-accent opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            laboratorio computacional · en construcción
          </p>

          <h1 className="text-4xl leading-[1.08] font-semibold tracking-tight text-balance text-ink sm:text-5xl lg:text-6xl">
            Simulación,{" "}
            <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
              Código
            </span>{" "}
            y Materia
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Bitácora y portafolio de modelos de química teórica, simulaciones de
            física computacional y herramientas para convertir datos en
            conocimiento reproducible.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/proyectos">
              Explorar Proyectos
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Button>
            <Button href="/blog" variant="secondary">
              <BookOpen className="size-4" aria-hidden="true" />
              Ver Blog
            </Button>
          </div>
        </div>

        {/* Terminal + ecuaciones (demo de KaTeX / mhchem) */}
        <figure
          className="space-y-4"
          aria-label="Ilustración: sesión de terminal con una simulación de ejemplo"
        >
          <TerminalWindow title="~/lab/md.py">
            <p className="text-muted"># datos de ejemplo — reemplazar</p>
            <p className="mt-2">
              <span className="text-accent">$</span>{" "}
              <span className="text-ink">python md.py --sistema argon --pasos 1e6</span>
            </p>
            <p className="text-ink-soft">
              <span className="text-accent">✓</span> integrando velocity-Verlet
            </p>
            <p className="text-ink-soft">
              <span className="text-accent">✓</span> equilibrio alcanzado{" "}
              <span className="text-accent-2">T = 94.4 K</span>
            </p>
            <p className="text-ink-soft">
              <span className="text-accent">✓</span> energía conservada{" "}
              <span className="text-accent-2">ΔE/E &lt; 1e-5</span>
            </p>
            <p className="mt-2">
              <span className="text-accent">$</span>{" "}
              <span className="cursor" />
            </p>
          </TerminalWindow>

          <div className="grid gap-3 sm:grid-cols-[1fr_1.6fr]">
            <div className="overflow-x-auto rounded-xl border border-line bg-surface px-4 py-3">
              <p className="mb-1 font-mono text-[11px] tracking-wider text-muted uppercase">
                Schrödinger
              </p>
              <Tex
                display
                tex={String.raw`i\hbar\,\frac{\partial \Psi}{\partial t} = \hat{H}\,\Psi`}
              />
            </div>
            <div className="overflow-x-auto rounded-xl border border-line bg-surface px-4 py-3">
              <p className="mb-1 font-mono text-[11px] tracking-wider text-muted uppercase">
                Combustión
              </p>
              <Tex
                display
                tex={String.raw`\ce{CH4 + 2O2 -> CO2 + 2H2O}`}
              />
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}
