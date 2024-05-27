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
  // Create array with 500 slides
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
    <div className=" relative">
      <div className="w-full absolute top-1/2 h-[104px] -translate-y-1/2 flex justify-between items-center">
        <button className="swiper-button-prev relative top-0 z-10"></button>
        <button className="swiper-button-next relative top-0 z-10"></button>
      </div>
      <div className="py-10  overflow-hidden w-[87%] mx-auto">
        <Swiper
          modules={[Virtual, Navigation, Pagination]}
          slidesPerView={3}
          initialSlide={2}
          centeredSlides={true}
          navigation={false}
          spaceBetween={45}
          virtual
        >
          {slides.map((slideContent, index) => (
            <SwiperSlide key={index} virtualIndex={index}>
              <div className="h-[518px] w-[430px]  slideItem cursor-pointer">
                <div className="w-full h-full flex flex-col justify-center items-center gap-6 p-[35px] relative">
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
