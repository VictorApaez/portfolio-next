import React from "react";
import { projects } from "../../data/projects";
import { ProjectDetails } from "./ProjectDetails";
import { SectionHeader } from "@/components/SectionHeader";
import { ParallaxDivider } from "@/components/ParallaxDivider";
import { favProjects } from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className=" py-32 bg-gradient-0">
      <SectionHeader header={"Things I have built"} />
      <div>
        <ProjectDetails project={favProjects[0]} />
        <div className="flex">
          <ProjectDetails project={favProjects[3]} />
          <ProjectDetails project={favProjects[2]} />
        </div>
        <ProjectDetails project={favProjects[1]} />
      </div>
    </section>
  );
}
