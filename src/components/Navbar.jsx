import { useState } from "react";
import logo from "../assets/logo.jpeg";
import phone from "../assets/phone.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <nav className="w-full shadow-md fixed bg-white top-0 left-0 z-50 text-black">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">

          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="h-12 w-12" />
            <h1 className="text-lg font-bold">Taneja Properties</h1>
          </div>

          <ul className="hidden md:flex items-center gap-8 text-sm font-bold">
            <li className="cursor-pointer border-b-2 border-transparent hover:border-black">
              <a href="">Home</a>
            </li>
            <li className="cursor-pointer border-b-2 border-transparent hover:border-black">
              <a href="">About Us</a>
            </li>

            <li className="relative group cursor-pointer border-b-2 border-transparent hover:border-black">
              <a className="block py-1">Projects</a>
              <ul className="absolute left-0 top-full mt-1 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 bg-white shadow-lg border rounded w-40 text-sm z-50">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="">Project 1</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="">Project 2</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="">Project 3</a>
                </li>
              </ul>
            </li>

            <li className="cursor-pointer border-b-2 border-transparent hover:border-black">
              <a href="">Blogs</a>
            </li>
            <li className="cursor-pointer border-b-2 border-transparent hover:border-black">
              <a href="">Contact Us</a>
            </li>
          </ul>

          <div className="hidden md:flex items-center gap-2 text-sm font-bold">
            <img src={phone} alt="phone" className="h-5 w-5" />
            <p>+91-7061555647, +91-4558745586</p>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <div className="w-6 h-0.5 bg-black mb-1"></div>
              <div className="w-6 h-0.5 bg-black mb-1"></div>
              <div className="w-6 h-0.5 bg-black"></div>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <ul className="flex flex-col gap-4 p-4 text-sm">
            <li className="border-b-2 border-transparent hover:border-black">
              <a href="">Home</a>
            </li>
            <li className="border-b-2 border-transparent hover:border-black">
              <a href="">About Us</a>
            </li>

            <li>
              <button
                onClick={() => setProjectsOpen(!projectsOpen)}
                className="flex justify-between w-full border-b-2 border-transparent hover:border-black py-1"
              >
                Projects
                <span>{projectsOpen ? "▲" : "▼"}</span>
              </button>
              {projectsOpen && (
                <ul className="flex flex-col mt-2 ml-4">
                  <li className="hover:bg-gray-100 px-2 py-1 rounded">
                    <a href="">Project 1</a>
                  </li>
                  <li className="hover:bg-gray-100 px-2 py-1 rounded">
                    <a href="">Project 2</a>
                  </li>
                  <li className="hover:bg-gray-100 px-2 py-1 rounded">
                    <a href="">Project 3</a>
                  </li>
                </ul>
              )}
            </li>

            <li className="border-b-2 border-transparent hover:border-black">
              <a href="">Blogs</a>
            </li>
            <li className="border-b-2 border-transparent hover:border-black">
              <a href="">Contact Us</a>
            </li>
            <li className="flex items-center gap-2 mt-2 text-sm font-bold">
              <img src={phone} alt="phone" className="h-5 w-5" />
              <p>+91-7061555647, +91-4558745586</p>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
