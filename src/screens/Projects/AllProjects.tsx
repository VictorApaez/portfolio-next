"use client";
import React, { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/screens/Projects/ProjectCard";
import { fullStackIcons } from "@/data/icons";

export default function AllProjects() {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  const toggleIconSelection = (iconName: string): void => {
    if (selectedIcon === iconName) {
      setSelectedIcon(null);
    } else {
      setSelectedIcon(iconName);
    }
  };

  const filteredProjects = selectedIcon
    ? projects.filter((project) =>
        project.icons.some((icon) => icon.name === selectedIcon)
      )
    : projects;

  return (
    <section className="min-h-screen p-10 md:px-40 bg-gradient-180 relative">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Filter by</h1>
      </div>
      <div
        className="flex flex-row flex-wrap mb-6 p-4 rounded-xl mb-"
        style={{ backgroundColor: " #182748" }}
      >
        {fullStackIcons.map((icon, i) => (
          <img
            key={i}
            src={icon.url}
            width={50}
            className={`mx-2 transform transition-all duration-150 hover:scale-125 shadow-md hover:shadow-lg cursor-pointer 
            ${
              icon.name == selectedIcon
                ? "border-4 border-red-500 rounded-full scale-125 p-2"
                : ""
            }`}
            alt={icon.alt}
            onClick={() => toggleIconSelection(icon.name)}
          />
        ))}
      </div>

      <div className="flex flex-wrap -m-4 relative">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
