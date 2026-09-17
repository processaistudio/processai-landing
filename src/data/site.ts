/**
 * Identidad y textos del estudio. Cambiar el copy (o el idioma) de toda
 * la web se hace aquí, sin tocar ningún componente.
 */

export const SITE = {
  name: "ProcessAI Studio",
  domain: "https://processai.studio",
  lang: "es",
  locale: "es_ES",
  email: "studiosprocessai@gmail.com",
  founders: "Erik Camps y Marçal Ustrell",
  /** Aparece en <title> cuando no hay uno propio. */
  defaultTitle: "ProcessAI Studio — Creamos apps que la gente usa de verdad",
  defaultDescription:
    "Somos un product studio independiente. Creamos, lanzamos y hacemos crecer nuestras propias aplicaciones de internet. Descubre las apps que hemos construido.",
  ogImage: "/og.png",
} as const;

export const COPY = {
  hero: {
    eyebrow: "Product studio independiente",
    title: "Creamos apps que la gente",
    titleAccent: "usa de verdad",
    subtitle:
      "Descubre las aplicaciones que construimos en ProcessAI Studio. Productos simples, rápidos y con una idea clara detrás.",
    cta: "Ver las apps",
    ctaSecondary: "Sobre el estudio",
  },
  apps: {
    title: "Nuestras apps",
    subtitle: "Cada producto resuelve un problema concreto. Pruébalos, son públicos.",
    all: "Ver todas las apps",
  },
  latest: {
    title: "Últimos lanzamientos",
    subtitle: "Construimos en abierto y publicamos a menudo.",
  },
  about: {
    title: "Sobre ProcessAI Studio",
    lead: "Construimos, lanzamos y hacemos crecer productos de internet.",
    body: "ProcessAI Studio es un estudio de producto independiente. No hacemos proyectos para terceros: creamos nuestras propias aplicaciones, las publicamos y las mejoramos con lo que aprendemos de quien las usa. Productos pequeños, útiles y que se entienden en un minuto.",
    loop: ["Construir", "Lanzar", "Aprender", "Mejorar", "Repetir"],
  },
  footer: {
    tagline: "Creando productos de internet útiles.",
  },
} as const;

export const NAV = [
  { label: "Apps", href: "/apps" },
  { label: "Estudio", href: "/about" },
] as const;
