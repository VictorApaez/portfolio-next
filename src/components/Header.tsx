import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ButtonSlider from "@/components/ButtonSlider";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = document.documentElement.scrollTop;
      if (currentScrollTop <= 0) {
        setIsVisible(true);
      } else if (currentScrollTop > lastScrollTop) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const navItems = [
    { path: "/#home", name: "Home" },
    { path: "/#about", name: "About" },
    { path: "/#skills", name: "Skills" },
    { path: "/#projects", name: "Projects" },
    { path: "/#contact", name: "Contact" },
  ];

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : "-100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 w-full z-50"
      style={{
        minHeight: 60,
        backdropFilter: "blur(15px)",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
      }}
    >
      <div className="flex flex-row justify-center w-full sm-h-auto h-full absolute">
        <button
          className="sm:hidden absolute top-5 left-5 z-20 text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        <nav
          className={`sm:flex ${
            isMenuOpen
              ? " h-screen fixed flex justify-center place-items-center bg-black w-screen"
              : "hidden"
          } `}
        >
          <ul className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            {navItems.map((item, i) => (
              <li key={item.name}>
                <Link href={item.path}>
                  <div
                    className="text-xl p-4 hover:bg-slate-500 rounded-lg transition-all duration-200 ease-in-out"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="absolute top-5 right-8">
          <ButtonSlider />
        </div>
      </div>
    </motion.header>
  );
}
