import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

type ParallaxDivider = {
  url: string;
};

export const ParallaxDivider: React.FC<ParallaxDivider> = ({ url }) => {
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
        height: "60vh",
        overflow: "hidden",
        border: "solid 2px white",
        width: "100%",
        marginBottom: "1%",
        position: "relative",
      }}
    >
      <motion.div
        style={{
          y: y,
          height: "100vh",
          width: "100%",
          background: `url(${url}) 0% 0% / cover no-repeat`,
          backgroundPosition: "center",
          // filter: "grayscale(100%)",
        }}
        whileHover={{ filter: "grayscale(0%)" }}
      ></motion.div>
      <div
        className="h-full w-full absolute top-0"
        style={{ background: "rgba(0, 0, 0, 0.7)", zIndex: 2 }}
      >
        <div className="flex justify-center place-items-center h-full">
          <h1 className="text-5xl">Snake Game</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            eaque harum reprehenderit reiciendis culpa eligendi dolor fugiat
            quidem animi recusandae, esse consequatur quos facilis, unde nobis
            consequuntur neque at beatae!
          </p>
        </div>
      </div>
    </div>
  );
};
