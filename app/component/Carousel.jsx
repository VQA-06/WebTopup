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
    src: "https://gaming-cdn.com/images/products/442/616x353/minecraft-java-and-bedrock-edition-java-and-bedrock-edition-pc-game-cover.jpg?v=1716387513",
    alt: "Pemandangan Alam",
  },
  {
    id: 2,
    src: "https://w0.peakpx.com/wallpaper/615/267/HD-wallpaper-delta-force-2025-mobile-video-game-poster.jpg",
    alt: "Gunung",
  },
  {
    id: 3,
    src: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/honor_of_kings.png",
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
