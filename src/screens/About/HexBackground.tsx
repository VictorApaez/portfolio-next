"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";

export const HexBackground = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["-0500px start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <div className="h-full w-full absolute top-0 left-0" ref={containerRef}>
      <motion.img
        src="hexagon.svg"
        alt=""
        className="absolute z-0"
        style={{ width: "25%", left: "33%", top: `-10%`, y: y1 }}
      />
      <motion.img
        src="hexagon.svg"
        alt=""
        className="absolute z-0"
        style={{ width: "25%", bottom: "10%", left: "-10%", y: y2 }}
      />
      <motion.img
        src="hexagon.svg"
        alt=""
        className="absolute z-0"
        style={{ width: "25%", right: "10%", bottom: "5%", y: y3 }}
      />
    </div>
  );
};
