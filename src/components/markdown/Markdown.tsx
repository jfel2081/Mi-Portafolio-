import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
// Química: $\ce{H2O}$ / $$\ce{A + B -> C}$$
import "katex/contrib/mhchem";

import { cn } from "@/lib/utils";

/**
 * Renderizador de Markdown con soporte de LaTeX.
 *
 *   Inline : $E = mc^2$
 *   Bloque : $$ \hat{H}\psi = E\psi $$
 *   Química: $\ce{CH4 + 2O2 -> CO2 + 2H2O}$
 *
 * Pipeline: remark-gfm (tablas, listas de tareas) → remark-math (detecta $...$)
 *           → rehype-katex (convierte a HTML/MathML con KaTeX).
 */
export function Markdown({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <div className={cn("prose prose-lab", className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[[rehypeKatex, { strict: "ignore", throwOnError: false }]]}
        components={{
          // Enlaces externos en pestaña nueva y de forma segura
          a: ({ href, children, ...props }) => {
            const external = href?.startsWith("http");
            return (
              <a
                href={href}
                {...props}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {children}
              </a>
            );
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
