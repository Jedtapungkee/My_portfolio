import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaDocker,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiPostman } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import Marquee from "react-fast-marquee";

export default function Skills() {
  return (
    <div id="skills" className="text-white p-5 pt-36 -mt-36">
      <h1 className="text-[#007cf0]">Skills</h1>
      <h2 className="text-[#007cf0] text-5xl md:text-7xl font-bold mb-8 transition-all duration-500 ease-in-out">
        My Skills
      </h2>

      <Marquee pauseOnClick speed={50} gradient={true} gradientColor={[255, 255, 255]} gradientWidth={100} >
        <div className="flex items-center space-x-8 text-6xl md:text-8xl py-4">
          <FaHtml5 className="text-orange-500 transition-transform duration-300 hover:scale-110 hover:-rotate-3" />
          <FaCss3Alt className="text-blue-500 transition-transform duration-300 hover:scale-110 hover:-rotate-3" />
          <FaJs className="text-yellow-400 transition-transform duration-300 hover:scale-110 hover:-rotate-3" />
          <FaNodeJs className="text-green-500 transition-transform duration-300 hover:scale-110 hover:-rotate-3" />
          <FaReact className="text-blue-400 transition-transform duration-300 hover:scale-110 hover:-rotate-3" />
          <SiTailwindcss className="text-blue-400 transition-transform duration-300 hover:scale-110 hover:-rotate-3" />
          <RiNextjsFill className="text-white transition-transform duration-300 hover:scale-110 hover:-rotate-3" />
          <FaGit className="text-orange-500 transition-transform duration-300 hover:scale-110 hover:-rotate-3" />
          <SiMysql className="text-blue-500 transition-transform duration-300 hover:scale-110 hover:-rotate-3" />
          <FaDocker className="text-blue-400 transition-transform duration-300 hover:scale-110 hover:-rotate-3" />
          <SiPostman className="text-orange-400 transition-transform duration-300 hover:scale-110 hover:-rotate-3" />
        </div>
      </Marquee>
    </div>
  );
}
