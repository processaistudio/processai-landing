/**
 * ═══════════════════════════════════════════════════════════════════
 *  EL ÚNICO ARCHIVO QUE HAY QUE TOCAR PARA AÑADIR UNA APP NUEVA.
 * ═══════════════════════════════════════════════════════════════════
 *
 *  Al añadir un objeto a APPS se generan automáticamente:
 *    · su tarjeta en la home y en /apps
 *    · su página propia en /apps/<slug>  (con SEO y schema.org)
 *    · su entrada en el sitemap.xml
 *    · su categoría en los filtros del catálogo
 *    · sus enlaces internos y el structured data del estudio
 *
 *  El orden del array = orden de novedad (la primera, la más reciente).
 */

export type AppStatus = "live" | "beta" | "soon";

export interface AppFeature {
  title: string;
  text: string;
}

export interface AppFaq {
  q: string;
  a: string;
}

export interface App {
  /** Nombre comercial. */
  name: string;
  /** URL interna: /apps/<slug>. Sin acentos ni espacios. */
  slug: string;
  /** Frase corta de marca (se ve grande en su página). */
  tagline: string;
  /** Una línea para la tarjeta. Máx ~140 caracteres. */
  description: string;
  /** 2-3 frases para la cabecera de su página. */
  longDescription: string;
  /** El problema real que resuelve. */
  problem: string;
  features: AppFeature[];
  useCases: string[];
  faq: AppFaq[];
  /** Categorías (se convierten solas en filtros del catálogo). */
  categories: string[];
  /** Marca visual: emoji o 1-2 letras. Se usa si no hay logo. */
  mark: string;
  /** Opcional: ruta a un logo en /public (ej. "/logos/chatflash.svg"). */
  logo?: string;
  /** Opcional: imagen de preview en /public (ej. "/previews/chatflash.png"). */
  image?: string;
  /** Color de acento del producto (el estudio es monocromo; el color lo ponen las apps). */
  accent: string;
  /** Datos verificables que se muestran en la tarjeta y la ficha. */
  facts: string[];
  /** Modelo de precio, en lenguaje humano. */
  price: string;
  platform: string;
  /** URL real de la aplicación. */
  url: string;
  status: AppStatus;
  /** Destacada en la home. */
  featured: boolean;
  /** Muestra la insignia NUEVO. */
  isNew: boolean;
  /** Opcional, ISO (YYYY-MM-DD). Si existe, ordena "Últimos lanzamientos". */
  launchedAt?: string;
  seoTitle: string;
  seoDescription: string;
}

