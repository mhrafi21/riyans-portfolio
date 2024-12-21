import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/images/logo.png";
import { Link, NavLink } from "react-router";
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 h-[80px] bg-white shadow z-50">
      <nav className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 h-full flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to={"/"}>
            <img src={logo} className="h-[80px] w-full object-cover" alt="" />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {[
            "Home",
            "About",
            "Services",
            "Portfolio",
            "Testimonial",
            "Contact",
          ].map((item, index) => (
            <NavLink
              key={index}
              style={({ isActive }) => ({
                color: isActive ? "#3730a3" : "#1f2937",
              })}
              onClick={() => setIsOpen(!isOpen)}
              to={item === "Home" ? "/" : `../${item.toLowerCase()}`}
              className="block text-gray-600 font-medium md:text-lg hover:text-indigo-600 transition"
            >
              {item}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M6 6L18 18M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
        >
          <ul className="flex flex-col space-y-4 py-4 px-6">
            {[
              "Home",
              "About",
              "Services",
              "Portfolio",
              "Testimonial",
              "Contact",
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#3730a3" : "#1f2937",
                  })}
                  onClick={() => setIsOpen(!isOpen)}
                  to={item === "Home" ? "/" : `../${item.toLowerCase()}`}
                  className="block text-gray-600 font-medium md:text-lg hover:text-indigo-600 transition"
                >
                  {item}
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;