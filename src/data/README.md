# Sistema de Gestión de Contenido - Casa Venacev

Este directorio contiene todos los archivos JSON que permiten editar el contenido del sitio web sin modificar el código.

## 📁 Archivos Disponibles

### 🏢 **company.json** - Información de la Empresa
- **company.name**: Nombre de la empresa
- **company.tagline**: Slogan o descripción corta
- **company.description**: Descripción completa
- **company.founded**: Año de fundación
- **company.location**: Ubicación principal
- **contact**: Información de contacto (teléfono, email, WhatsApp)
- **social**: Enlaces a redes sociales

### 🎯 **hero.json** - Sección Principal
- **title**: Título principal del hero
- **description**: Descripción del hero
- **backgroundImage**: URL de la imagen de fondo
- **ctaPrimary**: Botón principal (texto y enlace)
- **ctaSecondary**: Botón secundario (texto y enlace)

### 👥 **about.json** - Sección "Conócenos"
- **title**: Título de la sección
- **subtitle**: Subtítulo
- **description**: Descripción principal
- **image**: URL de la imagen
- **showStatsInsteadOfFeatures**: `true` para mostrar estadísticas, `false` para características
- **features**: Array de características de la empresa
- **stats**: Array de estadísticas (solo si showStatsInsteadOfFeatures es true)

### 🛠️ **services.json** - Servicios Ofrecidos
- **title**: Título de la sección
- **subtitle**: Subtítulo
- **description**: Descripción general
- **categories**: Array de categorías de servicios
  - Cada categoría tiene un array de **services**
  - Cada servicio incluye: id, title, description, icon, price, duration, features, highlight

### 🖼️ **gallery.json** - Galería de Trabajos
- **title**: Título de la sección
- **subtitle**: Subtítulo
- **description**: Descripción general
- **categories**: Categorías de trabajos
- **images**: Array de imágenes
  - **projectId**: ID opcional del proyecto vinculado (para expandir detalles)
  - **materials**: Materiales utilizados
  - **area**: Área del trabajo
  - **highlight**: Si es destacado

### 🏗️ **projects.json** - Proyectos Detallados
- **title**: Título de la sección
- **subtitle**: Subtítulo
- **description**: Descripción general
- **projects**: Array de proyectos
  - Cada proyecto incluye: id, title, type, category, description, image, area, duration, materials, features, highlight, completed

### 🏆 **brands.json** - Marcas con las que Trabajamos
- **title**: Título de la sección
- **subtitle**: Subtítulo
- **description**: Descripción general
- **brands**: Array de marcas
  - **id**: Identificador único
  - **name**: Nombre de la marca
  - **icon**: Nombre del icono de Simple Icons (ej: "yaak", "fossa", "marko")
  - **website**: Sitio web de la marca
  - **category**: Categoría de la marca
  - **highlight**: Si es marca premium/destacada

