# BROKEN HOPES

Una página web con estética pixel-art inspirada en **Undertale** para la comunidad de Discord *Broken Hopes* — un servidor centrado en Roblox, arte y creatividad.

La página funciona como el "cartel de presentación" del servidor: muestra las reglas, el staff con perfiles sociales, un roadmap interactivo, logros desbloqueables, noticias y una sección para unirse al Discord. Todo editable en tiempo real desde un panel de administración oculto.

---

## Qué hace

- **Pantalla de carga** con animación de Flowey y efecto typewriter
- **Estadísticas en vivo** del servidor Discord (miembros, online, boosts)
- **Reglas** de la comunidad en tarjetas pixel-art
- **Staff** con hover cards, enlaces a redes sociales y editor de perfiles
- **Roadmap/Timeline** visual con hitos completados, en progreso y futuros
- **Logros** desbloqueables con estados bloqueado/desbloqueado
- **Noticias** con tarjetas de anuncios y tags
- **Sección CTA** para unirse al Discord con efectos de screen-shake
- **Panel de administración** oculto (`Shift+Alt+A`) con 4 pestañas editables: Staff, Stats, Contenido y Apariencia
- **Easter eggs**: Konami Code (`↑↑↓↓←→←→BA`), click secreto en Flowey, mensaje en consola
- **Música de fondo** (Snowdin Town) y efectos de sonido UI con toggle
- **Partículas flotantes** pixel-art y estrellas CSS puras
- **Scrollbar custom**, cursor de corazón y navegación por dots laterales

---

## Cómo fue creado

### Tecnologías

| Capa | Tecnología |
|---|---|
| Estructura | HTML5 semántico en un solo archivo |
| Estilos | CSS3 puro — sin frameworks, sin preprocesadores |
| Lógica | JavaScript vanilla (ES5+), sin frameworks |
| Base de datos | Supabase (PostgreSQL) para staff y contenido dinámico |
| Autenticación | Supabase Auth (email/contraseña) |
| Audio | HTML5 `<audio>` API con gestión custom |

### Técnicas

- **CSS-only stars**: campos de estrellas renderizados íntegramente con `box-shadow`, sin JavaScript ni canvas
- **Typewriter effect**: máquina de escribir recursiva con `setTimeout` para el diálogo de Flowey
- **Scroll reveal**: `IntersectionObserver` con delays escalonados para animaciones de entrada
- **Hover cards**: detección de posición con `getBoundingClientRect()` y posicionamiento dinámico
- **Animated counters**: `requestAnimationFrame` con easing cúbico para los números de stats
- **Screen shake + flash**: keyframes CSS inyectados dinámicamente al interactuar con botones clave
- **Partículas**: elementos `<div>` con animaciones CSS infinitas y delays aleatorios
- **Panel admin con tabs**: sistema de pestañas con transiciones `fade` y contenido cargado bajo demanda
- **Social editor grid**: tarjetas de redes sociales con colores por plataforma, preview de avatar en tiempo real
- **Contenido editable**: todo el contenido de la página (reglas, roadmap, logros, noticias, hero, CTA) se almacena en Supabase y se renderiza dinámicamente al cargar y al guardar
- **Acceso oculto**: el panel admin no tiene botón visible, se activa con combinación de teclado (`Shift+Alt+A`)
- **Easter eggs**: detección de secuencia de teclas (Konami Code), contador de clicks en sprite, mensaje ASCII en consola
- **Audio manager**: clase singleton con clonación de nodos `<audio>` para evitar solapamiento de sonidos
- **Fallback graceful**: la página funciona sin audio, sin stats y sin imágenes — todo se degrada silenciosamente

### Herramientas

- **Editor**: sin IDE específico — código escrito a mano
- **Sprites**: Undertale Spriters Resource (`spriters-resource.com`)
- **Audio**: Undertale OST (Bandcamp, Toby Fox) + SFX custom
- **Fuentes**: Google Fonts — *Press Start 2P* + *VT323*
- **Colores**: paleta inspirada en las almas de Undertale (rojo, cyan, naranja, azul, púrpura, verde, amarillo)

### Filosofía

Todo está en un **solo archivo `index.html`** con módulos JS separados. No hay build step, no hay bundler, no hay dependencias de npm. La página funciona abriendo el archivo directamente en el navegador (aunque para las peticiones a Supabase se recomienda un servidor local).
