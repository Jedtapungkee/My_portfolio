import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Lanyard from "./Lanyard.jsx";
import SplitText from "./SplitText/SplitText.jsx";
import { FaGithub } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="flex flex-row  justify-center items-center min-h-screen px-5  overflow-hidden"
    >
      {/* Left Content */}
      <div className="text-left md:w-1/2 ">
        <motion.div
          className="text-xl text-[#007cf0] overflow-hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, my name is
        </motion.div>
        <SplitText
          text="Jedtapungkee Claikhem"
          className="text-5xl font-bold text-white "
          delay={100}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />

        <p className="text-gray-400 text-2xl mb-5 mt-5 overflow-hidden">
          <Typewriter
            words={["Frontend Development", "Web Development"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={150}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </p>
        <a
          href="https://github.com/Jedtapungkee"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors overflow-hidden"
        >
          <FaGithub className="text-2xl text-gray-400 " />
        </a>
        <button
          onClick={() => {
            const el = document.getElementById("projects");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            } else {
              console.error("❌ Section #projects not found!");
            }
          }}
          className="relative w-36 text-center font-bold px-3 py-3 mt-5 bg-black text-white border-2 border-blue-600 rounded-md overflow-hidden group cursor-pointer"
        >
          <span className="absolute inset-0 bg-blue-700 scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
          <span className="relative">View Projects</span>
        </button>
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        <Lanyard position={[5, 2, 15]} gravity={[0, -30, 0]} />
      </div>
    </section>
  );
}

export default Hero;
