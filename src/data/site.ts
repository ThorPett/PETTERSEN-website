/**
 * Datos del sitio. Fuente única: nav, contacto, agenda, metadatos.
 * Ningún componente hardcodea una URL de contacto o de agenda.
 */
import { CASOS } from './casos';
import { PUBLICACIONES } from './publicaciones';

export const SITE = {
  url: 'https://pettersen.com.ar',
  nombre: 'Mario A. Pettersen',
  marca: 'PETTERSEN',
  titulo: 'PETTERSEN · Gobierno, riesgo y educación ejecutiva',
  descripcion:
    'Mario A. Pettersen asesora directorios y comités de riesgos en LATAM sobre diseño y rediseño de estructuras de gobierno bajo escrutinio regulatorio.',
  locale: 'es_AR',
  lang: 'es',

  /* Contacto y agenda -------------------------------------------------- */
  email: 'contacto@pettersen.com.ar',
  linkedin: 'https://www.linkedin.com/in/mariopettersen',
  ibee: 'https://ibee.education',
  /** Evento principal de Cal. Enlace directo, sin embed. */
  cal: 'https://cal.com/mario-pettersen/conversacion-inicial',
  /** Perfil público de Cal: calendario completo, otras duraciones. */
  calPerfil: 'https://cal.com/mario-pettersen',

} as const;

export type NavItem = { id: string; label: string };

/* ---------------------------------------------------------------------- *
 * Navegación
 *
 * Se computa en build a partir de qué secciones realmente se renderizan.
 * Publicaciones depende de datos que todavía no existen; un ítem de menú
 * que apunta a un ancla inexistente es un enlace roto, así que sale solo
 * hasta que haya contenido.
 * ---------------------------------------------------------------------- */

const HAY_CASOS = CASOS.length > 0;
const HAY_PUBLICACIONES = PUBLICACIONES.length > 0;

/** Header: cinco ítems más el CTA dorado. Siete a 14,5px comprimen el CTA. */
export const NAV: NavItem[] = [
  { id: 'enfoque', label: 'Enfoque' },
  { id: 'autoridad', label: 'Trayectoria' },
  { id: 'servicios', label: 'Servicios' },
  ...(HAY_CASOS ? [{ id: 'casos', label: 'Casos' }] : []),
  { id: 'contacto', label: 'Contacto' },
];

/**
 * Footer: todas las secciones. Método y Publicaciones viven acá y en el
 * scroll, no en el header. El blog (/criterio) se suma cuando se publique.
 */
export const NAV_FOOTER: NavItem[] = [
  { id: 'enfoque', label: 'Enfoque' },
  { id: 'autoridad', label: 'Trayectoria' },
  { id: 'servicios', label: 'Servicios' },
  ...(HAY_CASOS ? [{ id: 'casos', label: 'Casos' }] : []),
  { id: 'matriz', label: 'Método' },
  ...(HAY_PUBLICACIONES ? [{ id: 'publicaciones', label: 'Publicaciones' }] : []),
  { id: 'contacto', label: 'Contacto' },
];
