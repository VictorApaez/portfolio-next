import React from "react";

export default function About() {
  return (
    <section id="about" className=" p-8">
      <div className="container mx-auto max-w-screen-lg flex flex-wrap md:flex-nowrap space-y-8 md:space-y-0 md:space-x-8">
        <div className="md:w-1/2 flex flex-col space-y-4">
          <h1 className="text-3xl font-bold">About me</h1>
          <p className=" leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            eligendi maxime, minus corporis iste fugiat quisquam dolore aperiam.
            Quas harum, laudantium excepturi asperiores distinctio pariatur
            alias modi quibusdam sint a unde eos ipsam enim architecto.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="me-computer.PNG"
            alt="Victor Apaez"
            className="w-full h-auto shadow-md rounded"
          />
        </div>
      </div>
    </section>
  );
}
