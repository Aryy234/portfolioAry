import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  console.log("Footer component mounted");
  return (
    <footer className="bg-white dark:bg-black py-8 px-6 md:px-12 fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} DevPortfolio Ariel Elizalde. Todos los derechos reservados.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/Aryy234"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-500 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/ariel-elizalde-180963227"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="marcelo-elizalde@hotmail.com"
              className="text-gray-600 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-500 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
