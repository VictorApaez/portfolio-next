import React from "react";
import { projects } from "../../data/projects";
import { ProjectDetails } from "./ProjectDetails";
import { SectionHeader } from "@/components/SectionHeader";
import { ParallaxDivider } from "@/components/ParallaxDivider";

export default function Projects() {
  return (
    <section id="projects" className=" my-32 bg-slate-700">
      <SectionHeader header={"Things I have built"} />
      <div className="flex flex-wrap justify-between">
        {projects.map((project, id) => (
          <ProjectDetails project={project} />
        ))}
      </div>
    </section>
  );
}
