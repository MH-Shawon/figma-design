import Image from "next/image";
import {  FaLinkedinIn } from "react-icons/fa";

const VisionarySec=()=>{
    return(
        <div className="h-auto lg:h-[575px] mt-10 lg:mt-24 px-4 lg:px-0">
            <div className="flex flex-col items-center w-full gap-10 lg:flex-row lg:items-start lg:gap-0 hero-content">
                {/* Image Section */}
                <div className="flex justify-center w-full lg:w-1/3 lg:justify-start">
                    <div className="relative bg-primary w-[200px] sm:w-[250px] md:w-[300px] lg:w-[339px] h-[350px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
                        <Image
                            src="/assets/images/girl.png"
                            width={442}
                            height={575}
                            alt="visionary"
                            className="absolute bottom-0 left-0 sm:left-[50px] md:left-[100px] lg:left-[170px] w-[200px] sm:w-[250px] md:w-[350px] lg:w-[442px] h-[350px] sm:h-[400px] md:h-[500px] lg:h-[575px] object-cover"
                        />
                    </div>
                </div>

                {/* Text Section */}
                <div className="w-full ml-12 lg:w-2/3 lg:pl-12 lg:mt-12 space-y-7">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl capitalize font-volkhov text-[#6C6C6C] text-center lg:text-left">
                        <span className="text-primary">Meet</span> the Visionary
                    </h1>
                    <p className="font-baiJamjuree text-sm sm:text-base lg:text-[16px] text-[#5F5F64] tracking-[0.2px] leading-[24px] sm:leading-[28px] md:leading-[30px] mt-4 lg:mt-[21px] text-center lg:text-left w-full lg:w-[751px]">
                        “The Franchise Connect” was the catalyst that ignited my journey to link people with their next great opportunity.
                        Starting with car sales straight out of college and moving into the mortgage sector at American Equity Mortgage, I developed my sales skills and work ethic. My career took a significant turn when I joined Leader1 Financial, where I experienced the profound impact of guiding individuals through important life decisions—an approach that became central to my mission.
                        Transitioning into franchise consulting was a seamless shift for me. I saw clear parallels between my previous experiences and my new role, with a focus on helping people make meaningful changes. My knack for understanding concerns, listening attentively, and delivering thoughtful solutions has been the cornerstone of my success in both the mortgage and franchise arenas.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mt-6 lg:mt-[35px]">
                        <button className="btn bg-[#0077B5] py-2 sm:py-3 px-4 sm:px-6 text-white rounded-lg">
                            LET&apos;S CONNECT ON LINKEDIN
                        </button>
                        <FaLinkedinIn className="h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] lg:h-[56px] lg:w-[56px] text-white bg-[#0077B5] rounded-sm" />
                    </div>
                </div>
            </div>
        </div>
    )}
export default VisionarySec;