import { SectionHeader } from "@/components/SectionHeader";
import React, { useRef } from "react";
import { frontendIcons, backendIcons, devopsIcons } from "@/data/icons";
import "./Skills.css";
import { SkillGroup } from "./SkillsGroup";
import { useScroll, useTransform, motion } from "framer-motion";

export const Skills = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["-70% start", "-20% start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  const y1 = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const x3 = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="skills"
      className=" min-h-screen p-8 overflow-hidden bg-gradient-180 pt-32"
      ref={containerRef}
    >
      <SectionHeader header="Skills" />
      <div className="flex justify-evenly flex-wrap mt-40">
        <SkillGroup
          iconSrc="https://img.icons8.com/pulsar-line/64/backend-development.png"
          altText="Back-End icon"
          title="Back-End"
          icons={backendIcons}
          x={x1}
          opacity={opacity}
        />
        <SkillGroup
          iconSrc="https://img.icons8.com/pastel-glyph/64/code--v2.png"
          altText="Front-End icon"
          title="Front-End"
          icons={frontendIcons}
          y={y1}
          opacity={opacity}
          scale={1.1}
        />

        <SkillGroup
          iconSrc="https://img.icons8.com/ios-filled/50/infinity.png"
          altText="DevOps icon"
          title="DevOps"
          icons={devopsIcons}
          x={x3}
          opacity={opacity}
        />
      </div>
    </section>
  );
};
