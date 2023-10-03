import { SectionHeader } from "@/components/SectionHeader";
import React from "react";
import { frontendIcons, backendIcons, devopsIcons } from "@/data/icons";

export const Skills = () => {
  return (
    <section className="bg-slate-600 p-12">
      <SectionHeader header="Skills" />
      <div className="flex justify-evenly">
        <div className="bg-slate-500 p-5 rounded-xl w-full mx-5 my-10 flex flex-col items-center">
          <div className="flex flex-col place-items-center bg-slate-400 p-4 rounded-lg -mt-20 w-fit">
            <img
              src="https://img.icons8.com/ios-filled/50/infinity.png"
              alt="DevOps icon"
            />
            <h1 className="text-3xl text-content-header">DevOps</h1>
          </div>
          <ul className="w-full flex flex-wrap justify-between">
            {backendIcons.map((icon, i) => (
              <li className="flex items-center m-5 min-w-1/4 max-w-1/3">
                <img src={icon.url} className="h-8 mr-4" />
                <p className="text-lg">{icon.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-slate-500 p-5 rounded-xl w-full mx-5 flex flex-col items-center">
          <div className="flex flex-col justify-center place-items-center bg-slate-400 p-4 rounded-lg -mt-20 w-fit">
            <img
              src="https://img.icons8.com/pastel-glyph/64/code--v2.png"
              alt="front end icon"
            />
            <h1 className="text-3xl text-content-header">Front-End</h1>
          </div>

          <ul className="w-full flex flex-wrap">
            {frontendIcons.map((icon, i) => (
              <li className="flex m-5">
                <img src={icon.url} className="h-8 mr-4" />
                <p className="text-lg">{icon.name}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-500 p-5 rounded-xl w-full mx-5 my-10 flex flex-col items-center">
          <div className="flex flex-col justify-center place-items-center bg-slate-400 p-4 rounded-lg -mt-20 w-fit">
            <img
              src="https://img.icons8.com/pulsar-line/64/backend-development.png"
              alt="backend icon"
            />
            <h1 className="text-3xl text-content-header">Back-End</h1>
          </div>
          <ul className="w-full flex flex-wrap">
            {backendIcons.map((icon, i) => (
              <li className="flex m-5">
                <img src={icon.url} className="h-8 mr-4" />
                <p className="text-lg">{icon.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
