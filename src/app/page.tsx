import About from "@/screens/About/About";
import Contact from "@/screens/Contact/Contact";
import Home from "@/screens/Home/Home";
import Projects from "@/screens/Projects/Projects";
import Skills from "@/screens/Skills/Skills";
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
      <Projects />
      <Contact />
    </main>
  );
}
