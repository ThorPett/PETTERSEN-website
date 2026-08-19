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
 *   consecuencia — resultado del rediseño. Las magnitudes van en términos
 *                  relativos: sin porcentajes ni plazos exactos (2026-08-19)
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
  /** Marco dominante, sin edición ni versión: en el sitio la versión
   *  se deprecia sola y obliga a mantenimiento (decisión 2026-08-19). */
  marco?: string;
}

export const CASOS: Caso[] = [
  {
    sector:
      'Banca pública de alcance nacional en LATAM. Área de Tecnología de 800 personas.',
    presion:
      'La cartera de pendientes de Tecnología cuadruplicaba el estándar de la industria, con solicitudes que esperaban meses en cola sobre una base de deuda técnica sin plan de reducción. La auditoría lo asentó como observación y el supervisor requirió remediación.',
    decision:
      'Un órgano central con autoridad para rechazar demanda de gerencias con poder político propio y para frenar iniciativas ya comprometidas con el negocio. La alternativa disponible era sumar capacidad de ejecución sobre el mismo circuito de entrada, que reproduce la cola con más costo y sin cambiar quién decide.',
    intervencion:
      'Rediseño de la arquitectura de la función de Tecnología con TOGAF: capacidades, flujos de decisión y dependencias entre dominios definidos antes de tocar el circuito de demanda. Sobre esa arquitectura se fijaron criterios de priorización con pesos explícitos, matriz RACI y definiciones de proceso con COBIT, y evaluación de riesgo de cada solicitud con ISO 31000.',
    consecuencia:
      'Demanda reordenada bajo los nuevos criterios, cartera de pendientes reducida y ciclo de solicitud a decisión llevado a un tercio, sobre un programa de 2 años.',
    marco: 'TOGAF',
  },
  {
    sector:
      'Organización agroindustrial de distribución en Argentina, con red de sucursales y depósitos propios.',
    presion:
      'El stock registrado no coincidía con el físico y la información de gestión llegaba tarde e incompleta, sobre una base tecnológica obsoleta que alargaba cada proceso. La red de sucursales decidía con datos que no soportaban la decisión.',
    decision:
      'Rehacer la organización para que la información tuviera integridad, disponibilidad y confidencialidad verificables, y para que la fuerza de ventas operara en el campo, donde está el cultivo. La propuesta alternativa era renovar la tecnología sobre la organización existente: los mismos procesos ejecutados más rápido, con los errores de stock intactos.',
    intervencion:
      'Programa plurianual de rediseño operativo sobre una red de sucursales con operación autónoma y dependencia tecnológica local. La administración se consolidó en una unidad central única, la logística quedó bajo dirección central con el stock consolidado en un registro único sobre los depósitos de distribución, y la fuerza de ventas dejó de tener a la sucursal como lugar de trabajo. Los controles sobre la información se tomaron de la familia ISO/IEC 27000 como lineamiento, sin objetivo de certificación.',
    consecuencia:
      'La mayor parte de la operación administrativa y comercial pasó a ejecutarse desde cualquier ubicación, sin depender de la sucursal. La presencia física quedó reducida a los depósitos de distribución.',
    marco: 'ISO/IEC 27000 (lineamiento)',
  },
];
