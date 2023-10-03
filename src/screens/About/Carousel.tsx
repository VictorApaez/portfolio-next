import React from "react";
import "./carousel.css";
import { iconsArray } from "@/data/icons";

const icons = iconsArray;

export const Carousel = () => {
  return (
    <section
      id="skills"
      className="flex justify-center w-full  absolute left-0 z-50 h-1/4 top-1/3 pl-[10%] pr-[10%]"
    >
      <div className="carousel-container  relative rounded-lg">
        <div className="carousel-images-container scroll-1">
          {icons.map((icon, i) => (
            <div className="carousel-image-container">
              <img
                key={i}
                className=""
                src={`${icon.url}`}
                alt="image of book"
              />
            </div>
          ))}
        </div>

        <div className="carousel-images-container scroll-2">
          {icons.map((icon, i) => (
            <div className="carousel-image-container ">
              <img
                key={i}
                className=""
                src={`${icon.url}`}
                alt="image of book"
              />
            </div>
          ))}
        </div>

        <div className=" absolute top-0 w-32 h-full z-10 bg-gradient-to-r from-cloud to-transparent " />
        <div className=" absolute top-0 right-0 w-32 h-full z-10 bg-gradient-to-l from-cloud to-transparent" />
      </div>
    </section>
  );
};
