import React, { useState, useRef } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { ProjectType } from "@/data/projects";
import { Roboto } from "next/font/google";
import Modal from "./ProjectCardModal";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

type ProjectsProps = {
  project: ProjectType;
};

export const ParallaxProject: React.FC<ProjectsProps> = ({ project }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end start", "start end"],
  });

  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

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
      {isModalVisible && <Modal project={project} onClose={handleCloseModal} />}

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
        className="h-full w-full absolute top-0 p-32 cursor-pointer"
        style={{ background: "rgba(0, 0, 0, 0.6)", zIndex: 2 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleOpenModal}
      >
        <div className="flex flex-col justify-center place-items-start h-full">
          <h1 className="bold text-7xl relative">
            {project.name}
            <motion.div
              className="absolute -bottom-8 left-0 h-1"
              style={{ backgroundColor: "#eb3a22" }}
              initial={{ width: 0 }}
              animate={isHovered ? { width: "60%" } : { width: 0 }}
              transition={{ duration: 0.15 }}
            />
          </h1>
        </div>
      </div>
    </div>
  );
};
