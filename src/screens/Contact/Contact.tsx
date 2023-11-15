import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Contact() {
  return (
    <section
      id="contact"
      className="p-5 md:p-40 flex  flex-col justify-center bg-gradient-0 min-h-screen"
    >
      <div className="rounded-2xl p-2 flex h-full flex-wrap w-full justify-center">
        <div
          className="w-1/2 flex flex-col place-items-center"
          style={{ minWidth: "300px" }}
        >
          <h2 className="text-xl">CONTACT</h2>
          <h1 className="text-4xl text-content-primary mb-2">Let's Chat!</h1>
          <img src="/me-thumbs-up.PNG" className="w-56" alt="" />
        </div>
        <div className=" h-full p-2 w-1/2" style={{ minWidth: "300px" }}>
          <div
            className="bg-black rounded-lg p-4 mb-5 w-full"
            style={{ minWidth: "220px" }}
          >
            <Link
              href="https://www.linkedin.com/in/victor-apaez"
              className="flex place-items-center mb-1"
              target="_blank"
            >
              <img
                src="https://victorapaez.github.io/images/linkedin-logo.png"
                className="w-10"
                alt="linkedin"
              />
              <h2 className="text-2xl">LinkedIn</h2>
            </Link>
            <p>www.linkedin.com/in/victor-apaez</p>
          </div>

          <div>
            <div
              className="bg-black rounded-lg p-4 mb-5 w-full"
              style={{ minWidth: "220px" }}
            >
              <div className="flex place-items-center mb-1">
                <a
                  className="flex place-items-center"
                  href="mailto:example@example.com?subject=Question from Website&body=Hello, I have a question about..."
                >
                  <img
                    src="https://img.icons8.com/plasticine/65/new-post--v2.png"
                    alt="email"
                    className="w-10 mr-1"
                  />

                  <h2 className="text-2xl">Email</h2>
                </a>
              </div>
              <p>vic.apaez@gmail.com</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
