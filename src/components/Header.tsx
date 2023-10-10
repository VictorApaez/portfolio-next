import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ButtonSlider from "@/components/ButtonSlider";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

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
      className="p-6 fixed top-0 w-full z-50"
      style={{
        backdropFilter: "blur(15px)",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
      }}
    >
      <div className="flex flex-row justify-center w-full relative">
        <nav>
          <ul className="flex flex-row justify-center space-x-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="text-xl p-4 hover:bg-slate-500 rounded-lg transition-all duration-200 ease-in-out"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="absolute top-0 right-0">
          <ButtonSlider />
        </div>
      </div>
    </motion.header>
  );
}
