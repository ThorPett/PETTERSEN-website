/**
 * Intervenciones — casos anonimizados. Va entre Servicios y Método.
 *
 * VACÍO A PROPÓSITO. Regla del proyecto: sin caso verificable no se fabrica
 * contenido. Mientras el array esté vacío, la sección no se renderiza, el
 * ítem sale del menú y el sitio es publicable sin casos inventados. Se
 * completa con 3 a 5 entradas y aparece sola.
 *
 * Los cinco campos son obligatorios y fijos (decisión 2026-08-17):
 *   sector     — sector y escala, sin nombrar la organización
 *   presion    — qué obligaba a actuar (regulador, incidente, auditoría)
 *   decision   — la decisión incómoda que había que sostener
 *   intervencion — qué se hizo, en términos de estructura de gobierno
 *   consecuencia — resultado con un dato duro
 *
 * ANONIMIZACIÓN: combinando sector, país, año y evento, un caso muy
 * específico identifica igual a la institución. Si alguien del sector puede
 * reconstruir quién es, generalizar una dimensión.
 */

export interface Intervencion {
  sector: string;
  presion: string;
  decision: string;
  intervencion: string;
  consecuencia: string;
  /** Marco normativo dominante. Nombre + versión. */
  marco?: string;
}

export const INTERVENCIONES: Intervencion[] = [];
