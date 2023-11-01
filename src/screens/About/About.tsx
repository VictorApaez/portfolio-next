import React, { useRef } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { useScroll, useTransform, motion } from "framer-motion";
import { Carousel } from "./Carousel";
import Image from "next/image";

export default function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["-60% start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);

  return (
    <section
      id="about"
      className=" w-full position relative min-h-screen h-fit"
      style={{
        paddingLeft: "5%",
        paddingRight: "5%",

        backgroundImage:
          "url('rain-bg.svg'), linear-gradient(0deg, #000, #14213D)",
      }}
      ref={sectionRef}
    >
      <motion.div style={{ y: parallaxY }}>
        <div className="py-10">
          <SectionHeader header="About me" />
        </div>
        <div className="flex justify-evenly relative z-20 flex-wrap">
          <div
            className="flex flex-col w-3/5 rounded-lg p-4 mb-10"
            style={{ minWidth: "300px", maxWidth: "600px" }}
          >
            <div>
              <p className="">
                Hello World! I'm Victor Apaez. As a Technical Integration
                Specialist at LogicManager, I thrive on identifying challenges
                and crafting solutions through code. In my spare time, I love to
                build projects and learn new technologies.
              </p>
              <p className="mt-5">
                From crafting intricate backend architectures to designing
                intuitive mobile and frontend interfaces, I take immense pride
                in being an active member of the tech community and contributing
                to its ongoing success.
              </p>
              <p className="mt-5">
                Beyond the tech world, I am deeply passionate about personal
                growth. Whether I'm capturing moments on canvas with my
                paintings, breathing in the freshness of the outdoors, or
                competing in a myriad of sports, every experience shapes me.
              </p>
              <div className="flex place-items-center mt-10">
                <button className="bg-content-primary text-content-secondary font-bold py-2 px-4 rounded-lg inline-flex items-center">
                  <svg
                    className="fill-current w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                  <span className="text-black">Resume</span>
                </button>
                <button className="bg-accent-2 font-bold py-2 px-4 rounded-lg ml-5">
                  Contact
                </button>
              </div>
            </div>
          </div>

          <div
            className="hidden sm:flex flex-col place-items-center w-2/5"
            style={{ minWidth: "300px" }}
          >
            <div className="relative">
              <img src="/cloud.svg" alt="cloud" />
              <Carousel />
            </div>

            <img
              src="/me-computer.PNG"
              alt="Victor Apaez"
              className="w-1/2 -mt-24"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
