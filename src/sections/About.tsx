import { FaArrowRightLong } from "react-icons/fa6";
import image from "../assets/home/whyChooseUs.png";
import Description from "../components/ui/Description";
import Heading from "../components/ui/Heading";

const About = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-6 lg:gap-10">
      <div className="w-full lg:w-[50%] flex justify-center lg:justify-start">
        <img
          src={image}
          alt="our_stats"
          className="object-cover w-[275px] max-w-[693px] md:w-full"
        />
      </div>
      <div className="w-full lg:w-[50%]">
        <Heading>About Us</Heading>
        <div className="my-[15px] lg:my-[50px]">
          <Description classNames="md:text-justify">
            Smart Vision for Consultancy and Development was incorporated in
            2011 in Somalia. We focus majorly on monitoring, evaluation,
            research and learning (MERL), institutional capacity development
            services, private sector development, quality infrastructure and
            trade facilitation, mainly in Somalia and across the greater Horn of
            Africa region. At Smart Vision, we are committed to professionalism
            and timely and quality service delivery. Smart Vision for
            Consultancy and Development was incorporated in 2011 in Somalia.At
            Smart Vision
          </Description>
        </div>
        <button className="primaryBtn flex justify-center items-center gap-1 lg:gap-2">
          Read More <FaArrowRightLong className="relative top-[2px]" />
        </button>
      </div>
    </section>
  );
};

export default About;
