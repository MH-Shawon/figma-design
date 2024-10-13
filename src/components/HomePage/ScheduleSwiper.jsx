"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const ScheduleSwiper = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      className="mt-[74px] slider-container"
      style={{ paddingBottom: "2rem" }}
    >
      <Slider {...settings}>
        <div className="w-full hero">
          <div className="flex flex-col hero-content lg:flex-row-reverse justify-between">
            <div className="w-full md:w-[50%]">
              <div className="relative ml-auto mt-32 h-[250px] w-[420px] bg-primary">
                <div className="absolute p-1 bg-white shadow-lg w-[440px] bottom-8 right-8 -left-8">
                  <Image
                    src="/assets/images/Rectangle 4307.png"
                    alt="Styled Design"
                    width={600}
                    height={485}
                    className="rounded-lg "
                  />
                </div>
              </div>
            </div>
            <div className="w-full md:w-[50%] ">
              <div className="text-primary bg-[#F5F5F5] w-1/2 flex">
                <button className="mr-3 md:mr-8 btn hover:btn-primary bg-[#F5F5F5]">
                  Work-Life Balance
                </button>
                <button className="mr-3 md:mr-8 btn hover:btn-primary bg-[#F5F5F5]">
                  Wealth Creation
                </button>
                <button className="btn hover:btn-primary bg-[#F5F5F5]">
                  {" "}
                  Transferrable Skills
                </button>
              </div>
              <div className="h-[1px] mt-8 bg-primary w-[90%]"></div>
              <div className="space-y-8">
                <div className="w-[480px] mt-3">
                  <h1 className="text-5xl font-volkhov text-[#6C6C6C] capitalize">
                    <span className="text-primary">Flexible</span> Schedules,
                    Optimal Earnings
                  </h1>
                </div>

                <div className="text-[#5F5F64]">
                  <p className="">
                    Mortgage loan officers appreciate the freedom to manage
                    their time. Franchising provides that same flexibility,
                    allowing you to build your portfolio and set your own hours
                    while earning based on your effort.
                  </p>
                </div>
                <button className="btn btn-primary w-[260px] h-[58px]">
                  Unlock Your Potential
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full hero">
          <div className="flex flex-col hero-content lg:flex-row-reverse justify-between">
            <div className="w-full md:w-[50%]">
              <div className="relative ml-auto mt-32 h-[250px] w-[420px] bg-primary">
                <div className="absolute p-1 bg-white shadow-lg w-[440px] bottom-8 right-8 -left-8">
                  <Image
                    src="/assets/images/Rectangle 4307.png"
                    alt="Styled Design"
                    width={600}
                    height={485}
                    className="rounded-lg "
                  />
                </div>
              </div>
            </div>
            <div className="w-full md:w-[50%] ">
              <div className="text-primary bg-[#F5F5F5] w-1/2 flex">
                <button className="mr-3 md:mr-8 btn hover:btn-primary bg-[#F5F5F5]">
                  Work-Life Balance
                </button>
                <button className="mr-3 md:mr-8 btn hover:btn-primary bg-[#F5F5F5]">
                  Wealth Creation
                </button>
                <button className="btn hover:btn-primary bg-[#F5F5F5]">
                  {" "}
                  Transferrable Skills
                </button>
              </div>
              <div className="h-[1px] mt-8 bg-primary w-[90%]"></div>
              <div className="space-y-8">
                <div className="w-[480px] mt-3">
                  <h1 className="text-5xl font-volkhov text-[#6C6C6C] capitalize">
                    <span className="text-primary">Flexible</span> Schedules,
                    Optimal Earnings
                  </h1>
                </div>

                <div className="text-[#5F5F64]">
                  <p className="">
                    Mortgage loan officers appreciate the freedom to manage
                    their time. Franchising provides that same flexibility,
                    allowing you to build your portfolio and set your own hours
                    while earning based on your effort.
                  </p>
                </div>
                <button className="btn btn-primary w-[260px] h-[58px]">
                  Unlock Your Potential
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full hero">
          <div className="flex flex-col hero-content lg:flex-row-reverse justify-between">
            <div className="w-full md:w-[50%]">
              <div className="relative ml-auto mt-32 h-[250px] w-[420px] bg-primary">
                <div className="absolute p-1 bg-white shadow-lg w-[440px] bottom-8 right-8 -left-8">
                  <Image
                    src="/assets/images/Rectangle 4307.png"
                    alt="Styled Design"
                    width={600}
                    height={485}
                    className="rounded-lg "
                  />
                </div>
              </div>
            </div>
            <div className="w-full md:w-[50%] ">
              <div className="text-primary bg-[#F5F5F5] w-1/2 flex">
                <button className="mr-3 md:mr-8 btn hover:btn-primary bg-[#F5F5F5]">
                  Work-Life Balance
                </button>
                <button className="mr-3 md:mr-8 btn hover:btn-primary bg-[#F5F5F5]">
                  Wealth Creation
                </button>
                <button className="btn hover:btn-primary bg-[#F5F5F5]">
                  {" "}
                  Transferrable Skills
                </button>
              </div>
              <div className="h-[1px] mt-8 bg-primary w-[90%]"></div>
              <div className="space-y-8">
                <div className="w-[480px] mt-3">
                  <h1 className="text-5xl font-volkhov text-[#6C6C6C] capitalize">
                    <span className="text-primary">Flexible</span> Schedules,
                    Optimal Earnings
                  </h1>
                </div>

                <div className="text-[#5F5F64]">
                  <p className="">
                    Mortgage loan officers appreciate the freedom to manage
                    their time. Franchising provides that same flexibility,
                    allowing you to build your portfolio and set your own hours
                    while earning based on your effort.
                  </p>
                </div>
                <button className="btn btn-primary w-[260px] h-[58px]">
                  Unlock Your Potential
                </button>
              </div>
            </div>
          </div>
        </div>
      </Slider>

      {/* Custom styles for dots */}
      <style jsx global>{`
        .slick-dots {
          margin-left: 17rem;
          text-align: left;
        }
        .slick-dots li button:before {
          color: #333;
          font-size: 16px;
        }
        .slick-dots li.slick-active button:before {
          color: #244d4d;
        }
      `}</style>
    </div>
  );
};

export default ScheduleSwiper;
