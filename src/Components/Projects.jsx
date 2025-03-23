import React, { useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "LobMhum Pathong",
    description: "This Landing Page Cafe&Restaurant. Support for mobile and desktop view.",
    image: "/Images/Lobmhum.png",
    tools: ["JavaScript","React", "TailwindCSS"],
    demoLink: "https://lob-mhum-pathong.vercel.app/",
    sourceCode: "https://github.com/Jedtapungkee/LobMhumPathong",
  },
  {
    id: 2,
    title: "Service Student-Frontend",
    description: "เว็บไซต์สำหรับการส่งเอกสารออนไลน์ของนักศึกษา",
    image: "/Images/ServiceStudent.png",
    tools: ["JavaScript","React", "CSS3"],
    demoLink: "https://jedtapungkee.github.io/Servicestudent-frontend/",
    sourceCode: "https://github.com/Jedtapungkee/Servicestudent-frontend",
  },
  {
    id: 3,
    title: "Pizza Vender Machine_Frontend",
    description: "Vender Machine Demo สำหรับ ขายพิซซ่า",
    image: "/Images/Pizza.png",
    tools: ["Html5", "JavaScript", "CSS3"],
    demoLink: null,
    sourceCode: "https://github.com/Jedtapungkee/Pizza_VenderMachine",
  },
  {
    id: 4,
    title: "Fethcing Data from API and CRUD",
    description: "เว็บไซต์สำหรับเรียกข้อมูลจาก API และแสดงผลและการจัดการข้อมูล CRUD",
    image: "/Images/PracticeApi.png",
    tools: ["React", "TailwindCSS"],
    demoLink: null,
    sourceCode: "https://github.com/Jedtapungkee/practicefront",
  },
];

export default function Projects({ containerRef }) {
  useEffect(() => {
    if (!containerRef.current) return;

    const el = containerRef.current;

    // ใช้ wheel event เพื่อเลื่อนแนวนอนแทนเลื่อนแนวตั้ง
    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY * 3;
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [containerRef]);

  return (
    <div id="projects" className="text-white p-5 mt-10">
      <h1 className="text-[#007cf0]">Projects</h1>
      <h2 className="text-[#007cf0] text-5xl font-bold mb-6">My Projects</h2>
      
      <div className="relative w-full">
        {/* ใช้ containerRef เป็น div ที่ overflow-x-auto */}
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto w-full p-2 scroll-smooth custom-scrollbar"
        >
          {Array.isArray(projects) &&
            projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800 p-4 rounded-lg shadow-lg min-w-[350px] flex-shrink-0"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover rounded-lg"
                />
                <h3 className="text-xl font-semibold mt-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mt-2">{project.description}</p>
                <div className="flex gap-2 mt-4">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 bg-gray-700 text-sm rounded-lg"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.sourceCode && (
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-700 text-white rounded-lg text-sm hover:bg-gray-600 transition"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
