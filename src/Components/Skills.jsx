import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit } from "react-icons/fa";
import { SiVite, SiFigma, SiTailwindcss, SiMysql } from "react-icons/si";

export default function Skills() {
  return (
    <div id='skills' className="text-white p-5 pt-36 -mt-36">
      <h1 className="text-[#007cf0]">Skills</h1>
      <h2 className="text-[#007cf0] text-5xl md:text-7xl font-bold mb-4 transition-all duration-500 ease-in-out">
        My Skills
      </h2>
      
      <div className="mt-6">
        <h3 className="text-gray-300 text-xl md:text-2xl">Languages and Tools</h3>
        <div className="flex gap-4 mt-2 text-7xl">
          <FaHtml5 className="text-orange-500 transition transform duration-300 hover:scale-110 hover:-rotate-3" />
          <FaCss3Alt className="text-blue-500 transition transform duration-300 hover:scale-110 hover:-rotate-3" />
          <FaJs className="text-yellow-400 transition transform duration-300 hover:scale-110 hover:-rotate-3" />
          <FaNodeJs className="text-green-500 transition transform duration-300 hover:scale-110 hover:-rotate-3" />
          <img src="/Images/vite.svg" alt="Vite" className="w-12 h-12 md:w-16 md:h-16 transition transform duration-300 hover:scale-110 hover:-rotate-3" />
          <img src="/Images/figma.svg" alt="Figma" className="w-12 h-12 md:w-16 md:h-16 transition transform duration-300 hover:scale-110 hover:-rotate-3" />

        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="text-gray-300 text-xl md:text-2xl">Libraries and Frameworks</h3>
        <div className="flex gap-4 mt-2 text-7xl">
          <FaReact className="text-blue-400 transition transform duration-300 hover:scale-110 hover:-rotate-3" />
          <SiTailwindcss className="text-blue-400 transition transform duration-300 hover:scale-110 hover:-rotate-3" />
        </div>
      </div>
      
      <div className="mt-6 flex justify-start items-center gap-20">
        <div>
          <h3 className="text-gray-300 text-xl md:text-2xl">Databases</h3>
          <div className="flex gap-4 mt-2 text-7xl">
            <SiMysql className="text-blue-500 transition transform duration-300 hover:scale-110 hover:-rotate-3" />
          </div>
        </div>
        
        <div>
          <h3 className="text-gray-300 text-xl md:text-2xl">Other</h3>
          <div className="flex gap-4 mt-2 text-7xl">
            <FaGit className="text-orange-500 transition transform duration-300 hover:scale-110 hover:-rotate-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
