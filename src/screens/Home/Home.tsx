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
      <Content y={textY} />
    </section>
  );
}
