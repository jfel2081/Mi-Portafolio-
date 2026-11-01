import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project/ProjectCard";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FeaturedProjects() {
  return (
    <Section aria-labelledby="proyectos-titulo" className="pt-4">
      <SectionHeading
        headingId="proyectos-titulo"
        eyebrow="02 / proyectos destacados"
        title="Experimentos en curso"
        description="Cada tarjeta resume el problema científico, las herramientas y deja espacio para una figura o demo."
        link={{ href: "/proyectos", label: "Ver todos" }}
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
