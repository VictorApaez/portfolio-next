"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { ProjectType } from "@/data/projects";
import { StackIcons } from "./StackIcons";

type ProjectsProps = {
  project: ProjectType;
};

export const ProjectDetails: React.FC<ProjectsProps> = ({ project }) => {
  const imageControls = useAnimation();

  const handleHoverStart = () => {
    imageControls.start({
      scale: 1.2,
      transition: { duration: 0.3 },
    });
  };

  const handleHoverEnd = () => {
    imageControls.start({
      scale: 1,
      transition: { duration: 0.3 },
    });
  };

  const { name, alt, shortDesc, imgUrl, icons, isLive } = project;

  return (
    <motion.div
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      className="flex-grow max-w-sm rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 p-4 bg-primary-3 mb-10 w-96 z-10 m-4 flex flex-col justify-between"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
      }}
    >
      <motion.img
        src={imgUrl}
        alt={alt}
        initial={{ scale: 1 }}
        animate={imageControls}
        className="rounded-lg h-48 object-cover"
      />

      <motion.div className="z-40">
        <h2 className="font-bold text-3xl mb-2 text-stone-50 mt-8">{name}</h2>
        <p className="text-base text-xl mb-2">{shortDesc}</p>
        <StackIcons icons={icons} />
        <div className="m-2">
          {isLive && (
            <button
              className="font-bold py-2 px-4 rounded-lg mr-2 bg-accent-2 transform transition-transform duration-300 hover:bg-accent-4 hover:shadow-lg hover:scale-110"
              style={{ transition: "all 0.3s ease" }}
            >
              Live Demo
            </button>
          )}
          <button
            className="font-bold py-2 px-4 rounded-lg mr-2 bg-accent-3 transform transition-transform duration-300 hover:bg-accent-4 hover:shadow-lg hover:scale-110"
            style={{ transition: "all 0.3s ease" }}
          >
            Github
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};