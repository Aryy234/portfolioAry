// app/proyectos/data/projectsData.ts
export interface Project {
  id: string
  categoria: string
  titulo: string
  tecnologias: string[]
  rol: string
  descripcion: string
  estado: "En desarrollo" | "Completado"
  githubLink: string
  demoLink: string
  videoUrl: string
  imagenPortada: string
  imagenes: string[]
  destacado: boolean
}

export const proyectos: Project[] = [
  {
    id: "reconocimiento-voz-1",
    categoria: "Inteligencia Artificial",
    titulo: "Sistema de Reconocimiento de Voz",
    tecnologias: ["Python", "TensorFlow", "PyTorch", "Numpy"],
    rol: "Desarrollador de Machine Learning",
    descripcion: "Aplicación avanzada de reconocimiento de voz con capacidades de traducción en tiempo real.",
    estado: "En desarrollo",
    githubLink: "https://github.com/username/voice-recognition",
    demoLink: "https://voice-recognition-demo.vercel.app",
    videoUrl: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
    imagenPortada: "https://th.bing.com/th/id/OIP.2hqKTjYz3_-VnmxAeEqQTwHaEO?rs=1&pid=ImgDetMain",
    imagenes: [
      "https://th.bing.com/th/id/OIP.2hqKTjYz3_-VnmxAeEqQTwHaEO?rs=1&pid=ImgDetMain",
      "https://www.bbvaapimarket.com/wp-content/uploads/2018/08/recursosprogramadores.png",
      "https://www.bbvaapimarket.com/wp-content/uploads/2018/08/recursosprogramadores.png",
    ],
    destacado: true,
  },
  {
    id: "analisis-datos-1",
    categoria: "Análisis de Datos",
    titulo: "Dashboard de Análisis Predictivo",
    tecnologias: ["Python", "Pandas", "Scikit-learn", "Plotly"],
    rol: "Data Scientist",
    descripcion: "Dashboard interactivo para análisis predictivo de datos empresariales con visualizaciones avanzadas.",
    estado: "Completado",
    githubLink: "https://github.com/username/predictive-dashboard",
    demoLink: "https://predictive-dashboard.vercel.app",
    videoUrl: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
    imagenPortada: "https://www.bbvaapimarket.com/wp-content/uploads/2018/08/recursosprogramadores.png",
    imagenes: [
      "https://www.bbvaapimarket.com/wp-content/uploads/2018/08/recursosprogramadores.png",
      "https://www.bbvaapimarket.com/wp-content/uploads/2018/08/recursosprogramadores.png",
      "https://www.bbvaapimarket.com/wp-content/uploads/2018/08/recursosprogramadores.png",
    ],
    destacado: false,
  },
  {
    id: "chatbot-ia",
    categoria: "Inteligencia Artificial",
    titulo: "Chatbot con IA Avanzada",
    tecnologias: ["JavaScript", "Node.js", "OpenAI API", "React"],
    rol: "Desarrollador Full Stack",
    descripcion:
      "Chatbot inteligente que utiliza modelos de lenguaje avanzados para proporcionar respuestas contextuales.",
    estado: "En desarrollo",
    githubLink: "https://github.com/username/ai-chatbot",
    demoLink: "https://ai-chatbot-demo.vercel.app",
    videoUrl: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
    imagenPortada: "https://www.bbvaapimarket.com/wp-content/uploads/2018/08/recursosprogramadores.png",
    imagenes: [
      "https://www.bbvaapimarket.com/wp-content/uploads/2018/08/recursosprogramadores.png",
      "https://www.bbvaapimarket.com/wp-content/uploads/2018/08/recursosprogramadores.png",
      "https://www.bbvaapimarket.com/wp-content/uploads/2018/08/recursosprogramadores.png",
    ],
    destacado: true,
  },
  {
    id: "app-movil-fitness",
    categoria: "Desarrollo Móvil",
    titulo: "Aplicación de Fitness Personalizada",
    tecnologias: ["React Native", "Firebase", "Redux", "Expo"],
    rol: "Desarrollador Móvil",
    descripcion: "Aplicación móvil que ofrece rutinas de ejercicio personalizadas y seguimiento de progreso.",
    estado: "Completado",
    githubLink: "https://github.com/username/fitness-app",
    demoLink: "https://fitness-app-demo.vercel.app",
    videoUrl: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
    imagenPortada: "https://www.bbvaapimarket.com/wp-content/uploads/2018/08/recursosprogramadores.png",
    imagenes: [
      "https://www.bbvaapimarket.com/wp-content/uploads/2018/08/recursosprogramadores.png",
      "https://www.bbvaapimarket.com/wp-content/uploads/2018/08/recursosprogramadores.png",
      "https://www.bbvaapimarket.com/wp-content/uploads/2018/08/recursosprogramadores.png",
    ],
    destacado: false,
  },
  {
    id: "plataforma-elearning",
    categoria: "Desarrollo Web",
    titulo: "Plataforma de E-Learning",
    tecnologias: ["Next.js", "MongoDB", "Tailwind CSS", "AWS"],
    rol: "Arquitecto de Software",
    descripcion: "Plataforma educativa con cursos interactivos, evaluaciones y seguimiento de progreso del estudiante.",
    estado: "En desarrollo",
    githubLink: "https://github.com/username/elearning-platform",
    demoLink: "https://elearning-platform-demo.vercel.app",
    videoUrl: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
    imagenPortada: "https://th.bing.com/th/id/OIP.2hqKTjYz3_-VnmxAeEqQTwHaEO?rs=1&pid=ImgDetMain",
    imagenes: [
      "https://th.bing.com/th/id/OIP.2hqKTjYz3_-VnmxAeEqQTwHaEO?rs=1&pid=ImgDetMain",
      "https://www.bbvaapimarket.com/wp-content/uploads/2018/08/recursosprogramadores.png",
      "https://th.bing.com/th/id/OIP.2hqKTjYz3_-VnmxAeEqQTwHaEO?rs=1&pid=ImgDetMain",
    ],
    destacado: true,
  },

  {
    id: "plataforma-elearning 2.0",
    categoria: "Deep Learnig",
    titulo: "Plataforma de E-Learning",
    tecnologias: ["Next.js", "MongoDB", "Tailwind CSS", "AWS"],
    rol: "Arquitecto de Software",
    descripcion: "Plataforma educativa con cursos interactivos, evaluaciones y seguimiento de progreso del estudiante.",
    estado: "En desarrollo",
    githubLink: "https://github.com/username/elearning-platform",
    demoLink: "https://elearning-platform-demo.vercel.app",
    videoUrl: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
    imagenPortada: "https://th.bing.com/th/id/OIP.2hqKTjYz3_-VnmxAeEqQTwHaEO?rs=1&pid=ImgDetMain",
    imagenes: [
      "https://th.bing.com/th/id/OIP.2hqKTjYz3_-VnmxAeEqQTwHaEO?rs=1&pid=ImgDetMain",
      "https://www.bbvaapimarket.com/wp-content/uploads/2018/08/recursosprogramadores.png",
      "https://th.bing.com/th/id/OIP.2hqKTjYz3_-VnmxAeEqQTwHaEO?rs=1&pid=ImgDetMain",
    ],
    destacado: true,
  },

]

// Función para obtener todos los proyectos por categoría
export const getProyectosPorCategoria = (categoria: string) => {
  return proyectos.filter((proyecto) => proyecto.categoria === categoria)
}

// Función para obtener un proyecto específico
export const getProyectoPorId = (id: string) => {
  return proyectos.find((proyecto) => proyecto.id === id)
}

// Obtener proyectos por estado
export const getProyectosPorEstado = (estado: "En desarrollo" | "Completado") => {
  return proyectos.filter((proyecto) => proyecto.estado === estado)
}

// Función para obtener proyectos destacados
export const getProyectosDestacados = () => {
  return proyectos.filter((proyecto) => proyecto.destacado === true)
}

// Exportación por defecto para importar todo el módulo
export default {
  proyectos,
  getProyectosPorCategoria,
  getProyectoPorId,
  getProyectosPorEstado,
  getProyectosDestacados,
}

