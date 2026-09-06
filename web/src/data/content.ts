/**
 * Todo el texto de la pagina vive aca. Cada dato concreto sale del producto
 * (capturas y codigo de la rama `Carlos`) o del manual de marca; nada esta
 * inventado ni redondeado hacia arriba.
 */

/* ---------- El problema ---------- */

export const PROBLEM_SIDES = [
  {
    key: "estudiante",
    label: "Estudiante",
    tone: "lime",
    items: [
      { t: "Tiempo limitado", d: "El horario de clases cambia cada semestre y casi nunca encaja con una jornada fija." },
      { t: "Necesidad de ingresos", d: "Transporte, alojamiento, comida y materiales no esperan a que termine la carrera." },
      { t: "Falta de experiencia", d: "Casi toda vacante pide experiencia previa que todavía no hay dónde conseguir." },
    ],
  },
  {
    key: "contratante",
    label: "Contratante",
    tone: "violet",
    items: [
      { t: "Necesidad inmediata", d: "Lo que hay que resolver es concreto y es para hoy, no para un proceso de contratación." },
      { t: "Poco tiempo", d: "Publicar, filtrar y entrevistar cuesta más que la tarea que se quiere delegar." },
      { t: "Necesidad de confianza", d: "Sin un perfil, un historial ni un respaldo, todo queda en la palabra de alguien." },
    ],
  },
] as const;

/* ---------- La solucion: el recorrido de una oportunidad ---------- */

export const FLOW = [
  { n: "01", t: "Publicar", d: "Alguien describe la tarea, define el presupuesto y las fechas." },
  { n: "02", t: "Explorar", d: "Los estudiantes filtran por categoría, habilidad, modalidad o cercanía." },
  { n: "03", t: "Postularse", d: "Se envía una propuesta con el monto que se considera justo." },
  { n: "04", t: "Aceptar", d: "El contratante elige una propuesta y el trabajo queda formado." },
  { n: "05", t: "Coordinar", d: "El chat del trabajo mantiene todo en un solo lugar." },
  { n: "06", t: "Entregar", d: "Se registra el avance o resultado, con archivos si hacen falta." },
  { n: "07", t: "Cerrar", d: "Se revisa, se aprueba y se libera el pago. Ambas partes se califican." },
] as const;

/* ---------- Para estudiantes ---------- */

export const STUDENT_FEATURES = [
  { t: "Microtrabajos", d: "Oportunidades remotas, presenciales o híbridas, con presupuesto y fechas a la vista antes de postularte." },
  { t: "Tareas rápidas", d: "Trabajos urgentes cerca de ti, con radio de búsqueda configurable y vigencia de 24 horas." },
  { t: "Mapa", d: "Ver en el mapa qué hay disponible alrededor tuyo antes de moverte." },
  { t: "Postulaciones", d: "Proponés tu propio monto; no aceptás una tarifa impuesta." },
  { t: "Perfil y portafolio", d: "Carrera, habilidades y trabajos hechos, en un perfil público consultable." },
  { t: "Reputación", d: "Calificación mutua de 1 a 5 al cerrar cada trabajo. Lo que hacés queda como respaldo." },
  { t: "Wallet", d: "Movimientos, fondos retenidos y liberaciones de cada trabajo en un solo lugar." },
  { t: "Sin exclusividad", d: "Tomás lo que te encaja y cuando te encaja. No hay turno ni cuota mínima." },
] as const;

/* ---------- Para contratantes ---------- */

export const EMPLOYER_STEPS = [
  { t: "Publicar la oportunidad", d: "Título, descripción, categoría y habilidades que hacen falta." },
  { t: "Definir presupuesto", d: "Vos ponés el monto de referencia y la moneda es el córdoba." },
  { t: "Poner fechas", d: "Hasta cuándo se puede postular y para cuándo se necesita la entrega." },
  { t: "Revisar postulaciones", d: "Cada propuesta llega con un monto y un perfil consultable detrás." },
  { t: "Elegir", d: "Aceptás la propuesta que te convence y el trabajo queda formado." },
  { t: "Coordinar", d: "Chat vinculado al trabajo, con archivos adjuntos privados." },
  { t: "Recibir la entrega", d: "Revisás, pedís correcciones si hace falta y aprobás." },
] as const;

/* ---------- Tareas rapidas ---------- */

export const QUICK_FACTS = [
  { k: "Radio configurable", v: "Ajustás hasta dónde querés que llegue la búsqueda." },
  { k: "Vigencia de 24 horas", v: "Una tarea rápida se vence sola al día siguiente." },
  { k: "Tope de C$ 1,000", v: "Es el presupuesto máximo de una tarea rápida." },
  { k: "Efectivo con doble confirmación", v: "El pago en efectivo lo confirman las dos partes." },
] as const;

