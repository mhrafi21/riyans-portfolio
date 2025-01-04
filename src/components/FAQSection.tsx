import React, { useState } from "react";
import { motion } from "framer-motion";
import Container from "./Container";
import Title from "./Title";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What types of photography and videography services do you offer?",
      answer:
        "We offer a wide range of services, including wedding, event, portrait, commercial, lifestyle, and aerial photography and videography.",
    },
    {
      question: "How can I book a session?",
      answer:
        "You can book a session by contacting us through our website, filling out the booking form, or calling our team directly.",
    },
    {
      question: "What is your turnaround time for edited photos and videos?",
      answer:
        "Our typical turnaround time is 1-2 weeks for photos and 2-4 weeks for videos, depending on the project size.",
    },
    {
      question: "Do you travel for destination shoots?",
      answer:
        "Yes, we are happy to travel for destination shoots. Additional travel and accommodation fees may apply.",
    },
    {
      question: "Can we request specific styles or themes for our shoot?",
      answer:
        "Absolutely! We encourage clients to share their ideas and preferences so we can customize the shoot to their vision.",
    },
  ];

  const handleToggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="pt-20">
      <Container className="bg-white py-16">
        
         <Title text="FAQ" textColor="pb-8" titleBorder="heading_titleBorder" />
       
        <div className="space-y-4">
          { faqs && faqs?.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-100 transition-all"
              >
                <span className="text-lg font-medium text-gray-700">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-500"
                >
                  ▼
                </motion.span>
              </button>
              {activeIndex === index && (
                <motion.div
                  className="p-4 bg-gray-100 text-gray-600"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="md:text-lg">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FAQSection;
