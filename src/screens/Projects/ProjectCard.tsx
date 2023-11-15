"use client";
import React, { useState } from "react";
import Modal from "./ProjectCardModal";

const ProjectCard = ({ project }: any) => {
  const { alt, imgUrl, name } = project;

  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div
        onClick={handleOpenModal}
        className="bg-slate-700 hover:bg-slate-600  hover:shadow-xl transition-all duration-300 rounded-md group overflow-hidden cursor-pointer"
      >
        <div className="group overflow-hidden">
          <img
            src={imgUrl}
            alt={alt}
            className="w-full h-48 object-cover transform transition-transform duration-300 scale-110 group-hover:scale-100"
          />
        </div>

        <div className="p-4 flex">
          <p className="text-lg text-center tracking-wider text-blue-100 transform transition-all duration-200 group-hover:translate-x-2">
            {name}
          </p>
        </div>
      </div>

      {isModalVisible && <Modal project={project} onClose={handleCloseModal} />}
    </div>
  );
};

export default ProjectCard;
