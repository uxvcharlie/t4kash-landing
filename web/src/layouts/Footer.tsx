import { SITE } from "../data/site";
import { Wordmark } from "../components/Logo";

const COLUMNS = [
  {
    title: "Producto",
    links: [
      { label: "Cómo funciona", href: "#como-funciona" },
      { label: "Oportunidades", href: "#producto" },
      { label: "Tareas rápidas", href: "#tareas-rapidas" },
      { label: "Network", href: "#network" },
    ],
  },
  {
    title: "Para vos",
    links: [
      { label: "Para estudiantes", href: "#estudiantes" },
      { label: "Para contratantes", href: "#contratantes" },
      { label: "Seguridad", href: "#seguridad" },
      { label: "Por qué T4KASH", href: "#por-que" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute inset-0 grid-paper grid-paper-dark" />

      <div className="relative mx-auto max-w-[86rem] px-5 py-16 sm:px-7 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Wordmark tone="white" className="h-8 w-auto" />
            <p className="mt-5 max-w-xs text-white/60">{SITE.tagline}.</p>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="font-display text-[0.72rem] tracking-[0.16em] text-white/55">{col.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-white/75 transition-colors hover:text-lime">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <nav aria-label="Enlaces">
            <h2 className="font-display text-[0.72rem] tracking-[0.16em] text-white/55">Proyecto</h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href={SITE.contact} className="text-white/75 transition-colors hover:text-lime">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>T4KASH — Thinking Out Loud. Nicaragua.</p>
          <p>Producto en desarrollo. Los pagos con tarjeta corren en entorno de pruebas.</p>
        </div>
      </div>
    </footer>
  );
}
