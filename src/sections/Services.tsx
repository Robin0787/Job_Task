import Description from "../components/ui/Description";
import Heading from "../components/ui/Heading";
import ServicesSlider from "./ServicesSlider";

const Services = () => {
  return (
    <section>
      <div className="lg:text-center">
        <Heading>Our Services</Heading>
        <div className="mt-[25px] mb-[50px] lg:w-[80%] mx-auto">
          <Description classNames="lg:text-center">
            Smart Vision for Consultancy and Development was incorporated in
            2011 in Somalia. We focus majorly on monitoring, evaluation,
            research and learning (MERL).
          </Description>
        </div>
        <ServicesSlider />
      </div>
    </section>
  );
};

export default Services;
