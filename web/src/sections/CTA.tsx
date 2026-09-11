import { Button } from "../components/Button";
import { Eyebrow } from "../components/Ui";
import { BlockPattern, MazePattern } from "../components/Pattern";

const BASE = import.meta.env.BASE_URL;

export function CTA() {
  return (
    <section id="empezar" className="bg-paper pt-14 pb-14 grid-paper sm:pt-20 sm:pb-20 lg:pt-28 lg:pb-28">
      <div className="mx-auto max-w-[86rem] px-5 sm:px-7 lg:px-10">
        <div className="chamfer relative overflow-hidden bg-ink text-white" style={{ ["--cut" as string]: "56px" }}>
          {/* El segundo patrón del manual: codos redondeados tono sobre tono. */}
          <MazePattern
            color="#ffffff"
            opacity={0.06}
            scale={0.34}
            className="pointer-events-none absolute inset-0 h-full w-full"
          />
          <BlockPattern
            variant="tall"
            className="pointer-events-none absolute top-0 right-0 hidden h-full w-[9rem] opacity-90 lg:block"
          />

          <div className="relative grid gap-12 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16 lg:p-16 lg:pr-[12rem]">
            <div>
              <Eyebrow tone="light">Empezar</Eyebrow>
              <h2 className="mt-6 max-w-2xl text-[clamp(2.2rem,6vw,4.2rem)]">
                Tu próxima oportunidad puede empezar <span className="text-lime">hoy</span>.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                Trabajá a tu ritmo, ganá experiencia y encontrá oportunidades que se adapten a tu
                vida. Mirá el recorrido completo dentro de la aplicación.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="#producto" variant="lime">
                  Explorar oportunidades
                </Button>
              </div>

              <p className="mt-7 max-w-xl text-sm leading-relaxed text-white/55">
                El MVP está en evaluación y todavía no hay una descarga pública. El video de al lado
                es una grabación de la aplicación funcionando.
              </p>
            </div>

            <div className="mx-auto w-full max-w-[15rem] lg:mx-0">
              <div className="overflow-hidden rounded-[2rem] border-[6px] border-white/15 bg-black">
                <video
                  controls
                  preload="none"
                  playsInline
                  poster={`${BASE}media/demo-poster.webp`}
                  width={520}
                  height={1160}
                  className="block h-auto w-full"
                >
                  <source src={`${BASE}media/demo.mp4`} type="video/mp4" />
                  Tu navegador no puede reproducir este video.
                </video>
              </div>
              <p className="mt-3 text-center text-[0.72rem] tracking-[0.1em] text-white/55 uppercase">
                Demo · 1:26
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
