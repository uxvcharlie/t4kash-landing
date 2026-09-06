import { JOURNEY } from "../data/content";
import { Eyebrow } from "../components/Ui";
import { Reveal } from "../components/Reveal";

export function Journey() {
  return (
    <section id="recorrido" className="bg-paper py-14 grid-paper sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[86rem] px-5 sm:px-7 lg:px-10">
        <div className="max-w-3xl">
          <Eyebrow>La experiencia completa</Eyebrow>
          <h2 className="mt-6 text-[clamp(2.1rem,5.6vw,3.9rem)]">
            De una tarea suelta a un historial que te respalda.
          </h2>
        </div>

        <ol className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {JOURNEY.map((j, i) => (
            <Reveal as="li" key={j.t} delay={i * 60}>
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ink font-display text-[0.72rem] text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-[3px] flex-1 bg-ink/12" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-xl">{j.t}</h3>
              <p className="mt-2 leading-relaxed text-ink/65">{j.d}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
