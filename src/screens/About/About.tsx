import React, { useRef } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { iconsArray } from "@/data/icons";
import { HexBackground } from "./HexBackground";
import { useScroll, useTransform, motion } from "framer-motion";
import { Carousel } from "./Carousel";

export default function About() {
  return (
    <section id="about" className="p-20 position relative  h-screen ">
      <div className="flex justify-between relative z-20 ">
        <div className="flex flex-col w-5/6 rounded-lg p-4">
          <SectionHeader header="About me" />

          <div>
            <p className=" leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              eligendi maxime, minus corporis iste fugiat quisquam dolore
              aperiam. Quas harum, laudantium excepturi asperiores distinctio
              pariatur alias modi quibusdam sint a unde eos ipsam enim
              architecto.
            </p>
            <p className=" leading-relaxed mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              eligendi maxime, minus corporis iste fugiat quisquam dolore
              aperiam. Quas harum, laudantium excepturi asperiores distinctio
              pariatur alias modi quibusdam sint a unde eos ipsam enim
              architecto.
            </p>
            <div className="flex place-items-center mt-10">
              <button className="bg-content-primary text-content-secondary font-bold py-2 px-4 rounded-lg inline-flex items-center">
                <svg
                  className="fill-current w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <span>Resume</span>
              </button>
              <button className="bg-accent-2 font-bold py-2 px-4 rounded-lg ml-5">
                Contact
              </button>
            </div>
          </div>
          {/* <div className="w-full bg-black mt-10 bg-opacity-50 bg-black p-4 flex justify-center place-items-center  mt-5 rounded-lg">
            <ul className=" flex flex-wrap">
              {iconsArray.map((icon, i) => (
                <li>
                  <img src={icon.url} alt={icon.name} style={{ height: 80 }} />
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        <div className=" flex flex-col place-items-center ">
          <div className="relative">
            <img src="cloud.svg" alt="" />
            <Carousel />
          </div>

          <img
            src="me-computer.PNG"
            alt="Victor Apaez"
            className="w-1/2 -mt-24"
          />
        </div>
      </div>
      <HexBackground />
    </section>
  );
}