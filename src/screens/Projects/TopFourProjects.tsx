import React from "react";
import { ProjectDetails } from "./ParallaxProject";
import { SectionHeader } from "@/components/SectionHeader";
import { favProjects } from "../../data/projects";

export default function TopFourProjects() {
  return (
    <section id="projects" className=" py-32 bg-gradient-0">
      <div className="mb-10">
        <SectionHeader header={"Projects"} />
      </div>
      <div>
        <ProjectDetails project={favProjects[0]} />
        <div className="flex">
          <ProjectDetails project={favProjects[3]} />
          <ProjectDetails project={favProjects[2]} />
        </div>
        <ProjectDetails project={favProjects[1]} />
      </div>
      <div className="flex px-10 justify-center place-items-center mt-32 md before:content-[''] before:h-1 before:w-full before:bg-slate-400 after:content-[''] after:h-1 after:w-full after:bg-slate-400">
        <div className="cursor-pointer hoverEffect flex min-w-max p-5 place-items-center bg-slate-500 hover:bg-slate-600 rounded-xl mx-10 transition-transform transform hover:scale-105">
          <h1 className="text-3xl mr-2">VIEW ALL PROJECTS</h1>
          <img
            src="https://img.icons8.com/android/32/up-right-arrow.png"
            alt="up-right-arrow"
          />
        </div>
      </div>
    </section>
  );
}
