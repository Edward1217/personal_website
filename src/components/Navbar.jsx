import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full h-20 px-8 bg-[#FFF1DC] shadow-md">
      <div className="logo">
        <a href="#home">
          <h1 className="text-[#146C94] font-bold uppercase hover:text-[#1e90ff] transition-colors">
            Chi Hao Tu
          </h1>
        </a>
      </div>
      <ul className="flex space-x-8">
        <li>
          <a
            href="#home"
            className="text-[#146C94] font-bold uppercase hover:text-[#1e90ff] transition-colors"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="text-[#146C94] font-bold uppercase hover:text-[#1e90ff] transition-colors"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#education"
            className="text-[#146C94] font-bold uppercase hover:text-[#1e90ff] transition-colors"
          >
            Education
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className="text-[#146C94] font-bold uppercase hover:text-[#1e90ff] transition-colors"
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="text-[#146C94] font-bold uppercase hover:text-[#1e90ff] transition-colors"
          >
            Projects
          </a>
        </li>
      </ul>
      <a
        href="https://www.linkedin.com/in/chi-hao-tu-6ba7a599/"
        target="_blank"
        rel="noreferrer"
        className="relative"
      >
        <button className="bg-[#D8C4B6] text-main-heading rounded-full px-6 py-3 text-lg border border-[#D8C4B6] transition-all duration-300 hover:bg-[#1e90ff] hover:text-white">
          Contact
        </button>
      </a>
      <div className="menu-btn cursor-pointer">
        <i className="fa-solid fa-bars-staggered"></i>
      </div>
    </nav>
  );
};

export default Navbar;
