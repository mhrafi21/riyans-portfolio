import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Container from "./Container";
import Title from "./Title";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
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

  return (
    <section className="pt-20">
      <Container>
        <Title text="FAQ" textColor="pb-8" titleBorder="heading_titleBorder" />
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`} className="border rounded-lg">
              <AccordionTrigger className="text-left text-lg font-medium px-4 py-3 dark:text-gray-300">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 pt-1 text-gray-600 dark:text-gray-400 md:text-lg">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
};

export default FAQSection;
