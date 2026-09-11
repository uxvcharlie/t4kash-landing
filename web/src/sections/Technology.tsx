import { STACK, SERVICES } from "../data/content";
import { Eyebrow } from "../components/Ui";
import { Reveal } from "../components/Reveal";

const ARCHITECTURE = [
  { t: "Aplicación Android", d: "Kotlin y Jetpack Compose" },
  { t: "API REST", d: "Un solo contrato para todo el producto" },
  { t: "Spring Boot", d: "Java 21, validación y autorización por rol" },
  { t: "PostgreSQL en Supabase", d: "Con archivos privados en Storage" },
];

export function Technology() {
  return (
    <section id="tecnologia" className="bg-paper py-14 grid-paper sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[86rem] px-5 sm:px-7 lg:px-10">
        <div className="max-w-3xl">
          <Eyebrow>Tecnología</Eyebrow>
          <h2 className="mt-6 text-[clamp(2.1rem,5.6vw,3.9rem)]">Una plataforma pensada para crecer.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
            T4KASH combina una aplicación móvil, una API, infraestructura cloud y servicios
            especializados para crear una experiencia segura y trazable.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Arquitectura simplificada */}
          <Reveal>
            <ol className="chamfer h-full bg-ink p-8 text-white sm:p-10">
              <li className="font-display text-[0.72rem] tracking-[0.16em] text-white/55">
                Arquitectura
              </li>
              {ARCHITECTURE.map((a, i) => (
                <li key={a.t} className="mt-6 first:mt-8">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-[0.72rem] text-lime">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-xl">{a.t}</h3>
                      <p className="mt-1 text-white/60">{a.d}</p>
                    </div>
                  </div>
                  {i < ARCHITECTURE.length - 1 && (
                    <span
                      className="mt-6 ml-[0.55rem] block h-6 w-px bg-white/25"
                      aria-hidden="true"
                    />
                  )}
                </li>
              ))}
            </ol>
          </Reveal>

          <div className="flex flex-col gap-5">
            <Reveal delay={100}>
              <div className="rounded-3xl border-2 border-ink/12 p-8 sm:p-10">
                <h3 className="font-display text-[0.72rem] tracking-[0.16em] text-ink/60">
                  Servicios conectados
                </h3>
                <dl className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                  {SERVICES.map((s) => (
                    <div key={s.t}>
                      <dt className="font-semibold">{s.t}</dt>
                      <dd className="mt-0.5 text-sm text-ink/60">{s.d}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="rounded-3xl border-2 border-ink/12 p-8 sm:p-10">
                <h3 className="font-display text-[0.72rem] tracking-[0.16em] text-ink/60">
                  Stack
                </h3>
                <div className="mt-6 space-y-5">
                  {STACK.map((group) => (
                    <div key={group.g} className="sm:flex sm:items-baseline sm:gap-6">
                      <p className="w-28 shrink-0 text-sm font-semibold text-ink/70">{group.g}</p>
                      <ul className="mt-2 flex flex-wrap gap-2 sm:mt-0">
                        {group.items.map((it) => (
                          <li
                            key={it}
                            className="rounded-[var(--radius-pill)] bg-ink/[0.06] px-3 py-1 text-sm text-ink/75"
                          >
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
}
