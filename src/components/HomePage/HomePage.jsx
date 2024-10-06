import Schedule from "./Schedule";
import Banner from "./Banner";
import Companies from "./Companies";
import VisionarySec from "./VisionarySec";
import Categories from "./Category/Categories";
import Explore from "./Explore";
import FaqSection from "./FaqSection";
import MessageSec from "./MessageSec";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Companies />
      <Schedule />
      <VisionarySec />
      <Categories />
      <Explore />
      <FaqSection />
      <MessageSec />
    </div>
  );
};

export default HomePage;
