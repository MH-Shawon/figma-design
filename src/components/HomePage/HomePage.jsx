import Schedule from "./Schedule";
import Banner from "./Banner";
import Companies from "./Companies";
import VisionarySec from "./VisionarySec";
import Categories from "./Category/Categories";
import Explore from "./Explore";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Companies />
      <Schedule />
      <VisionarySec />
      <Categories />
      <Explore />
    </div>
  );
};

export default HomePage;
