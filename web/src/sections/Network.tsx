import { NETWORK } from "../data/content";
import { Eyebrow, Phone } from "../components/Ui";
import { Reveal } from "../components/Reveal";
import { BlockPattern } from "../components/Pattern";
import shotNetwork from "../assets/shots/perfil.webp";

export function Network() {
  return (
    <section id="network" className="relative overflow-hidden bg-blue py-14 text-black sm:py-20 lg:py-28">
      <BlockPattern
        variant="strip"
        className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[6rem] w-full opacity-95 lg:block"
      />

      <div className="relative mx-auto max-w-[86rem] px-5 pb-0 sm:px-7 lg:px-10 lg:pb-[7rem]">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.62fr] lg:items-center lg:gap-16">
          <div>
            <Eyebrow>Network</Eyebrow>
            <h2 className="mt-6 max-w-2xl text-[clamp(2rem,4.6vw,3.3rem)]">
              No solo encontrás oportunidades. También construís conexiones.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/85">
              Dentro de T4KASH hay una comunidad estudiantil: se publica, se comenta, se reacciona y
              se guarda lo que sirve. Con quien trabajaste una vez queda a un toque de distancia.
            </p>

            <ul className="mt-11 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {NETWORK.map((n, i) => (
                <Reveal as="li" key={n.t} delay={i * 60}>
                  <h3 className="text-lg">{n.t}</h3>
                  <p className="mt-1.5 leading-relaxed text-black/85">{n.d}</p>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="mx-auto w-[15rem] sm:w-[17rem]">
            <Phone src={shotNetwork} alt="Perfil público de un estudiante dentro de la comunidad de T4KASH" />
          </div>
        </div>
      </div>
    </section>
  );
}
