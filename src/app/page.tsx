import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Home from "@/components/Home/Home";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
export default function Main() {
  return (
    <main>
      <Home />
      <div
        className="z-40 h-28"
        style={{
          background: "linear-gradient(to bottom, #002A28, transparent)",
        }}
      />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
