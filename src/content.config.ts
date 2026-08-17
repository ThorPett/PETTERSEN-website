import { defineCollection } from 'astro:content';
// Desde Astro 7, `z` ya no se importa de 'astro:content'.
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

/**
 * Blog «Criterio» — pettersen.com.ar/criterio
 *
 * RESERVADO, NO PUBLICADO EN v1. La colección está declarada y vacía a
 * propósito: fija el contrato del artículo y bloquea el namespace de ruta
 * sin generar páginas. Sin entradas, Astro no emite ninguna ruta bajo
 * /criterio y el sitio devuelve 404, que es la respuesta correcta.
 *
 * Esquema de URL fijado: /criterio/<slug>/ — plano, sin fecha ni categoría
 * en el path. Cambiarlo después cuesta redirects.
 *
 * Reglas de contenido: MAPMarca.md sección 6 (900-1.400 palabras, BLUF,
 * sin sección de introducción ni de conclusiones).
 */
const criterio = defineCollection({
  loader: glob({ base: './src/content/criterio', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    /** Posición del artículo en una línea. Sirve de meta description. */
    description: z.string().max(160),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    /** Marco normativo dominante: 'ISO 31000:2018', 'DORA', 'COBIT 2019'. */
    marco: z.string(),
    /** Dominio: riesgo, continuidad, ciberseguridad, gobierno-ti, ia, privacidad. */
    dominio: z.enum([
      'riesgo',
      'continuidad',
      'ciberseguridad',
      'gobierno-ti',
      'ia',
      'privacidad',
      'transformacion',
    ]),
    /** Fuera del sitemap y de los índices mientras sea true. */
    borrador: z.boolean().default(true),
  }),
});

export const collections = { criterio };
