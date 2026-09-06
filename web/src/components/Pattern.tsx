/**
 * Los dos patrones del manual (página "Patrones y texturas").
 *
 *  · GridTexture  — la "textura de cuadrícula": papel milimetrado.
 *  · MazePattern  — los codos redondeados tono sobre tono que van detrás del isotipo.
 *  · BlockPattern — la composición modular de cuartos de círculo, cápsulas y
 *                   triángulos en los colores de marca.
 */

const S = 100; // lado de la celda del patrón modular

type Kind =
  | "square"
  | "circle"
  | "quarter-tl"
  | "quarter-tr"
  | "quarter-bl"
  | "quarter-br"
  | "tri-tl"
  | "tri-tr"
  | "tri-bl"
  | "tri-br"
  | "half-b"
  | "half-t"
  | "capsule-v"
  | "capsule-h";

type Cell = { c: number; r: number; k: Kind; f: string; w?: number; h?: number };

function shape({ c, r, k, f, w = 1, h = 1 }: Cell, i: number) {
  const x = c * S;
  const y = r * S;
  const W = w * S;
  const H = h * S;
  const common = { fill: f, key: i };

  switch (k) {
    case "square":
      return <rect x={x} y={y} width={W} height={H} {...common} />;
    case "circle":
      return <circle cx={x + W / 2} cy={y + H / 2} r={Math.min(W, H) / 2} {...common} />;
    case "quarter-tl":
      return <path d={`M${x},${y} L${x + W},${y} A${W},${H} 0 0,1 ${x},${y + H} Z`} {...common} />;
    case "quarter-tr":
      return <path d={`M${x + W},${y} L${x + W},${y + H} A${W},${H} 0 0,1 ${x},${y} Z`} {...common} />;
    case "quarter-bl":
      return <path d={`M${x},${y + H} L${x},${y} A${W},${H} 0 0,1 ${x + W},${y + H} Z`} {...common} />;
    case "quarter-br":
      return <path d={`M${x + W},${y + H} L${x},${y + H} A${W},${H} 0 0,1 ${x + W},${y} Z`} {...common} />;
    case "tri-tl":
      return <path d={`M${x},${y} L${x + W},${y} L${x},${y + H} Z`} {...common} />;
    case "tri-tr":
      return <path d={`M${x + W},${y} L${x + W},${y + H} L${x},${y} Z`} {...common} />;
    case "tri-bl":
      return <path d={`M${x},${y + H} L${x},${y} L${x + W},${y + H} Z`} {...common} />;
    case "tri-br":
      return <path d={`M${x + W},${y + H} L${x},${y + H} L${x + W},${y} Z`} {...common} />;
    case "half-b":
      return <path d={`M${x},${y} A${W / 2},${H} 0 0,0 ${x + W},${y} Z`} {...common} />;
    case "half-t":
      return <path d={`M${x},${y + H} A${W / 2},${H} 0 0,1 ${x + W},${y + H} Z`} {...common} />;
    case "capsule-v":
      return <rect x={x} y={y} width={W} height={H} rx={W / 2} {...common} />;
    case "capsule-h":
      return <rect x={x} y={y} width={W} height={H} rx={H / 2} {...common} />;
  }
}

const LIME = "#c1ff72";
const VIOLET = "#5749fd";
const BLUE = "#0a74ff";

/** Panel vertical: 4 columnas × 8 filas. */
const TALL: Cell[] = [
  { c: 0, r: 0, k: "quarter-br", f: VIOLET },
  { c: 1, r: 0, k: "tri-bl", f: BLUE },
  { c: 2, r: 0, k: "capsule-v", f: LIME, h: 3 },
  { c: 3, r: 0, k: "tri-tr", f: VIOLET },
  { c: 0, r: 1, k: "square", f: LIME },
  { c: 1, r: 1, k: "quarter-tl", f: VIOLET },
  { c: 3, r: 1, k: "circle", f: BLUE },
  { c: 0, r: 2, k: "tri-tr", f: BLUE },
  { c: 1, r: 2, k: "half-b", f: LIME },
  { c: 3, r: 2, k: "quarter-bl", f: VIOLET },
  { c: 0, r: 3, k: "capsule-h", f: VIOLET, w: 2 },
  { c: 2, r: 3, k: "tri-br", f: BLUE },
  { c: 3, r: 3, k: "square", f: LIME },
  { c: 0, r: 4, k: "circle", f: LIME },
  { c: 1, r: 4, k: "quarter-tr", f: BLUE },
  { c: 2, r: 4, k: "quarter-bl", f: VIOLET },
  { c: 3, r: 4, k: "tri-tl", f: LIME },
  { c: 0, r: 5, k: "tri-bl", f: VIOLET },
  { c: 1, r: 5, k: "capsule-v", f: BLUE, h: 2 },
  { c: 2, r: 5, k: "square", f: LIME },
  { c: 3, r: 5, k: "quarter-br", f: VIOLET },
  { c: 0, r: 6, k: "half-t", f: LIME },
  { c: 2, r: 6, k: "circle", f: VIOLET },
  { c: 3, r: 6, k: "tri-tr", f: BLUE },
  { c: 0, r: 7, k: "quarter-tr", f: BLUE },
  { c: 1, r: 7, k: "tri-tl", f: LIME },
  { c: 2, r: 7, k: "capsule-h", f: VIOLET, w: 2 },
];

