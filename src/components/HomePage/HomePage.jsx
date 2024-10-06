import Schedule from "./Schedule";
import Banner from "./Banner";
import Companies from "./Companies";
import VisionarySec from "./VisionarySec";
import Categories from "./Category/Categories";
import Explore from "./Explore";
import FaqSection from "./FaqSection";
import MessageSec from "./MessageSec";
import Testimony from "./Testimony";
import SubscribeSection from "./SubscribeSection";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Companies />
      <Schedule />
      <VisionarySec />
      <Categories />
      <Explore />
      <Testimony />
      <FaqSection />
      <MessageSec />
      <SubscribeSection />
    </div>
  );
};

export default HomePage;
