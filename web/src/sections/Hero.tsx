import { Button } from "../components/Button";
import { Eyebrow, Phone } from "../components/Ui";
import { BlockPattern } from "../components/Pattern";
import shotInicio from "../assets/shots/inicio.webp";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute inset-0 grid-paper grid-paper-dark" />
      {/* Franja de patrón: ancla la composición al borde derecho en pantallas grandes */}
      <BlockPattern
        variant="tall"
        className="pointer-events-none absolute top-0 right-0 hidden h-full w-[9rem] opacity-95 lg:block xl:w-[12rem]"
      />

      <div className="relative mx-auto grid max-w-[86rem] items-center gap-14 px-5 pt-28 pb-16 sm:px-7 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-10 lg:pt-36 lg:pb-24 lg:pr-[11rem] xl:pr-[14rem]">
        <div>
          <Eyebrow tone="light" className="reveal is-in">
            Microtrabajos para estudiantes · Nicaragua
          </Eyebrow>

          <h1 className="mt-7 text-[clamp(2.7rem,9vw,5.6rem)]">
            Trabaja a tu ritmo.
            <br />
            Crece a <span className="text-lime">tu manera</span>.
          </h1>

          <p className="mt-7 max-w-xl text-[1.05rem] leading-relaxed text-white/70 sm:text-lg">
            Conectá con microtrabajos que se adaptan a tu tiempo, generá ingresos y ganá experiencia
            sin poner tus estudios en segundo plano.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#producto" variant="lime">
              Explorar oportunidades
            </Button>
            <Button href="#como-funciona" variant="ghost-light">
              Descubrir cómo funciona
            </Button>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/12 bg-white/12">
            {[
              { k: "Remoto, presencial o híbrido", v: "3" },
              { k: "Categorías en el catálogo", v: "24" },
              { k: "Vigencia de una tarea rápida", v: "24 h" },
            ].map((s) => (
              <div key={s.k} className="bg-ink px-4 py-5">
                <dt className="sr-only">{s.k}</dt>
                <dd>
                  <span className="block font-display text-2xl text-lime sm:text-3xl">{s.v}</span>
                  <span className="mt-2 block text-[0.72rem] leading-snug text-white/55">{s.k}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Composición del producto */}
        <div className="relative mx-auto w-full max-w-[19rem] sm:max-w-[21rem] lg:mx-0 lg:ml-auto lg:max-w-[22rem]">
          <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-violet/25 blur-2xl sm:-inset-8" aria-hidden="true" />
          <Phone
            src={shotInicio}
            alt="Pantalla de inicio de T4KASH con una oportunidad de diseño publicada por C$ 450.00"
            priority
          />

          {/* Detalles reales tomados de la propia app */}
          <div className="absolute -top-4 -left-4 hidden rounded-2xl bg-lime px-4 py-3 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.6)] sm:block lg:-left-10">
            <p className="font-display text-[0.68rem] tracking-[0.12em] text-ink/70">Tareas rápidas</p>
            <p className="mt-1 text-sm font-semibold text-ink">Trabajos urgentes cerca de vos</p>
          </div>

          <div className="absolute -right-4 bottom-14 hidden rounded-2xl bg-white px-4 py-3 text-ink shadow-[0_18px_40px_-18px_rgba(0,0,0,0.6)] sm:block lg:-right-8">
            <p className="text-[0.68rem] tracking-[0.12em] text-ink/60 uppercase">Pago protegido</p>
            <p className="mt-1 font-display text-lg">C$ 650.00</p>
            <p className="text-[0.72rem] text-ink/60">Confirmado</p>
          </div>
        </div>
      </div>
    </section>
  );
}
