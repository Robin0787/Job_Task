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
  ]);

  return (
    <div className="h-[500px] overflow-visible">
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        slidesPerView={3}
        initialSlide={3}
        centeredSlides={true}
        navigation={true}
        virtual
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            <div className="border w-[440px] h-full slideItem">
              <div className="w-full h-full flex flex-col justify-center items-center gap-5 p-[35px]">
                <div className="slideIconBox">{slideContent.icon}</div>
                <h2 className="slideHeading">{slideContent.title}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServicesSlider;
