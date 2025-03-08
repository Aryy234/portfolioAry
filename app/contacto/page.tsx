"use client"
import Image from "next/image"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import AnimatedBackground from "@/components/AnimatedBackground"

export default function Contacto() {
  return (
    <>
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24 relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-12 text-center text-white">
          <span className="text-emerald-500">Contacta</span> Conmigo
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Columna Izquierda - Información de Contacto */}
          <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-white">Información de Contacto</h2>
            <p className="mb-8 text-gray-300">
              ¿Tienes alguna pregunta o propuesta? No dudes en contactarme a través de cualquiera de los siguientes
              medios. Estaré encantado de hablar contigo sobre nuevos proyectos, oportunidades o simplemente para
              intercambiar ideas.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="text-emerald-500 mt-1" size={20} />
                <div>
                  <h3 className="font-bold text-white">Email</h3>
                  <a
                    href="mailto:marcelo-elizalde@hotmail.com"
                    className="text-gray-300 hover:text-emerald-500 transition-colors"
                  >
                    marcelo-elizalde@hotmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-emerald-500 mt-1" size={20} />
                <div>
                  <h3 className="font-bold text-white">Teléfono</h3>
                  <a href="tel:+593995685525" className="text-gray-300 hover:text-emerald-500 transition-colors">
                    +593 99 568 5525
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-emerald-500 mt-1" size={20} />
                <div>
                  <h3 className="font-bold text-white">Ubicación</h3>
                  <p className="text-gray-300">Ecuador - Quito</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="font-bold mb-4 text-white">Redes Sociales</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Aryy234/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-emerald-900 p-3 rounded-full transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="text-gray-300" size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/ariel-elizalde-180963227"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-emerald-900 p-3 rounded-full transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="text-gray-300" size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Columna Derecha - GIF Desarrollador */}
          <div className="flex items-center justify-center">
            <div className="transition-transform duration-300 hover:scale-105 hover:brightness-110 bg-gray-900/50 p-4 rounded-xl backdrop-blur-sm">
              <Image
                src="https://static.tumblr.com/8f696f26c36681d27a39d5a008f671ed/ldnyi3s/IFxoxt9lp/tumblr_static_ejrjzplsbvkg8gww8sgcscs0o_2048_v2.gif"
                alt="Desarrollador Pixel Art"
                width={600}
                height={450}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

