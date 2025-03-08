"use client"
import { proyectos, getProyectosDestacados } from "./data/proyectsData"
import { ProjectCard } from "./components/ProjectCard"
import AnimatedBackground from "@/components/AnimatedBackground"
import { useEffect, useState } from "react"
import { Filter } from "lucide-react"
import ProjectFilters from "./components/ProjectFilters"

export default function ProyectosPage() {
  // Estado para controlar la animación de aparición
  const [isVisible, setIsVisible] = useState(false)

  // Estado para controlar si se muestran todos los proyectos o solo los destacados
  const [mostrarTodos, setMostrarTodos] = useState(false)

  // Estados para los filtros
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todas")
  const [estadoSeleccionado, setEstadoSeleccionado] = useState("todos")
  const [mostrarDestacados, setMostrarDestacados] = useState(false)

  // Estado para controlar si se muestran los filtros
  const [mostrarFiltros, setMostrarFiltros] = useState(false)

  useEffect(() => {
    // Pequeño retraso para asegurar que la página se ha cargado completamente
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  // Obtener solo los proyectos destacados
  const proyectosDestacados = getProyectosDestacados()

  // Función para manejar el clic en "Mostrar todos los proyectos"
  const handleMostrarTodos = () => {
    setMostrarTodos(true)
  }

  // Función para alternar la visibilidad de los filtros
  const toggleFiltros = () => {
    setMostrarFiltros(!mostrarFiltros)
  }

  // Función para filtrar proyectos
  const filtrarProyectos = () => {
    let proyectosFiltrados = [...proyectos]

    // Filtrar por categoría
    if (categoriaSeleccionada !== "todas") {
      proyectosFiltrados = proyectosFiltrados.filter((proyecto) => proyecto.categoria === categoriaSeleccionada)
    }

    // Filtrar por estado
    if (estadoSeleccionado !== "todos") {
      proyectosFiltrados = proyectosFiltrados.filter((proyecto) => proyecto.estado === estadoSeleccionado)
    }

    // Filtrar por destacados
    if (mostrarDestacados) {
      proyectosFiltrados = proyectosFiltrados.filter((proyecto) => proyecto.destacado)
    }

    return proyectosFiltrados
  }

  // Determinar qué proyectos mostrar según el estado
  const proyectosAMostrar = mostrarTodos ? filtrarProyectos() : proyectosDestacados

  // Obtener categorías únicas para el filtro
  const categorias = ["todas", ...new Set(proyectos.map((proyecto) => proyecto.categoria))]

  return (
    <>
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24 relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center text-white">
          Mis <span className="text-emerald-500">Proyectos</span>
        </h1>

        {mostrarTodos && (
          <div className="mb-8">
            <button
              onClick={toggleFiltros}
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors mb-4"
            >
              <Filter size={18} />
              {mostrarFiltros ? "Ocultar filtros" : "Mostrar filtros"}
            </button>

            {mostrarFiltros && (
              <ProjectFilters
                categorias={categorias}
                categoriaSeleccionada={categoriaSeleccionada}
                setCategoriaSeleccionada={setCategoriaSeleccionada}
                estadoSeleccionado={estadoSeleccionado}
                setEstadoSeleccionado={setEstadoSeleccionado}
                mostrarDestacados={mostrarDestacados}
                setMostrarDestacados={setMostrarDestacados}
              />
            )}
          </div>
        )}

        {/* Mostrar mensaje si no hay proyectos que coincidan con los filtros */}
        {proyectosAMostrar.length === 0 && (
          <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl text-center my-12">
            <h2 className="text-xl text-white mb-2">No se encontraron proyectos</h2>
            <p className="text-gray-400">No hay proyectos que coincidan con los filtros seleccionados.</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {proyectosAMostrar.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Botón "Mostrar todos los proyectos" (solo se muestra si no estamos mostrando todos) */}
        {!mostrarTodos && proyectosDestacados.length > 0 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={handleMostrarTodos}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
            >
              Mostrar todos los proyectos
            </button>
          </div>
        )}
      </div>
    </>
  )
}

