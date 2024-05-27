import Separator from "../../components/ui/Separator";
import About from "../../sections/About";
import Banner from "../../sections/Banner";
import Services from "../../sections/Services";
import ThematicAreas from "../../sections/ThematicAreas";

const Home = () => {
  return (
    <main>
      <Banner />
      <Separator />
      <About />
      <Separator />
      <Services />
      <Separator />
      <ThematicAreas />
      <Separator />
    </main>
  );
};

export default Home;
