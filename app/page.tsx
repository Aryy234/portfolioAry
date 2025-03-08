"use client";

import Image from "next/image";
import TypingAnimation from "../components/TypingAnimation";
import AnimatedBackground from "../components/AnimatedBackground";
import ActionButtons from "../components/ActionButtons";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <div className="min-h-[calc(100vh-200px)] flex flex-col justify-center relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1
                className="text-4xl md:text-6xl font-bold mb-6 fade-in text-white"
                style={{ animationDelay: "0s" }}
              >
                Hola, soy <span className="text-emerald-500">Ariel Elizalde</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-300 mb-8">
                <TypingAnimation
                  text="Estudiante de Ingeniería en Ciencias de la Computación"
                  delay={0.5}
                />
              </h2>
              <p
                className="text-lg mb-8 fade-in text-gray-300"
                style={{ animationDelay: "1s" }}
              >
                Especializado en desarrollo web, inteligencia artificial y ciencia
                de datos. Creando soluciones tecnológicas innovadoras para
                problemas complejos.
              </p>
              <ActionButtons />
            </div>
            <div className="flex justify-center fade-in animate-bounce" style={{ animationDelay: "2s" }}>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-emerald-500 shadow-lg shadow-emerald-500/20">
                <Image
                  src="https://img.freepik.com/premium-photo/cyberpunk-manga-comics-girl-poster-art-generative-ai_739548-12960.jpg"
                  alt="Foto de perfil"
                  fill
                  className="object-cover"
                  title="Foto de perfil"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

