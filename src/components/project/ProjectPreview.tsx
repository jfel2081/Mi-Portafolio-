import type { ProjectPreviewKind } from "@/data/projects";

/**
 * Gráficos ficticios (SVG) que ocupan el lugar de la demo/figura real.
 * Cuando tengas una imagen o un componente interactivo, reemplaza el
 * <ProjectPreview> en ProjectCard por <Image> o tu propio componente.
 */

const W = 320;
const H = 180;
const f = (n: number) => n.toFixed(1);

/** Potencial de Lennard-Jones: V(r) = 4(r⁻¹² − r⁻⁶) */
function potentialPath() {
  const pts: string[] = [];
  for (let r = 0.97; r <= 2.6; r += 0.02) {
    const v = Math.min(4 * (r ** -12 - r ** -6), 1.4);
    const x = 36 + ((r - 0.97) / 1.63) * 250;
    const y = 82 - v * 52;
    pts.push(`${pts.length ? "L" : "M"}${f(x)} ${f(y)}`);
  }
  return pts.join(" ");
}

/** Espectro: suma de gaussianas (picos) sobre una línea base. */
function spectrumPath(shift = 0, scale = 1) {
  const peaks = [
    { c: 70, a: 0.55, s: 7 },
    { c: 115, a: 1, s: 5 },
    { c: 150, a: 0.4, s: 9 },
    { c: 205, a: 0.8, s: 6 },
    { c: 250, a: 0.5, s: 8 },
  ];
  const pts: string[] = [];
  for (let x = 24; x <= 300; x += 2) {
    const y = peaks.reduce(
      (acc, p) => acc + p.a * Math.exp(-((x - p.c - shift) ** 2) / (2 * p.s ** 2)),
      0,
    );
    pts.push(`${pts.length ? "L" : "M"}${f(x)} ${f(148 - y * 105 * scale)}`);
  }
  return pts.join(" ");
}

/** Red de partículas con un pequeño desorden determinista. */
function latticeNodes() {
  const cols = 9;
  const rows = 4;
  const nodes: { x: number; y: number; hot: boolean }[] = [];
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      const jx = Math.sin(i * 12.9898 + j * 78.233) * 6;
      const jy = Math.cos(i * 39.346 + j * 11.135) * 6;
      nodes.push({
        x: 34 + i * 31 + jx,
        y: 34 + j * 38 + jy,
        hot: (i * 7 + j * 3) % 11 === 0,
      });
    }
  }
  return { nodes, cols, rows };
}

export function ProjectPreview({ kind }: { kind: ProjectPreviewKind }) {
  const labels: Record<ProjectPreviewKind, string> = {
    potential: "Gráfico de ejemplo: curva de energía potencial con un mínimo",
    spectrum: "Gráfico de ejemplo: espectro con cinco picos y un ajuste",
    lattice: "Ilustración de ejemplo: red de partículas conectadas",
  };

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={labels[kind]}
      className="block h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Cuadrícula de fondo */}
      <g className="stroke-line" strokeWidth="1" opacity="0.7">
        {Array.from({ length: 7 }, (_, i) => (
          <line key={`v${i}`} x1={i * 53.3} y1="0" x2={i * 53.3} y2={H} />
        ))}
        {Array.from({ length: 5 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 45} x2={W} y2={i * 45} />
        ))}
      </g>

      {kind === "potential" && (
        <>
          <line x1="36" y1="82" x2="296" y2="82" className="stroke-muted" strokeDasharray="3 4" opacity="0.6" />
          <path d={potentialPath()} fill="none" className="stroke-accent" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="62.4" cy="134" r="4.5" className="fill-accent-2" />
          <circle cx="62.4" cy="134" r="9" className="stroke-accent-2" fill="none" opacity="0.4" />
        </>
      )}

      {kind === "spectrum" && (
        <>
          <path d={spectrumPath(0, 1)} fill="none" className="stroke-accent" strokeWidth="2" strokeLinejoin="round" />
          <path d={spectrumPath(3, 0.92)} fill="none" className="stroke-accent-2" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.85" />
          <line x1="24" y1="148" x2="300" y2="148" className="stroke-line-strong" />
        </>
      )}

      {kind === "lattice" && (() => {
        const { nodes, cols, rows } = latticeNodes();
        return (
          <>
            {nodes.map((n, idx) => {
              const i = idx % cols;
              const j = Math.floor(idx / cols);
              const right = i < cols - 1 ? nodes[idx + 1] : null;
              const down = j < rows - 1 ? nodes[idx + cols] : null;
              return (
                <g key={idx} className="stroke-line-strong" strokeWidth="1">
                  {right && <line x1={f(n.x)} y1={f(n.y)} x2={f(right.x)} y2={f(right.y)} />}
                  {down && <line x1={f(n.x)} y1={f(n.y)} x2={f(down.x)} y2={f(down.y)} />}
                </g>
              );
            })}
            {nodes.map((n, idx) => (
              <circle
                key={idx}
                cx={f(n.x)}
                cy={f(n.y)}
                r={n.hot ? 5 : 3.5}
                className={n.hot ? "fill-accent-2" : "fill-accent"}
                opacity={n.hot ? 1 : 0.85}
              />
            ))}
          </>
        );
      })()}
    </svg>
  );
}
