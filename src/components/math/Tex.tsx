import katex from "katex";
// Habilita \ce{...} y \pu{...} para fórmulas y reacciones químicas.
import "katex/contrib/mhchem";
import { cn } from "@/lib/utils";

type TexProps = {
  /** Expresión LaTeX. Usa String.raw`...` para no duplicar las barras invertidas. */
  tex: string;
  /** true = ecuación en bloque centrada; false = en línea. */
  display?: boolean;
  className?: string;
};

/**
 * Renderiza LaTeX con KaTeX en el servidor (Server Component, sin JS en el cliente).
 * Requiere importar "katex/dist/katex.min.css" una vez en el layout raíz.
 *
 *   <Tex tex={String.raw`E = mc^2`} />
 *   <Tex display tex={String.raw`\ce{2H2 + O2 -> 2H2O}`} />
 */
export function Tex({ tex, display = false, className }: TexProps) {
  const html = katex.renderToString(tex, {
    displayMode: display,
    throwOnError: false, // un error de sintaxis no rompe la página
    output: "htmlAndMathml", // MathML oculto para lectores de pantalla
    strict: "ignore",
  });

  const Tag = display ? "div" : "span";
  return (
    <Tag
      className={cn(className)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
