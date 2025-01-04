import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import imgServices from "../assets/images/porfile.jpg"
import Title from './Title';
import Container from './Container';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Wedding Photography',
      description: 'Capture your special day with stunning photos.',
      image: imgServices,
    },
    {
      title: 'Portrait Photography',
      description: 'Professional portraits for individuals and families.',
      image: imgServices,
    },
    {
      title: 'Event Photography',
      description: 'Memorable moments from your events.',
      image:imgServices,
    },
    {
      title: 'Nature Photography',
      description: 'Beautiful shots of nature and landscapes.',
      image:imgServices,
    },
  ];

  return (
    <section className=" pt-20">
      <Container className='bg-white py-16'>
      <Title text="Services" textColor="pb-10" titleBorder="heading_titleBorder"/>
        <Swiper
          spaceBetween={30}
          navigation
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-center  overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full md:w-1/2 h-64 object-cover"
                />
                <div className="p-6 md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                 
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Services;











// import React from "react";
// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.css";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import sImg from "../assets/images/wedding.svg";
// import Title from "./Title";
// import Container from "./Container";

// const services = [
//   {
//     title: "Event Coverage",
//     description:
//       "Capture the essence of your special events, from weddings to corporate events with stunning photos and videos.",
//     image: sImg,
//   },
//   {
//     title: "Studio Shoots",
//     description:
//       "Professional studio shoots for portraits, products, or any creative photoshoots.",
//     image: sImg,
//   },
//   {
//     title: "Product Photography",
//     description:
//       "High-quality images to showcase your products in the best light for marketing and e-commerce.",
//     image: sImg,
//   },
//   {
//     title: "Wedding Photography & Videography",
//     description:
//       "Beautifully crafted visuals to immortalize your special day.",
//     image: sImg,
//   },
//   {
//     title: "Real Estate Photography & Videography",
//     description:
//       "Showcase properties with premium visuals to attract potential buyers.",
//     image: sImg,
//   },
//   {
//     title: "Drone Photography & Videography",
//     description:
//       "Aerial shots for weddings, real estate, or any event that needs a unique perspective.",
//     image: sImg,
//   },
//   {
//     title: "Corporate Shoots",
//     description:
//       "Professional imagery and videos for corporate profiles, events, and promotional materials.",
//     image: sImg,
//   },
//   {
//     title: "Fashion Photography",
//     description:
//       "Showcase clothing, accessories, or models with vibrant and stylish photography.",
//     image: sImg,
//   },
//   {
//     title: "Food Photography",
//     description:
//       "Delicious visuals for restaurants, cafes, and food brands to captivate customers.",
//     image: sImg,
//   },
//   {
//     title: "Travel & Adventure Videography",
//     description:
//       "Dynamic videos capturing the beauty of landscapes, journeys, and explorations.",
//     image: sImg,
//   },
//   {
//     title: "Music Video Production",
//     description:
//       "Creative video production to bring your music to life with stunning visuals.",
//     image: sImg,
//   },
//   {
//     title: "Documentary Filmmaking",
//     description:
//       "Professionally crafted documentaries to tell impactful stories.",
//     image: sImg,
//   },
//   {
//     title: "Social Media Content Creation",
//     description:
//       "Eye-catching videos and photos tailored for platforms like Instagram, TikTok, and YouTube.",
//     image: sImg,
//   },
//   {
//     title: "Graduation & Family Shoots",
//     description:
//       "Preserve cherished moments with your family or milestone events like graduations.",
//     image: sImg,
//   },
//   {
//     title: "Event Highlight Videos",
//     description:
//       "Condensed, high-energy highlight reels of your events for sharing and memories.",
//     image: sImg,
//   },
//   {
//     title: "Commercial Advertising",
//     description:
//       "Creative and impactful visuals to promote your brand, products, or services.",
//     image: sImg,
//   },
// ];


// const Services: React.FC = () => {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

//   return (
//     <div ref={sectionRef} className=" pt-20">
//       <Container>
//         <Title text="Services" textColor="pb-8" titleBorder="heading_titleBorder" />
//         <p className="pb-8 text-gray-600 md:text-lg md:w-[60%]">
//           Explore a collection of expertly captured moments. Whether it’s
//           intimate portraits, unforgettable weddings, or stunning landscapes,
//           each image tells a unique story with passion and precision.
//         </p>

//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           spaceBetween={30}
//           slidesPerView={1}
//           autoplay={{ delay: 3000 }}
//           navigation
//           breakpoints={{
//             320: {
//               slidesPerView: 1,
//               spaceBetween: 10,
//             },
//             640: {
//               slidesPerView: 2,
//               spaceBetween: 20,
//             },
//             768: {
//               slidesPerView: 3,
//               spaceBetween: 30,
//             },
//             1024: {
//               slidesPerView: 4,
//               spaceBetween: 40,
//             },
//           }}
//         >
//           {services.map((service, index) => (
//             <SwiperSlide key={index}>
//               <motion.div
//                 className="bg-white rounded-lg overflow-hidden"
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: index * 0.2, duration: 0.6 }}
//               >
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-28 h-76 mx-auto object-center object-cover"
//                 />
//                 <div className="p-6">
//                   <motion.h3
//                     className="text-xl font-semibold text-gray-800 mb-4"
//                     whileHover={{ scale: 1.05 }}
//                   >
//                     {service.title}
//                   </motion.h3>
//                   <p className="text-gray-600 md:text-lg">{service.description}</p>
//                 </div>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </Container>
//     </div>
//   );
// };

// export default Services;