#### 🎨 **Iconos de Marcas (Simple Icons)**
Los iconos de las marcas se cargan automáticamente desde [Simple Icons](https://simpleicons.org/). Solo necesitas usar el nombre del icono (slug) en el campo `icon`.

**Ejemplos de iconos disponibles:**
- `yaak`, `fossa`, `marko`, `rocksdb`, `sparkasse`, `helpdesk`
- `microsoft`, `apple`, `google`, `amazon`, `netflix`
- `adobe`, `autodesk`, `intel`, `amd`, `nvidia`
- Y miles más en [simpleicons.org](https://simpleicons.org/)

**Para agregar una nueva marca:**
1. Busca el icono en [simpleicons.org](https://simpleicons.org/)
2. Usa el nombre del icono (slug) en el campo `icon`
3. El sistema cargará automáticamente el SVG oficial

### 🔄 **process.json** - Proceso de Trabajo
- **title**: Título de la sección
- **subtitle**: Subtítulo
- **description**: Descripción general
- **steps**: Array de pasos del proceso
  - Cada paso incluye: number, title, description, icon

### ⭐ **differentiators.json** - Diferenciadores
- **title**: Título de la sección
- **subtitle**: Subtítulo
- **description**: Descripción general
- **points**: Array de puntos diferenciadores
  - Cada punto incluye: title, description, icon

### 💬 **testimonials.json** - Testimonios de Clientes
- **title**: Título de la sección
- **subtitle**: Subtítulo
- **description**: Descripción general
- **testimonials**: Array de testimonios
  - Cada testimonio incluye: id, name, role, location, rating, content, image, project, date, highlight

### 📞 **contact.json** - Formulario de Contacto
- **title**: Título de la sección
- **subtitle**: Subtítulo
- **description**: Descripción general
- **form**: Configuración del formulario
  - **fields**: Campos del formulario
  - **submitButton**: Texto del botón de envío
- **contactInfo**: Información de contacto adicional

### 💬 **Mensaje de WhatsApp Personalizado**
El botón flotante de WhatsApp incluye un mensaje pre-escrito profesional:
- **Personalización**: Menciona directamente a Bruno
- **Especificidad**: Menciona servicios de pisos de madera
- **Profesionalismo**: "Asesoría técnica gratuita"
- **Propósito claro**: Evaluación del proyecto
- **Cortesía**: Incluye pregunta de ayuda al final

## 🎨 **Iconos Disponibles**

Puedes usar cualquiera de estos iconos de Lucide React en los campos `icon`:

### Básicos
- `home`, `building`, `factory`, `apartment`, `office`
- `phone`, `mail`, `map-pin`, `globe`, `clock`
- `star`, `award`, `shield`, `check-circle`
- `users`, `user`, `smile`, `heart`

### Herramientas
- `hammer`, `wrench`, `screwdriver`, `drill`
- `brush`, `paintbrush`, `palette`
- `ruler`, `measuring-tape`, `square`
- `lightbulb`, `bulb`, `zap`

### Materiales
- `tree`, `leaf`, `wood`, `forest`
- `package`, `box`, `cube`
- `truck`, `car`, `bike`

### Proceso
- `refresh-cw`, `rotate-ccw`, `settings`
- `play`, `pause`, `stop`
- `arrow-right`, `arrow-left`, `chevron-right`

## 🖼️ **Imágenes Recomendadas**

- **Formato**: JPG o PNG
- **Tamaño**: Mínimo 800x600px, ideal 1200x800px
- **Calidad**: Alta resolución para dispositivos retina
- **Peso**: Máximo 500KB por imagen
- **Fuentes**: Pexels, Unsplash, o imágenes propias

## ⚠️ **Solución de Problemas**

### Error: "Cannot find module '@/data/...'"
- Verifica que el archivo JSON existe en la carpeta `src/data/`
- Asegúrate de que el nombre del archivo coincida exactamente

### Error: "Property '...' does not exist on type..."
- Verifica que la estructura del JSON coincida con los tipos en `src/types/data.ts`
- Asegúrate de que todos los campos requeridos estén presentes

### Imagen no se muestra
- Verifica que la URL de la imagen sea válida y accesible
- Asegúrate de que la imagen tenga el formato correcto
- Verifica que no haya problemas de CORS

### Icono no se muestra
- Verifica que el nombre del icono esté en la lista de iconos disponibles
- Asegúrate de que el nombre esté escrito correctamente (sensible a mayúsculas/minúsculas)

### Icono de marca no se muestra
- Verifica que el nombre del icono exista en [simpleicons.org](https://simpleicons.org/)
- Asegúrate de usar el slug exacto del icono
- Revisa la consola del navegador para errores de carga

## 🔧 **Personalización Avanzada**

### Agregar Nuevas Categorías
1. Agrega la nueva categoría en el JSON correspondiente
2. Actualiza los tipos en `src/types/data.ts` si es necesario
3. El componente se actualizará automáticamente

### Cambiar Colores y Estilos
- Los colores se controlan desde `tailwind.config.ts`
- Los estilos se pueden modificar en los componentes individuales
- Usa las clases de Tailwind CSS para personalización

### Agregar Nuevos Campos
1. Agrega el campo en el JSON
2. Actualiza la interfaz TypeScript correspondiente
3. Modifica el componente para usar el nuevo campo

## 📱 **Responsive Design**

Todos los componentes están optimizados para:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

Los breakpoints se manejan automáticamente con Tailwind CSS.

## 🚀 **Performance**

- Las imágenes se optimizan automáticamente con Next.js
- Los iconos SVG se cargan dinámicamente solo cuando son necesarios
- Los datos se cargan estáticamente en build time
- No hay llamadas a APIs externas en tiempo de ejecución
- El sitio es completamente estático y rápido

---

**Nota**: Siempre haz una copia de seguridad antes de editar los archivos JSON. Los cambios se reflejan inmediatamente al recargar la página. 