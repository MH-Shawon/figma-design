import Image from "next/image";

const Explore=()=>{
    return(
        <div className="relative w-full  h-[550px] bg-[#244D4D] rounded-[0px_0px_248px_0px] flex items-center justify-between p-12">
           
            <div className="max-w-[50%] text-white">
                <h1 className="text-[64px] font-bold font-volkhov leading-tight">
                    Interested in <br />
                    Working with Us?
                </h1>
                <p className="mt-4 text-lg font-baiJamjuree">
                    &quot;FranchiseExpert&quot; embodies my dedication to linking individuals with
                    their dreams. Anchored in our core values and driven by a vision to
                    empower people to become successful business owners, we are committed
                    to turning this vision into reality for as many people as we can.
                </p>

                
                <button className="mt-8 px-6 py-3 bg-white text-[#244D4D] rounded-md font-semibold flex items-center space-x-2">
                    Explore
                    <span className="inline-block ml-5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </span>
                </button>
            </div>

            
            <div className="relative w-[334px] h-[505px] mb-11 flex-shrink-0 rounded-[0px_0px_248px_0px] overflow-hidden bg-[#E0E3E1]">
                
                <Image
                    src="/assets/images/explore.jpeg" 
                    
                    alt="Team Working"
                    layout="fill"
                    objectFit="cover"
                    className="flex-shrink-0"
                />
            </div>
        </div>
    )}
export default Explore;