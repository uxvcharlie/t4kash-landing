import { useRef, useState } from "react";
import { SCREENS } from "../data/screens";
import { Eyebrow, Phone } from "../components/Ui";
import { Reveal } from "../components/Reveal";

export function ProductShowcase() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const screen = SCREENS[active];

  // Navegación con flechas, como pide el patrón de pestañas de ARIA.
  function onKeyDown(e: React.KeyboardEvent) {
    const last = SCREENS.length - 1;
    let next = active;
    if (e.key === "ArrowRight") next = active === last ? 0 : active + 1;
    else if (e.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <section id="producto" className="bg-paper py-14 grid-paper sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[86rem] px-5 sm:px-7 lg:px-10">
        <div className="max-w-3xl">
          <Eyebrow>El producto</Eyebrow>
          <h2 className="mt-6 text-[clamp(2.1rem,5.6vw,3.9rem)]">Así se ve por dentro.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
            Todas las capturas de esta página salen de la aplicación funcionando. Nada está
            maquetado para la ocasión.
          </p>
        </div>

        {/* Escritorio y tablet: pestañas con un solo teléfono */}
        <div className="mt-14 hidden gap-12 md:grid md:grid-cols-[1fr_auto] md:items-center lg:gap-16">
          <div>
            <div
              role="tablist"
              aria-label="Pantallas de T4KASH"
              onKeyDown={onKeyDown}
              className="flex flex-wrap gap-2"
            >
              {SCREENS.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  id={`tab-${s.id}`}
                  ref={(el) => {
                    tabs.current[i] = el;
                  }}
                  aria-selected={i === active}
                  aria-controls="panel-pantalla"
                  tabIndex={i === active ? 0 : -1}
                  onClick={() => setActive(i)}
                  className={`rounded-[var(--radius-pill)] border-2 px-4 py-2 text-[0.76rem] font-semibold tracking-[0.1em] uppercase transition-colors duration-200 ${
                    i === active
                      ? "border-ink bg-ink text-white"
                      : "border-ink/15 text-ink/70 hover:border-ink/50 hover:text-ink"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            <div
              id="panel-pantalla"
              role="tabpanel"
              aria-labelledby={`tab-${screen.id}`}
              className="mt-10 max-w-lg"
            >
              <h3 className="text-[clamp(1.8rem,3.4vw,2.8rem)]">{screen.label}</h3>
              <p className="mt-4 text-lg leading-relaxed text-ink/70">{screen.d}</p>

              <p className="mt-10 font-display text-[0.72rem] tracking-[0.14em] text-ink/60">
                {String(active + 1).padStart(2, "0")} <span className="text-ink/60">/</span>{" "}
                {String(SCREENS.length).padStart(2, "0")}
              </p>

              <div className="mt-4 flex gap-2" aria-hidden="true">
                {SCREENS.map((s, i) => (
                  <span
                    key={s.id}
                    className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                      i === active ? "bg-ink" : "bg-ink/15"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-[17rem] justify-self-center lg:w-[19rem]">
            <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-violet/15 blur-2xl sm:-inset-6" aria-hidden="true" />
            <Phone key={screen.id} src={screen.src} alt={`Pantalla ${screen.label} de T4KASH`} />
          </div>
        </div>

        {/* Móvil: carrusel con scroll horizontal */}
        <div className="mt-12 md:hidden">
          <ul className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4">
            {SCREENS.map((s) => (
              <li key={s.id} className="w-[63vw] max-w-[16rem] shrink-0 snap-center">
                <Phone src={s.src} alt={`Pantalla ${s.label} de T4KASH`} />
                <h3 className="mt-5 text-lg">{s.label}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/65">{s.d}</p>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-sm text-ink/60">Deslizá para ver el resto de las pantallas.</p>
        </div>

        <Reveal>
          <p className="mt-12 text-sm text-ink/60">
            Disponible como aplicación Android (7.0 o superior). Todavía no hay descarga pública: el
            MVP está en evaluación.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
