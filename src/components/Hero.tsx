import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/images/hero.jpg";
import Title from "./Title";
import Container from "./Container";
import { Link } from "react-router";

const Hero: React.FC = () => {
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row  justify-between">
        <div className="relative h-screen w-full">
          <img
            className="h-full z-10 w-full object-cover"
            src={heroImg}
            alt="photography"
          />

          <div className="absolute z-20 top-0 left-0 right-0 bottom-0 grid items-center bg-[rgba(26,25,56,0.63)]">
           <div className="">
           <Container>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
               <div className="pb-4">
               <Title subtitle="Photography" textColor="text-indigo-500" />
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
                <p className="mt-6 md:text-lg  text-gray-300 max-w-2xl">
                  I specialize in creating timeless memories through portraits,
                  weddings, and nature photography. Let’s make your moments
                  unforgettable.
                </p>

                {/* Call to Action */}
                <div className="mt-8 flex space-x-4">
                  <Link
                    to={"../portfolio"}
                    className="px-6 py-3 bg-indigo-600 rounded-lg text-white font-medium hover:bg-indigo-700 transition"
                 
                    
                  >
                    View Portfolio
                  </Link>
                 
                </div>
              </motion.div>
            </Container>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
