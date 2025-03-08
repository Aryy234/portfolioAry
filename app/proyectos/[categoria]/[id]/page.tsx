"use client"

import { getProyectoPorId } from "../../data/proyectsData"
import Image from "next/image"
import { Github, ExternalLink, ArrowLeft, Calendar, User } from "lucide-react"
import { useRouter } from "next/navigation"
import AnimatedBackground from "@/components/AnimatedBackground"
import { useState } from "react"

export default function ProyectoDetallePage({
  params,
}: {
  params: { categoria: string; id: string }
}) {
  const router = useRouter()
  const proyecto = getProyectoPorId(params.id)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const handleGoBack = () => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        router.back()
      })
    } else {
      router.back()
    }
  }

  if (!proyecto) {
    return (
      <>
        <AnimatedBackground />
        <div className="max-w-4xl mx-auto px-6 py-12 text-center relative z-10">
          <button
            onClick={handleGoBack}
            className="mb-6 flex items-center gap-2 text-emerald-500 hover:text-emerald-600 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Volver a proyectos</span>
          </button>
          <div className="bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8">
            <h1 className="text-2xl font-bold text-gray-100 mb-4">Proyecto no encontrado</h1>
            <p className="text-gray-400">El proyecto que buscas no existe o ha sido eliminado.</p>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <AnimatedBackground />
      <div className="max-w-4xl mx-auto px-6 py-12 relative z-10">
        {/* Botón de volver atrás */}
        <button
          onClick={handleGoBack}
          className="mb-6 flex items-center gap-2 text-emerald-500 hover:text-emerald-600 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Volver a proyectos</span>
        </button>

        <div className="bg-gray-800/90 backdrop-blur-sm rounded-3xl overflow-hidden">
          {/* Imagen principal */}
          <div className="relative h-96 w-full">
            <Image
              src={proyecto.imagenes[activeImageIndex] || "/placeholder.svg?height=600&width=800"}
              alt={proyecto.titulo}
              fill
              className="object-cover"
            />

            {/* Badge para estado del proyecto */}
            <div
              className={`absolute top-4 left-4 z-10 text-xs font-bold py-1 px-3 rounded-full ${
                proyecto.estado === "Completado" ? "bg-green-500 text-green-900" : "bg-amber-500 text-amber-900"
              }`}
            >
              {proyecto.estado}
            </div>

            {/* Badge para proyectos destacados */}
            {proyecto.destacado && (
              <div className="absolute top-4 right-4 z-10 bg-yellow-500 text-gray-900 text-xs font-bold py-1 px-3 rounded-full flex items-center gap-1">
                <span>Proyecto Destacado</span>
              </div>
            )}
          </div>

          {/* Galería de miniaturas */}
          {proyecto.imagenes.length > 1 && (
            <div className="p-4 bg-gray-900 flex overflow-x-auto gap-2">
              {proyecto.imagenes.map((imagen, index) => (
                <div
                  key={index}
                  className={`relative w-20 h-20 flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity ${
                    index === activeImageIndex ? "ring-2 ring-emerald-500" : ""
                  }`}
                  onClick={() => setActiveImageIndex(index)}
                >
                  <Image
                    src={imagen || "/placeholder.svg"}
                    alt={`${proyecto.titulo} - imagen ${index + 1}`}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              ))}
            </div>
          )}

          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4 text-gray-100">{proyecto.titulo}</h1>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-gray-300">
                <User size={16} className="text-emerald-500" />
                <span>{proyecto.rol}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-300">
                <Calendar size={16} className="text-emerald-500" />
                <span>{proyecto.estado}</span>
              </div>
            </div>

            <p className="text-gray-300 mb-6 text-lg">{proyecto.descripcion}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {proyecto.tecnologias.map((tech, index) => (
                <span key={index} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-6 mb-8">
              <a
                href={proyecto.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <Github size={20} />
                Código Fuente
              </a>
              <a
                href={proyecto.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <ExternalLink size={20} />
                Demo en Vivo
              </a>
            </div>

            {proyecto.videoUrl && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-100">Video Demostrativo</h2>
                <video src={proyecto.videoUrl} controls className="w-full rounded-xl" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

