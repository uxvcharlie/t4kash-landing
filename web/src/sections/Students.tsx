import { STUDENT_FEATURES, FEE } from "../data/content";
import { Eyebrow, Phone } from "../components/Ui";
import { Reveal } from "../components/Reveal";
import shotTrabajos from "../assets/shots/trabajos.webp";
import shotWallet from "../assets/shots/wallet.webp";

export function Students() {
  return (
    <section id="estudiantes" className="bg-paper py-14 grid-paper sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[86rem] px-5 sm:px-7 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <Eyebrow>Para estudiantes</Eyebrow>
            <h2 className="mt-6 max-w-2xl text-[clamp(2.1rem,5.6vw,3.9rem)]">
              Convertí tus habilidades y tu tiempo en oportunidades.
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-ink/70">
            No necesitás esperar al trabajo perfecto. Podés empezar con una oportunidad que encaje
            con vos, y decidir tarea por tarea.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.35fr_1fr]">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2">
            {STUDENT_FEATURES.map((f, i) => (
              <Reveal key={f.t} delay={i * 55} className="bg-paper">
                <div className="h-full p-7">
                  <h3 className="text-lg">{f.t}</h3>
                  <p className="mt-2.5 leading-relaxed text-ink/65">{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="flex flex-col gap-5">
            <Reveal className="flex-1">
              <div className="flex h-full items-center justify-center gap-4 overflow-hidden rounded-3xl bg-ink px-6 py-10">
                <Phone src={shotTrabajos} alt="Lista de trabajos asignados en T4KASH, con su avance y monto" className="w-[42%] max-w-[10.5rem]" />
                <Phone src={shotWallet} alt="Wallet de T4KASH con el detalle de pagos y movimientos" className="w-[42%] max-w-[10.5rem] translate-y-6" />
              </div>
            </Reveal>

            {/* Comisión: el reparto real que aplica el backend hoy */}
            <Reveal delay={120}>
              <div className="chamfer bg-lime p-7 text-ink sm:p-8">
                <h3 className="text-xl">Sabés exactamente cuánto te queda</h3>
                <p className="mt-2.5 leading-relaxed text-ink/70">
                  La tarifa de servicio se reparte entre las dos partes y se ve antes de confirmar.
                </p>
                <dl className="mt-6 space-y-2.5 text-[0.95rem]">
                  <div className="flex items-baseline justify-between gap-4 border-b border-ink/15 pb-2.5">
                    <dt className="text-ink/70">Precio acordado</dt>
                    <dd className="font-display tabular-nums">{FEE.agreed}</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 border-b border-ink/15 pb-2.5">
                    <dt className="text-ink/70">
                      El cliente paga <span className="opacity-60">· +10 %</span>
                    </dt>
                    <dd className="font-display tabular-nums">{FEE.clientTotal}</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 border-b border-ink/15 pb-2.5">
                    <dt className="text-ink/70">
                      Se te retiene <span className="opacity-60">· 5 %</span>
                    </dt>
                    <dd className="font-display tabular-nums">− {FEE.studentFee}</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 pt-1">
                    <dt className="font-semibold">Recibís</dt>
                    <dd className="font-display text-2xl tabular-nums">{FEE.studentGets}</dd>
                  </div>
                </dl>
                <p className="mt-5 text-sm text-ink/60">
                  En las tareas que se pagan en efectivo no hay tarifa de servicio.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <p className="mt-8 max-w-3xl text-sm text-ink/60">
          T4KASH no garantiza ingresos ni una cantidad de oportunidades: lo que hay disponible
          depende de lo que se publique.
        </p>
      </div>
    </section>
  );
}
