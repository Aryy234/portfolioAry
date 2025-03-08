"use client";

import type React from "react";
import { useState, useEffect } from "react";
import SkillIcons from "./SkillIcons";
import SkillsTabButtons from "./SkillsTabButtons";

interface SkillsSectionProps {
  skills: any;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const [activeTab, setActiveTab] = useState("frontend");
  const [animationKey, setAnimationKey] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setAnimationKey((prev) => prev + 1);
  };

  const getTabTitle = () => {
    switch(activeTab) {
      case "frontend": return "Tecnologías Frontend";
      case "backend": return "Tecnologías Backend";
      case "databases": return "Bases de Datos";
      case "dataAnalysis": return "Herramientas de Análisis";
      default: return "Tecnologías";
    }
  };

  const skillCount = skills[activeTab]?.length || 0;

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-md p-8 rounded-xl shadow-xl border border-gray-700">
      <h2 className="text-3xl font-bold mb-2 text-center text-white">Mis Habilidades</h2>
      <p className="text-gray-400 text-center mb-8 text-sm md:text-base">
        Conocimientos técnicos y tecnologías que utilizo
      </p>

      <SkillsTabButtons activeTab={activeTab} setActiveTab={handleTabChange} />

      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-2xl"
          style={{
            opacity: isMounted ? 1 : 0,
            transition: "opacity 1s ease-in-out"
          }}
        />
        
        <div className="bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg border border-gray-700 overflow-hidden relative z-10">
          <h3 className="text-xl font-medium text-emerald-400 mb-6 text-center">
            {getTabTitle()} <span className="text-gray-500 text-sm ml-2">({skillCount})</span>
          </h3>
          
          <div
            key={animationKey}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8"
          >
            <SkillIcons skills={skills[activeTab]} animationKey={animationKey} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;

