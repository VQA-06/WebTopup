"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Image from "next/image";

const slides = [
  {
    id: 1,
    src: "/images/a.jpg",
    alt: "Pemandangan Alam",
  },
  {
    id: 2,
    src: "/images/b.jpg",
    alt: "Gunung",
  },
  {
    id: 3,
    src: "/images/c.jpeg",
    alt: "Hutan",
  },
];

export default function Carousel() {
  return (
    <div className="w-full px-4 md:px-12">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-55 md:h-[350px] rounded-3xl shadow-md md:shadow-lg shadow-gray-700"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={slide.id == 1}
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
