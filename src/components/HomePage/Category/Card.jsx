"use client";
import Image from "next/image";
import { useState } from "react";

const Card = () => {
  const [cardHover, setCardHover] = useState("card1");
  return (
    <div className="container flex flex-col gap-10 mx-auto mt-5 bg-white lg:flex-row sm:px-0 ">
      {/* card-1 */}
      <div
        className="relative  sm:w-96  lg:h-[487px]   "
        onMouseEnter={() => setCardHover("card1")}
        onMouseLeave={() => setCardHover(null)}
      >
        {cardHover === "card1" && (
          <div className="absolute bottom-5 left-[-30px] w-[120px] h-[120px] bg-[#244D4D] rounded-[46.548px_0px_15.516px_0px] z-0 transition-transform duration-300 ease-in-out"></div>
        )}

        <div className="relative z-10 bg-white rounded-[55px] w-[420px] sm:w-[350px] h-[420px] hover:shadow-xl p-6 transition-transform transform duration-300 ease-in-out hover:scale-105">
          <figure className="flex justify-center pt-6">
            <Image
              alt="honesty"
              src="/assets/category/bro.svg"
              height={151}
              width={151}
              className="flex-shrink-0"
            />
          </figure>
          {/* Card Body */}
          <div className="mt-6 text-center">
            <h2 className="text-[#1E1D4C] font-baiJamjuree font-semibold text-[31px] hover:text-[#244D4D] transition-colors duration-300">
              Honesty
            </h2>
            <p className="font-baiJamjuree text-[#5E6282] text-[21px] leading-[40.341px] mt-4 hover:text-[#333E59] transition-colors duration-300">
              We prioritize authenticity and follow a transparent, non-pushy
              approach.
            </p>
          </div>
        </div>
      </div>

      {/* card-2 */}
      <div
        className="relative w-full sm:w-96 lg:w-1/3 h-[487px] mx-auto"
        onMouseEnter={() => setCardHover("card2")}
        onMouseLeave={() => setCardHover(null)}
      >
        {cardHover === "card2" && (
          <div className="absolute bottom-5 left-[-30px] w-[120px] h-[120px] bg-[#244D4D] rounded-[46.548px_0px_15.516px_0px] z-0 transition-transform duration-300 ease-in-out"></div>
        )}

        <div className="relative z-10 bg-white rounded-[55px] w-[420px] sm:w-[350px] h-[420px] hover:shadow-xl p-6 transition-transform transform duration-300 ease-in-out hover:scale-105">
          <figure className="flex justify-center pt-6">
            <Image
              alt="honesty"
              src="/assets/category/rafiki.svg"
              height={151}
              width={151}
              className="flex-shrink-0"
            />
          </figure>
          {/* Card Body */}
          <div className="mt-6 text-center">
            <h2 className="text-[#1E1D4C] font-baiJamjuree font-semibold text-[31px] hover:text-[#244D4D] transition-colors duration-300">
              Honesty
            </h2>
            <p className="font-baiJamjuree text-[#5E6282] text-[21px] leading-[40.341px] mt-4 hover:text-[#333E59] transition-colors duration-300">
              We prioritize authenticity and follow a transparent, non-pushy
              approach.
            </p>
          </div>
        </div>
      </div>

      {/* card-3 */}
      <div
        className="relative w-full sm:w-96 lg:w-1/3 h-[487px] mx-auto"
        onMouseEnter={() => setCardHover("card3")}
        onMouseLeave={() => setCardHover(null)}
      >
        {cardHover === "card3" && (
          <div className="absolute bottom-5 left-[-30px] w-[120px] h-[120px] bg-[#244D4D] rounded-[46.548px_0px_15.516px_0px] z-0 transition-transform duration-300 ease-in-out"></div>
        )}

        <div className="relative z-10 bg-white rounded-[55px] w-[420px] sm:w-[350px] h-[420px] hover:shadow-xl p-6 transition-transform transform duration-300 ease-in-out hover:scale-105">
          <figure className="flex justify-center pt-6">
            <Image
              alt="honesty"
              src="/assets/category/amico.svg"
              height={151}
              width={151}
              className="flex-shrink-0"
            />
          </figure>
          {/* Card Body */}
          <div className="mt-6 text-center">
            <h2 className="text-[#1E1D4C] font-baiJamjuree font-semibold text-[31px] hover:text-[#244D4D] transition-colors duration-300">
              Honesty
            </h2>
            <p className="font-baiJamjuree text-[#5E6282] text-[21px] leading-[40.341px] mt-4 hover:text-[#333E59] transition-colors duration-300">
              We prioritize authenticity and follow a transparent, non-pushy
              approach.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
