import image from "../assets/home/heroImage.png";
import Description from "../components/ui/Description";
import Heading from "../components/ui/Heading";

const Banner = () => {
  return (
    <section>
      <section className="hidden lg:flex justify-between items-center gap-4">
        <div className="w-[60%] xl:max-w-[1010px]">
          <Heading>A new frontier in research and development</Heading>
          <div className="my-[25px]">
            <Description classNames="md:text-justify">
              Smart Vision for Consultancy and Development was incorporated in
              2011 in Somalia. We focus majorly on monitoring, evaluation,
              research and learning (MERL), institutional capacity development
              services, private sector development, quality infrastructure and
              trade facilitation, mainly in Somalia and across the greater Horn
              of Africa region.
            </Description>
          </div>
          <button className="alataFont text-black font-normal text-[30px] leading-[45px] underline">
            See More
          </button>
        </div>
        <div>
          <img src={image} alt="banner_image" className="object-cover" />
        </div>
      </section>
      <section className="block lg:hidden">
        <div className="flex justify-between items-center gap-1">
          <div className="w-[184px] sm:w-[55%]">
            <Heading>A new frontier in research and development</Heading>
          </div>
          <div className="w-[45%]">
            <img src={image} alt="banner_image" className="object-fit" />
          </div>
        </div>
        <div className="my-[15px]">
          <Description>
            Smart Vision for Consultancy and Development was incorporated in
            2011 in Somalia. We focus majorly on monitoring, evaluation,
            research and learning (MERL), institutional capacity development
            services, private sector development, quality infrastructure and
            trade facilitation, mainly in Somalia and across the greater Horn of
            Africa region.
          </Description>
        </div>
        <button className="alataFont text-black font-normal text-[15px] leading-[22px] underline">
          See More
        </button>
      </section>
    </section>
  );
};

export default Banner;
