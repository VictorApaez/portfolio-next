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
      {/* Project card */}
      <div
        onClick={handleOpenModal}
        className="bg-slate-600 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl group overflow-hidden cursor-pointer"
      >
        <img
          src={imgUrl}
          alt={alt}
          className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-center text-slate-100">
            {name}
          </h3>
        </div>
      </div>

      {/* Modal */}
      {isModalVisible && <Modal project={project} onClose={handleCloseModal} />}
    </div>
  );
};

export default ProjectCard;
