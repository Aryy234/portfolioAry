"use client";

import Image from "next/image";
import type React from "react";
import { useEffect, useState } from "react";

interface Skill {
  name: string;
  icon: string;
  url?: string;
}

interface SkillIconsProps {
  skills: Skill[];
  animationKey?: number;
}

const SkillIcons: React.FC<SkillIconsProps> = ({ skills, animationKey }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [animationKey]);

  return (
    <>
      {skills.map((skill, index) => (
        <a
          key={`${skill.name}-${index}-${animationKey}`}
          href={skill.url || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            flex flex-col items-center group 
            transform transition-all duration-500 
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
          title={`Visitar sitio oficial de ${skill.name}`}
          style={{
            transitionDelay: `${index * 0.05}s`,
          }}
        >
          <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-gray-900 rounded-xl shadow-lg border border-gray-700 hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300 p-3 group-hover:-translate-y-2 group-hover:border-emerald-500 overflow-hidden">
            {/* Efecto de fondo */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-800 opacity-50 group-hover:opacity-0 transition-opacity" />
            
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={skill.icon || "/placeholder.svg"}
                alt={skill.name}
                width={80}
                height={80}
                className="object-contain p-1 filter group-hover:brightness-110 transition-all duration-300 transform group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/80?text=" + skill.name;
                }}
                unoptimized
              />
            </div>
            
            {/* Efecto de brillo al hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/0 to-teal-400/0 group-hover:from-emerald-500/10 group-hover:to-teal-400/20 transition-all duration-300" />
          </div>
          
          <div className="mt-3 text-center">
            <span className="text-sm font-medium text-gray-400 group-hover:text-emerald-400 transition-colors duration-300">
              {skill.name}
            </span>
          </div>
        </a>
      ))}
    </>
  );
};

export default SkillIcons;

