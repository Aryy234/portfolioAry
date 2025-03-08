const EducationSection = () => {
  return (
    <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-white">Educación</h2>
      <div className="space-y-6">
        <div className="border-l-4 border-emerald-500 pl-4">
          <h3 className="font-bold text-lg text-white">Maestría en Ciencias de la Computación</h3>
          <p className="text-gray-300 text-lg">Universidad Central del Ecuador</p>
          <p className="text-gray-300 text-lg">Especialización en Inteligencia Artificial y Aprendizaje Automático</p>
        </div>

        <div className="border-l-4 border-emerald-500 pl-4">
          <h3 className="font-bold text-lg text-white">Licenciatura en Ingeniería Informática</h3>
          <p className="text-gray-300 text-lg">Universidad Nacional, 2016-2020</p>
          <p className="text-gray-300 text-lg">
            Graduado con honores. Proyecto final: Sistema de reconocimiento de patrones
          </p>
        </div>
      </div>
    </div>
  )
}

export default EducationSection

