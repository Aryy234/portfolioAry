"use client";

import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Crear array de puntos
    const dots = [];
    
    // Ajustar el tamaño del canvas al tamaño de la ventana
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Si es la primera vez, creamos los puntos
      if (dots.length === 0) {
        const dotCount = Math.floor((canvas.width * canvas.height) / 3500);
        
        for (let i = 0; i < dotCount; i++) {
          dots.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.25 + 0.15, 
            pulseSpeed: Math.random() * 0.008 + 0.002,
            pulseOffset: Math.random() * Math.PI * 2,
            glowIntensity: Math.random() * 0.25 + 0.1
          });
        }
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Variables para el efecto de ola
    let time = 0;
    const waveSpeed = 0.0004;

    // Función de animación
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#111';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      time += waveSpeed;
      
      dots.forEach(dot => {
        // Calcular el valor de pulsación
        const pulse = Math.sin(time * 3 + dot.pulseOffset) * 0.4 + 0.6;
        
        // Aplicar pulsación a la opacidad
        const currentOpacity = dot.opacity + (pulse - 0.6) * dot.glowIntensity;
        
        // Movimiento base sutil
        const movement = Math.sin(time * 1.5 + dot.pulseOffset) * 0.5;
        
        // Color normal sin efecto de mouse
        ctx.fillStyle = `rgba(76, 175, 80, ${currentOpacity})`;
        
        // Dibujar punto
        ctx.fillRect(dot.x + movement, dot.y, dot.size, dot.size);
        
        // Efecto de resplandor para algunos puntos
        if (pulse > 0.9 && Math.random() > 0.95) {
          ctx.shadowColor = 'rgba(76, 175, 80, 0.4)';
          ctx.shadowBlur = 4;
          ctx.fillRect(dot.x + movement, dot.y, dot.size, dot.size);
          ctx.shadowBlur = 0;
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default AnimatedBackground;

