import React from "react";
import SplitText from "./SplitText/SplitText.jsx";
import BlurText from "./BlurText/BlurText.jsx";

function About() {
  return (
    <section
      id="about"
      className=" h-auto flex flex-col md:flex-row justify-start items-start  p-5 pt-36 -mt-36 gap-4"
    >
      <div className="text-left md:w-1/2 flex flex-col items-start">
        <div className="flex h-1 text-[#007cf0] mb-5 px-2">About</div>
        <SplitText
          text="About me!"
          className="text-4xl md:text-5xl font-bold text-[#007cf0] mb-5 "
          delay={50}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />
        <BlurText
          text="I have a strong interest in coding, particularly in web development. I enjoy creating projects and continuously refining my problem-solving skills. My goal is to become a proficient web developer."
          delay={100}
          animateBy="words"
          direction="top"
          className="text-xl md:text-3xl mb-8 text-white "
        />
      </div>

      <div className="md:w-1/2 flex flex-col items-start">
        <SplitText
          text="Education"
          className="text-4xl md:text-5xl font-bold text-[#007cf0] mb-5 mt-5 "
          delay={50}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />
        {/* Icon มหาลัย */}
        <div className="flex flex-col items-center mb-5">
          <div className="flex items-center">
            <img
              src="/Images/logoku.png"
              alt="Kasetsart University"
              className="w-12 h-12 md:w-18 md:h-18 mr-4 bg-white rounded-full"
            />
            <div className="flex flex-col items-start">
              <div className="text-base md:text-2xl text-white">
                Kasetsart University, Kamphaeng Saen Campus
              </div>
              <div className="text-sm text-white">
                Bachelor in Information Technology
              </div>
              <div className="text-xs text-gray-400">2022 - Present</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
