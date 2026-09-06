import type { ReactNode } from "react";

/** Etiqueta en píldora con borde: el rótulo de sección del manual. */
export function Eyebrow({
  children,
  tone = "ink",
  className = "",
}: {
  children: ReactNode;
  tone?: "ink" | "light";
  className?: string;
}) {
  const border = tone === "ink" ? "border-ink/30 text-ink" : "border-white/35 text-white";
  return (
    <span
      className={`inline-flex items-center rounded-[var(--radius-pill)] border-2 ${border} px-4 py-1.5 font-display text-[0.68rem] tracking-[0.16em] ${className}`}
    >
      {children}
    </span>
  );
}

/** Marco de teléfono. Las capturas son 540 × 1200 y no se deforman. */
export function Phone({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative rounded-[2.1rem] bg-ink p-[0.44rem] shadow-[0_28px_60px_-24px_rgba(25,25,25,0.55)] ${className}`}
    >
      <div className="overflow-hidden rounded-[1.75rem] bg-white">
        <img
          src={src}
          alt={alt}
          width={540}
          height={1200}
          decoding="async"
          loading={priority ? "eager" : "lazy"}
          {...(priority ? { fetchPriority: "high" as const } : {})}
          className="block h-auto w-full"
        />
      </div>
    </div>
  );
}

/** Numerito de paso, en el tipo de títulos. */
export function StepNumber({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`font-display text-[0.8rem] tracking-[0.1em] tabular-nums ${className}`}>
      {children}
    </span>
  );
}
