"use client"

import type React from "react"

import { useRouter, usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Home, User, Code, Mail } from "lucide-react"

const navItems = [
  { path: "/", label: "Inicio", icon: <Home size={16} /> },
  { path: "/sobre-mi", label: "Sobre Mí", icon: <User size={16} /> },
  { path: "/proyectos", label: "Proyectos", icon: <Code size={16} /> },
  { path: "/contacto", label: "Contacto", icon: <Mail size={16} /> },
]

export default function Navbar() {
  const router = useRouter()
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
      document.documentElement.style.position = 'fixed'
      document.documentElement.style.width = '100%'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
      document.documentElement.style.position = ''
      document.documentElement.style.width = ''
      document.body.style.width = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
      document.documentElement.style.position = ''
      document.documentElement.style.width = ''
      document.body.style.width = ''
    }
  }, [isMenuOpen])

  // Cierra el menú al cambiar el tamaño de la ventana a desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleNavigation = (path: string) => {
    if (path === pathname) return

    setIsMenuOpen(false)

    // Check if the browser supports View Transitions API
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        router.push(path)
      })
    } else {
      router.push(path)
    }
  }

  const NavLink = ({
    path,
    label,
    icon,
    mobile = false,
  }: { path: string; label: string; icon?: React.ReactNode; mobile?: boolean }) => {
    const isActive = pathname === path

    return (
      <button
        onClick={() => handleNavigation(path)}
        className={`
          group relative flex items-center gap-2 transition-all duration-300
          ${mobile ? "py-4 px-6 w-full text-left rounded-lg text-white text-xl" : "py-1 px-2"}
          ${
            isActive
              ? mobile
                ? "text-emerald-500 font-medium"
                : "text-emerald-500 font-medium"
              : mobile
                ? "text-white hover:text-emerald-400"
                : "text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400"
          }
          ${mobile && isActive ? "bg-emerald-500/10" : ""}
        `}
      >
        {icon && (
          <span
            className={`transition-all duration-300 ${mobile ? "text-2xl mr-2" : ""} ${isActive ? "text-emerald-500" : "text-gray-500 dark:text-gray-400 group-hover:text-emerald-500"}`}
          >
            {icon}
          </span>
        )}
        <span>{label}</span>

        {/* Underline effect for desktop only */}
        {!mobile && (
          <span
            className={`absolute -bottom-1 left-0 h-0.5 bg-emerald-500 transition-all duration-300 ease-out ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
          ></span>
        )}
      </button>
    )
  }

  return (
    <>
      {/* Global overflow fix */}
      <style jsx global>{`
        html, body {
          overflow-x: hidden;
          max-width: 100vw;
          position: relative;
        }
      `}</style>
      
      <nav
        className={`
        sticky top-0 z-50 py-4 px-6 md:px-12 transition-all duration-300 w-full max-w-full
        ${
          scrolled
            ? "bg-white/90 dark:bg-gray-900/95 shadow-md backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
            : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
        }
      `}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="font-bold text-xl relative">
            <button
              onClick={() => handleNavigation("/")}
              className="group flex items-center hover:opacity-90 transition-all text-gray-800 dark:text-gray-100"
            >
              <span className="relative">
                Ary's
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 ease-out group-hover:w-full"></span>
              </span>
              <span className="text-emerald-500 ml-1.5 relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">
                  DevPortfolio
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 ease-out group-hover:w-full"></span>
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden relative z-50 p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute left-0 top-2 w-6 h-0.5 bg-gray-700 dark:bg-gray-300 rounded transform transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1 bg-white" : ""}`}
              ></span>
              <span
                className={`absolute left-0 top-3 w-6 h-0.5 bg-gray-700 dark:bg-gray-300 rounded transition-all duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
              ></span>
              <span
                className={`absolute left-0 top-4 w-6 h-0.5 bg-gray-700 dark:bg-gray-300 rounded transform transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1 bg-white" : ""}`}
              ></span>
            </div>
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.path} path={item.path} label={item.label} icon={item.icon} />
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-40 bg-black w-screen h-screen flex flex-col">
            <div className="flex flex-col px-6 pt-24 pb-8 h-full overflow-y-auto">
              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <NavLink 
                    key={item.path} 
                    path={item.path} 
                    label={item.label} 
                    icon={item.icon} 
                    mobile={true} 
                  />
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-gray-800">
                <div className="text-sm text-gray-400 text-center">
                  <p>© {new Date().getFullYear()} Ary's DevPortfolio</p>
                  <p className="mt-1">Desarrollado con Next.js & TailwindCSS</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}