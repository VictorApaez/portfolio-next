import React from "react";
import Skills from "../Skills/Skills";

export default function About() {
  return (
    <section id="about" className=" p-8">
      <div className="flex justify-evenly">
        <div className="flex flex-col w-1/2">
          <div className=" flex flex-col space-y-4">
            <h1 className="text-3xl font-bold">About me</h1>
            <p className=" leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              eligendi maxime, minus corporis iste fugiat quisquam dolore
              aperiam. Quas harum, laudantium excepturi asperiores distinctio
              pariatur alias modi quibusdam sint a unde eos ipsam enim
              architecto.
            </p>
          </div>
          <Skills />
        </div>

        <div className="">
          <img
            src="me-computer.PNG"
            alt="Victor Apaez"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
