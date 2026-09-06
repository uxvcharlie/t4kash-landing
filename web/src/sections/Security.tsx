import { TRUST, TRUST_NOTE } from "../data/content";
import { Eyebrow } from "../components/Ui";
import { Reveal } from "../components/Reveal";
import { BlockPattern } from "../components/Pattern";

export function Security() {
  return (
    <section id="seguridad" className="relative overflow-hidden bg-ink py-14 text-white sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 grid-paper grid-paper-dark" />
      <BlockPattern
        variant="tall"
        className="pointer-events-none absolute top-0 right-0 hidden h-full w-[9rem] opacity-95 xl:block"
      />

      <div className="relative mx-auto max-w-[86rem] px-5 sm:px-7 lg:px-10 xl:pr-[12rem]">
        <div className="max-w-3xl">
          <Eyebrow tone="light">Confianza y seguridad</Eyebrow>
          <h2 className="mt-6 text-[clamp(2.1rem,5.6vw,3.9rem)]">
            Construido para que <span className="text-lime">puedas confiar</span>.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
            Nadie puede prometer que nunca va a pasar nada. Lo que sí se puede mostrar es qué hay
            puesto para que el riesgo sea el menor posible, y qué todavía está en camino.
          </p>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/12 bg-white/12 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST.map((t, i) => (
            <Reveal as="li" key={t.t} delay={i * 55} className="bg-ink">
              <div className="h-full p-7">
                <span className="block h-2 w-9 rounded-full bg-lime" aria-hidden="true" />
                <h3 className="mt-5 text-lg">{t.t}</h3>
                <p className="mt-2.5 leading-relaxed text-white/60">{t.d}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <p className="mt-8 max-w-3xl rounded-2xl border-2 border-white/15 px-6 py-5 leading-relaxed text-white/60">
            {TRUST_NOTE}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
