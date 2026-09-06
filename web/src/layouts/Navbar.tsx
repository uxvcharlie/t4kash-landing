import { useEffect, useState } from "react";
import { NAV } from "../data/site";
import { Wordmark } from "../components/Logo";

export function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Con el menú móvil abierto se bloquea el scroll y Escape lo cierra.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-lime focus:px-5 focus:py-2 focus:font-semibold focus:text-ink"
      >
        Saltar al contenido
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          solid ? "bg-ink/95 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <nav
          aria-label="Principal"
          className="mx-auto flex h-16 max-w-[86rem] items-center justify-between gap-6 px-5 sm:px-7 lg:h-[4.5rem] lg:px-10"
        >
          <a href="#inicio" aria-label="T4KASH, inicio" className="shrink-0">
            <Wordmark tone="white" className="h-[1.35rem] w-auto lg:h-6" />
          </a>

          <ul className="hidden items-center gap-6 xl:flex">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative text-[0.76rem] font-medium tracking-[0.06em] text-white/70 uppercase transition-colors hover:text-white after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-0 after:bg-lime after:transition-[width] after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#empezar"
              className="rounded-[var(--radius-pill)] bg-lime px-4 py-2.5 text-[0.7rem] font-semibold tracking-[0.1em] text-ink uppercase transition-transform duration-200 hover:-translate-y-0.5 max-[359px]:hidden sm:px-5 sm:text-[0.76rem] sm:tracking-[0.12em]"
            >
              Empezar
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-movil"
              className="grid h-10 w-10 place-items-center rounded-full border-2 border-white/25 text-white xl:hidden"
            >
              <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
              <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
                {open ? (
                  <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                ) : (
                  <path d="M2 6h16M2 14h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <div
        id="menu-movil"
        hidden={!open}
        className="fixed inset-0 z-40 bg-ink pt-24 pb-10 grid-paper grid-paper-dark xl:hidden"
      >
        <ul className="mx-auto flex max-w-md flex-col gap-1 px-7">
          {NAV.map((item, i) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-white/10 py-4 font-display text-2xl text-white transition-colors hover:text-lime"
              >
                <span className="mr-3 align-middle text-[0.7rem] text-white/55">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.label}
              </a>
            </li>
          ))}
          <li className="mt-7">
            <a
              href="#empezar"
              onClick={() => setOpen(false)}
              className="block rounded-[var(--radius-pill)] bg-lime px-6 py-4 text-center text-sm font-semibold tracking-[0.14em] text-ink uppercase"
            >
              Empezar
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
