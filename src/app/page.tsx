"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import About from "@/screens/About/About";
import Contact from "@/screens/Contact/Contact";
import Home from "@/screens/Home/Home";
import Projects from "@/screens/Projects/TopFourProjects";
import { ParallaxDivider } from "@/components/ParallaxDivider";
import { Skills } from "@/screens/Skills/Skills";

export default function Main() {
  return (
    <main>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
