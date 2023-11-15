"use client";
import React, { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/screens/Projects/ProjectCard";
import { filteredIcons } from "@/data/icons";

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
      <div className="mb-2">
        <h1 className="text-2xl font-bold">Filter by Icon: </h1>
      </div>
      <div
        className="flex flex-row flex-wrap p-4 rounded-xl mb-14 justify-center"
        style={{ backgroundColor: " #182748" }}
      >
        {filteredIcons.map((icon, i) => (
          <div
            className="m-2 flex flex-col justify-center place-items-center"
            key={i}
          >
            <img
              src={icon.url}
              width={50}
              className={`mx-2 transform transition-all duration-150 hover:scale-125 cursor-pointer 
            ${
              icon.name == selectedIcon
                ? "border-4 border-red-500 rounded-full scale-125 p-2"
                : ""
            }`}
              alt={icon.alt}
              onClick={() => toggleIconSelection(icon.name)}
            />
            <p>{icon.name}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap -m-4 relative">
        {filteredProjects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
}
