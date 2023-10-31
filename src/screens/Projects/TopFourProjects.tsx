import React from "react";
import { ParallaxProject } from "./ParallaxProject";
import { SectionHeader } from "@/components/SectionHeader";
import { favProjects } from "../../data/projects";
import Link from "next/link";
import Modal from "./ProjectCardModal";

export default function TopFourProjects() {
  return (
    <section id="projects" className=" pt-32 bg-gradient-0">
      <div className="mb-10">
        <SectionHeader header={"Projects"} />
      </div>
      <div>
        <ParallaxProject project={favProjects[0]} />
        <div className="flex flex-col sm:flex-row">
          <ParallaxProject project={favProjects[3]} />
          <ParallaxProject project={favProjects[2]} />
        </div>
        <ParallaxProject project={favProjects[1]} />
      </div>
      <div className="flex px-10 justify-center place-items-center mt-32 md before:content-[''] before:h-1 before:w-full before:bg-slate-400 after:content-[''] after:h-1 after:w-full after:bg-slate-400">
        <Link href={"/projects"}>
          <div className="cursor-pointer hoverEffect flex min-w-max p-5 place-items-center rounded-xl mx-0 sm:mx-10 transition-transform transform hover:scale-105">
            <h1 className="text-4xl mr-2">ALL PROJECTS</h1>
            <img
              src="https://img.icons8.com/android/32/up-right-arrow.png"
              alt="up-right-arrow"
            />
          </div>
        </Link>
      </div>
    </section>
  );
}
