import { focusAreas } from "@/data/focus";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tex } from "@/components/math/Tex";

export function FocusAreas() {
  return (
    <Section aria-labelledby="areas-titulo">
      <SectionHeading
        headingId="areas-titulo"
        eyebrow="01 / áreas de enfoque"
        title="Tres pilares, un mismo método"
        description="Modelar, simular y analizar: cada área alimenta a las otras dos."
      />

      <ul className="grid gap-5 md:grid-cols-3">
        {focusAreas.map(({ id, title, description, icon: Icon, tex, keywords }, i) => (
          <li key={id}>
            <Card className="flex h-full flex-col p-6">
              <div className="mb-5 flex items-start justify-between">
                <span className="flex size-11 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span
                  className="font-mono text-xs text-muted"
                  aria-hidden="true"
                >
                  0{i + 1}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {description}
              </p>

              <div className="mt-5 overflow-hidden rounded-lg border border-line bg-canvas px-3 py-2 text-center">
                <Tex tex={tex} />
              </div>

              <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Temas">
                {keywords.map((k) => (
                  <li key={k}>
                    <Badge variant="outline">{k}</Badge>
                  </li>
                ))}
              </ul>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
