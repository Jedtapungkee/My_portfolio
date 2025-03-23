import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-[#0d0d0d] shadow-lg fixed w-full z-100">
      <Link to="home" smooth={true} duration={500} className="text-2xl font-bold text-[#007cf0] cursor-pointer">
      Portfolio
        </Link>
      <div className="space-x-5">
        <Link to="about" smooth={true} duration={500} className="text-[#bed7ed] hover:text-[#007cf0] transition cursor-pointer">
          About
        </Link>
        <Link to="skills" smooth={true} duration={500} className="text-[#bed7ed] hover:text-[#007cf0] transition cursor-pointer">
          Skills
        </Link>
        <Link to="projects" smooth={true} duration={500} className="text-[#bed7ed] hover:text-[#007cf0] transition cursor-pointer">
        Projects
        </Link>
        <Link to="contact" smooth={true} duration={500} className="text-[#bed7ed] hover:text-[#007cf0] transition cursor-pointer">
        Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
