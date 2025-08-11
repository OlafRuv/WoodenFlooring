# 📁 Sistema de Gestión de Contenido JSON

Este directorio contiene todos los archivos JSON que gestionan el contenido de la aplicación web de Casa Venacev. El sistema está diseñado para facilitar la edición y mantenimiento del contenido sin necesidad de modificar código.

## 🗂️ Estructura de Archivos

### 📋 Archivos de Contenido Principal

- **`hero.json`** - Contenido del hero section (título, descripción, botones)
- **`about.json`** - Información sobre la empresa y estadísticas
- **`services.json`** - Lista de servicios ofrecidos
- **`projects.json`** - Portafolio de proyectos realizados
- **`gallery.json`** - Galería de imágenes por categorías
- **`process.json`** - Pasos del proceso de trabajo
- **`differentiators.json`** - Ventajas competitivas de la empresa
- **`testimonials.json`** - Testimonios de clientes
- **`contact.json`** - Información de contacto y formulario
- **`company.json`** - Información general de la empresa

### 🔧 Archivos de Soporte

- **`../types/data.ts`** - Definiciones de tipos TypeScript
- **`../lib/data-loader.ts`** - Utilidades para cargar datos

## ✏️ Cómo Editar el Contenido

### 1. **Editar Servicios** (`services.json`)

```json
{
  "id": "nuevo-servicio",
  "title": "Nombre del Servicio",
  "description": "Descripción del servicio",
  "icon": "nombre-del-icono",
  "image": "URL-de-la-imagen",
  "features": ["Característica 1", "Característica 2"],
  "price": "Precio del servicio",
  "duration": "Duración estimada",
  "highlight": true
}
```

**Iconos disponibles:** `hammer`, `package`, `brush`, `lightbulb`

### 2. **Editar Proyectos** (`projects.json`)

```json
{
  "id": "nuevo-proyecto",
  "title": "Nombre del Proyecto",
  "type": "Residencial/Comercial/Industrial",
  "category": "Interior/Exterior/Oficina/etc",
  "description": "Descripción del proyecto",
  "image": "URL-de-la-imagen",
  "icon": "nombre-del-icono",
  "area": "Área en m²",
  "duration": "Duración del proyecto",
  "materials": ["Material 1", "Material 2"],
  "features": ["Característica 1", "Característica 2"],
  "highlight": true,
  "completed": "YYYY-MM-DD"
}
```

**Iconos disponibles:** `home`, `building`, `utensils`, `apartment`

### 3. **Editar Testimonios** (`testimonials.json`)

```json
{
  "id": "nuevo-testimonio",
  "name": "Nombre del Cliente",
  "role": "Cargo o Rol",
  "location": "Ubicación",
  "rating": 5,
  "content": "Contenido del testimonio",
  "image": "URL-de-la-imagen",
  "project": "Proyecto relacionado",
  "date": "YYYY-MM-DD",
  "highlight": true
}
```

### 4. **Editar Galería** (`gallery.json`)

```json
{
  "id": "nueva-imagen",
  "title": "Título de la Imagen",
  "category": "ID-de-categoria",
  "description": "Descripción de la imagen",
  "image": "URL-de-la-imagen-principal",
  "thumbnail": "URL-de-la-miniatura",
  "project": "Proyecto relacionado",
  "materials": ["Material 1", "Material 2"],
  "area": "Área en m²",
  "highlight": true
}
```

## 🎨 Personalización de Iconos

Los iconos utilizan nombres de Lucide React. Puedes ver todos los iconos disponibles en: [https://lucide.dev/icons/](https://lucide.dev/icons/)

### Iconos Comunes Usados:
- `home` - Casa
- `building` - Edificio
- `hammer` - Martillo
- `star` - Estrella
- `award` - Premio
- `users` - Usuarios
- `shield` - Escudo
- `check-circle` - Círculo con check

## 📱 Responsive Images

Para las imágenes, se recomienda usar:
- **Imágenes principales:** 1200x800px o similar
- **Miniaturas:** 400x300px
- **Formatos:** JPG para fotos, PNG para gráficos
- **Optimización:** Comprimir para web (máximo 500KB)

## 🔄 Actualización en Tiempo Real

Los cambios en los archivos JSON se reflejan automáticamente en la aplicación. Solo necesitas:

1. Editar el archivo JSON correspondiente
2. Guardar el archivo
3. La aplicación se actualizará automáticamente

## ⚠️ Consideraciones Importantes

### 1. **Formato JSON**
- Mantén la sintaxis JSON válida
- Usa comillas dobles para strings
- No uses comas al final de arrays/objetos
- Valida el JSON antes de guardar

### 2. **IDs Únicos**
- Cada elemento debe tener un `id` único
- Los IDs no deben contener espacios ni caracteres especiales
- Usa guiones medios para separar palabras

### 3. **URLs de Imágenes**
- Asegúrate de que las URLs sean accesibles
- Usa HTTPS para producción
- Considera usar un CDN para mejor rendimiento

### 4. **Caracteres Especiales**
- Usa entidades HTML para caracteres especiales
- `&` → `&amp;`
- `<` → `&lt;`
- `>` → `&gt;`

## 🚀 Ejemplos de Uso

### Agregar un Nuevo Servicio

1. Abre `services.json`
2. Agrega un nuevo objeto al array `services`
3. Completa todos los campos requeridos
4. Guarda el archivo

### Modificar Información de Contacto

1. Abre `company.json`
2. Edita la sección `contact`
3. Actualiza teléfonos, emails, direcciones
4. Guarda el archivo

### Cambiar Contenido del Hero

1. Abre `hero.json`
2. Modifica `title`, `subtitle`, `description`
3. Actualiza URLs de imágenes si es necesario
4. Guarda el archivo

## 🆘 Solución de Problemas

### Error de Sintaxis JSON
- Usa un validador JSON online
- Verifica comas y comillas
- Asegúrate de que todos los brackets estén cerrados

### Imágenes No Se Muestran
- Verifica que las URLs sean correctas
- Asegúrate de que las imágenes sean accesibles
- Revisa la consola del navegador para errores

### Contenido No Se Actualiza
- Verifica que el archivo se haya guardado
- Recarga la página del navegador
- Revisa la consola para errores de TypeScript

## 📞 Soporte

Si tienes problemas con la edición del contenido:
1. Revisa la consola del navegador
2. Verifica la sintaxis JSON
3. Asegúrate de que todos los campos requeridos estén presentes
4. Contacta al equipo de desarrollo si persiste el problema 