import React from "react";
import "./carousel.css";

type CarouselProp = {
  icons: {
    name: string;
    url: string;
  }[];
};

export const Carousel: React.FC<CarouselProp> = ({ icons }) => {
  return (
    <div className="carousel-container bg-slate-200 shadow-primary relative rounded-lg">
      <div className="carousel-images-container scroll-1">
        {icons.map((icon, i) => (
          <div className="carousel-image-container ">
            <img
              key={i}
              className="carousel-image"
              src={`${icon.url}`}
              alt="image of book"
            />

            <p className="text-content-secondary text-center">{icon.name}</p>
          </div>
        ))}
      </div>

      <div className="carousel-images-container scroll-2">
        {icons.map((icon, i) => (
          <div className="carousel-image-container ">
            <img
              key={i}
              className="carousel-image"
              src={`${icon.url}`}
              alt="image of book"
            />
            <p className="text-content-secondary text-center">{icon.name}</p>
          </div>
        ))}
      </div>

      <div className=" absolute top-0 w-32 h-full z-10 bg-gradient-to-r from-slate-200 to-transparent " />
      <div className=" absolute top-0 right-0 w-32 h-full z-10 bg-gradient-to-l from-slate-200 to-transparent" />
    </div>
  );
};