/** Franja horizontal: 8 columnas × 2 filas. */
const WIDE: Cell[] = [
  { c: 0, r: 0, k: "quarter-br", f: VIOLET },
  { c: 1, r: 0, k: "tri-bl", f: LIME },
  { c: 2, r: 0, k: "capsule-h", f: BLUE, w: 2 },
  { c: 4, r: 0, k: "circle", f: LIME },
  { c: 5, r: 0, k: "tri-tr", f: VIOLET },
  { c: 6, r: 0, k: "square", f: BLUE },
  { c: 7, r: 0, k: "quarter-bl", f: LIME },
  { c: 0, r: 1, k: "square", f: BLUE },
  { c: 1, r: 1, k: "quarter-tl", f: VIOLET },
  { c: 2, r: 1, k: "tri-br", f: LIME },
  { c: 3, r: 1, k: "circle", f: VIOLET },
  { c: 4, r: 1, k: "quarter-tr", f: BLUE },
  { c: 5, r: 1, k: "half-t", f: LIME },
  { c: 6, r: 1, k: "tri-bl", f: VIOLET },
  { c: 7, r: 1, k: "capsule-v", f: BLUE },
];


/** Franja de una sola fila: 16 columnas × 1. Para bordes horizontales. */
const STRIP: Cell[] = [
  { c: 0, r: 0, k: "quarter-br", f: VIOLET },
  { c: 1, r: 0, k: "tri-bl", f: LIME },
  { c: 2, r: 0, k: "half-b", f: BLUE },
  { c: 3, r: 0, k: "square", f: VIOLET },
  { c: 4, r: 0, k: "circle", f: LIME },
  { c: 5, r: 0, k: "tri-tr", f: BLUE },
  { c: 6, r: 0, k: "capsule-h", f: VIOLET, w: 2 },
  { c: 8, r: 0, k: "quarter-tl", f: LIME },
  { c: 9, r: 0, k: "tri-br", f: VIOLET },
  { c: 10, r: 0, k: "half-t", f: BLUE },
  { c: 11, r: 0, k: "circle", f: VIOLET },
  { c: 12, r: 0, k: "quarter-bl", f: LIME },
  { c: 13, r: 0, k: "square", f: BLUE },
  { c: 14, r: 0, k: "tri-tl", f: VIOLET },
  { c: 15, r: 0, k: "quarter-tr", f: LIME },
];

export function BlockPattern({
  variant = "tall",
  className = "",
}: {
  variant?: "tall" | "wide" | "strip";
  className?: string;
}) {
  const cells = variant === "tall" ? TALL : variant === "wide" ? WIDE : STRIP;
  const cols = variant === "tall" ? 4 : variant === "wide" ? 8 : 16;
  const rows = variant === "wide" ? 2 : variant === "tall" ? 8 : 1;

  return (
    <svg
      viewBox={`0 0 ${cols * S} ${rows * S}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <rect width={cols * S} height={rows * S} fill="#191919" />
      {cells.map(shape)}
    </svg>
  );
}

/** Codos redondeados tono sobre tono: la textura que va detrás del isotipo. */
export function MazePattern({
  color = "#ffffff",
  opacity = 0.09,
  scale = 0.5,
  className = "",
}: {
  color?: string;
  opacity?: number;
  scale?: number;
  className?: string;
}) {
  const id = `maze-${color.replace("#", "")}-${scale}`;
  const t = 120 * scale;
  return (
    <svg aria-hidden="true" focusable="false" className={className}>
      <defs>
        <pattern id={id} width={t} height={t} patternUnits="userSpaceOnUse">
          <g
            transform={`scale(${scale})`}
            fill="none"
            stroke={color}
            strokeWidth={18}
            strokeLinecap="round"
            opacity={opacity}
          >
            <path d="M30,0 A30,30 0 0,0 60,30" />
            <path d="M90,60 A30,30 0 0,0 60,30" />
            <path d="M30,120 A30,30 0 0,0 0,90" />
            <path d="M90,60 A30,30 0 0,1 120,90" />
          </g>
          <g transform={`scale(${scale})`} fill={color} opacity={opacity}>
            <circle cx="97" cy="22" r="9" />
            <circle cx="22" cy="97" r="9" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
