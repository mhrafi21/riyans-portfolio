import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

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
    imageUrl: "https://via.placeholder.com/400"
  },
  {
    name: "Wedding Photography Package",
    price: "$999",
    details: "Perfect for weddings with full-day coverage.",
    images: 500,
    photographers: 2,
    imageUrl: "https://via.placeholder.com/400"
  },
  {
    name: "Premium Portrait Package",
    price: "$399",
    details: "Studio or outdoor portrait sessions.",
    images: 150,
    photographers: 1,
    imageUrl: "https://via.placeholder.com/400"
  },
  {
    name: "Event Photography Package",
    price: "$699",
    details: "Best for corporate and social events.",
    images: 300,
    photographers: 2,
    imageUrl: "https://via.placeholder.com/400"
  },
  {
    name: "Fashion Photography Package",
    price: "$799",
    details: "Includes multiple outfits and locations.",
    images: 200,
    photographers: 2,
    imageUrl: "https://via.placeholder.com/400"
  }
];

const Card: React.FC<CardProps> = ({ name, price, details, images, photographers, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-center">
      <img src={imageUrl} alt={name} className="w-full h-40 object-cover rounded-lg mb-4" />
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-gray-600 text-sm">{details}</p>
      <p className="text-indigo-600 font-bold mt-2">{price}</p>
      <p className="text-gray-500 text-sm">Images: {images} | Photographers: {photographers}</p>
    </div>
  );
};

const photographyPackage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Photography Packages</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}

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

export default photographyPackage;
