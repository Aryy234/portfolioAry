// Definición de la interfaz para la estructura de datos de trabajo
export interface Job {
  title: string
  company: string
  period: string
  description: string[]
}

// Datos de experiencia laboral
export const jobs: Job[] = [
  {
    title: "Junior Frontend Developer",
    company: "Seometric.io Remote Work",
    period: "Sept. 2022 – Mar. 2023",
    description: [
      "Sistema de Métricas: Diseñé e Implementé un sistema de métricas para proporcionar a los usuarios información valiosa sobre el rendimiento y los resultados de sus acciones.",
      "Tablas de Selección de Datos: Desarrollé tablas interactivas que permitieron a los usuarios seleccionar datos de manera masiva, mejorando la eficiencia y la usabilidad.",
      "Área de Pruebas de IA: Establecí un espacio de pruebas donde los usuarios podían realizar pruebas en la inteligencia artificial que desarrollamos, utilizando tecnologías como OpenAl y gpt3-tokenizer.",
      "Importación de Documentos: Diseñé y programé botones que facilitaron la importación de documentos en formatos PDF, JSON y CSV, mejorando la interoperabilidad de la plataforma.",
      "Sistema de Inicio de Sesión: Implementé un sistema de inicio de sesión seguro y fácil de usar para garantizar la autenticación del usuario.",
      "Proceso de Diseño: Lideré el proceso de diseño desde la etapa de prototipado en Figma hasta la implementación del código, asegurando una experiencia de usuario coherente y atractiva.",
      "Tecnologías Utilizadas: Para desarrollar esta plataforma, utilicé tecnologias como Next.js, Supabase, Theme Ul, Zustand, OpenAl y gpt3-tokenizer.",
    ],
  },
  {
    title: "Junior Frontend Developer",
    company: "Aini28 Remote Work",
    period: "Ene. 2023 – Dic. 2022",
    description: [
      "Diseñé el modelo en Figma.",
      "Desarrollé el sitio web utilizando Next.js y Sanity.",
      "Implementé filtros de tamaño para permitir a los usuarios encontrar rápidamente peluches según sus preferencias.",
      "Agregué una barra de búsqueda eficiente para facilitar el descubrimiento de productos específicos.",
      "Creé un carrito de compras interactivo y una función de cotización.",
      "Mostré ofertas especiales para aumentar el atractivo de la plataforma.",
    ],
  },
]