/* ---------- Confianza ---------- */

export const TRUST = [
  { t: "Verificación de correo", d: "La cuenta no queda activa hasta confirmar el correo." },
  { t: "Inicio de sesión en dos pasos", d: "Un código temporal además de la contraseña, con límite de intentos." },
  { t: "Verificación de identidad", d: "Proceso de KYC disponible dentro de la app para quien lo necesita." },
  { t: "Perfil consultable", d: "Carrera, habilidades, actividad y trabajos anteriores, a la vista." },
  { t: "Reputación mutua", d: "Al cerrar un trabajo se califican las dos partes, de 1 a 5." },
  { t: "Pago protegido", d: "El dinero queda retenido y se libera cuando la entrega se aprueba." },
  { t: "Archivos privados", d: "Los adjuntos de un trabajo solo los ven quienes participan en él." },
  { t: "Reportes y moderación", d: "Se puede reportar y bloquear; hay revisión y registro de auditoría." },
] as const;

export const TRUST_NOTE =
  "Los pagos con tarjeta corren hoy en el entorno de pruebas de Pagadito: el flujo completo funciona, pero todavía no mueve dinero real. Las notificaciones push están en integración en una rama aparte.";

/* ---------- Comision ---------- */

export const FEE = {
  agreed: "C$ 1,000.00",
  clientFee: "C$ 100.00",
  clientTotal: "C$ 1,100.00",
  studentFee: "C$ 50.00",
  studentGets: "C$ 950.00",
} as const;

/* ---------- Network ---------- */

export const NETWORK = [
  { t: "Publicaciones", d: "Compartís lo que estás haciendo, aprendiendo o buscando." },
  { t: "Comentarios y respuestas", d: "La conversación pasa dentro de la plataforma, no en otro lado." },
  { t: "Reacciones y guardados", d: "Reaccionás a lo que te interesa y guardás lo que querés retomar." },
  { t: "Conexiones", d: "El perfil de alguien con quien trabajaste queda a un toque." },
  { t: "Bloqueo", d: "Podés cortar el contacto con una cuenta cuando lo necesitás." },
] as const;

/* ---------- Recorrido completo ---------- */

export const JOURNEY = [
  { t: "Descubrir", d: "Una oportunidad que encaja con tu horario y tus habilidades." },
  { t: "Postularte", d: "Con tu propia propuesta económica." },
  { t: "Ser aceptado", d: "El trabajo queda formado y el pago protegido, confirmado." },
  { t: "Trabajar", d: "Coordinando por el chat del trabajo." },
  { t: "Entregar", d: "Con archivos, correcciones y aprobación." },
  { t: "Cobrar", d: "El pago se libera a tu wallet." },
  { t: "Construir reputación", d: "La calificación queda en tu perfil." },
  { t: "Volver a empezar", d: "Con un respaldo que antes no tenías." },
] as const;

/* ---------- Tecnologia ---------- */

export const STACK = [
  { g: "Móvil", items: ["Kotlin", "Jetpack Compose", "Navigation Compose", "Retrofit", "OkHttp", "Gson", "MapLibre"] },
  { g: "Backend", items: ["Java 21", "Spring Boot", "Spring Data JPA", "REST", "Bean Validation", "Swagger / OpenAPI"] },
  { g: "Datos", items: ["PostgreSQL", "Supabase", "Supabase Storage"] },
  { g: "Despliegue", items: ["Render", "Docker", "Maven", "Gradle"] },
  { g: "Seguridad", items: ["BCrypt", "Tokens", "Hash SHA-256", "Autorización por rol", "Webhooks firmados", "RLS"] },
] as const;

export const SERVICES = [
  { t: "Supabase Storage", d: "Archivos privados de cada trabajo." },
  { t: "Brevo", d: "Correos de verificación y códigos." },
  { t: "Didit", d: "Verificación de identidad (KYC)." },
  { t: "Pagadito", d: "Pagos con tarjeta, hoy en entorno de pruebas." },
  { t: "MapLibre / OpenFreeMap", d: "Mapa de tareas rápidas." },
  { t: "Render", d: "La API en producción." },
] as const;

/* ---------- Comparacion ---------- */

export const COMPARISON = {
  traditional: [
    "Jornada fija que compite con las clases",
    "Proceso de contratación largo",
    "Pide experiencia previa para dar experiencia",
    "El pago llega a fin de mes",
    "Todo se juega en una sola vacante",
  ],
  t4kash: [
    "Cada tarea es una decisión independiente",
    "De la publicación a la propuesta, el mismo día",
    "La experiencia se construye tarea por tarea",
    "El pago se libera al aprobar la entrega",
    "Perfil, historial y reputación que se acumulan",
  ],
} as const;
