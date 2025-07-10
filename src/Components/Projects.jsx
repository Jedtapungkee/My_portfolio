import React, { useEffect, useRef } from "react";
import SpotlightCard from "./SpotlightCard/SpotlightCard.jsx";
const projects = [
  {
    id: 1,
    title: "LobMhum Pathong",
    description:
      "This Landing Page Cafe&Restaurant. Support for mobile and desktop view.",
    image: "/Images/Lobmhum.png",
    tools: ["JavaScript", "React", "TailwindCSS"],
    demoLink: "https://lob-mhum-pathong.vercel.app/",
    sourceCode: "https://github.com/Jedtapungkee/LobMhumPathong",
  },
  {
    id: 2,
    title: "Service Student-Frontend",
    description: "เว็บไซต์สำหรับการส่งเอกสารออนไลน์ของนักศึกษา",
    image: "/Images/ServiceStudent.png",
    tools: ["JavaScript", "React", "CSS3"],
    demoLink: "https://jedtapungkee.github.io/Servicestudent-frontend/",
    sourceCode: "https://github.com/Jedtapungkee/Servicestudent-frontend",
  },
  {
    id: 3,
    title: "FTravel Nextjs15",
    description: "website for travel agency, built with Next.js 15",
    image: "/Images/FTravel.jpg",
    tools: ["Next.js", "TailwindCSS","Shadecn", "Prisma", "Supabase"],
    demoLink: null,
    sourceCode: "https://github.com/Jedtapungkee/Next-Fatravel",
  },
  {
    id: 4,
    title: "Skyshop E-commerce",
    description:
      "",
    image: "/Images/Skyshop.jpg",
    tools: ["React", "TailwindCSS","Node.js", "Express", "MysQL"],
    demoLink: null,
    sourceCode: "https://github.com/Jedtapungkee/SkyShop",
  },
];

export default function Projects() {

  return (
    <div id="projects" className="text-white p-5 pt-36 -mt-36">
      <h1 className="text-[#007cf0]">Projects</h1>
      <h2 className="text-[#007cf0] text-4xl md:text-5xl font-bold mb-6">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <SpotlightCard
            key={project.id}
            className="relative w-full p-5 md:p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 group overflow-hidden"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-400 opacity-20 rounded-full blur-3xl group-hover:opacity-30 transition-all duration-500" />
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-3">{project.title}</h3>
            <p className="text-gray-400 text-sm mt-2">{project.description}</p>
            <div className="flex gap-2 mt-4 flex-wrap">
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
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
}
