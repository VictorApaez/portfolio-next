import Link from "next/link";
import React from "react";

export default function Header() {
  const navItems = [
    { path: "#home", name: "Home" },
    { path: "#about", name: "About" },
    { path: "#skills", name: "Skills" },
    { path: "#projects", name: "Projects" },
    { path: "#contact", name: "Contact" },
  ];

  return (
    <header className="bg-primary-2 p-4 flex flex-row justify-center">
      <nav>
        <ul className="flex flex-row justify-center">
          {navItems.map((item) => (
            <li className="m-2">
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
