// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Sitio 100% estático. Sin integraciones de framework: las secciones son
 * .astro y no envían JavaScript de runtime. El único JS del sitio es
 * /js/site.js (nav mobile + selección de celda en la matriz), progresivo.
 */
export default defineConfig({
  site: 'https://pettersen.com.ar',
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  integrations: [
    sitemap({
      // /criterio todavía no se publica: no hay rutas que excluir, pero el
      // filtro queda declarado para cuando existan borradores.
      filter: (page) => !page.includes('/borrador'),
    }),
  ],
});
