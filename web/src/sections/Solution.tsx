import { FLOW } from "../data/content";
import { Eyebrow } from "../components/Ui";
import { Reveal } from "../components/Reveal";
import { BlockPattern } from "../components/Pattern";

export function Solution() {
  return (
    <section id="como-funciona" className="relative overflow-hidden bg-ink py-14 text-white sm:py-20 md:pb-[9rem] lg:py-28 lg:pb-[10rem]">
      <div className="pointer-events-none absolute inset-0 grid-paper grid-paper-dark" />
      <BlockPattern
        variant="strip"
        className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[5.5rem] w-full opacity-95 md:block"
      />

      <div className="relative mx-auto max-w-[86rem] px-5 sm:px-7 lg:px-10">
        <div className="max-w-3xl">
          <Eyebrow tone="light">La solución</Eyebrow>
          <h2 className="mt-6 text-[clamp(2.1rem,5.6vw,3.9rem)]">
            Una oportunidad puede empezar con <span className="text-lime">una tarea</span>.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
            Los dos lados se encuentran en un mismo lugar y el trabajo avanza por pasos claros:
            cada uno sabe qué sigue, qué falta y en qué estado está el pago.
          </p>
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/12 bg-white/12 sm:grid-cols-2 lg:grid-cols-4">
          {FLOW.map((step, i) => (
            <Reveal as="li" key={step.n} delay={i * 70} className="group bg-ink">
              <div className="h-full p-7 transition-colors duration-300 group-hover:bg-white/[0.04] lg:p-8">
                <div className="flex items-center gap-3">
                  <span className="font-display text-[0.78rem] tracking-[0.1em] text-lime">{step.n}</span>
                  <span className="h-px flex-1 bg-white/15" />
                </div>
                <h3 className="mt-5 text-2xl">{step.t}</h3>
                <p className="mt-3 leading-relaxed text-white/60">{step.d}</p>
              </div>
            </Reveal>
          ))}

          {/* Relleno para que la última fila no quede desalineada en lg */}
          <li aria-hidden="true" className="hidden bg-ink lg:block" />
        </ol>
      </div>
    </section>
  );
}
