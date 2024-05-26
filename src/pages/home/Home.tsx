import Separator from "../../components/ui/Separator";
import About from "../../sections/About";
import Banner from "../../sections/Banner";
import Services from "../../sections/Services";

const Home = () => {
  return (
    <main>
      <Banner />
      <Separator />
      <About />
      <Separator />
      <Services />
      <Separator />
    </main>
  );
};

export default Home;
