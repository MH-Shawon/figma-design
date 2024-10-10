import Schedule from "./Schedule";

import Companies from "./Companies";
import VisionarySec from "./VisionarySec";
import Categories from "./Category/Categories";
import Explore from "./Explore";
import FaqSection from "./FaqSection";
import MessageSec from "./MessageSec";
import Testimony from "./Testimony";
import SubscribeSection from "./SubscribeSection";
import Swiper from "./Swiper";
import Banner from "./Banner";
import Swipper2 from "./Swipper2";


const HomePage = () => {
  return (
    <div>
      <Banner />
      <Swiper />
     <Swipper2 />
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
