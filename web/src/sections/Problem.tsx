import { PROBLEM_SIDES } from "../data/content";
import { Eyebrow } from "../components/Ui";
import { Reveal } from "../components/Reveal";

const TONES = {
  lime: { panel: "bg-lime text-ink", rule: "border-ink/15", num: "text-ink/60" },
  violet: { panel: "bg-violet text-white", rule: "border-white/20", num: "text-white/55" },
} as const;

export function Problem() {
  return (
    <section id="problema" className="bg-paper py-14 grid-paper sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[86rem] px-5 sm:px-7 lg:px-10">
        <div className="max-w-3xl">
          <Eyebrow>El problema</Eyebrow>
          <h2 className="mt-6 text-[clamp(2.1rem,5.6vw,3.9rem)]">
            Tu tiempo vale más que un horario rígido.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
            Los estudiantes necesitan ingresos y experiencia, pero un empleo formal casi nunca se
            acomoda a un horario académico que cambia cada semestre. Del otro lado, personas y
            negocios necesitan resolver algo puntual y terminan buscándolo por canales informales,
            sin perfil, sin historial y sin respaldo.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {PROBLEM_SIDES.map((side, i) => {
            const tone = TONES[side.tone];
            return (
              <Reveal key={side.key} delay={i * 120}>
                <div className={`chamfer h-full p-8 sm:p-10 ${tone.panel}`}>
                  <p className="font-display text-[0.72rem] tracking-[0.18em] opacity-60">
                    {side.label}
                  </p>
                  <ul className="mt-7 space-y-6">
                    {side.items.map((item, n) => (
                      <li
                        key={item.t}
                        className={`border-t pt-6 ${tone.rule} first:border-t-0 first:pt-0`}
                      >
                        <div className="flex items-baseline gap-4">
                          <span className={`font-display text-sm ${tone.num}`}>
                            {String(n + 1).padStart(2, "0")}
                          </span>
                          <div>
                            <h3 className="text-xl sm:text-2xl">{item.t}</h3>
                            <p className="mt-2 leading-relaxed opacity-80">{item.d}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
