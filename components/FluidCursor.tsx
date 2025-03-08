"use client"

import { useEffect } from "react"

const FluidCursor = () => {
  useEffect(() => {
    // Eliminar cualquier elemento cursor anterior para evitar duplicados
    const oldCursor = document.getElementById("cursor")
    if (oldCursor) {
      document.body.removeChild(oldCursor)
    }

    // Constantes para la configuración del cursor
    const TAIL_LENGTH = 20
    const CURSOR_SIZE = 28

    // Crear el filtro SVG para el efecto gooey
    const svgFilter = document.createElement("div")
    svgFilter.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" style="display: none;">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur"></feGaussianBlur>
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15" result="goo"></feColorMatrix>
            <feComposite in="SourceGraphic" in2="goo" operator="atop"></feComposite>
          </filter>
        </defs>
      </svg>
    `
    document.body.appendChild(svgFilter)

    // Crear el contenedor del cursor
    const cursor = document.createElement("div")
    cursor.id = "cursor"
    cursor.style.cssText = `
      position: fixed;
      top: ${CURSOR_SIZE * -0.5}px;
      left: ${CURSOR_SIZE * -0.5}px;
      pointer-events: none;
      mix-blend-mode: difference;
      filter: url(#goo);
      z-index: 9999;
    `
    document.body.appendChild(cursor)

    // Variables para el seguimiento del cursor
    let mouseX = 0
    let mouseY = 0
    let cursorCircles: HTMLDivElement[] = []
    const cursorHistory = Array(TAIL_LENGTH).fill({ x: 0, y: 0 })

    // Función para inicializar los círculos del cursor
    function initCursor() {
      for (let i = 0; i < TAIL_LENGTH; i++) {
        const div = document.createElement("div")
        div.classList.add("cursor-circle")
        div.style.cssText = `
          position: absolute;
          top: 0;
          left: 0;
          width: ${CURSOR_SIZE}px;
          height: ${CURSOR_SIZE}px;
          border-radius: ${CURSOR_SIZE}px;
          background: white;
          transform-origin: center center;
        `
        cursor.appendChild(div)
      }
      cursorCircles = Array.from(document.querySelectorAll(".cursor-circle"))
    }

    // Función para actualizar la posición del cursor
    function updateCursor() {
      cursorHistory.shift()
      cursorHistory.push({ x: mouseX, y: mouseY })

      for (let i = 0; i < TAIL_LENGTH; i++) {
        const current = cursorHistory[i]
        const next = cursorHistory[i + 1] || cursorHistory[TAIL_LENGTH - 1]

        const xDiff = next.x - current.x
        const yDiff = next.y - current.y

        current.x += xDiff * 0.35
        current.y += yDiff * 0.35

        if (cursorCircles[i]) {
          cursorCircles[i].style.transform = `translate(${current.x}px, ${current.y}px) scale(${i / TAIL_LENGTH})`
        }
      }
      requestAnimationFrame(updateCursor)
    }

    // Función para manejar el movimiento del mouse
    function onMouseMove(event: MouseEvent) {
      mouseX = event.clientX
      mouseY = event.clientY
    }

    // Agregar estilos para ocultar el cursor nativo
    const styleElement = document.createElement("style")
    styleElement.innerHTML = `
      body, a, button, [role="button"] {
        cursor: none !important;
      }
      
      @media (hover: none) {
        #cursor {
          display: none !important;
        }
        body, a, button, [role="button"] {
          cursor: auto !important;
        }
      }
    `
    document.head.appendChild(styleElement)

    // Inicializar y comenzar la animación
    document.addEventListener("mousemove", onMouseMove, false)
    initCursor()
    updateCursor()

    // Limpieza al desmontar el componente
    return () => {
      document.removeEventListener("mousemove", onMouseMove)
      if (cursor) document.body.removeChild(cursor)
      if (svgFilter) document.body.removeChild(svgFilter)
      if (styleElement) document.head.removeChild(styleElement)
    }
  }, [])

  return null
}

export default FluidCursor

