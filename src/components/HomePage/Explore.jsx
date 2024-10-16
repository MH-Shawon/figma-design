import Image from "next/image";
import CommonLayout from "../layouts/commonLayout";

const Explore = () => {
  return (
    <div className="bg-[#244D4D]  rounded-[0px_0px_150px_0px] md:rounded-[0px_0px_248px_0px]    overflow-hidden md:h-[550px]">
    <CommonLayout>
      <div className="px-4 py-12 md:py-0 ">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="mb-8 lg:w-2/3 lg:pr-8 lg:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold font-volkhov leading-tight text-white">
              Interested in <br className="hidden sm:inline" />
              Working with Us?
            </h1>
            <p className="mt-4 text-base text-white sm:text-lg font-baiJamjuree">
              &quot;FranchiseExpert&quot; embodies our dedication to linking
              individuals with their dreams. Anchored in our core values and driven
              by a vision to empower people to become successful business owners, we
              are committed to turning this vision into reality for as many people
              as we can.
            </p>
            <button className="mt-6 sm:mt-8 px-4 sm:px-6 py-2 sm:py-3 bg-white text-[#244D4D] rounded-md font-semibold flex items-center justify-center sm:justify-start transition-colors duration-300 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
              <span>Explore</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5 ml-2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
          <div className="lg:w-1/3 h-[300px] sm:h-[400px] md:h-[450px] lg:h-[505px]">
            <div className="relative w-full h-full">
              <Image
                src="/assets/images/explore.jpeg"
                alt="Team collaborating in a modern office environment"
                layout="fill"
                objectFit="cover"
                className="rounded-[0px_0px_100px_0px] sm:rounded-[0px_0px_150px_0px] md:rounded-[0px_0px_200px_0px] lg:rounded-[0px_0px_248px_0px]"
              />
            </div>
          </div>
        </div>
      </div>
      </CommonLayout>
    </div>
  );
};
export default Explore;
