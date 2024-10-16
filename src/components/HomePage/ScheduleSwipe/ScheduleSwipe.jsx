"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./swipe.css";
import Image from "next/image";
import CommonLayout from "@/components/layouts/commonLayout";
const ScheduleSwipe = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
          
            <div className="w-full hero">
              <div className="flex flex-col justify-between hero-content lg:flex-row-reverse">
                <div className="w-full lg:w-1/2">
                  <div className="relative mx-auto mt-8 md:bottom-0  lg:mt-32 h-[250px] w-[80%] md:w-[70%] md:h-[320px]  bg-primary ">
                    <div className="absolute  bg-white shadow-lg w-[300px] md:w-[440px] -bottom-4 -top-8 right-4 -left-12 md:-top-14 h-[250px] md:h-[350px] md:right-8 md:-left-10">
                      <Image
                        src="/assets/images/Rectangle 4307.png"
                        alt="Styled Design"
                        width={600}
                        height={485}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full mt-12 lg:w-1/2 lg:mt-0">
                  <div className="text-primary bg-[#F5F5F5] w-full  flex flex-wrap justify-center lg:justify-start">
                    <button className="m-1 btn hover:btn-primary bg-[#F5F5F5] text-xs sm:text-sm">
                      Work-Life Balance
                    </button>
                    <button className="m-1 btn hover:btn-primary bg-[#F5F5F5] text-xs sm:text-sm">
                      Wealth Creation
                    </button>
                    <button className="m-1 btn hover:btn-primary bg-[#F5F5F5] text-xs sm:text-sm">
                      Transferrable Skills
                    </button>
                  </div>
                  <div className="h-[1px] mt-4 lg:mt-8 bg-primary w-full lg:w-[90%]"></div>
                  <div className="mt-4 space-y-4 lg:space-y-8 lg:mt-0">
                    <div className="w-full lg:w-[480px]">
                      <h1 className="text-3xl lg:text-5xl font-volkhov text-[#6C6C6C] capitalize">
                        <span className="text-primary">Flexible</span>{" "}
                        Schedules, Optimal Earnings
                      </h1>
                    </div>

                    <div className="text-[#5F5F64]">
                      <p className="text-sm lg:text-base">
                        Mortgage loan officers appreciate the freedom to manage
                        their time. Franchising provides that same flexibility,
                        allowing you to build your portfolio and set your own
                        hours while earning based on your effort.
                      </p>
                    </div>
                    <button className="btn btn-primary w-full sm:w-[260px] h-[48px] lg:h-[58px] text-sm lg:text-base">
                      Unlock Your Potential
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div className="keen-slider__slide number-slide2">
            <div className="w-full hero">
              <div className="flex flex-col justify-between hero-content lg:flex-row-reverse">
                <div className="w-full lg:w-1/2">
                  <div className="relative mx-auto mt-8 md:bottom-0  lg:mt-32 h-[250px] w-[80%] md:w-[70%] md:h-[320px]  bg-primary ">
                    <div className="absolute  bg-white shadow-lg w-[300px] md:w-[440px] -bottom-4 -top-8 right-4 -left-12 md:-top-14 h-[250px] md:h-[350px] md:right-8 md:-left-10">
                      <Image
                        src="/assets/images/Rectangle 4307.png"
                        alt="Styled Design"
                        width={600}
                        height={485}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full mt-12 lg:w-1/2 lg:mt-0">
                  <div className="text-primary bg-[#F5F5F5] w-full  flex flex-wrap justify-center lg:justify-start">
                    <button className="m-1 btn hover:btn-primary bg-[#F5F5F5] text-xs sm:text-sm">
                      Work-Life Balance
                    </button>
                    <button className="m-1 btn hover:btn-primary bg-[#F5F5F5] text-xs sm:text-sm">
                      Wealth Creation
                    </button>
                    <button className="m-1 btn hover:btn-primary bg-[#F5F5F5] text-xs sm:text-sm">
                      Transferrable Skills
                    </button>
                  </div>
                  <div className="h-[1px] mt-4 lg:mt-8 bg-primary w-full lg:w-[90%]"></div>
                  <div className="mt-4 space-y-4 lg:space-y-8 lg:mt-0">
                    <div className="w-full lg:w-[480px]">
                      <h1 className="text-3xl lg:text-5xl font-volkhov text-[#6C6C6C] capitalize">
                        <span className="text-primary">Flexible</span>{" "}
                        Schedules, Optimal Earnings
                      </h1>
                    </div>

                    <div className="text-[#5F5F64]">
                      <p className="text-sm lg:text-base">
                        Mortgage loan officers appreciate the freedom to manage
                        their time. Franchising provides that same flexibility,
                        allowing you to build your portfolio and set your own
                        hours while earning based on your effort.
                      </p>
                    </div>
                    <button className="btn btn-primary w-full sm:w-[260px] h-[48px] lg:h-[58px] text-sm lg:text-base">
                      Unlock Your Potential
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide3">
            <div className="w-full hero">
              <div className="flex flex-col justify-between hero-content lg:flex-row-reverse">
                <div className="w-full lg:w-1/2">
                  <div className="relative mx-auto mt-8 md:bottom-0  lg:mt-32 h-[250px] w-[80%] md:w-[70%] md:h-[320px]  bg-primary ">
                    <div className="absolute  bg-white shadow-lg w-[300px] md:w-[440px] -bottom-4 -top-8 right-4 -left-12 md:-top-14 h-[250px] md:h-[350px] md:right-8 md:-left-10">
                      <Image
                        src="/assets/images/Rectangle 4307.png"
                        alt="Styled Design"
                        width={600}
                        height={485}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full mt-12 lg:w-1/2 lg:mt-0">
                  <div className="text-primary bg-[#F5F5F5] w-full  flex flex-wrap justify-center lg:justify-start">
                    <button className="m-1 btn hover:btn-primary bg-[#F5F5F5] text-xs sm:text-sm">
                      Work-Life Balance
                    </button>
                    <button className="m-1 btn hover:btn-primary bg-[#F5F5F5] text-xs sm:text-sm">
                      Wealth Creation
                    </button>
                    <button className="m-1 btn hover:btn-primary bg-[#F5F5F5] text-xs sm:text-sm">
                      Transferrable Skills
                    </button>
                  </div>
                  <div className="h-[1px] mt-4 lg:mt-8 bg-primary w-full lg:w-[90%]"></div>
                  <div className="mt-4 space-y-4 lg:space-y-8 lg:mt-0">
                    <div className="w-full lg:w-[480px]">
                      <h1 className="text-3xl lg:text-5xl font-volkhov text-[#6C6C6C] capitalize">
                        <span className="text-primary">Flexible</span>{" "}
                        Schedules, Optimal Earnings
                      </h1>
                    </div>

                    <div className="text-[#5F5F64]">
                      <p className="text-sm lg:text-base">
                        Mortgage loan officers appreciate the freedom to manage
                        their time. Franchising provides that same flexibility,
                        allowing you to build your portfolio and set your own
                        hours while earning based on your effort.
                      </p>
                    </div>
                    <button className="btn btn-primary w-full sm:w-[260px] h-[48px] lg:h-[58px] text-sm lg:text-base">
                      Unlock Your Potential
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className="scheDots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"sDot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ScheduleSwipe;
