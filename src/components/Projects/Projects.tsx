import React from "react";
import { projects } from "../../data/projects";
import { ProjectDetails } from "./ProjectDetails";

export default function Projects() {
  return (
    <section id="projects" className="p-10 flex flex-wrap justify-evenly">
      {projects.map((project, id) => (
        <ProjectDetails project={project} />
      ))}
    </section>
  );
}
