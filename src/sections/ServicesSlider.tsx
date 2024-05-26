/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Navigation, Pagination, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./ServicesSlider.css";

const ServicesSlider = () => {
  // Create array with 500 slides
  const [slides] = useState(
    Array.from({ length: 5 }).map((_, index) => `Slide ${index + 1}`)
  );

  return (
    <div className="h-[500px] border border-red-300">
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        slidesPerView={3}
        initialSlide={1}
        centeredSlides={true}
        navigation={true}
        virtual
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            <div className="border w-[80%] h-full">{slideContent}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServicesSlider;
