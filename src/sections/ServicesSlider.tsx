/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode, useState } from "react";
import { Navigation, Pagination, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { FaClipboardList } from "react-icons/fa6";
import { MdDesktopWindows, MdPeopleAlt } from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./ServicesSlider.css";

interface TService {
  title: string;
  icon: ReactNode;
}

const ServicesSlider = () => {
  const [slides] = useState<TService[]>([
    {
      title: "Baseline surveys",
      icon: <MdPeopleAlt className="slideIcon" size={50} />,
    },
    {
      title: "Third Party Monitoring",
      icon: <MdDesktopWindows className="slideIcon" size={50} />,
    },
    {
      title: "Midterm and endline Evaluations",
      icon: <FaClipboardList className="slideIcon" size={50} />,
    },
    {
      title: "Baseline surveys",
      icon: <MdPeopleAlt className="slideIcon" size={50} />,
    },
    {
      title: "Midterm and endline Evaluations",
      icon: <FaClipboardList className="slideIcon" size={50} />,
    },
    {
      title: "Third Party Monitoring",
      icon: <MdDesktopWindows className="slideIcon" size={50} />,
    },
  ]);

  return (
    <div className="relative">
      <div className="w-full absolute top-1/2 h-[104px] -translate-y-1/2 flex justify-between items-center">
        <button className="swiper-button-prev relative top-0 z-10 -left-2 xl:left-1"></button>
        <button className="swiper-button-next relative top-0 z-10 -left-2 xl:left-1"></button>
      </div>
      <div className="py-10 overflow-hidden w-[87%] mx-auto">
        <Swiper
          modules={[Virtual, Navigation, Pagination]}
          initialSlide={2}
          breakpoints={{
            // Breakpoint for small devices
            320: {
              slidesPerView: 1,
            },
            // Breakpoint for medium devices
            768: {
              slidesPerView: 2,
            },
            // Breakpoint for extra-large devices
            1024: {
              slidesPerView: 3,
            },
          }}
          centeredSlides={true}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          spaceBetween={60}
          virtual
        >
          {slides.map((slideContent, index) => (
            <SwiperSlide key={index} virtualIndex={index}>
              <div className="h-[255px] min-w-[240px] max-w-[430px] lg:h-[500px] slideItem cursor-pointer">
                <div className="w-full h-full flex flex-col justify-center items-center gap-4 lg:gap-6 p-5 lg:p-[35px]">
                  <div className="slideIconBox">{slideContent.icon}</div>
                  <h2 className="slideHeading">{slideContent.title}</h2>
                  <button className="seeMoreBtn">See More</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ServicesSlider;
