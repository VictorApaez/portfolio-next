import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Home from "@/components/Home/Home";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
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
