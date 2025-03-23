import React from "react";
import SplitText from "./SplitText/SplitText.jsx";
import BlurText from "./BlurText/Blurtext.jsx";

function About() {
  return (
    <section
      id="about"
      className=" h-auto flex flex-col justify-start items-start  p-5 pt-36 -mt-36"
    >
      <div className="flex h-1 text-[#007cf0] mb-5 px-2">About</div>
      <SplitText
        text="About me!"
        className="text-5xl font-bold text-[#007cf0] mb-5 "
        delay={50}
        animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
        animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
        easing="easeOutCubic"
        threshold={0.2}
        rootMargin="-50px"
      />
        <BlurText
          text="I am pursuing a bachelor's degree in Information Technology at Kasetsart University, Kamphaeng Saen Campus. Passionate about coding, particularly in web development, I enjoy creating innovative projects and refining my problem-solving skills. My goal is to become a proficient web developer and contribute to impactful technology solutions."
          delay={150}
          animateBy="words"
          direction="top"
          className="text-3xl mb-8 text-white "
        />
    </section>
  );
}

export default About;
