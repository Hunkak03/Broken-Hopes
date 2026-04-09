# BROKEN HOPES — Panel Admin

## 🔐 Acceso
**`Shift + Alt + A`** — abrir panel
**`Escape`** — cerrar

## 📑 Pestañas

### 👥 STAFF
Gestiona miembros del equipo y sus redes sociales.

### 📊 STATS
Miembros totales, online y boosts del Discord.

### 📝 CONTENIDO
Edita TODO el contenido de la página:
- **📜 Reglas** — nombre + descripción de cada regla
- **🗺️ Roadmap** — hitos con fecha, título, descripción y estado (completado/en progreso/futuro)
- **🏆 Logros** — icono, nombre, descripción, bloqueado/desbloqueado
- **📰 Noticias** — fecha, tag, título, cuerpo

### 🎨 APARIENCIA
- **🌟 Héroe** — título, capítulo, diálogo de Flowey
- **❤️ CTA** — título de unirse, cita, URL de Discord
- **🖼️ Galería** — rutas de imágenes y descripciones

## 💾 GUARDAR
Un solo botón guarda **TODO**: staff + stats + contenido + apariencia.

## ⚠️ IMPORTANTE — Crear tabla en Supabase

Antes de que el contenido se guarde, necesitas crear la tabla `page_content`:

1. Ve a: https://supabase.com/dashboard/project/ckkbkojunnkozzmpunlb/sql/new
2. Abre el archivo `create-page-content-table.sql` en esta carpeta
3. Copia y pega todo el contenido en el editor SQL
4. Ejecuta (Run)

Sin esta tabla, los cambios de contenido no se guardarán (pero staff y stats sí funcionan).
