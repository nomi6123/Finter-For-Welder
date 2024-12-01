import { GoPersonFill } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-black to-blue-900 text-white sticky top-0 z-50">
      <div className="w-full max-w-[1300px] mx-auto flex justify-between items-center py-4 px-5">
        {/* Logo */}
        <Link
          to="/"
          className="font-bold text-[28px] hover:text-blue-400 transition-colors duration-300 cursor-pointer"
        >
          Finter
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-10 text-[16px] uppercase items-center">
          {["home", "about", "services", "team", "contact"].map((item) => (
            <Link
              key={item}
              to={`/${item}`}
              className="relative group hover:text-blue-400 transition-colors duration-300"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              {/* Underline */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <div className="flex items-center gap-2 group hover:text-blue-400 transition-colors duration-300">
            <GoPersonFill aria-hidden="true" />
            <div className="relative cursor-pointer">
              Login
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </div>
          </div>
          <FaSearch
            className="hover:text-blue-400 transition-colors duration-300 cursor-pointer"
            aria-label="Search"
          />
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-[28px]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden flex flex-col gap-4 text-center bg-gradient-to-r from-black to-blue-900 py-4">
          {["home", "about", "services", "team", "contact"].map((item) => (
            <Link
              key={item}
              to={`/${item}`}
              className="relative group hover:text-blue-400 transition-colors duration-300"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              {/* Underline */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <div className="flex items-center justify-center gap-2 group hover:text-blue-400 transition-colors duration-300">
            <GoPersonFill aria-hidden="true" className="max-lg:hidden" />
            <div className="relative max-lg:hidden">
              Login
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </div>
          </div>
          <FaSearch
            className="mx-auto hover:text-blue-400 transition-colors duration-300 cursor-pointer max-lg:hidden"
            aria-label="Search"
          />
        </nav>
      )}
    </header>
  );
};

export default Header;
