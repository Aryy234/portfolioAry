"use client"
import EducationSection from "./EducationSection"
import HistorySection from "./HistorySection"
import SkillsSection from "./SkillsSection"
import skillsData from "@/components/skills" // Import skillsData
import ExperienceSection from "./ExperienceSection"
import AnimatedBackground from "@/components/AnimatedBackground"

export default function SobreMi() {
  return (
    <>
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24 relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-12 text-center text-white">
          Sobre <span className="text-emerald-500">Mí</span>
        </h1>

        <div className="grid grid-cols-1 gap-12 mb-16">
          <HistorySection />
          <EducationSection />
          <ExperienceSection />
        </div>

        <SkillsSection skills={skillsData} />
      </div>
    </>
  )
}

