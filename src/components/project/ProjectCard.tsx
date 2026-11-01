import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ProjectPreview } from "./ProjectPreview";

const statusLabel: Record<Project["status"], string | null> = {
  placeholder: "Ejemplo",
  wip: "En progreso",
  published: null,
};

export function ProjectCard({ project }: { project: Project }) {
  const { category, title, summary, tech, preview, status, href } = project;
  const label = statusLabel[status];

  return (
    <Card className="group relative flex h-full flex-col overflow-hidden">
      {/* Zona de gráfico / demo */}
      <div className="aspect-video border-b border-line bg-canvas">
        <ProjectPreview kind={preview} />
      </div>

      <article className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center justify-between gap-2">
          <Badge variant="tag">{category}</Badge>
          {label && <Badge variant="outline">{label}</Badge>}
        </div>

        <h3 className="text-lg leading-snug font-semibold text-ink">
          {href ? (
            <Link
              href={href}
              className="after:absolute after:inset-0 after:content-['']"
            >
              {title}
            </Link>
          ) : (
            title
          )}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {summary}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tecnologías">
          {tech.map((t) => (
            <li key={t}>
              <Badge>{t}</Badge>
            </li>
          ))}
        </ul>

        <p className="mt-5 flex items-center gap-1 border-t border-line pt-4 font-mono text-xs text-muted">
          {href ? (
            <span className="inline-flex items-center gap-1 text-accent">
              Ver caso de estudio
              <ArrowUpRight
                className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </span>
          ) : (
            "caso de estudio en preparación…"
          )}
        </p>
      </article>
    </Card>
  );
}
