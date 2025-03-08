import React, { useState } from "react";
import { Briefcase, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { jobs } from "./data/jobsData";

const ExperienceSection = () => {
  const [expandedJobs, setExpandedJobs] = useState<{ [key: number]: boolean }>({});

  const toggleJob = (index: number) => {
    setExpandedJobs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
      <h2 className="text-3xl font-bold tracking-tight mb-8 text-center text-white border-b pb-4 border-gray-700">
        Experiencia Laboral
      </h2>

      <div className="space-y-6">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="relative bg-gray-900 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-1 transform"
          >
            {/* Barra lateral con gradiente */}
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-emerald-400 to-blue-500"></div>

            {/* Encabezado del trabajo con hover interactivo */}
            <div 
              className="p-6 border-b border-gray-700 cursor-pointer" 
              onClick={() => toggleJob(index)}
            >
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-3 text-white">
                  <div className="bg-gray-800 p-2 rounded-full">
                    <Briefcase size={20} className="text-emerald-400" />
                  </div>
                  <h3 className="font-semibold text-xl text-white">{job.title}</h3>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center text-sm md:text-base text-gray-300">
                    <Calendar size={16} className="mr-2" />
                    {job.period}
                  </div>
                  {expandedJobs[index] ? (
                    <ChevronUp size={20} className="text-emerald-400" />
                  ) : (
                    <ChevronDown size={20} className="text-emerald-400" />
                  )}
                </div>
              </div>
              <p className="text-gray-300 mt-2 text-lg font-medium">{job.company}</p>
            </div>

            {/* Contenido con texto justificado - completamente oculto cuando está colapsado */}
            {expandedJobs[index] && (
              <div className="p-6 text-white animate-fadeIn">
                <ul className="space-y-4 text-base md:text-lg">
                  {job.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-gray-200">
                      <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-justify">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;

