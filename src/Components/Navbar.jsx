import React, { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="p-6 bg-[#0d0d0d] shadow-lg fixed w-full  top-0">
      <div className="flex justify-between items-center">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-2xl font-bold text-[#007cf0] cursor-pointer"
        >
          Portfolio
        </Link>

        {/* toggle menu */}
        <div className="md:hidden">
          <button
            id="menu-toggle"
            className="text-[#bed7ed] hover:text-[#007cf0] transition focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <div className="hidden md:flex space-x-5">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-[#bed7ed] hover:text-[#007cf0] transition cursor-pointer"
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="text-[#bed7ed] hover:text-[#007cf0] transition cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-[#bed7ed] hover:text-[#007cf0] transition cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-[#bed7ed] hover:text-[#007cf0] transition cursor-pointer"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* mobile menu */}
      {isOpen ? (
        <div className="flex flex-col items-center md:hidden">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-[#bed7ed] hover:text-[#007cf0] transition cursor-pointer py-2"
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="text-[#bed7ed] hover:text-[#007cf0] transition cursor-pointer py-2"
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-[#bed7ed] hover:text-[#007cf0] transition cursor-pointer py-2"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-[#bed7ed] hover:text-[#007cf0] transition cursor-pointer py-2"
          >
            Contact
          </Link>
        </div>
      ) : null}

    </nav>
  );
}

export default Navbar;
