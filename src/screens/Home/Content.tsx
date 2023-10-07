import { motion, MotionValue } from "framer-motion";
import React from "react";
import { iconsArray } from "@/data/icons";

const icons = iconsArray;
const titles = [
  "Implementation Specialist",
  "Software Engineer",
  "Full Stack Developer",
  "Front End Developer",
];

type ContentProps = {
  y: MotionValue<string>;
};

export const Content: React.FC<ContentProps> = ({ y }) => {
  return (
    <motion.div className="relative z-10 m-4 md:m-28 w-full md:w-3/5 flex place-items-center flex-col text-content-primary">
      <h1
        className="font-bold text-5xl md:text-9xl"
        style={{
          fontFamily: "Arial",
          letterSpacing: "10px",
        }}
      >
        VICTOR
      </h1>
      <div
        className="flex justify-center w-full h-8 md:h-12 py-1 md:py-2 rounded-md"
        style={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        }}
      >
        <div className="carousel-container relative">
          <div className="carousel-images-container scroll-1">
            {titles.map((title, i) => (
              <>
                <div className="carousel-image-container">
                  <p className="text-xl md:text-3xl">{title}</p>
                </div>
                <p className="text-white text-3xl md:text-4xl">•</p>
              </>
            ))}
          </div>

          <div className="carousel-images-container scroll-2">
            {titles.map((title, i) => (
              <>
                <div className="carousel-image-container">
                  <p className="text-xl md:text-3xl">{title}</p>
                </div>
                <p className="text-white text-3xl md:text-4xl">•</p>
              </>
            ))}
          </div>
        </div>
      </div>
      <h1
        className="font-bold text-5xl md:text-9xl"
        style={{ fontFamily: "Arial", letterSpacing: "10px" }} // reduced for mobile
      >
        APAEZ
      </h1>
    </motion.div>
  );
};
