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
      mailto: false,
    },
    {
      name: "Github",
      img: "https://img.icons8.com/sf-black-filled/48/github.png",
      alt: "Github",
      link: "https://github.com/VictorApaez",
      mailto: false,
    },
    {
      name: "Email",
      img: "https://img.icons8.com/plasticine/48/new-post--v2.png",
      alt: "email",
      link: "mailto:example@example.com?subject=Question from Website&body=Hello, I have a question about...",
      mailto: true,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center max-w-fit">
      <section className={` rounded-tr-lg rounded-br-lg bg-slate-200`}>
        {icons.map((icon, i) =>
          icon.mailto ? (
            <a href={icon.link} key={i}>
              <motion.img
                src={icon.img}
                alt={icon.alt}
                className={`p-1 bg-slate-200 ${
                  i === 0 ? "rounded-tr-lg" : ""
                } ${i === icons.length - 1 ? "rounded-br-lg" : ""}`}
                whileHover={{
                  x: 15,
                  borderTopRightRadius: 8,
                  borderBottomRightRadius: 8,
                }}
                transition={{ duration: 0.2 }}
              />
            </a>
          ) : (
            <Link href={icon.link} key={i} target="_blank">
              <motion.img
                src={icon.img}
                alt={icon.alt}
                className={`p-1 bg-slate-200 ${
                  i === 0 ? "rounded-tr-lg" : ""
                } ${i === icons.length - 1 ? "rounded-br-lg" : ""}`}
                whileHover={{
                  x: 15,
                  borderTopRightRadius: 8,
                  borderBottomRightRadius: 8,
                }}
                transition={{ duration: 0.2 }}
              />
            </Link>
          )
        )}
      </section>
    </div>
  );
};
