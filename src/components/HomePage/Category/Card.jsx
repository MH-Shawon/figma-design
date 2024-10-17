"use client";
import Image from "next/image";
import { useState } from "react";

const Card = () => {
  const [cardHover, setCardHover] = useState("card1");
  return (
    <div className="container flex flex-col items-center justify-center gap-10 mx-auto mt-5 bg-white lg:flex-row ">
      {/* card-1 */}
      <div
        className="relative  w-[100%] lg:w-1/3 h-[487px] "
        onMouseEnter={() => setCardHover("card1")}
        onMouseLeave={() => setCardHover(null)}
      >
        {cardHover === "card1" && (
          <div className="absolute  bottom-5 md:bottom-5 md:left-[-30px] left-[10px] w-[80px] md:w-[120px] md:h-[120px] h-[120px] bg-[#244D4D] rounded-[46.548px_0px_15.516px_0px] transition-transform duration-300 ease-in-out"></div>
        )}

        <div className="relative z-10 bg-white rounded-[55px] w-[80%] mx-auto h-[435px] hover:shadow-xl p-6 transition-transform transform duration-300 ease-in-out hover:scale-105">
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
            <h2 className="text-[#1E1D4C] font-baiJamjuree font-semibold text-[31px]  transition-colors duration-300">
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
        className="relative  w-[100%] lg:w-1/3 h-[487px] mx-auto"
        onMouseEnter={() => setCardHover("card2")}
        onMouseLeave={() => setCardHover(null)}
      >
        {cardHover === "card2" && (
          <div className="absolute  bottom-5 md:bottom-5 md:left-[-30px] left-[10px] w-[80px] md:w-[120px] md:h-[120px] h-[120px] bg-[#244D4D] rounded-[46.548px_0px_15.516px_0px] transition-transform duration-300 ease-in-out"></div>
        )}

        <div className="relative z-10 bg-white rounded-[55px] w-[80%] mx-auto h-[435px] hover:shadow-xl p-6 transition-transform transform duration-300 ease-in-out hover:scale-105">
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
            <h2 className="text-[#1E1D4C] font-baiJamjuree font-semibold text-[31px]  transition-colors duration-300">
              Advocacy
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
        className="relative  w-[100%] lg:w-1/3 h-[487px] mx-auto"
        onMouseEnter={() => setCardHover("card3")}
        onMouseLeave={() => setCardHover(null)}
      >
        {cardHover === "card3" && (
          <div className="absolute  bottom-5 md:bottom-5 md:left-[-30px] left-[10px] w-[80px] md:w-[120px] md:h-[120px] h-[120px] bg-[#244D4D] rounded-[46.548px_0px_15.516px_0px] transition-transform duration-300 ease-in-out"></div>
        )}

        <div className="relative z-10 bg-white rounded-[55px] w-[80%] mx-auto h-[435px] hover:shadow-xl p-6 transition-transform transform duration-300 ease-in-out hover:scale-105">
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
            <h2 className="text-[#1E1D4C] font-baiJamjuree font-semibold text-[31px]  transition-colors duration-300">
              Availability
            </h2>
            <p className="font-baiJamjuree text-[#5E6282] text-[21px] leading-[40.341px] mt-4 hover:text-[#333E59] transition-colors duration-300">
              Our unwavering commitment is to always be there when you need us. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
