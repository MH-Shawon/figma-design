"use client";
import { ChevronDown, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";

const Swiper2 = () => {
  return (
    <div className="text-blue-500 ">
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="h-[300px] md:h-[500px] transition-all duration-200 ease-in mySwiper"
      >
        <SwiperSlide className="flex items-center justify-center text-2xl text-white">
          <div className="bg-white">
            <div className="px-4 mx-auto max-w-7xl lg:px-8">
              <div className="relative flex flex-col -mt-6 md:mt-4 md:flex-row">
                {/* Background Image */}
                <div
                  className="absolute hidden lg:block inset-0 bg-center bg-no-repeat bg-cover -0 bg-lightgray left-[260px]"
                  style={{
                    backgroundImage: "url('/assets/images/1.png')",
                    backgroundPosition: "right",
                    backgroundColor: "lightgray",
                    width: "973px",
                    height: "420px",
                    flexShrink: "0",
                  }}
                ></div>

                {/* Content Overlay */}
                <div className="relative md:w-[370px] h-[320px] bg-white bg-opacity-90 backdrop-blur-[7.5px] font-notoSerifJP font-bold tracking-[-1.47px] space-y-5 mt-12">
                  <h1 className="mb-4 font-serif text-4xl md:text-5xl">
                    <span className="text-primary">Franchise</span>{" "}
                    <span className="text-[#6C6C6C]">
                      Growth and Support Services
                    </span>
                  </h1>
                  <p className="text-[#5F5F64] text-sm tracking-[0.2px]  font-baiJamjuree">
                    Franchise Growth and Support Services provides comprehensive
                    assistance for aspiring and established franchise owners.
                  </p>
                  <button className="flex md:w-[268px] w-[100%] h-[50px] px-[20px] py-[10px] justify-center text-base items-center flex-shrink-0 rounded-md bg-primary text-white font-baiJamjuree  tracking-[-0.32px]">
                    Book Your Free $1 Consultation
                  </button>
                </div>

                {/* Rating Overlay */}
                <div className="absolute p-4 bg-white hidden lg:block shadow-md bottom-14 right-[100px]">
                  <div className="flex items-center mb-2 space-x-2">
                    <div className="flex">
                      <span className="mr-2 text-xl font-bold text-black">
                        4.9
                      </span>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 mt-2 fill-current text-primary"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 overflow-hidden bg-gray-300 border-2 border-white rounded-full"
                        >
                          <img
                            src={`/assets/avatar/Rectangle${i + 1}.svg`}
                            alt={`User avatar ${i + 1}`}
                            width={32}
                            height={32}
                          />
                        </div>
                      ))}
                      <div className="flex items-center justify-center w-8 h-8 ml-1 border-2 border-white rounded-full bg-primary">
                        <p className="text-white">5k</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute p-4 rounded-lg hidden lg:block -bottom-6 right-[80px]">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-notoSerifJP text-[#717171] font-bold">
                      Expand, Diversify, and Safeguard Your Portfolio
                    </span>
                  </div>
                </div>
                <div className="absolute hidden p-4 -bottom-24 lg:block -right-20">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="104"
                      height="104"
                      viewBox="0 0 124 124"
                      fill="none"
                    >
                      <g filter="url(#filter0_b_5_1422)">
                        <rect width="124" height="124" fill="#244D4D" />
                      </g>
                      <path
                        d="M62 48V76.5M62 76.5L72 66.5M62 76.5L52 66.5"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <defs>
                        <filter
                          id="filter0_b_5_1422"
                          x="-50"
                          y="-50"
                          width="224"
                          height="224"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feGaussianBlur
                            in="BackgroundImageFix"
                            stdDeviation="25"
                          />
                          <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_5_1422"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_backgroundBlur_5_1422"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="py-6 text-black">
                <div className=""></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center text-2xl text-white">
          <div className="bg-white">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="relative flex flex-col md:flex-row">
                {/* Background Image */}
                <div
                  className="absolute hidden lg:block inset-0 bg-center bg-no-repeat bg-cover -0 bg-lightgray left-[260px]"
                  style={{
                    backgroundImage: "url('/assets/images/1.png')",
                    backgroundPosition: "right",
                    backgroundColor: "lightgray",
                    width: "973px",
                    height: "420px",
                    flexShrink: "0",
                  }}
                ></div>

                {/* Content Overlay */}
                <div className="relative w-[370px] h-[320px] bg-white bg-opacity-90 backdrop-blur-[7.5px] font-notoSerifJP font-bold tracking-[-1.47px] space-y-5 mt-12">
                  <h1 className="mb-4 font-serif text-4xl md:text-5xl">
                    <span className="text-primary">Franchise</span>{" "}
                    <span className="text-[#6C6C6C]">
                      Growth and Support Services
                    </span>
                  </h1>
                  <p className="text-[#5F5F64] text-sm tracking-[0.2px] font-baiJamjuree">
                    Franchise Growth and Support Services provides comprehensive
                    assistance for aspiring and established franchise owners.
                  </p>
                  <button className="flex md:w-[268px] w-[90%] h-[50px] px-[20px] py-[10px] justify-center text-base items-center flex-shrink-0 rounded-md bg-primary text-white font-baiJamjuree tracking-[-0.32px]">
                    Book Your Free $1 Consultation
                  </button>
                </div>

                {/* Rating Overlay */}
                <div className="absolute p-4 bg-white hidden lg:block shadow-md bottom-14 right-[100px]">
                  <div className="flex items-center mb-2 space-x-2">
                    <div className="flex">
                      <span className="mr-2 text-xl font-bold text-black">
                        4.9
                      </span>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 mt-2 fill-current text-primary"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 overflow-hidden bg-gray-300 border-2 border-white rounded-full"
                        >
                          <img
                            src={`/assets/avatar/Rectangle${i + 1}.svg`}
                            alt={`User avatar ${i + 1}`}
                            width={32}
                            height={32}
                          />
                        </div>
                      ))}
                      <div className="flex items-center justify-center w-8 h-8 ml-1 border-2 border-white rounded-full bg-primary">
                        <p className="text-white">5k</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute p-4 rounded-lg hidden lg:block -bottom-6 right-[80px]">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-notoSerifJP text-[#717171] font-bold">
                      Expand, Diversify, and Safeguard Your Portfolio
                    </span>
                  </div>
                </div>
                <div className="absolute hidden p-4 -bottom-24 lg:block -right-20">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="104"
                      height="104"
                      viewBox="0 0 124 124"
                      fill="none"
                    >
                      <g filter="url(#filter0_b_5_1422)">
                        <rect width="124" height="124" fill="#244D4D" />
                      </g>
                      <path
                        d="M62 48V76.5M62 76.5L72 66.5M62 76.5L52 66.5"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <defs>
                        <filter
                          id="filter0_b_5_1422"
                          x="-50"
                          y="-50"
                          width="224"
                          height="224"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feGaussianBlur
                            in="BackgroundImageFix"
                            stdDeviation="25"
                          />
                          <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_5_1422"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_backgroundBlur_5_1422"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="py-6 text-black">
                <div className=""></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
        
      </Swiper>
    </div>
  );
};

export default Swiper2;
