"use client";
import React, { useRef } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { ProjectType } from "@/data/projects";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

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

  return (
    <div
      ref={ref}
      style={{
        height: "65vh",
        overflow: "hidden",
        width: "100%",
        position: "relative",
      }}
    >
      <motion.div
        style={{
          y: y,
          height: "110vh",
          width: "100%",
          background: `url(${project.imgUrl}) 0% 0% / cover no-repeat`,
          backgroundPosition: "center",
        }}
      />
      <div
        className="h-full w-full absolute top-0 p-32"
        style={{ background: "rgba(0, 0, 0, 0.6)", zIndex: 2 }}
      >
        <div className="flex flex-col justify-center place-items-start h-full">
          <h1 className={"bold text-7xl"}>{project.name}</h1>
        </div>
      </div>
    </div>
  );
};
