"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Testimonials() {
  const reviews = [
  {
    name: "Ravi Shankar – Bangalore",
    text: "We sourced Sadahalli grey granite slabs from Khushi Stone  for our commercial project. The polish quality and consistency were excellent. Highly reliable supplier!",
  },
  {
    name: "Meera Patel – Ahmedabad",
    text: "Adgal stone from Khushi Stone gave our new villa an elegant and natural finish. They delivered the slabs on time and the quality was superb.",
  },
  {
    name: "Vikram Reddy – Hyderabad",
    text: "Khushi Stone  has an impressive range of grey granites. We used Sira Grey tiles for our interiors, and the texture looks premium. Very satisfied with their service.",
  },
  {
    name: "Anita Menon – Kochi",
    text: "Their block cutting precision and finish are remarkable. We purchased both slabs and tiles of Sadahalli grey — perfect for flooring and kitchen tops.",
  },
];

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-12">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
          What People Say
        </h2>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{
          clickable: true,
          el: ".custom-pagination", // custom pagination container
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((review, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white rounded-2xl shadow p-6 mx-2 h-full flex flex-col justify-between">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                {review.name}
              </h3>
              <p className="text-gray-600 text-center">{review.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination container below slides */}
      <div className="custom-pagination mt-6 flex justify-center"></div>
    </section>
  );
}