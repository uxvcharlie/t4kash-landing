import wordmarkInk from "../assets/brand/wordmark-ink.webp";
import wordmarkWhite from "../assets/brand/wordmark-white.webp";
import isotipoInk from "../assets/brand/isotipo-ink.webp";
import isotipoWhite from "../assets/brand/isotipo-white.webp";

/**
 * Logotipo e isotipo reales, extraídos del Manual de Identidad Visual.
 * `tone` elige la versión según el fondo sobre el que se apoyan.
 */

type Tone = "ink" | "white";

export function Wordmark({ tone = "ink", className = "" }: { tone?: Tone; className?: string }) {
  return (
    <img
      src={tone === "ink" ? wordmarkInk : wordmarkWhite}
      alt="T4KASH"
      width={640}
      height={237}
      className={className}
      draggable={false}
    />
  );
}

export function Isotipo({ tone = "ink", className = "" }: { tone?: Tone; className?: string }) {
  return (
    <img
      src={tone === "ink" ? isotipoInk : isotipoWhite}
      alt=""
      aria-hidden="true"
      width={256}
      height={407}
      className={className}
      draggable={false}
    />
  );
}
