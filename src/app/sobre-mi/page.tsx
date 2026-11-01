import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TerminalWindow } from "@/components/ui/TerminalWindow";

export const metadata: Metadata = {
  title: "Sobre mí",
  description: "Quién soy, qué investigo y con qué herramientas trabajo.",
};

const stack = [
  { group: "Lenguajes", items: ["Python", "C++", "Fortran", "TypeScript"] },
  { group: "Ciencia", items: ["NumPy", "SciPy", "PySCF", "LAMMPS"] },
  { group: "Web", items: ["Next.js", "React", "Tailwind CSS", "KaTeX"] },
];

export default function AboutPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="sobre mí"
        title="Sobre mí"
        description="Cuenta aquí quién eres y qué te mueve. Este texto es un marcador de posición."
      />

      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="max-w-prose space-y-4 text-base leading-relaxed text-ink-soft">
          <p>
            Hola, soy {siteConfig.name}. Aquí va una biografía breve: tu
            formación, el problema científico que te obsesiona y por qué
            decidiste documentar el camino en público.
          </p>
          <p>
            Un segundo párrafo para tu enfoque de trabajo: cómo combinas teoría,
            simulación y análisis de datos, y qué tipo de colaboraciones te
            interesan.
          </p>
        </div>

        <TerminalWindow title="perfil.yaml">
          <p>
            <span className="text-accent-2">nombre</span>:{" "}
            <span className="text-ink">{siteConfig.name}</span>
          </p>
          <p>
            <span className="text-accent-2">rol</span>:{" "}
            <span className="text-ink">Investigador/a en formación</span>
          </p>
          <p>
            <span className="text-accent-2">intereses</span>:
          </p>
          <p className="pl-4 text-ink-soft">- química teórica</p>
          <p className="pl-4 text-ink-soft">- física computacional</p>
          <p className="pl-4 text-ink-soft">- análisis de datos</p>
          <p>
            <span className="text-accent-2">contacto</span>:{" "}
            <span className="text-ink">{siteConfig.email}</span>
          </p>
        </TerminalWindow>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-3">
        {stack.map(({ group, items }) => (
          <div key={group}>
            <h2 className="mb-3 font-mono text-xs tracking-wider text-muted uppercase">
              {group}
            </h2>
            <ul className="flex flex-wrap gap-1.5">
              {items.map((item) => (
                <li key={item}>
                  <Badge>{item}</Badge>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
