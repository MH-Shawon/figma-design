import Companies from "./Companies";
import VisionarySec from "./VisionarySec";
import Categories from "./Category/Categories";
import Explore from "./Explore";
import FaqSection from "./FaqSection";
import MessageSec from "./MessageSec";
import Testimony from "./testimony/Testimony";
import SubscribeSection from "./SubscribeSection";

import Swiper2 from "./Swiper2";

import ScheduleSwipe from "./ScheduleSwipe/ScheduleSwipe";

const HomePage = () => {
  return (
    <div>
      <Swiper2 />
      <Companies />
      <ScheduleSwipe />
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
