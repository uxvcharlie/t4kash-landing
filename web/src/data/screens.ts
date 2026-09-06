import acceso from "../assets/shots/acceso.webp";
import inicio from "../assets/shots/inicio.webp";
import oportunidad from "../assets/shots/oportunidad.webp";
import publicar from "../assets/shots/publicar.webp";
import trabajos from "../assets/shots/trabajos.webp";
import trabajo from "../assets/shots/trabajo.webp";
import entrega from "../assets/shots/entrega.webp";
import chat from "../assets/shots/chat.webp";
import wallet from "../assets/shots/wallet.webp";
import mapa from "../assets/shots/mapa.webp";
import perfil from "../assets/shots/perfil.webp";

/** Capturas reales de la app, en el orden del recorrido de un usuario. */
export const SCREENS = [
  { id: "inicio", label: "Inicio", src: inicio, d: "Lo disponible, las categorías y el acceso al radar de tareas rápidas." },
  { id: "oportunidad", label: "Oportunidad", src: oportunidad, d: "Descripción, presupuesto, modalidad, fechas y el botón para postularse." },
  { id: "publicar", label: "Publicar", src: publicar, d: "El formulario con el que un contratante describe lo que necesita." },
  { id: "trabajos", label: "Trabajos", src: trabajos, d: "Los acuerdos activos y los ya finalizados, con su avance." },
  { id: "trabajo", label: "Acuerdo", src: trabajo, d: "La ganancia acordada, las fechas y el estado del pago protegido." },
  { id: "entrega", label: "Entrega", src: entrega, d: "Archivos adjuntos y registro del avance o resultado del trabajo." },
  { id: "chat", label: "Chat", src: chat, d: "La conversación queda atada al trabajo, con estados de lectura." },
  { id: "wallet", label: "Wallet", src: wallet, d: "Pagos, fondos retenidos y el detalle de cada liberación." },
  { id: "mapa", label: "Mapa", src: mapa, d: "Tareas rápidas alrededor tuyo, con el radio de búsqueda ajustable." },
  { id: "perfil", label: "Perfil", src: perfil, d: "Carrera, habilidades, actividad y tasa de finalización, en público." },
  { id: "acceso", label: "Acceso", src: acceso, d: "Entrada con correo personal o institucional y verificación en dos pasos." },
] as const;

export type Screen = (typeof SCREENS)[number];
