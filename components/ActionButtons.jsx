"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const ActionButtons = () => {
  const router = useRouter();

  const handleNavigation = (path) => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        router.push(path);
      });
    } else {
      router.push(path);
    }
  };

  return (
    <div className="flex flex-col items-center fade-in" style={{ animationDelay: "1.5s" }}>
      <div className="flex flex-wrap gap-4 justify-center mb-4">
        <button
          onClick={() => handleNavigation("/proyectos")}
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-md flex items-center gap-2 transition-colors button-glow button-animation"
        >
          Ver proyectos <ArrowRight size={18} />
        </button>
        <button
          onClick={() => handleNavigation("/contacto")}
          className="border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white px-6 py-3 rounded-md transition-colors button-glow button-animation"
        >
          Contactar
        </button>
      </div>
      <button
        className="border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white px-6 py-3 rounded-md transition-colors button-glow button-animation w-full md:w-1/2 mx-auto"
      >
        Descargar CV
      </button>
    </div>
  );
};

export default ActionButtons;

