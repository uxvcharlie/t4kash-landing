import { EMPLOYER_STEPS } from "../data/content";
import { Eyebrow, Phone } from "../components/Ui";
import { Reveal } from "../components/Reveal";
import { BlockPattern } from "../components/Pattern";
import shotPublicar from "../assets/shots/publicar.webp";
import shotDetalle from "../assets/shots/oportunidad.webp";

const REASONS = [
  { t: "Rapidez", d: "Publicás hoy y las propuestas empiezan a llegar hoy." },
  { t: "Perfiles", d: "Cada postulación viene con un perfil consultable detrás." },
  { t: "Reputación", d: "Calificaciones de trabajos anteriores, a la vista." },
  { t: "Verificación", d: "Correo confirmado, dos pasos y KYC disponible en la app." },
];

export function Employers() {
  return (
    <section id="contratantes" className="relative overflow-hidden bg-violet py-14 text-white sm:py-20 lg:py-28">
      <BlockPattern
        variant="tall"
        className="pointer-events-none absolute top-0 left-0 hidden h-full w-[10rem] opacity-95 xl:block"
      />

      <div className="relative mx-auto max-w-[86rem] px-5 sm:px-7 lg:px-10 xl:pl-[13rem]">
        <div className="max-w-3xl">
          <Eyebrow tone="light">Para contratantes</Eyebrow>
          <h2 className="mt-6 text-[clamp(2.1rem,5.6vw,3.9rem)]">
            Necesitás resolver algo. Encontrá a la persona adecuada.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
            Describís la tarea, ponés el presupuesto y elegís entre propuestas concretas. Sin
            proceso de selección, sin quedarte con la duda de a quién le estás abriendo la puerta.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:gap-14">
          <ol className="space-y-px overflow-hidden rounded-3xl bg-white/15">
            {EMPLOYER_STEPS.map((s, i) => (
              <Reveal as="li" key={s.t} delay={i * 60} className="bg-violet">
                <div className="flex items-baseline gap-5 px-6 py-5 sm:px-8">
                  <span className="font-display text-[0.78rem] tracking-[0.1em] text-lime">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl">{s.t}</h3>
                    <p className="mt-1.5 leading-relaxed text-white/90">{s.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>

          <div>
            <div className="flex items-start justify-center gap-4">
              <Phone src={shotPublicar} alt="Formulario para publicar una oportunidad en T4KASH" className="w-[46%] max-w-[11rem]" />
              <Phone src={shotDetalle} alt="Detalle de una oportunidad publicada en T4KASH" className="w-[46%] max-w-[11rem] translate-y-8" />
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-7">
              {REASONS.map((r) => (
                <div key={r.t}>
                  <dt className="font-display text-base">{r.t}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-white/90">{r.d}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
