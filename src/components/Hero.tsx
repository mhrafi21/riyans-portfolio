import React from "react";
import Container from "./Container";
import Title from "./Title";
import { Link } from "react-router";
import { motion } from "framer-motion";
import heroImg from "../assets/images/hero2.jpg";

const Hero: React.FC = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[80vh]"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="pb-4">
              <Title
                subtitle="Photography"
                textColor="text-indigo-500 text-center text-2xl md:text-3xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold font-poppins text-white leading-tight">
              Capturing Moments, <br />
              <span className="text-white">One Shot at a Time</span>
            </h2>
            <p className="mt-6 md:text-lg text-gray-300 max-w-2xl mx-auto">
              I specialize in creating timeless memories through portraits,
              weddings, and nature photography. Let’s make your moments
              unforgettable.
            </p>

            {/* Call to Action */}
            <div className="mt-8">
              <Link to="/portfolio">
                <motion.button
                  className="px-10 py-3 rounded-lg bg-indigo-600 hover:bg-transparent text-white font-medium hover:border hover:border-indigo-600 hover:text-indigo-600 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Portfolio
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
