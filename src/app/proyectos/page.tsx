import type { Metadata } from "next";

import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project/ProjectCard";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Simulaciones, modelos y herramientas de análisis científico.",
};

export default function ProjectsPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="proyectos"
        title="Proyectos"
        description="Simulaciones, modelos y herramientas. Esta página es un cascarón: añade tus proyectos en src/data/projects.ts."
      />
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
