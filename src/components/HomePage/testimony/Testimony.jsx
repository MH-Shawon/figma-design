"use client";
import Image from "next/image";
import CommonLayout from "../../layouts/commonLayout";

import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./Testimoy.css";

const Testimony = () => {
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
    <div className="navigation-wrapper">
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <CommonLayout>
            <section className="flex flex-wrap flex-col mt-8 md:mt-0 justify-start lg:justify-between lg:flex-row lg:items-center">
              <div className="space-y-2 lg:space-y-8 text-start w-[100%] lg:w-1/3">
                <p className="text-sm font-poppins font-semibold tracking-wide text-[#5E6282] uppercase">
                  Testimonials
                </p>
                <h2 className="text-4xl font-bold capitalize text-primary font-volkhov">
                  What People Say About Us.
                </h2>
                <div>
                  {loaded && instanceRef.current && (
                    <div className="dots">
                      {[
                        ...Array(
                          instanceRef.current.track.details.slides.length
                        ).keys(),
                      ].map((idx) => {
                        return (
                          <button
                            key={idx}
                            onClick={() => {
                              instanceRef.current?.moveToIdx(idx);
                            }}
                            className={
                              "dot" + (currentSlide === idx ? " active" : "")
                            }
                          ></button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              {/* Testimonial Card */}

              <div className="relative mr-24 mt-28 text-[#5E6282] font-poppins lg-w-2/3">
                <div className="absolute w-[300px] md:w-[450px] h-[245px] rounded-lg bg-[#F7F7F7] border-2 -bottom-[67px] left-12">
                  <div className="relative w-full h-full">
                    <div className="absolute text-left bottom-5 left-8">
                      <h1 className="font-semibold text-[#5E6282]">
                        Chris Thomas
                      </h1>
                      <p className="text-sm text-[#5E6282]">
                        CEO of Red Button
                      </p>
                    </div>
                  </div>
                </div>

                {/* Foreground Div (relative) */}
                <div className="relative w-[300px] ml-8 md:ml-0 md:w-[450px] h-[280px] md:h-[245px] p-8 rounded-xl  bg-white shadow-xl mb-4">
                  <Image
                    src="/assets/images/testimoni.png"
                    alt="User Profile"
                    height={68}
                    width={68}
                    className="absolute w-16 h-16 border-2 border-white rounded-full shadow-sm -top-4 -left-4"
                  />

                  <p className="mt-8 mb-4 text-lg text-[#5E6282]">
                    “On the Windows talking painted pasture yet its express
                    parties use. Sure last upon he same as knew next. Or
                    believed or diverted no.”
                  </p>
                  <div>
                    <p className="font-semibold text-[#5E6282]">Mike taylor</p>
                    <p className="text-sm text-[#5E6282]">Lahore, Pakistan</p>
                  </div>
                </div>
              </div>

              <div className="w-3 h-[71px] mt-24 hidden md:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="75"
                  viewBox="0 0 16 75"
                  fill="none"
                >
                  <path
                    d="M1 8.5L8 1.5L15 8.5"
                    stroke="#BCB7C2"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M1 66L8 73L15 66"
                    stroke="#3E2E4D"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </section>
          </CommonLayout>
        </div>
        <div className="keen-slider__slide number-slide2">
          <CommonLayout>
            <section className="flex flex-col justify-between lg:flex-row lg:items-center">
              <div className="space-y-8 text-start lg:w-1/3">
                <p className="text-sm font-poppins font-semibold tracking-wide text-[#5E6282] uppercase">
                  Testimonials
                </p>
                <h2 className="w-[320px] text-4xl font-bold capitalize text-primary font-volkhov">
                  What People Say About Us.
                </h2>
                <div>
                  {loaded && instanceRef.current && (
                    <div className="dots">
                      {[
                        ...Array(
                          instanceRef.current.track.details.slides.length
                        ).keys(),
                      ].map((idx) => {
                        return (
                          <button
                            key={idx}
                            onClick={() => {
                              instanceRef.current?.moveToIdx(idx);
                            }}
                            className={
                              "dot" + (currentSlide === idx ? " active" : "")
                            }
                          ></button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              {/* Testimonial Card */}

              <div className="relative mr-24 mt-28 text-[#5E6282] font-poppins">
                <div className="absolute w-[450px] h-[245px] rounded-lg bg-[#F7F7F7] border-2 -bottom-[67px] left-12">
                  <div className="relative w-full h-full">
                    <div className="absolute text-left bottom-5 left-8">
                      <h1 className="font-semibold text-[#5E6282]">
                        Chris Thomas
                      </h1>
                      <p className="text-sm text-[#5E6282]">
                        CEO of Red Button
                      </p>
                    </div>
                  </div>
                </div>

                {/* Foreground Div (relative) */}
                <div className="relative w-[450px] h-[245px] p-8 rounded-xl  bg-white shadow-xl mb-4">
                  <Image
                    src="/assets/images/testimoni.png"
                    alt="User Profile"
                    height={68}
                    width={68}
                    className="absolute w-16 h-16 border-2 border-white rounded-full shadow-sm -top-4 -left-4"
                  />

                  <p className="mt-8 mb-4 text-lg text-[#5E6282]">
                    “On the Windows talking painted pasture yet its express
                    parties use. Sure last upon he same as knew next. Or
                    believed or diverted no.”
                  </p>
                  <div>
                    <p className="font-semibold text-[#5E6282]">Mike taylor</p>
                    <p className="text-sm text-[#5E6282]">Lahore, Pakistan</p>
                  </div>
                </div>
              </div>

              <div className="w-3 h-[71px] mt-24 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="75"
                  viewBox="0 0 16 75"
                  fill="none"
                >
                  <path
                    d="M1 8.5L8 1.5L15 8.5"
                    stroke="#BCB7C2"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M1 66L8 73L15 66"
                    stroke="#3E2E4D"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </section>
          </CommonLayout>
        </div>
        <div className="keen-slider__slide number-slide3">
          <CommonLayout>
            <section className="flex flex-col justify-between lg:flex-row lg:items-center">
              <div className="space-y-8 text-start lg:w-1/3">
                <p className="text-sm font-poppins font-semibold tracking-wide text-[#5E6282] uppercase">
                  Testimonials
                </p>
                <h2 className="w-[320px] text-4xl font-bold capitalize text-primary font-volkhov">
                  What People Say About Us.
                </h2>
                <div>
                  {loaded && instanceRef.current && (
                    <div className="dots">
                      {[
                        ...Array(
                          instanceRef.current.track.details.slides.length
                        ).keys(),
                      ].map((idx) => {
                        return (
                          <button
                            key={idx}
                            onClick={() => {
                              instanceRef.current?.moveToIdx(idx);
                            }}
                            className={
                              "dot" + (currentSlide === idx ? " active" : "")
                            }
                          ></button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              {/* Testimonial Card */}

              <div className="relative mr-24 mt-28 text-[#5E6282] font-poppins">
                <div className="absolute w-[450px] h-[245px] rounded-lg bg-[#F7F7F7] border-2 -bottom-[67px] left-12">
                  <div className="relative w-full h-full">
                    <div className="absolute text-left bottom-5 left-8">
                      <h1 className="font-semibold text-[#5E6282]">
                        Chris Thomas
                      </h1>
                      <p className="text-sm text-[#5E6282]">
                        CEO of Red Button
                      </p>
                    </div>
                  </div>
                </div>

                {/* Foreground Div (relative) */}
                <div className="relative w-[450px] h-[245px] p-8 rounded-xl  bg-white shadow-xl mb-4">
                  <Image
                    src="/assets/images/testimoni.png"
                    alt="User Profile"
                    height={68}
                    width={68}
                    className="absolute w-16 h-16 border-2 border-white rounded-full shadow-sm -top-4 -left-4"
                  />

                  <p className="mt-8 mb-4 text-lg text-[#5E6282]">
                    “On the Windows talking painted pasture yet its express
                    parties use. Sure last upon he same as knew next. Or
                    believed or diverted no.”
                  </p>
                  <div>
                    <p className="font-semibold text-[#5E6282]">Mike taylor</p>
                    <p className="text-sm text-[#5E6282]">Lahore, Pakistan</p>
                  </div>
                </div>
              </div>

              <div className="w-3 h-[71px] mt-24 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="75"
                  viewBox="0 0 16 75"
                  fill="none"
                >
                  <path
                    d="M1 8.5L8 1.5L15 8.5"
                    stroke="#BCB7C2"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M1 66L8 73L15 66"
                    stroke="#3E2E4D"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </section>
          </CommonLayout>
        </div>
      </div>
    </div>
  );
};
export default Testimony;
