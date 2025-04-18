import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Title from "./Title";
import img from "../assets/images/img3.jpg"
import { CardDescription, CardTitle } from "./ui/card";
interface CardProps {
  name: string;
  price: string;
  details: string;
  images: number;
  photographers: number;
  imageUrl: string;
}

const photographyPackages: CardProps[] = [
  {
    name: "Basic Photography Package",
    price: "$299",
    details: "Ideal for small events and portrait shoots.",
    images: 100,
    photographers: 1,
    imageUrl: img
  },
  {
    name: "Wedding Photography Package",
    price: "$999",
    details: "Perfect for weddings with full-day coverage.",
    images: 500,
    photographers: 2,
    imageUrl: img
  },
  {
    name: "Premium Portrait Package",
    price: "$399",
    details: "Studio or outdoor portrait sessions.",
    images: 150,
    photographers: 1,
    imageUrl: img
  },
  {
    name: "Event Photography Package",
    price: "$699",
    details: "Best for corporate and social events.",
    images: 300,
    photographers: 2,
    imageUrl: img
  },
  {
    name: "Fashion Photography Package",
    price: "$799",
    details: "Includes multiple outfits and locations.",
    images: 200,
    photographers: 2,
    imageUrl: img
  }
];

const Card: React.FC<CardProps> = ({ name, price, details, images, photographers, imageUrl }) => {
  return (
    <div className=" rounded-lg shadow-md p-4 text-center">
      <img src={imageUrl} alt={name} className="w-full h-40 object-cover rounded-lg mb-4" />
      <CardTitle className='md:text-xl text-lg'>{name}</CardTitle>
      <CardDescription className="">{details}</CardDescription>
      <p className="text-indigo-600 font-bold mt-2">{price}</p>
      <p className="text-gray-500 text-sm">Images: {images} | Photographers: {photographers}</p>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <Title text="Photograpy Packages" textColor="pb-8" titleBorder="heading_titleBorder" />
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation

        autoplay={{ delay: 3000 }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {photographyPackages.map((pkg, index) => (
          <SwiperSlide key={index}>
            <Card {...pkg} />
          </SwiperSlide>
        ))}
      </Swiper>
    
  
    </div>
  );
};

export default Services;
