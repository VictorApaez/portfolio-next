import React from "react";
import { Carousel } from "./Carousel";

export default function Skills() {
  const icons = [
    {
      name: "HTML5",
      url: "https://img.icons8.com/color/100/html-5--v1.png",
    },
    {
      name: "CSS3",
      url: "https://img.icons8.com/color/100/css3.png",
    },

    {
      name: "JavaScript",
      url: "https://img.icons8.com/color/100/javascript.png",
    },
    {
      name: "Python",
      url: "https://img.icons8.com/color/100/python--v1.png",
    },
    {
      name: "React Native",
      url: "https://img.icons8.com/ios/100/react-native--v1.png",
    },
    {
      name: "Next",
      url: "https://img.icons8.com/color/100/nextjs.png",
    },
    {
      name: "React",
      url: "https://img.icons8.com/officel/100/react.png",
    },
    {
      name: "MongoDB",
      url: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/100/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png",
    },
    {
      name: "Express",
      url: "https://img.icons8.com/color/100/express-js.png",
    },
    {
      name: "Node JS",
      url: "https://img.icons8.com/fluency/100/node-js.png",
    },
    {
      name: "Redux",
      url: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/100/external-redux-an-open-source-javascript-library-for-managing-application-state-logo-shadow-tal-revivo.png",
    },
    {
      name: "Jest",
      url: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/100/external-jest-can-collect-code-coverage-information-from-entire-projects-logo-color-tal-revivo.png",
    },
    {
      name: "Tailwind",
      url: "https://img.icons8.com/fluency/100/tailwind_css.png",
    },
  ];
  return (
    <section id="skills" className="flex justify-center w-full">
      <Carousel icons={icons} />
    </section>
  );
}
