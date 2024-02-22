import React from "react";
import ayush_resume from "../assets/Ayush Resume New.pdf";

const Header = () => {
  const toggleMenu = () => {
    document.getElementById("mobile-menu").classList.toggle("hidden");
    document.getElementById("mobile-menu").classList.toggle("flex");
  };

  return (
    <header className="bg-teal-700 text-white sticky top-0 z-10">
      <section className="max-w-7xl mx-auto p-4 flex justify-between items-center">
        <h1 className="text-3xl font-medium">
          <a href="#hero">😐Ayush</a>
        </h1>
        <button
          id="hamburger-button"
          className="text-3xl md:hidden cursor-pointer"
          onClick={toggleMenu}
        >
          &#9776;
        </button>
        <nav className="hidden md:block space-x-8 text-xl">
          <a
            href={ayush_resume}
            download="Ayush Resume"
            target="_blank"
            className="hover:opacity-90"
          >
            My Resume
          </a>
          <a href="#projects" className="hover:opacity-90">
            My Projects
          </a>

          <a href="#contact" className="hover:opacity-90">
            Contact Me
          </a>
        </nav>
      </section>
      <section
        id="mobile-menu"
        className="absolute top-0 bg-black w-full text-5xl flex-col justify-center animate-open-menu hidden"
        onClick={toggleMenu}
      >
        <button className="text-8xl self-end px-6">&times;</button>
        <nav
          className="flex flex-col min-h-screen items-center py-8"
          aria-label="mobile"
        >
          <a
            href={ayush_resume}
            download="Ayush Resume"
            target="_blank"
            className="w-full text-center py-6 hover:opacity-90"
          >
            My Resume
          </a>
          <a href="#hero" className="w-full text-center py-6 hover:opacity-90">
            Home
          </a>
          <a
            href="#projects"
            className="w-full text-center py-6 hover:opacity-90"
          >
            My Projects
          </a>

          <a
            href="#contact"
            className="w-full text-center py-6 hover:opacity-90"
          >
            Contact Me
          </a>
          <a
            href="#footer"
            className="w-full text-center py-6 hover:opacity-90"
          >
            Legal
          </a>
        </nav>
      </section>
    </header>
  );
};

export default Header;
