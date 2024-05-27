import image from "../assets/home/thematicAreas.png";
import Description from "../components/ui/Description";
import Heading from "../components/ui/Heading";

const ThematicAreas = () => {
  return (
    <section>
      <div className="lg:text-center">
        <Heading>Thematic Areas</Heading>
        <div className="mt-[25px] mb-[50px] lg:w-[80%] mx-auto">
          <Description classNames="lg:text-center">
            Smart Vision for Consultancy and Development was incorporated in
            2011 in Somalia.
          </Description>
        </div>
        <section>
          <img src={image} alt="thematic_areas" className="object-cover" />
        </section>
      </div>
    </section>
  );
};

export default ThematicAreas;
