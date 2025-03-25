import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Particles from "./Components/Particles/Particles";
import About from "./Components/About";
import Skills from "./Components/Skills";
import ClickSpark from "./Components/ClickSpark/ClickSpark";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import "./App.css";

function App() {
  return (
    <div className="relative min-h-screen bg-[#0d0d0d] scroll-smooth">
      <ClickSpark sparkColor="#fff" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
        <div className="relative z-10">
          <Navbar />
        </div>
        
        <div className="fixed top-0 left-0 w-screen h-screen z-0 overflow-hidden pointer-events-none">
          <Particles
            particleColors={["#1c4ad4", "#1c4ad4"]}
            particleCount={300}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        
        <Hero />
        <div className="my-8 h-1 w-full bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
        <About />
        <div className="my-8 h-1 w-full bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
        <Skills />
        <div className="my-8 h-1 w-full bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
        
        <Projects/>

        <div className="my-8 h-1 w-full bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
        <Contact />
        <div className="my-8 h-1 w-full bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
        <Footer />
      </ClickSpark>
    </div>
  );
}

export default App;
