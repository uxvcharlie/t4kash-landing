import type { ReactNode } from "react";

type Variant = "lime" | "ink" | "violet" | "ghost" | "ghost-light";

const BASE =
  "group inline-flex items-center gap-3 rounded-[var(--radius-pill)] px-6 py-3.5 " +
  "text-[0.82rem] font-semibold uppercase tracking-[0.14em] transition-transform duration-200 " +
  "ease-[var(--ease-out-soft)] hover:-translate-y-0.5 active:translate-y-0";

const VARIANTS: Record<Variant, string> = {
  lime: "bg-lime text-ink hover:bg-[#d3ff97]",
  ink: "bg-ink text-white hover:bg-[#2b2b2b]",
  violet: "bg-violet text-white hover:bg-[#6a5eff]",
  ghost: "border-2 border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-white",
  "ghost-light": "border-2 border-white/30 text-white hover:border-white hover:bg-white hover:text-ink",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  external?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "lime",
  arrow = true,
  external = false,
  className = "",
}: Props) {
  return (
    <a
      href={href}
      className={`${BASE} ${VARIANTS[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
    >
      <span>{children}</span>
      {arrow && (
        // El puntito seguido de la flecha es el gesto de navegación del manual.
        <svg
          viewBox="0 0 26 8"
          aria-hidden="true"
          className="h-2 w-[26px] shrink-0 overflow-visible"
          fill="none"
        >
          <circle cx="3" cy="4" r="3" fill="currentColor" />
          <path
            d="M7 4h15m0 0-3.4-3.4M22 4l-3.4 3.4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 ease-[var(--ease-out-soft)] group-hover:translate-x-1"
          />
        </svg>
      )}
    </a>
  );
}
