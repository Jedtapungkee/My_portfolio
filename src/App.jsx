import React, { useRef, useState, useEffect } from "react";
import { useScroll, useMotionValue, useMotionValueEvent, motion } from "framer-motion";
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
  // 1) ดึงค่าการสกอลล์แนวตั้งทั้งหน้า
  //    (scrollY = จำนวนพิกเซลที่เลื่อน, scrollYProgress = 0..1)
  const { scrollY } = useScroll();

  // 2) เตรียม ref สำหรับ Projects Container (ในไฟล์ Projects.jsx ก็ได้)
  //    หรืออาจสร้าง container ใน App.js ก็ได้เช่นกัน
  const projectsContainerRef = useRef(null);

  // 3) ดึงค่าการสกอลล์ใน container (สมมติเป็นแนวนอน => scrollX)
  const { scrollX } = useScroll({
    container: projectsContainerRef,
  });

  // 4) สร้าง motion value ไว้เก็บ “Progress รวม”
  const combinedProgress = useMotionValue(0);

  // 5) เก็บค่าระยะสกอลล์สูงสุดของหน้า (vertical) และของ Projects (horizontal)
  const [maxScrollY, setMaxScrollY] = useState(0);
  const [maxScrollX, setMaxScrollX] = useState(0);

  // 6) คำนวณ maxScrollY = (ความสูงทั้งหมดของหน้า - ความสูงหน้าจอ)
  useEffect(() => {
    function updateMaxScrollY() {
      setMaxScrollY(document.body.scrollHeight - window.innerHeight);
    }
    window.addEventListener("resize", updateMaxScrollY);
    updateMaxScrollY(); // เรียกครั้งแรก
    return () => window.removeEventListener("resize", updateMaxScrollY);
  }, []);

  // 7) คำนวณ maxScrollX = (ความกว้างทั้งหมด - ความกว้าง Container)
  useEffect(() => {
    function updateMaxScrollX() {
      if (!projectsContainerRef.current) return;
      setMaxScrollX(
        projectsContainerRef.current.scrollWidth -
        projectsContainerRef.current.clientWidth
      );
    }
    window.addEventListener("resize", updateMaxScrollX);
    updateMaxScrollX(); // เรียกครั้งแรก
    return () => window.removeEventListener("resize", updateMaxScrollX);
  }, []);

  // 8) อัปเดต combinedProgress ทุกครั้งที่ scrollY หรือ scrollX เปลี่ยน
  useMotionValueEvent(scrollY, "change", (latestY) => {
    const x = scrollX.get(); // ระยะสกอลล์แนวนอนของ Projects
    const newVal = (latestY + x) / (maxScrollY + maxScrollX || 1); 
    combinedProgress.set(Math.max(0, Math.min(1, newVal)));
  });

  useMotionValueEvent(scrollX, "change", (latestX) => {
    const y = scrollY.get(); // ระยะสกอลล์แนวตั้งของหน้า
    const newVal = (y + latestX) / (maxScrollY + maxScrollX || 1);
    combinedProgress.set(Math.max(0, Math.min(1, newVal)));
  });

  return (
    <div className="relative min-h-screen bg-[#0d0d0d] scroll-smooth">
      {/* Progress Bar ของทั้งหน้า (จะเป็น 1 ต่อเมื่อ scrollY สุด + scrollX สุด) */}
      <motion.div
        className="fixed top-[80px] left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-20 origin-left"
        style={{ scaleX: combinedProgress }}
      />
      
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
        
        {/* ตรงนี้อาจจะเป็น Projects ที่มี Container แนวนอน */}
        <Projects containerRef={projectsContainerRef} />

        <div className="my-8 h-1 w-full bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
        <Contact />
        <div className="my-8 h-1 w-full bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
        <Footer />
      </ClickSpark>
    </div>
  );
}

export default App;
