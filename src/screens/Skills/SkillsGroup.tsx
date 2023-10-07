import React from "react";
import { MotionValue, motion } from "framer-motion";

type Icon = {
  name: string;
  url: string;
};

type SkillsGroupProps = {
  iconSrc: string;
  altText: string;
  title: string;
  icons: Icon[];
  y?: MotionValue;
  x?: MotionValue;
  opacity: MotionValue;
  scale?: number; // Made it optional since a default is provided
};

export const SkillGroup: React.FC<SkillsGroupProps> = ({
  iconSrc,
  altText,
  title,
  icons,
  y,
  x,
  opacity,
  scale = 1,
}) => {
  const styles = {
    ...(x ? { x } : { y }),
    opacity,
    scale,
  };

  return (
    <motion.div
      className="bg-slate-500 p-5 rounded-xl w-full mx-2 my-10 md:my-0 flex flex-col place-items-center shadow-2xl mb-20 min-w-[200px] max-w-[380px]"
      style={styles}
    >
      <div className="flex flex-col place-items-center bg-slate-400 p-4 rounded-lg -mt-20 w-1/2 h-30 shadow-xl">
        <img src={iconSrc} alt={altText} className="w-10 md-w-20" />
        <h1 className="text-xl md:text-3xl text-content-header ">{title}</h1>
      </div>
      <ul className="w-full name-container p-0 mt-10">
        {icons.map((icon, index) => (
          <React.Fragment key={index}>
            <li className="flex items-center mx-2 mb-4 min-w-1/4 max-w-1/3 name-item">
              <img src={icon.url} className="w-6 mr-4" alt={icon.name} />
              <p className="text-lg">{icon.name}</p>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </motion.div>
  );
};
