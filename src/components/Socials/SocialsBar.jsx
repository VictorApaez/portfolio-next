import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export const SocialsBar = () => {
  const icons = [
    {
      name: "LinkedIn",
      img: "https://img.icons8.com/color/48/linkedin.png",
      link: "https://www.linkedin.com/in/victor-apaez/",
      alt: "linkedin",
    },
    {
      name: "Github",
      img: "https://img.icons8.com/sf-black-filled/48/github.png",
      alt: "Github",
      link: "https://github.com/VictorApaez",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center max-w-fit">
      <section className={` rounded-tr-lg rounded-br-lg bg-slate-200`}>
        {icons.map((icon, i) => (
          <Link href={icon.link} target="_blank" key={i}>
            <motion.img
              src={icon.img}
              alt={icon.alt}
              className={`p-1 bg-slate-200 ${i === 0 ? "rounded-tr-lg" : ""} ${
                i === icons.length - 1 ? "rounded-br-lg" : ""
              }`}
              whileHover={{
                x: 15,
                borderTopRightRadius: 8,
                borderBottomRightRadius: 8,
              }} // Translates the image 10 pixels to the right on hover.
              transition={{ duration: 0.2 }} // Duration for the hover effect.
            />
          </Link>
        ))}
      </section>
    </div>
  );
};
