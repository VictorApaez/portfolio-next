"use client";
import useScrollAnimations from "@/hooks/useScrollAnimation";
import { Content } from "./Content";
export default function Home() {
  const { containerRef, backgroundY, textY, defaultY } = useScrollAnimations();

  return (
    <section
      ref={containerRef}
      id="home"
      className="z-0 h-screen relative overflow-hidden flex flex-col justify-center place-items-center bg-gradient-180"
    >
      <div>
        <div
          style={{
            width: "100%",
            height: "0",
            paddingBottom: "100%",
            position: "relative",
          }}
        >
          <iframe
            src="https://giphy.com/embed/4py1xViBIYItLTKTYQ"
            width="200px"
            height="200px"
            style={{ position: "absolute" }}
            className="giphy-embed"
            allowFullScreen
          />
        </div>
      </div>

      <Content y={textY} />
    </section>
  );
}
