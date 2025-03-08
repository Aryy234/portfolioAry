# Plan para Implementar la Funcionalidad Solicitada

## Objetivo
Mostrar solo los proyectos destacados inicialmente y agregar un botón "Mostrar todos los proyectos" que, al hacer clic, muestre todos los proyectos con filtros por categoría, estado y destacados.

## Pasos

1. **Modificar la página de proyectos**:
   - Crear un estado para manejar la visualización de proyectos destacados y todos los proyectos.
   - Mostrar inicialmente solo los proyectos destacados.
   - Agregar un botón "Mostrar todos los proyectos" al final de la lista de proyectos destacados.
   - Al hacer clic en el botón, mostrar todos los proyectos con filtros por categoría, estado y destacados.

2. **Agregar filtros**:
   - Crear componentes de filtro para categoría, estado y destacados.
   - Implementar la lógica para filtrar los proyectos según los criterios seleccionados.

## Diagrama de flujo

```mermaid
graph TD
    A[Inicio] --> B[Mostrar proyectos destacados]
    B --> C[Botón "Mostrar todos los proyectos"]
    C --> D[Mostrar todos los proyectos]
    D --> E[Filtros por categoría, estado y destacados]
    E --> F[Actualizar lista de proyectos]
    F --> G[Fin]
```

## Detalles

1. **Modificar la página de proyectos**:
   - Crear un nuevo estado `mostrarTodos` en el componente de la página de proyectos.
   - Utilizar `getProyectosDestacados` para obtener los proyectos destacados y `proyectos` para obtener todos los proyectos.
   - Renderizar los proyectos destacados inicialmente.
   - Agregar un botón "Mostrar todos los proyectos" que cambie el estado `mostrarTodos` a `true` cuando se haga clic.

2. **Agregar filtros**:
   - Crear componentes de filtro para categoría, estado y destacados.
   - Implementar la lógica de filtrado en el componente de la página de proyectos.
   - Actualizar la lista de proyectos según los filtros seleccionados.