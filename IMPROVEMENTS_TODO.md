# BeyondCX Improvements TODO

## Quick Wins (Alto Impacto, Bajo Esfuerzo)

### Branding e Identidad Visual
- [x] Añadir logo corporativo profesional (emoji + Playfair Display)
- [x] Implementar paleta de colores consistente (#1e3a5f navy blue)
- [x] Mejorar tipografía con jerarquía clara (Playfair Display + Inter)
- [x] Añadir favicon personalizado (📊)

### Navegación y UX
- [x] Implementar navegación persistente (header) - Ya existía, mejorado diseño
- [ ] Añadir breadcrumbs para orientación
- [x] Mejorar indicadores de sección activa (navy blue con shadow)
- [x] Añadir botón "volver arriba" (BackToTop component)

### Componentes y Estados
- [x] Implementar estados de carga (Loading component)
- [x] Añadir estados vacíos (EmptyState component)
- [x] Mejorar feedback visual en interacciones (hover effects, transitions)
- [x] Optimizar spacing y padding consistente

### Accesibilidad Básica
- [ ] Añadir atributos ARIA básicos
- [ ] Mejorar contraste de colores
- [ ] Asegurar navegación por teclado
- [ ] Añadir textos alternativos

### Performance
- [ ] Optimizar imágenes (si las hay)
- [ ] Lazy loading de componentes pesados
- [ ] Memoización de cálculos costosos

## Strategic Content Improvements (Informe 2)

### Case Studies
- [x] Crear estructura de Case Studies
- [x] Template para 5 casos detallados (2 completos + 3 templates)
- [x] Sección de métricas de impacto
- [x] Filtrado por industria
- [x] Testimoniales de clientes

### Sales Plays Library
- [x] Crear biblioteca de Sales Plays
- [x] 5 plays completamente desarrollados + 15 templates
- [x] Categorización por situación (6 categorías)
- [x] Pasos detallados con tips
- [x] Métricas de éxito y errores comunes

### ROI Calculator
- [x] Desarrollar ROI Calculator interactivo
- [x] Fórmulas de cálculo automatizadas
- [x] Visualización de resultados (ROI, payback, ahorros)
- [x] Inputs personalizables
- [x] Comparativa antes/después

### Email Templates
- [x] Crear Email Templates Library
- [x] 8 templates completos + 7 templates pendientes
- [x] Categorización por etapa del ciclo de ventas
- [x] Variables personalizables
- [x] Tips de uso
- [x] Funcionalidad de copiar al portapapeles

### Competitive Intelligence
- [x] Expandir Competitive Battlecards 2.0
- [x] Análisis SWOT detallado
- [x] Win/Loss patterns
- [x] Killer questions por competidor
- [x] Tabla comparativa de diferenciadores
- [x] Pricing intelligence

### Integration
- [x] Añadir nuevas secciones al enum PlaybookSection
- [x] Integrar componentes en App.tsx
- [x] Crear dropdown "Herramientas" en navegación
- [x] Navegación funcional entre todas las secciones

## Branding Corporativo Actualización

- [x] Cambiar tipografía a Outfit (fuente corporativa)
- [x] Actualizar paleta de colores corporativos:
  - Accent 1: #E4E3E3 (gris claro)
  - Accent 2: #B1B1B0 (gris medio)
  - Accent 3: #6D84E3 (azul corporativo principal)
  - Accent 4: #3F3F3F (gris oscuro)
  - Accent 5: #000000 (negro)
- [x] Integrar logo corporativo Beyond en navegación
- [ ] Actualizar todos los componentes con nuevos colores

## Reorganización de Contenido

- [x] Analizar sección "3. Metodología" para identificar duplicaciones
- [x] Eliminar completamente tab "3.2 Herramientas Prácticas"
- [x] Mantener solo "Metodología (Teoría)" en sección 3
- [x] Crear componente "Discovery Scripts" para dropdown Herramientas
- [x] Crear componente "Pricing & Negotiation" para dropdown Herramientas
- [x] Actualizar tipos y navegación con nuevas herramientas
- [ ] Actualizar todos los componentes con colores corporativos

## Correcciones Pendientes

- [x] Cambiar todas las fuentes restantes a Outfit
- [x] Actualizar todos los colores a paleta corporativa
- [x] Ajustar logo en header para mejor visualización
- [x] Modificar Sales Plays Library para mostrar solo vista por fases
- [x] Email Templates verificado (sin errores de sintaxis)

## Rediseños Pendientes

- [x] Rediseñar Home para reflejar estructura actual (4 secciones + 7 herramientas)
- [x] Mejorar visualización de pestañas en Estrategia
- [x] Ajustar formato de títulos en Estrategia (menos centrados, tamaño moderado)
- [x] Rediseñar sección "Higiene del Dato" en Operaciones con layout de 3 columnas
