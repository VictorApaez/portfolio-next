"use client";
import About from "@/screens/About/About";
import Contact from "@/screens/Contact/Contact";
import Home from "@/screens/Home/Home";
import Projects from "@/screens/Projects/TopFourProjects";
import { Skills } from "@/screens/Skills/Skills";
import AllProjects from "../screens/Projects/AllProjects";

export default function Main() {
  return (
    <main>
      <Home />
      <About />
      <Skills />
      <Projects />
      <AllProjects />
      <Contact />
    </main>
  );
}
