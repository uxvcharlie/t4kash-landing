import { QUICK_FACTS } from "../data/content";
import { Eyebrow } from "../components/Ui";
import { Reveal } from "../components/Reveal";
import mapa from "../assets/shots/mapa-crop.webp";

export function QuickTasks() {
  return (
    <section id="tareas-rapidas" className="bg-paper py-14 grid-paper sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[86rem] px-5 sm:px-7 lg:px-10">
        <div className="chamfer relative overflow-hidden bg-ink text-white" style={{ ["--cut" as string]: "56px" }}>
          <div className="grid lg:grid-cols-[0.95fr_1fr]">
            <div className="p-8 sm:p-12 lg:p-14">
              <Eyebrow tone="light">Tareas rápidas</Eyebrow>
              <h2 className="mt-6 text-[clamp(2rem,5vw,3.4rem)]">
                Necesitás ayuda <span className="text-lime">cerca de vos</span>.
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/65">
                Activás el radar y ves qué hay disponible alrededor. Son trabajos urgentes, cortos y
                pensados para resolverse el mismo día.
              </p>

              <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-white/12 sm:grid-cols-2">
                {QUICK_FACTS.map((f, i) => (
                  <Reveal key={f.k} delay={i * 70} className="bg-ink">
                    <div className="h-full p-6">
                      <dt className="font-display text-base text-lime">{f.k}</dt>
                      <dd className="mt-2 text-sm leading-relaxed text-white/60">{f.v}</dd>
                    </div>
                  </Reveal>
                ))}
              </dl>
            </div>

            <div className="relative min-h-[22rem] lg:min-h-full">
              <img
                src={mapa}
                alt="Mapa de tareas rápidas de T4KASH mostrando el radio de búsqueda alrededor de la ubicación del usuario"
                width={720}
                height={1080}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div
                className="absolute inset-0 bg-gradient-to-r from-ink via-ink/25 to-transparent lg:from-ink lg:via-ink/10"
                aria-hidden="true"
              />
              <div className="absolute right-6 bottom-6 rounded-2xl bg-white/95 px-5 py-4 text-ink backdrop-blur">
                <p className="text-[0.68rem] tracking-[0.12em] text-ink/60 uppercase">Radio de búsqueda</p>
                <p className="mt-1 font-display text-xl">Lo ajustás vos</p>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 max-w-3xl text-sm text-ink/60">
          El mapa usa MapLibre con OpenFreeMap. La captura es de la app real; la ubicación que se ve
          es la del dispositivo de prueba.
        </p>
      </div>
    </section>
  );
}
