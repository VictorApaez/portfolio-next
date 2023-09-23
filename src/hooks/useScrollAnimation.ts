// useScrollAnimations.js
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

const useScrollAnimations = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);
  const defaultY = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);

  return {
    containerRef,
    backgroundY,
    textY,
    defaultY,
  };
};

export default useScrollAnimations;
