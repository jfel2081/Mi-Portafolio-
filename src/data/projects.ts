export type ProjectPreviewKind = "potential" | "lattice" | "spectrum";

export type Project = {
  slug: string;
  category: string;
  title: string;
  /** El problema científico, en una o dos frases. */
  summary: string;
  tech: string[];
  preview: ProjectPreviewKind;
  status: "placeholder" | "wip" | "published";
  /** Cuando el proyecto sea real, apunta aquí (ruta interna o URL externa). */
  href?: string;
};

/** Datos de ejemplo: reemplázalos por tus proyectos reales. */
export const projects: Project[] = [
  {
    slug: "superficie-energia-potencial",
    category: "Química Teórica",
    title: "Superficies de energía potencial con DFT",
    summary:
      "¿Cómo localizar el estado de transición de una transferencia de protón? Exploración de la superficie de energía potencial y cálculo de barreras de reacción.",
    tech: ["Python", "PySCF", "NumPy"],
    preview: "potential",
    status: "placeholder",
  },
  {
    slug: "dinamica-molecular-lj",
    category: "Física Computacional",
    title: "Dinámica molecular de un fluido de Lennard-Jones",
    summary:
      "¿Cómo emerge la transición líquido–vapor a partir de interacciones entre pares? Integrador velocity-Verlet paralelizado y análisis de g(r).",
    tech: ["C++", "OpenMP", "Python"],
    preview: "lattice",
    status: "placeholder",
  },
  {
    slug: "pipeline-espectros",
    category: "Análisis de Datos",
    title: "Pipeline para espectros IR y Raman",
    summary:
      "Automatizar corrección de línea base, deconvolución de picos y comparación contra espectros calculados, con visualización interactiva en la web.",
    tech: ["Python", "Pandas", "Next.js"],
    preview: "spectrum",
    status: "placeholder",
  },
];
