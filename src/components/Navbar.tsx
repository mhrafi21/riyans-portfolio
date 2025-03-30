import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router";
import ModeToggle from "./ModeToogle";
import Hero from "./Hero";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBg, setIsBg] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    setIsBg(window.scrollY > 22);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="relative h-[100vh]">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0  left-0 right-0 ${
          isBg && isBg && " dark:bgDark shadow-lg"
        } z-50  white`}
      >
        <nav className=" container flex justify-between items-center mx-auto px-4 sm:px-6 lg:px-8 py-3 h-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              className="flex text-indigo-600 text-5xl font-extrabold"
              to={"/"}
            >
              AR
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
              "Login",
            ].map((item, index) => (
              <NavLink
                key={index}
                to={item === "Home" ? "/" : `../${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `block font-medium md:text-lg transition ${
                    isActive ? "text-white" : "text-white dark:textGray200"
                  } hover:text-indigo-600`
                }
                onClick={() => setIsOpen(!isOpen)}
              >
                {item}
              </NavLink>
            ))}
            {/* Dropdown Menu */}
            <ModeToggle />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className=" textGray700 focus:outline-none"
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
                  className="fill-gray-800 dark:fill-gray-200"
                >
                  <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
                </svg>
              )}
            </button>
          </div>
        </nav>
      </motion.div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg dark:bgDark"
        >
          <ul className="flex flex-col space-y-4 py-4 px-6">
            {[
              "Home",
              "About",
              "Services",
              "Portfolio",
              "Testimonial",
              "Contact",
              "Login",
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <NavLink
                  to={item === "Home" ? "/" : `../${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `block font-medium md:text-lg transition ${
                      isActive
                        ? "text-indigo-700"
                        : "text-gray-600 dark:textGray200"
                    } hover:text-indigo-600`
                  }
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {item}
                </NavLink>
              </motion.li>
            ))}
            <ModeToggle />
          </ul>
        </motion.div>
      )}
      <div className=" h-full absolute inset-0">
        <Hero />
      </div>
    </header>
  );
};

export default Navbar;
