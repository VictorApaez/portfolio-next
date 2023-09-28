import React from "react";
import { projects } from "../../data/projects";
import { ProjectDetails } from "./ProjectDetails";

export default function Projects() {
  return (
    <section id="projects" className="p-20 my-32">
      <div className="flex place-items-center mb-20">
        <h1 className="text-5xl after:text-red-400">Things I've Built</h1>
        <div className="ml-5 w-1/3 h-[2px] bg-accent-1"></div>
      </div>
      <div className="flex flex-wrap justify-between">
        {projects.map((project, id) => (
          <ProjectDetails project={project} />
        ))}
      </div>
    </section>
  );
}