export const APPS: App[] = [
  {
    name: "ChatFlash",
    slug: "chatflash",
    tagline: "Tu chat, convertido en una historia que puedes compartir.",
    description:
      "Convierte un chat exportado de WhatsApp en tu Wrapped: quién lleva la iniciativa, cómo habláis y los premios del chat.",
    longDescription:
      "ChatFlash lee un chat exportado de WhatsApp y lo convierte en un resumen visual que se entiende de un vistazo: quién pone la conversación en marcha, cómo habláis, los premios del chat y las cifras que lo explican. Todo el análisis ocurre dentro de tu navegador, así que el contenido de la conversación no sale de tu dispositivo.",
    problem:
      "Un chat guarda años de relación, pero nadie vuelve a leerlo. Está lleno de patrones —quién escribe primero, a qué hora habláis, quién tarda en contestar— que nunca ves porque nadie se pone a contar mensajes a mano.",
    features: [
      {
        title: "Tu Wrapped Chat",
        text: "Una historia visual con portada, escenas y los premios del chat: rompehielos, CEO del jajaja, director de planes y más.",
      },
      {
        title: "13 rankings que explican cómo se calculan",
        text: "Cada estadística viene con su método al lado. Nada de números mágicos ni juicios sobre nadie: son conteos.",
      },
      {
        title: "Iniciativa y tiempos de respuesta",
        text: "Quién abre las conversaciones, quién las cierra y cuánto se tarda en contestar en los chats de dos.",
      },
      {
        title: "Actividad por mes, día y hora",
        text: "Vuestras horas punta, la evolución mes a mes y una comparativa de los últimos 30 días con los 30 anteriores.",
      },
      {
        title: "Tarjetas 9:16 para compartir",
        text: "Listas para Stories, con la opción de usar alias si prefieres no mostrar los nombres reales.",
      },
      {
        title: "Análisis 100 % en tu dispositivo",
        text: "El archivo se lee y se procesa en tu navegador. No se sube a ningún servidor, ni a analítica, ni a nadie.",
      },
    ],
    useCases: [
      "Ver el resumen del año del grupo de amigos",
      "Descubrir quién lleva la iniciativa en una pareja",
      "Compartir los premios del chat en Stories",
      "Entender la dinámica de un grupo grande",
      "Recuperar el recuerdo de una conversación larga",
    ],
    faq: [
      {
        q: "¿Se sube mi chat a algún servidor?",
        a: "No. El archivo se lee y se analiza dentro de tu navegador. El contenido de la conversación no se envía a nuestros servidores ni a herramientas de analítica.",
      },
      {
        q: "¿Cómo exporto el chat de WhatsApp?",
        a: "Desde WhatsApp, exportando el chat sin archivos multimedia. ChatFlash te enseña el proceso paso a paso según tu móvil.",
      },
      {
        q: "¿Funciona con grupos?",
        a: "Sí. Funciona con chats de dos personas y con grupos. Algunas métricas, como los tiempos entre turnos, tienen más sentido en los chats de dos.",
      },
      {
        q: "¿Qué incluye la versión gratuita?",
        a: "La lectura confirmada del archivo (participantes, mensajes y periodo), una vista previa del Wrapped con una escena real de tu análisis, la participación con tres rankings y una tarjeta para compartir.",
      },
      {
        q: "¿Cuánto cuesta el informe completo?",
        a: "Desde 2,99 € en un pack de 3 análisis de pago único, o 4,99 €/mes en el plan Pro con 15 análisis por periodo. Se desbloquea por chat, para siempre.",
      },
      {
        q: "¿Es una app oficial de WhatsApp?",
        a: "No. ChatFlash es un producto independiente de ProcessAI Studio y no está afiliado a WhatsApp.",
      },
    ],
    categories: ["Social", "IA"],
    mark: "⚡",
    accent: "#7c5cff",
    facts: ["Sin cuenta", "En tu dispositivo", "13 rankings"],
    price: "Gratis · informe completo desde 2,99 €",
    platform: "Web · móvil y escritorio",
    url: "https://chatflash.app",
    status: "live",
    featured: true,
    isNew: true,
    seoTitle: "ChatFlash — Analiza tu chat de WhatsApp y descubre sus estadísticas",
    seoDescription:
      "Importa un chat exportado de WhatsApp y obtén tu Wrapped: quién lleva la iniciativa, tiempos de respuesta, horas punta y los premios del chat. El análisis ocurre en tu dispositivo.",
  },
  {
    name: "CIMS Club",
    slug: "cims-club",
    tagline: "¿Cuántas cimas has coronado?",
    description:
      "Conecta Strava y descubre tu palmarés de montaña: todas las cimas que has coronado en tu vida, sin tener que recordar nada.",
    longDescription:
      "CIMS Club analiza cada track GPS de tu historial de Strava y lo cruza con todas las cimas con nombre de OpenStreetMap para construir tu palmarés de montaña de toda la vida. Senderismo, trail, esquí de travesía o bici: si subiste una cima, aparece.",
    problem:
      "Llevas años subiendo montañas, pero ese historial está enterrado en cientos de actividades de Strava. Nadie sabe cuántas cimas distintas lleva, cuáles ha repetido ni cuáles le faltan para completar una lista.",
    features: [
      {
        title: "Analiza todo tu historial",
        text: "Cada punto GPS de cada actividad se cruza con más de 600.000 cimas con nombre de todo el mundo, sacadas de OpenStreetMap.",
      },
      {
        title: "Tu palmarés de toda la vida",
        text: "Cimas únicas, ascensiones totales, la más alta, la más repetida, desnivel acumulado y altitud media.",
      },
      {
        title: "Listas cerradas que puedes terminar",
        text: "Los 3.000 de Aragón, Andalucía, Catalunya o Canarias, con las cimas que ya has subido marcadas automáticamente.",
      },
      {
        title: "Cualquier deporte, cualquier reloj",
        text: "Funciona con lo que ya usas: Suunto, Garmin, Coros o Apple Watch, mientras sincronice con Strava.",
      },
      {
        title: "Insignias, mapa y progreso anual",
        text: "Un mapa con todo lo que has subido y la evolución año a año de tus ascensiones.",
      },
      {
        title: "Acceso de solo lectura",
        text: "Un clic para conectar Strava. Nunca publicamos, nunca modificamos y nunca compartimos tus datos.",
      },
    ],
    useCases: [
      "Saber cuántas cimas distintas llevas en toda tu vida",
      "Ver qué te falta para completar los 3.000 de tu región",
      "Descubrir tu cima más repetida y tu récord de altitud",
      "Recuperar el palmarés de años de actividades de Strava",
      "Seguir tu progreso de montaña año a año",
    ],
    faq: [
      {
        q: "¿Necesito Strava de pago?",
        a: "No. Funciona con una cuenta gratuita de Strava; solo necesita permiso de lectura de tu historial de actividades.",
      },
      {
        q: "¿Qué relojes y apps funcionan?",
        a: "Cualquiera que sincronice con Strava: Suunto, Garmin, Coros, Apple Watch y el propio móvil.",
      },
      {
        q: "¿Cómo decidís que he coronado una cima?",
        a: "Se cruza cada punto GPS de la actividad con la posición de las cimas con nombre de OpenStreetMap, comprobando que hayas pasado por la cumbre.",
      },
      {
        q: "¿Mis datos están seguros?",
        a: "El acceso a Strava es de solo lectura. CIMS Club nunca publica actividades, nunca las modifica y nunca comparte tus datos con terceros.",
      },
      {
        q: "¿Funciona fuera de Cataluña?",
        a: "Sí. Las cimas provienen de OpenStreetMap a nivel mundial, así que funciona con montañas de cualquier país.",
      },
      {
        q: "¿Cuánto cuesta?",
        a: "Es gratis durante la beta: tus mejores cimas, el total y las listas de 3.000. El plan completo será de 15 €/año en un único pago.",
      },
    ],
    categories: ["Deporte", "Datos"],
    mark: "▲",
    accent: "#18b6a0",
    facts: ["Conecta con Strava", "600.000+ cimas", "Gratis en beta"],
    price: "Gratis en beta · Premium 15 €/año próximamente",
    platform: "Web · conecta con Strava",
    url: "https://cimsclub.com",
    status: "live",
    featured: true,
    isNew: true,
    seoTitle: "CIMS Club — Tu palmarés de cimas a partir de tu historial de Strava",
    seoDescription:
      "Conecta Strava y descubre cuántas cimas has coronado: palmarés completo, repeticiones, listas de 3.000 y mapa. Cruzamos tus tracks GPS con más de 600.000 cimas de OpenStreetMap.",
  },

  /* ──────────────────────────────────────────────────────────────
     PLANTILLA — copia este bloque, quita el comentario y rellénalo
     para publicar una app nueva. No hay que tocar nada más.
     ──────────────────────────────────────────────────────────────
  {
    name: "Nombre de la app",
    slug: "nombre-de-la-app",
    tagline: "Frase corta de marca.",
    description: "Una línea que explique qué hace, para la tarjeta.",
    longDescription: "Dos o tres frases para la cabecera de su página.",
    problem: "El problema real que resuelve.",
    features: [{ title: "Función", text: "Qué hace y por qué importa." }],
    useCases: ["Caso de uso 1", "Caso de uso 2"],
    faq: [{ q: "¿Pregunta?", a: "Respuesta." }],
    categories: ["Productividad"],
    mark: "◆",
    accent: "#4f7cff",
    facts: ["Dato 1", "Dato 2"],
    price: "Gratis",
    platform: "Web",
    url: "https://ejemplo.com",
    status: "live",
    featured: false,
    isNew: true,
    seoTitle: "Nombre — qué hace, en una línea",
    seoDescription: "Descripción de 150-160 caracteres para Google.",
  },
  */
];

/* ═══════════ Utilidades derivadas (no hace falta tocarlas) ═══════════ */

export const LIVE_APPS = APPS.filter((a) => a.status !== "soon");

export const FEATURED_APPS = APPS.filter((a) => a.featured);

/** Categorías únicas, ordenadas por número de apps. Alimentan los filtros. */
export const CATEGORIES = [...new Set(APPS.flatMap((a) => a.categories))].sort(
  (a, b) =>
    APPS.filter((x) => x.categories.includes(b)).length -
    APPS.filter((x) => x.categories.includes(a)).length,
);

/** Últimos lanzamientos: por fecha si existe, si no por orden del array. */
export const LATEST_APPS = [...APPS].sort((a, b) => {
  if (a.launchedAt && b.launchedAt) return b.launchedAt.localeCompare(a.launchedAt);
  if (a.launchedAt) return -1;
  if (b.launchedAt) return 1;
  return 0;
});

export const getApp = (slug: string) => APPS.find((a) => a.slug === slug);

export const STATUS_LABEL: Record<AppStatus, string> = {
  live: "Disponible",
  beta: "Beta",
  soon: "Muy pronto",
};
