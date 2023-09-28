import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="p-10 flex justify-center">
      <div
        className="rounded-2xl p-10 max-w-fit  bg-primary-2"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
        }}
      >
        <h2 className="text-xl">CONTACT</h2>
        <h1 className="text-4xl text-content-primary mb-2">GET IN TOUCH</h1>
        <h5 className="mb-4">
          The best way to reach me is via
          <Link
            className="text-blue-400"
            href="https://www.linkedin.com/in/victor-apaez"
            target="_blank"
          >
            {" "}
            LinkedIn
          </Link>
          . Please feel free to send a message!
        </h5>
        <div className="bg-primary-3 rounded-lg p-4">
          <Link
            href="https://www.linkedin.com/in/victor-apaez"
            className="flex place-items-center mb-1"
            target="_blank"
          >
            <img
              src="https://victorapaez.github.io/images/linkedin-logo.png"
              className="h-10"
            />
            <h2 className="text-2xl">LinkedIn</h2>
          </Link>
          <p>www.linkedin.com/in/victor-apaez</p>
        </div>
      </div>
    </section>
  );
}
