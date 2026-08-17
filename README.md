# PETTERSEN-website

Sitio de `pettersen.com.ar`. Astro estático, desplegado en Cloudflare Workers
con Static Assets. Sin CMS, sin backend, sin JavaScript de framework.

## Correr

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run check    # astro check: 0 errores es la barra
```

## Estructura

| Ruta | Qué |
|---|---|
| `src/data/site.ts` | Nav, correo, Cal, LinkedIn. Fuente única: ningún componente hardcodea una URL. |
| `src/data/intervenciones.ts` | Casos anonimizados. **Vacío**: la sección no se renderiza hasta que haya datos. |
| `src/data/publicaciones.ts` | Publicaciones reales. **Vacío**: ídem. |
| `src/layouts/Base.astro` | Chrome único: head, meta, OG, JSON-LD, header, footer. |
| `src/components/sections/` | Una sección por archivo, con su CSS al lado. |
| `src/content.config.ts` | Colección `criterio` (blog). Declarada y vacía: reserva ruta y esquema. |
| `src/styles/ds/` | Tokens del design system PETTERSEN. **Copiados, no editar acá.** |
| `public/_headers` | CSP, HSTS y caché. |

## Reglas que importan

- **Los tokens de `src/styles/ds/` vienen del design system.** Se actualizan
  copiándolos de la skill `pettersen-design` (`tokens/*.css`, y
  `fonts.selfhosted.css` con las rutas reescritas a `/fonts/`). No se editan
  a mano: el próximo copiado los pisa.
- **Cero JS de terceros.** El único script del sitio es `public/js/site.js`
  (menú mobile y estado del header), y es mejora progresiva: sin él la página
  se lee y se navega entera. Cal.com va por enlace directo, nunca embebido.
  Un embed obligaría a abrir `script-src`, `frame-src` y `connect-src` en
  `_headers`.
- **Nada de contenido inventado.** Casos, cifras y publicaciones entran sólo
  verificados. Por eso los arrays de datos arrancan vacíos y las secciones se
  auto-suprimen en vez de mostrar placeholders.
- **Responsive por media queries, no por JS.** El template de origen decidía
  el layout con `matchMedia`, que en pre-render devuelve siempre desktop.

## Despliegue

```bash
npm run build
npx wrangler deploy
```

Los dominios personalizados no se declaran en `wrangler.jsonc`: se adjuntan
desde el panel (Worker → Settings → Domains & Routes → Add Custom Domain) y
Cloudflare crea el registro DNS.

> Antes de adjuntar el dominio, anotar el contenido real de los registros `A`
> de apex y `www`. Detrás del proxy está la IP de origen de Hostinger, que es
> el failover documentado hasta 2028. Si se pisa el registro sin anotarla, se
> pierde.

## Contexto

Decisiones, textos aprobados y handoffs viven en
`OtroCerebro\PETTERSEN\Website`, no en este repo.
