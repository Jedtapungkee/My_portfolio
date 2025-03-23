import React from "react";
import { FaGithub} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" text-gray-400 py-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-3">&copy; {new Date().getFullYear()} Jedtapungkee Claikhem. All rights reserved.</p>
        
        {/* ถ้าคุณต้องการแสดงไอคอนโซเชียล */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/Jedtapungkee"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaGithub className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}
