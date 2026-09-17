import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://processai.studio",
  trailingSlash: "never",
  compressHTML: true,
  integrations: [
    sitemap({
      // El sitemap se regenera en cada build: al anadir una app a apps.ts
      // su pagina /apps/<slug> entra sola.
      changefreq: "weekly",
      lastmod: new Date(),
      serialize(item) {
        if (item.url === "https://processai.studio/") item.priority = 1.0;
        else if (item.url.includes("/apps/")) item.priority = 0.9;
        else if (item.url.endsWith("/apps")) item.priority = 0.9;
        else item.priority = 0.6;
        return item;
      },
    }),
  ],
  build: {
    // CSS en linea: sin peticion extra bloqueante -> mejor LCP.
    inlineStylesheets: "always",
    // Archivos planos (apps.html) en vez de carpetas: Netlify sirve la URL
    // limpia con 200, sin el 301 a la barra final que rompia el canonical.
    format: "file",
  },
});
