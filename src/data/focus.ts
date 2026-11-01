import { Atom, ChartColumn, Orbit, type LucideIcon } from "lucide-react";

export type FocusArea = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  /** Ecuación representativa, en LaTeX (se renderiza con KaTeX). */
  tex: string;
  keywords: string[];
};

export const focusAreas: FocusArea[] = [
  {
    id: "quimica-teorica",
    title: "Química Teórica",
    description:
      "Estructura electrónica, mecanismos de reacción y propiedades moleculares a partir de primeros principios.",
    icon: Atom,
    tex: String.raw`\hat{H}\,\Psi = E\,\Psi`,
    keywords: ["DFT", "Hartree–Fock", "Superficies de energía"],
  },
  {
    id: "fisica-computacional",
    title: "Física Computacional",
    description:
      "Simulación de sistemas de muchos cuerpos: dinámica molecular, Monte Carlo y métodos numéricos eficientes.",
    icon: Orbit,
    tex: String.raw`m\,\ddot{\mathbf{r}}_i = -\nabla_i U(\mathbf{r}^N)`,
    keywords: ["Dinámica molecular", "Monte Carlo", "HPC"],
  },
  {
    id: "analisis-de-datos",
    title: "Herramientas de Análisis de Datos",
    description:
      "Pipelines reproducibles y visualización para convertir datos experimentales y simulados en conclusiones.",
    icon: ChartColumn,
    tex: String.raw`\chi^2 = \sum_i \frac{(y_i - f(x_i))^2}{\sigma_i^2}`,
    keywords: ["Ajuste de curvas", "Estadística", "Visualización"],
  },
];
