import { motion, MotionValue } from "framer-motion";
import React from "react";

type ContentProps = {
  y: MotionValue<string>;
};

export const Content: React.FC<ContentProps> = ({ y }) => {
  return (
    <motion.div
      className="relative z-10 m-28  flex place-items-center flex-col text-content-primary"
      style={{ y: y }}
    >
      <h1 className="font-bold text-8xl">Victor Apaez</h1>
      <p className="text-2xl pt-2">Software Engineer</p>
    </motion.div>
  );
};
