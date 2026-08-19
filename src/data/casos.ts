/**
 * Casos anonimizados. Va entre Servicios y Método.
 *
 * Regla del proyecto: sin caso verificable no se fabrica contenido. Si el
 * array queda vacío, la sección no se renderiza, el ítem sale del menú y el
 * sitio es publicable sin casos inventados.
 *
 * Los cinco campos son obligatorios y fijos (decisión 2026-08-17):
 *   sector       — sector y escala, sin nombrar la organización
 *   presion      — qué obligaba a actuar (supervisor, incidente, auditoría)
 *   decision     — la decisión incómoda que había que sostener
 *   intervencion — qué se hizo, en términos de estructura de gobierno
 *   consecuencia — resultado con un dato duro
 *
 * ANONIMIZACIÓN: todos los casos van anonimizados, sin excepción por tipo de
 * vínculo (regla de Mario, 2026-08-19). Anonimizar opera sobre el nombre de
 * la organización, no sobre el rol ni sobre el resultado. Si combinando
 * sector, país, año y evento alguien del sector puede reconstruir quién es,
 * generalizar una dimensión.
 *
 * CASO 01: la dimensión generalizada es el país. "Banca pública de alcance
 * nacional en Argentina" identifica 1:1, y nombrar al supervisor lo cierra
 * del todo. Por eso el supervisor va sin nombre, excepción deliberada a la
 * regla de MAPMarca sección 7 (los supervisores sí se nombran).
 *
 * RIESGO DE NO ACTUAR: el contrato de cinco campos no tiene ranura propia
 * para el quinto elemento obligatorio de MAPVoz sección 10. Lo carga el
 * campo `decision`, junto con la tensión entre alternativas. Los casos que
 * se sumen mantienen esa convención.
 */

export interface Caso {
  sector: string;
  presion: string;
  decision: string;
  intervencion: string;
  consecuencia: string;
  /** Marco normativo dominante. Nombre + versión. */
  marco?: string;
}

export const CASOS: Caso[] = [
  {
    sector:
      'Banca pública de alcance nacional en LATAM. Área de Tecnología de 800 personas.',
    presion:
      'La cartera de pendientes de Tecnología cuadruplicaba el estándar de la industria, con solicitudes que esperaban 10 meses en cola sobre una base de deuda técnica sin plan de reducción. La auditoría lo asentó como observación y el supervisor requirió remediación.',
    decision:
      'Un órgano central con autoridad para rechazar demanda de gerencias con poder político propio y para frenar iniciativas ya comprometidas con el negocio. La alternativa disponible era sumar capacidad de ejecución sobre el mismo circuito de entrada, que reproduce la cola con más costo y sin cambiar quién decide.',
    intervencion:
      'Rediseño de la arquitectura de la función de Tecnología con TOGAF Standard, 10th Edition: capacidades, flujos de decisión y dependencias entre dominios definidos antes de tocar el circuito de demanda. Sobre esa arquitectura se fijaron criterios de priorización con pesos explícitos, matriz RACI y definiciones de proceso con COBIT 2019, y evaluación de riesgo de cada solicitud con ISO 31000:2018.',
    consecuencia:
      '70 % de la demanda reordenada bajo los nuevos criterios, 40 % de reducción de la cartera de pendientes y ciclo de solicitud a decisión de 120 a 30 días, sobre un programa de 2 años.',
    marco: 'TOGAF Standard, 10th Edition',
  },
  {
    sector:
      'Organización agroindustrial de distribución en Argentina, con red de sucursales y depósitos propios.',
    presion:
      'El stock registrado no coincidía con el físico y la información de gestión llegaba tarde e incompleta, sobre una base tecnológica obsoleta que alargaba cada proceso. La red de sucursales decidía con datos que no soportaban la decisión.',
    decision:
      'Rehacer la organización para que la información tuviera integridad, disponibilidad y confidencialidad verificables, y para que la fuerza de ventas operara en el campo, donde está el cultivo. La propuesta alternativa era renovar la tecnología sobre la organización existente: los mismos procesos ejecutados más rápido, con los errores de stock intactos.',
    intervencion:
      'Programa plurianual de rediseño operativo sobre una red de sucursales con operación autónoma y dependencia tecnológica local. La administración se consolidó en una unidad central única, la logística pasó a operar como equipo propio sobre depósitos físicos de distribución, y la fuerza de ventas quedó desacoplada de la sucursal como lugar de trabajo. Los controles sobre la información se tomaron de la familia ISO/IEC 27000 como lineamiento, sin objetivo de certificación.',
    consecuencia:
      '80 % de la operación administrativa y comercial trabajando de forma remota. La presencia física quedó reducida a los depósitos de distribución.',
    marco: 'Familia ISO/IEC 27000 (lineamiento)',
  },
];
