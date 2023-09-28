import { MotionValue, motion, motionValue } from "framer-motion";
import React from "react";

type BackgroundLayerProps = {
  zIndex: number;
  img: string;
  y: MotionValue<string>;
  bgPosition: string;
};

export const BackgroundLayer: React.FC<BackgroundLayerProps> = ({
  zIndex,
  img,
  y,
  bgPosition,
}) => {
  return (
    <motion.div
      className={`absolute inset-0`}
      style={{
        backgroundImage: `url(/${img})`,
        backgroundPosition: `${bgPosition}`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        y: y,
        zIndex: zIndex,
      }}
    />
  );
};
