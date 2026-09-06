# Landing de T4KASH

Página pública de T4KASH: <https://charlieuxv.github.io/t4kash-landing/>

Construida con **React + TypeScript + Tailwind CSS** sobre Vite. El código fuente
vive en `web/` y el resultado del build se publica en la raíz del repositorio,
que es lo que sirve GitHub Pages.

```
web/
  src/
    components/   Button, Logo, Pattern, Reveal, Ui
    sections/     Una por sección de la página
    layouts/      Navbar y Footer
    data/         Todo el texto y la lista de capturas
    hooks/        useReveal (scroll-reveal con IntersectionObserver)
    assets/       Capturas de la app y logotipo, en WebP
  public/media/   Video demo, imagen Open Graph, iconos
```

## Si la URL cambia

La dirección del sitio está escrita a mano en cuatro lugares. Si el repositorio
se mueve de cuenta o se le pone un dominio propio, hay que tocar los cuatro:

- `web/index.html` — `canonical`, `og:url`, `og:image`, `twitter:image` y el JSON-LD
- `web/public/sitemap.xml`
- `web/public/robots.txt`
- este README

## Trabajar en local

```bash
cd web
npm install
npm run dev      # http://localhost:5173
```

## Publicar

```bash
cd web
npm run build    # limpia ../assets y escribe el bundle en la raíz
cd ..
git add -A && git commit -m "..." && git push
```

GitHub Pages sirve la rama `main` desde la raíz. No hay que tocar ninguna
configuración: `npm run build` deja `index.html`, `assets/` y `media/` donde van.

## Sistema visual

Sale del *Manual de Identidad Visual de T4KASH*, no de una interpretación libre.

| Elemento | Origen |
|---|---|
| `#191919`, `#C1FF72`, `#5749FD`, `#0A74FF`, `#FFFFFF` | Página «Paleta de colores» |
| Texto negro sobre lima y sobre azul; texto blanco sobre morado y sobre tinta | Página «Contraste y accesibilidad (WCAG AA)» |
| Textura de cuadrícula | Página «Patrones y texturas» |
| Patrón modular (cuartos de círculo, cápsulas, triángulos) | Página «Patrones y texturas» |
| Codos redondeados tono sobre tono | Página «Contrastes» |
| Esquina achaflanada de los paneles | Recurso recurrente del manual |
| Logotipo e isotipo | Extraídos del PDF del manual |

**Tipografías.** El manual usa **Cosmic Octo** para títulos y **Codec Pro / Futura**
para texto. Las dos son comerciales y su licencia no cubre redistribución como
webfont, así que la página usa **Rubik 900** y **Outfit** como sustitutas medidas
contra las originales. Los stacks ya piden primero las de marca y `src/index.css`
tiene los `@font-face` listos y comentados: en cuanto existan los `.woff2` con
licencia web, se descomentan y no hay que tocar nada más.

## De dónde sale cada dato

Nada de la página está inventado. Los números y las afirmaciones salen del código
de la rama `Carlos` del repositorio del producto o de las capturas reales.

| Dato en la página | Origen |
|---|---|
| 24 categorías | Contador visible en la pantalla de inicio de la app |
| Vigencia de 24 h y tope de C$ 1,000 en tareas rápidas | README del producto, sección «Uso del MVP» |
| Radio de búsqueda configurable | Pantalla de tareas rápidas |
| Comisión: 10 % al cliente + 5 % al estudiante | `PaymentService.java` y `application.properties` |
| 0 % de comisión en efectivo | `cash ? BigDecimal.ZERO : ...` en `PaymentService` |
| Moneda NIO | `schema-postgresql.sql` |
| «Pago protegido» | Es el nombre que usa la propia app |
| Calificación mutua de 1 a 5 | `CalificacionService` y tabla `calificaciones` |
| Android 7.0+ | `minSdk 24` en `mobile/app/build.gradle.kts` |
| Pagadito en entorno de pruebas | Integración en Sandbox, declarada como tal |
| Notificaciones push en integración | Rama separada, declarado como tal |
| Capturas y video | Aplicación funcionando, sin retoques de interfaz |

Dos capturas se editaron **solo para quitar datos personales**, sin cambiar nada
de la interfaz: en la pantalla de acceso se vació el campo de correo, y del perfil
se recortó el bloque «Cuenta», que mostraba un correo real y el nombre de una
universidad.

## Lo que la página no dice

- No promete ingresos ni cantidad de oportunidades.
- No presenta Pagadito como dinero real.
- No presenta las notificaciones push como terminadas.
- No nombra universidades ni sugiere convenios con ninguna.
- No inventa usuarios, montos procesados, testimonios ni clientes.
