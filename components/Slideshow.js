"use client";



import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import Image from "next/image";

export default function Slideshow() {
  const slides = [
    { src: "/slideshow/1.webp", alt: "Slide 1" },
    { src: "/slideshow/2.webp", alt: "Slide 2" },
    { src: "/slideshow/3.webp", alt: "Slide 3" },
    { src: "/slideshow/4.webp", alt: "Slide 4" },
    { src: "/slideshow/5.webp", alt: "Slide 5" },

   
  ];

  const navbarHeight = 80; // Adjust if your navbar height is different

  return (
    <div className="relative w-full h-[350px] sm:h-[450px] md:h-[500px] lg:h-[calc(100vh-80px)] max-h-[80vh]">

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        slidesPerView={1}
        className="w-full h-full"
        style={{  marginTop: `-${navbarHeight}px` }} // negative margin removes the gap
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                 className="object-cover object-center"
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
