"use client";
import React, { useRef } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { ProjectType } from "@/data/projects";
import { StackIcons } from "./StackIcons";
import Link from "next/link";

type ProjectsProps = {
  project: ProjectType;
};

export const ProjectDetails: React.FC<ProjectsProps> = ({ project }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end start", "start end"],
  });

  const distanceToTravel = window.innerHeight * 0.7;
  const y = useTransform(scrollYProgress, [0, 1], [0, -distanceToTravel]);
  const { imgUrl, icons, isLive, demoLink, githubLink } = project;

  return (
    <div
      ref={ref}
      style={{
        height: "80vh",
        overflow: "hidden",
        width: "100%",
        position: "relative",
        border: "2px solid white",
      }}
    >
      <motion.div
        style={{
          y: y,
          height: "120vh",
          width: "100%",
          background: `url(${project.imgUrl}) 0% 0% / cover no-repeat`,
          backgroundPosition: "center",
        }}
      ></motion.div>
      <div
        className="h-full w-full absolute top-0 p-32"
        style={{ background: "rgba(0, 0, 0, 0.7)", zIndex: 2 }}
      >
        <div className="flex flex-col justify-center place-items-start h-full">
          <h1 className="bold text-8xl">{project.name}</h1>
          {/* <p className="max-w-lg text-xl">{project.shortDesc}</p> */}
          {/* <StackIcons icons={icons} /> */}
          <div className="m-2">
            {isLive && (
              <Link href={demoLink || ""} target="_blank">
                <button
                  className="font-bold py-2 px-4 rounded-lg mr-2 bg-accent-2 transform transition-transform duration-300 hover:bg-accent-4 hover:shadow-lg hover:scale-110"
                  style={{ transition: "all 0.3s ease" }}
                >
                  Live Demo
                </button>
              </Link>
            )}
            <Link href={githubLink} target="_blank">
              <button
                className="font-bold py-2 px-4 rounded-lg mr-2 bg-accent-3 transform transition-transform duration-300 hover:bg-accent-4 hover:shadow-lg hover:scale-110"
                style={{ transition: "all 0.3s ease" }}
              >
                Github
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
