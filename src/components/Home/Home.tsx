"use client";
import useScrollAnimations from "@/hooks/useScrollAnimation";
import { Content } from "./Content";
import { BackgroundLayer } from "./BackgroundLayer";
export default function Home() {
  const { containerRef, backgroundY, textY, defaultY } = useScrollAnimations();

  return (
    <section
      ref={containerRef}
      id="home"
      className="z-0 h-screen relative overflow-hidden flex flex-col justify-between"
    >
      <Content y={textY} />

      <BackgroundLayer
        zIndex={0}
        img={"back-layer.svg"}
        y={backgroundY}
        bgPosition={"55% 200px"}
      />

      <BackgroundLayer
        zIndex={20}
        img={"front-layer.svg"}
        y={defaultY}
        bgPosition={"55% 50px"}
      />
    </section>
  );
}
