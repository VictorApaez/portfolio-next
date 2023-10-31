import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const audio = new Audio("no-sound.mp3");
audio.loop = true;

function ButtonSlider() {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (isChecked) {
      audio.currentTime = 0;
      audio.play();
    } else {
      audio.pause();
    }
  }, [isChecked]);
  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      onClick={handleToggle}
      className="h-8 w-20 bg-gray-400 rounded-full flex items-center relative cursor-pointer transition-colors duration-300 p-1"
      style={{
        backgroundColor: isChecked ? "#7bc9fd" : "#525252",
      }}
    >
      <img
        src="https://img.icons8.com/color/48/sad-sun.png"
        className={`text-black absolute left-0 transition-opacity duration-300 p-2 ${
          isChecked ? "opacity-100" : "opacity-0"
        }`}
        style={{ width: "46px" }}
      />
      <img
        src="https://img.icons8.com/external-flat-zulfa-mahendra/48/external-half-moon-halloween-flat-zulfa-mahendra.png"
        className={`absolute text-black right-0 transition-opacity duration-300 p-2 ${
          isChecked ? "opacity-0" : "opacity-100"
        }`}
        style={{ width: "40px" }}
      />
      <motion.div
        className="w-8 h-8 bg-white rounded-full absolute z-10"
        initial={false}
        animate={{ x: isChecked ? "128%" : "0%" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      {isChecked && (
        <div className="absolute" style={{ left: "-160%", top: "160%" }}>
          <div
            style={{
              width: "100%",
              height: "0",
              paddingBottom: "100%",
              position: "relative",
            }}
          >
            <iframe
              src="https://giphy.com/embed/4py1xViBIYItLTKTYQ"
              width="200px"
              height="200px"
              style={{ position: "absolute" }}
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ButtonSlider;
