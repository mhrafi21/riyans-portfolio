import React, { useRef } from "react";

import Container from "./Container";
import Title from "./Title";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import img from "../assets/images/hero.jpg";
import { motion } from "framer-motion";
import { toast } from "sonner";


const ContactPage: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  interface EmailResult {
    text: string;
  }

  interface EmailError {
    text: string;
  }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current as HTMLFormElement,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((result: EmailResult) => {
        if (result.text) {
          toast.success("Email has been sent successfully");
        }
      })
      .catch((error: EmailError) => {
        console.log(error.text);
      });
  };

  return (
    <section
      className="pt-20 bg-cover bg-center"
      style={{ backgroundImage: img }}
    >
      <Container>
        <Title
          text="Get in Touch"
          textColor="pb-8"
          titleBorder="heading_titleBorder"
        />
        <p className="md:text-lg textGray600 dark:textGray200">
          Contact us for a great photography session & beautiful captured
          moments
        </p>
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Contact Details */}
          <div className="mt-12 lg:mt-4">
            <ul className="space-y-12">
              <li className="flex items-center  group space-x-4">
                <span className="p-4 group-hover:bg-white group-hover:border-indigo-600 border group-hover:text-indigo-600  duration-500 bg-indigo-600 text-white rounded-full">
                  <FaEnvelope />
                </span>
                <div className="flex flex-col">
                  <strong className="text-xl textGray700 dark:textGray200">
                    Email
                  </strong>
                  <span className="text-gray-500 font-medium">
                    riyanphotography97@gmail.com
                  </span>
                </div>
              </li>
              <li className="flex items-center  group space-x-4">
                <span className="p-4 group-hover:bg-white group-hover:border-indigo-600 border group-hover:text-indigo-600  duration-500 bg-indigo-600 text-white rounded-full">
                  <FaMapMarkerAlt />
                </span>
                <div className="flex flex-col">
                  <strong className="text-xl textGray700 dark:textGray200">
                    Phone Number
                  </strong>
                  <span className="text-gray-500 font-medium">
                    +880 1647632197
                  </span>
                </div>
              </li>
              <li className="flex items-center  group space-x-4">
                <span className="p-4 group-hover:bg-white group-hover:border-indigo-600 border group-hover:text-indigo-600 duration-500  bg-indigo-600 text-white rounded-full">
                  <FaPhone />
                </span>
                <div className="flex flex-col group">
                  <strong className="text-xl textGray700 dark:textGray200">
                    Location
                  </strong>
                  <span className="text-gray-500 font-medium">
                    Malibaugh, Dhaka
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className=" border rounded-lg  p-6 mt-6  lg:mt-0">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="sm:col-span-1">
                  <label
                    htmlFor="name"
                    className="block textGray600 dark:text-gray-200 md:text-lg"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    required
                    className="mt-2 px-4 py-3 w-full border dark:bgDark border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label
                    htmlFor="email"
                    className="block md:text-lg dark:text-gray-200"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="form_email"
                    className="mt-2 px-4 py-3 w-full border border-gray-300 dark:bgDark rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block dark:text-gray-200 md:text-lg "
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="mt-2 px-4 py-3 w-full border border-gray-300 dark:bgDark rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block dark:text-gray-200 md:text-lg "
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-2 px-4 py-3 w-full border border-gray-300 dark:bgDark dark:bgDark rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  required
                ></textarea>
              </div>
              <div className="mt-6">
                <motion.button
                  type="submit"
                  className="w-full py-3 block rounded-lg hover:bg-indigo-600 hover:text-white font-medium border border-indigo-600 text-indigo-600 transition"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </Container>

      {/* Google Map */}
      <div className="mt-16">
  <Container>
    <Title
      text="Find Studio"
      textColor="pb-8"
      titleBorder="heading_titleBorder"
    />
    <div className="w-full h-96 rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9837309864436!2d90.41529307539146!3d23.7426041892085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b854b9c3f0b1%3A0x8c35df9b8b05cb56!2sMalibagh%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1712816341909!5m2!1sen!2sbd"
        className="w-full h-full border-none"
        allowFullScreen
        loading="lazy"
        title="Malibagh, Dhaka Studio Location"
      ></iframe>
    </div>
  </Container>
</div>

    </section>
  );
};

export default ContactPage;
