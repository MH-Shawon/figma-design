import Image from "next/image";
import {  FaLinkedinIn } from "react-icons/fa";

const VisionarySec=()=>{
    return(
        <div className="h-[575px]">
            <div className="flex-col w-full gap-0 hero-content lg:flex-row">
                <div className="w-1/3 ">
                    <div className=" relative bg-primary w-[339px] h-[550px] ">

                        <Image src='/assets/images/girl.png' width={442} height={575} alt="visionary" className="absolute bottom-0 left-[170px] w-[442px] h-[575px] object-cover" />
                    </div>
                </div>
                <div className="w-2/3 pl-24 h-[500px]">
                    <h1 className="text-5xl capitalize font-volkhov text-[#6C6C6C]"><span className="text-primary">Meet</span> the Visionary</h1>
                    <p className="w-[751px] font-baiJamjuree text-[16px] text-[#5F5F64] tracking-[0.2px] leading-[30px] mt-[21px]">
                        “The Franchise Connect” was the catalyst that ignited my journey to link people with their next great opportunity.
                        Starting with car sales straight out of college and moving into the mortgage sector at American Equity Mortgage, I developed my sales skills and work ethic. My career took a significant turn when I joined Leader1 Financial, where I experienced the profound impact of guiding individuals through important life decisions—an approach that became central to my mission.
                        Transitioning into franchise consulting was a seamless shift for me. I saw clear parallels between my previous experiences and my new role, with a focus on helping people make meaningful changes. My knack for understanding concerns, listening attentively, and delivering thoughtful solutions has been the cornerstone of my success in both the mortgage and franchise arenas.
                    </p>
                    <div className="flex gap-2 mt-[35px]">
                    <button className="btn bg-[#0077B5] py-3 px-6 text-white h-[57px] rounded-lg">LET'S CONNECT ON lINKEDIN</button>
                        <FaLinkedinIn className=" h-[56px] w-[56px] text-white bg-[#0077B5] rounded-sm"/>
                    </div>
                </div>
            </div>
        </div>
    )}
export default VisionarySec;