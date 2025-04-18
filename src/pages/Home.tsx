import AboutMe from "@/components/About";
import ContactPage from "@/components/Contact";
import FAQSection from "@/components/FAQSection";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import VideoSection from "@/components/VideoSection";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
    <Hero />
      <AboutMe />
      <Portfolio />
      <VideoSection />
      <Services />
      <Testimonial />
      <FAQSection />
      <ContactPage />
    </>
  );
};

export default Home;
