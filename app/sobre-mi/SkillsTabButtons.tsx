import type React from "react";
import { Code, Database, BrainCircuit, Server, Sparkles } from "lucide-react";

interface SkillsTabButtonsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const SkillsTabButtons: React.FC<SkillsTabButtonsProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "frontend", label: "Frontend", icon: <Code size={18} /> },
    { id: "backend", label: "Backend", icon: <Server size={18} /> },
    { id: "databases", label: "Bases de Datos", icon: <Database size={18} /> },
    { id: "dataAnalysis", label: "Análisis de Datos", icon: <BrainCircuit size={18} /> },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`
            px-4 py-2.5 rounded-full flex items-center gap-2 transition-all duration-300
            font-medium text-sm md:text-base border
            ${
              activeTab === tab.id
                ? "bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-lg border-transparent transform scale-105"
                : "bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700 hover:border-gray-600"
            }
          `}
        >
          <div className={activeTab === tab.id ? "animate-pulse" : ""}>
            {tab.icon}
          </div>
          <span>{tab.label}</span>
          {activeTab === tab.id && (
            <Sparkles 
              size={14} 
              className="ml-1 text-yellow-300 animate-ping" 
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default SkillsTabButtons;

