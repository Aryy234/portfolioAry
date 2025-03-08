"use client"

import type React from "react"
import { CheckCircle2, Circle } from "lucide-react"

interface ProjectFiltersProps {
  categorias: string[]
  categoriaSeleccionada: string
  setCategoriaSeleccionada: (categoria: string) => void
  estadoSeleccionado: string
  setEstadoSeleccionado: (estado: string) => void
  mostrarDestacados: boolean
  setMostrarDestacados: (mostrar: boolean) => void
}

const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  categorias,
  categoriaSeleccionada,
  setCategoriaSeleccionada,
  estadoSeleccionado,
  setEstadoSeleccionado,
  mostrarDestacados,
  setMostrarDestacados,
}) => {
  return (
    <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl mb-8">
      <h2 className="text-xl font-semibold text-white mb-4">Filtros</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Filtro por categoría */}
        <div>
          <h3 className="text-lg font-medium text-gray-200 mb-2">Categoría</h3>
          <div className="space-y-2">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setCategoriaSeleccionada(categoria)}
                className={`flex items-center gap-2 w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  categoriaSeleccionada === categoria
                    ? "bg-emerald-500/20 text-emerald-400"
                    : "text-gray-300 hover:bg-gray-700/50"
                }`}
              >
                {categoriaSeleccionada === categoria ? (
                  <CheckCircle2 size={18} className="text-emerald-500" />
                ) : (
                  <Circle size={18} className="text-gray-500" />
                )}
                <span className="capitalize">{categoria}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Filtro por estado */}
        <div>
          <h3 className="text-lg font-medium text-gray-200 mb-2">Estado</h3>
          <div className="space-y-2">
            {["todos", "En desarrollo", "Completado"].map((estado) => (
              <button
                key={estado}
                onClick={() => setEstadoSeleccionado(estado)}
                className={`flex items-center gap-2 w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  estadoSeleccionado === estado
                    ? "bg-emerald-500/20 text-emerald-400"
                    : "text-gray-300 hover:bg-gray-700/50"
                }`}
              >
                {estadoSeleccionado === estado ? (
                  <CheckCircle2 size={18} className="text-emerald-500" />
                ) : (
                  <Circle size={18} className="text-gray-500" />
                )}
                <span>{estado}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Filtro por destacados */}
        <div>
          <h3 className="text-lg font-medium text-gray-200 mb-2">Otros filtros</h3>
          <button
            onClick={() => setMostrarDestacados(!mostrarDestacados)}
            className={`flex items-center gap-2 w-full text-left px-3 py-2 rounded-lg transition-colors ${
              mostrarDestacados ? "bg-emerald-500/20 text-emerald-400" : "text-gray-300 hover:bg-gray-700/50"
            }`}
          >
            {mostrarDestacados ? (
              <CheckCircle2 size={18} className="text-emerald-500" />
            ) : (
              <Circle size={18} className="text-gray-500" />
            )}
            <span>Solo proyectos destacados</span>
          </button>
        </div>
      </div>

      {/* Botón para limpiar filtros */}
      <div className="mt-6 flex justify-end">
        <button
          onClick={() => {
            setCategoriaSeleccionada("todas")
            setEstadoSeleccionado("todos")
            setMostrarDestacados(false)
          }}
          className="text-sm text-gray-400 hover:text-white transition-colors"
        >
          Limpiar filtros
        </button>
      </div>
    </div>
  )
}

export default ProjectFilters

