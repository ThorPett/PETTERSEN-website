/**
 * Publicaciones — LinkedIn y artículos del blog de IBEE firmados por Mario
 * como autor nominal (habilitado por MAPMarca sección 5 en ese caso).
 *
 * VACÍO A PROPÓSITO. Las tres publicaciones del template eran de muestra:
 * títulos, marcos y minutos de lectura inventados, todas enlazando al perfil
 * de LinkedIn. Publicar eso sería atribuirle a Mario artículos que no
 * escribió. Mientras el array esté vacío, la sección no se renderiza.
 *
 * Cuando exista el blog propio (/criterio), sus entradas se suman acá desde
 * la colección de contenido, no a mano.
 */

export interface Publicacion {
  /** Dominio o marco: 'Riesgo de modelo IA', 'Continuidad', 'Gobierno'. */
  tag: string;
  title: string;
  /** Posición del artículo en una o dos líneas. */
  excerpt: string;
  /** 'ISO 42001 · 9 min' — marco dominante y tiempo de lectura real. */
  meta: string;
  /** URL real y verificada. Nunca el perfil genérico. */
  url: string;
}

export const PUBLICACIONES: Publicacion[] = [];
