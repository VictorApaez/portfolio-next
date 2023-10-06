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
    <motion.div className="relative z-10 m-28 w-3/5  flex place-items-center flex-col text-content-primary">
      <h1
        className="font-bold text-9xl"
        style={{
          fontFamily: "Arial",
          letterSpacing: "30px",
        }}
      >
        VICTOR
      </h1>
      <div
        id="skills"
        className="flex justify-center w-full h-12 py-2 rounded-md"
        style={{
          backdropFilter: "blur(10px)", // This will create the blur effect
          backgroundColor: "rgba(0, 0, 0, 0.8)", // Adjust this for the desired level of opacity
        }}
      >
        <div className="carousel-container  relative">
          <div className="carousel-images-container scroll-1">
            {titles.map((title, i) => (
              <>
                <div className="carousel-image-container">
                  <p className=" bold text-3xl text">{title}</p>
                </div>
                <p className="text-white text-4xl">•</p>
              </>
            ))}
          </div>

          <div className="carousel-images-container scroll-2">
            {titles.map((title, i) => (
              <>
                <div className="carousel-image-container">
                  <p className=" bold text-3xl">{title}</p>
                </div>
                <p className="text-white text-4xl">•</p>
              </>
            ))}
          </div>
        </div>
      </div>
      <h1
        className="font-bold text-9xl"
        style={{ fontFamily: "Arial", letterSpacing: "30px" }}
      >
        APAEZ
      </h1>
      {/* <img src="me-thumbs-up.png" style={{ width: 150 }} /> */}
    </motion.div>
  );
};
