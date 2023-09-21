"use client";
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <body
        id="wrapper"
        className={`${theme === "dark" ? "dark-mode" : ""} bg-primary-1
        text-content-primary`}
      >
        {children}
      </body>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
