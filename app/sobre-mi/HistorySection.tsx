import { Terminal } from "lucide-react"

const HistorySection = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800">
      {/* Barra de título de la terminal */}
      <div className="bg-gray-200 dark:bg-gray-800 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-sm font-medium ml-2 text-gray-700 dark:text-gray-300">
            ariel@portfolio: ~/mi-historia
          </span>
        </div>
        <Terminal size={16} className="text-gray-500" />
      </div>

      {/* Contenido de la terminal */}
      <div className="bg-gray-900 text-green-400 p-6 font-mono">
        <div className="mb-4">
          <span className="text-emerald-500">ariel@portfolio</span>:<span className="text-blue-400">~/mi-historia</span>
          $ <span className="text-yellow-300">cat</span> historia.md
        </div>

        <div className="mt-4 pl-2 border-l-2 border-emerald-500">
          <h2 className="text-2xl font-bold mb-4 text-emerald-400"># Mi Historia</h2>
          <p className="mb-4 text-lg text-gray-300">
            Soy estudiante de la carrera Ingeniero en Ciencias de la Computación apasionado por la tecnología y la
            innovación. Mi trayectoria comenzó cuando descubrí mi fascinación por la programación durante mis estudios
            universitarios.
          </p>
          <p className="mb-4 text-lg text-gray-300">
            A lo largo de mi carrera, he trabajado en diversos proyectos que me han permitido desarrollar habilidades en
            diferentes áreas de la informática, desde el desarrollo web hasta la inteligencia artificial.
          </p>
          <p className="text-lg text-gray-300">
            Mi objetivo es crear soluciones tecnológicas que tengan un impacto positivo en la sociedad, combinando mis
            conocimientos técnicos con una visión centrada en el usuario.
          </p>
        </div>

        <div className="mt-4 flex items-center">
          <span className="text-emerald-500">ariel@portfolio</span>:<span className="text-blue-400">~/mi-historia</span>
          $ <span className="animate-pulse">▌</span>
        </div>
      </div>
    </div>
  )
}

export default HistorySection

