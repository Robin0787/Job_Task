import image from "../assets/home/trackRecords.png";
import Description from "../components/ui/Description";
import Heading from "../components/ui/Heading";

const TrackRecords = () => {
  return (
    <section>
      <section className="flex flex-col lg:flex-row justify-between items-center gap-[15px] lg:gap-8">
        <article className="w-full lg:w-1/2 space-y-[15px] lg:space-y-[50px]">
          <Heading>
            Recent Track <br /> Records
          </Heading>
          <div className="max-w-[706px]">
            <Description classNames="lg:text-justify">
              Smart Vision for Consultancy and Development was incorporated in
              2011 in Somalia. We focus majorly on monitoring, evaluation,
              research and learning (MERL).
            </Description>
          </div>
          <img src={image} alt="track_records" className="object-cover" />
        </article>
        <article className="border w-full lg:w-1/2"></article>
      </section>
    </section>
  );
};

export default TrackRecords;
