// app/proyectos/components/ProjectCard.tsx
"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, Star } from "lucide-react"
import { useState, useRef } from "react"
import type { Project } from "../data/proyectsData"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [activeVideo, setActiveVideo] = useState(false)
  const [showGallery, setShowGallery] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleVideoHover = () => {
    setActiveVideo(true)
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Error playing video:", error)
      })
    }
  }

  const handleVideoLeave = () => {
    setActiveVideo(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  const toggleGallery = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowGallery(!showGallery)
  }

  // Crear la URL del detalle del proyecto
  const projectDetailUrl = `/proyectos/${project.categoria.toLowerCase().replace(/\s+/g, "-")}/${project.id}`

  return (
    <div className="bg-gray-800 rounded-3xl overflow-hidden shadow-md transition-transform hover:scale-105 hover:shadow-lg duration-200 relative">
      {/* Badge para proyectos destacados */}
      {project.destacado && (
        <div className="absolute top-3 right-3 z-10 bg-yellow-500 text-gray-900 text-xs font-bold py-1 px-2 rounded-full flex items-center gap-1">
          <Star size={12} fill="currentColor" strokeWidth={0} />
          <span>Destacado</span>
        </div>
      )}

      {/* Badge para estado del proyecto */}
      <div
        className={`absolute top-3 left-3 z-10 text-xs font-bold py-1 px-2 rounded-full ${
          project.estado === "Completado" ? "bg-green-500 text-green-900" : "bg-amber-500 text-amber-900"
        }`}
      >
        {project.estado}
      </div>

      {/* Parte superior: imagen y título como enlace */}
      <Link href={projectDetailUrl}>
        <div
          className="relative h-48 md:h-64 overflow-hidden cursor-pointer"
          onMouseEnter={handleVideoHover}
          onMouseLeave={handleVideoLeave}
        >
          <Image
            src={project.imagenPortada || "/placeholder.svg?height=400&width=600"}
            alt={project.titulo}
            fill
            className={`object-cover transition-opacity duration-500 ${activeVideo ? "opacity-0" : "opacity-100"}`}
          />

          {project.videoUrl && (
            <video
              ref={videoRef}
              src={project.videoUrl}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                activeVideo ? "opacity-100 scale-105" : "opacity-0 scale-95"
              }`}
              muted
              playsInline
            />
          )}

          {/* Botón para ver más imágenes */}
          {project.imagenes.length > 1 && (
            <button
              onClick={toggleGallery}
              className="absolute bottom-2 right-2 bg-gray-900 bg-opacity-70 hover:bg-opacity-90 text-white px-2 py-1 rounded-lg text-xs"
            >
              +{project.imagenes.length} imágenes
            </button>
          )}
        </div>
      </Link>

      {/* Mini galería de imágenes (se muestra al hacer clic en "Ver más") */}
      {showGallery && (
        <div className="p-2 bg-gray-900 flex overflow-x-auto gap-2">
          {project.imagenes.map((img, idx) => (
            <div
              key={idx}
              className={`relative w-16 h-16 flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity ${
                idx === activeImageIndex ? "ring-2 ring-emerald-500" : ""
              }`}
              onClick={() => setActiveImageIndex(idx)}
            >
              <Image
                src={img || "/placeholder.svg"}
                alt={`${project.titulo} - imagen ${idx + 1}`}
                fill
                className="object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      )}

      {/* Parte inferior: descripción y enlaces */}
      <div className="p-6">
        <Link href={projectDetailUrl} className="block mb-2">
          <h2 className="text-xl font-bold text-gray-100 hover:text-emerald-400 transition-colors">{project.titulo}</h2>
        </Link>
        <p className="text-gray-400 mb-4">{project.descripcion}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tecnologias.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full transition-transform transition-colors hover:scale-110 hover:text-gray-50 hover:bg-emerald-500 duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-300 hover:text-gray-100 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <Github size={16} />
            <span>Código</span>
          </a>
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-300 hover:text-gray-100 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <ExternalLink size={16} />
            <span>Demo</span>
          </a>
        </div>
      </div>
    </div>
  )
}

