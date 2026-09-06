import { COMPARISON } from "../data/content";
import { Eyebrow } from "../components/Ui";
import { Reveal } from "../components/Reveal";

export function Comparison() {
  const rows = COMPARISON.traditional.map((t, i) => ({ t, k: COMPARISON.t4kash[i] }));

  return (
    <section id="por-que" className="relative overflow-hidden bg-ink py-14 text-white sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 grid-paper grid-paper-dark" />

      <div className="relative mx-auto max-w-[86rem] px-5 sm:px-7 lg:px-10">
        <div className="max-w-3xl">
          <Eyebrow tone="light">Por qué T4KASH</Eyebrow>
          <h2 className="mt-6 text-[clamp(2.1rem,5.6vw,3.9rem)]">
            No es otro portal de empleo.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
            Un portal de empleo te ordena en una fila para una vacante. T4KASH parte de otra idea:
            que una tarea concreta, hoy, ya es una oportunidad.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-3xl border border-white/12">
          <div className="grid grid-cols-2 border-b border-white/12">
            <p className="p-5 font-display text-[0.72rem] tracking-[0.14em] text-white/55 sm:p-7">
              Trabajo tradicional
            </p>
            <p className="border-l border-white/12 bg-lime p-5 font-display text-[0.72rem] tracking-[0.14em] text-ink sm:p-7">
              Microoportunidades flexibles
            </p>
          </div>

          {rows.map((row, i) => (
            <Reveal key={row.k} delay={i * 60}>
              <div className="grid grid-cols-2 border-b border-white/12 last:border-b-0">
                <p className="p-5 leading-relaxed text-white/55 sm:p-7">{row.t}</p>
                <p className="border-l border-white/12 p-5 leading-relaxed text-white sm:p-7">
                  {row.k}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
