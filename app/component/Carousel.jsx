"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import b1 from "@/public/a.jpg";
import b2 from "@/public/b.jpg";
import b3 from "@/public/c.jpeg";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Image from "next/image";

const slides = [
  {
    id: 1,
    src: b1,
    alt: "Pemandangan Alam",
  },
  {
    id: 2,
    src: b2,
    alt: "Gunung",
  },
  {
    id: 3,
    src: b3,
    alt: "Hutan",
  },
];

export default function Carousel() {
  return (
    <div className="w-full px-12">
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
        modules={[Pagination, Navigation]}
        className="w-full h-[700px] rounded-3xl"
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
