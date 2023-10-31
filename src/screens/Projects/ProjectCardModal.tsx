import React from "react";

function Modal({ project, onClose }: any) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center text-black">
      <div
        className="absolute inset-0 bg-black opacity-50 "
        onClick={onClose}
      ></div>
      <div className="relative bg-white p-8 rounded-lg w-96 h-128 overflow-auto">
        <button
          onClick={onClose}
          className="absolute right-8 bg-red-600 px-2 rounded-lg text-white"
        >
          Close
        </button>
        <h2 className="text-2xl mb-4">{project.name}</h2>
        <img
          src={project.imgUrl}
          alt={project.alt}
          className="mb-4 w-full h-48 object-cover"
        />
        <p className="mb-4">{project.shortDesc}</p>
        <div className="flex space-x-4 mb-6 flex-wrap">
          {project.icons.map((icon: any, idx: number) => (
            <img key={idx} src={icon.url} alt={icon.alt} className="w-8 h-8" />
          ))}
        </div>
        <div className="mt-4">
          {project.isLive && project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="transform bg-slate-400 py-2 px-4 rounded-lg mr-2 hover:bg-slate-500 transition-transform ease-in duration-200"
            >
              Live Demo
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="transform bg-slate-400 py-2 px-4 rounded-lg mr-2 hover:bg-slate-500 transition-transform ease-in duration-200"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
