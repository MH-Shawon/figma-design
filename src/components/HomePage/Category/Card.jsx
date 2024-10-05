import Image from "next/image";

const Card=()=>{
    return(
        <div className="container flex gap-3 mx-auto mt-5 bg-white">
            <div className=" card w-96">
                <figure className="px-10 pt-10">
                    <Image alt="honesty" src='/assets/category/bro.svg' height={151} width={151} />
                </figure>
                <div className="items-center text-center card-body">
                    <h2 className="text-[#1E1D4C] font-baiJamjuree font-semibold text-[31px]">Honesty</h2>
                    <p className="font-baiJamjuree text-[#5E6282] text-[21px] leading-[40.341px]">We prioritize authenticity and follow a transparent, non-pushy approach.</p>
                    <div className="card-actions">
                        
                    </div>
                </div>
            </div>
{/* card-2  */}
            
            <div className="relative w-[414px] h-[487px]">
               
                <div className="absolute bottom-[-20px] left-[-40px] w-[155px] h-[155px] bg-[#244D4D] rounded-[46.548px_0px_15.516px_0px] z-0"></div>

                
                <div className="relative z-10 bg-white rounded-[55px] shadow-lg w-full h-full p-6">
                    
                    <div className="flex justify-center pt-6">
                        <Image
                            src="/assets/category/rafiki.svg"
                            alt="Advocacy"
                            width={151}
                            height={151}
                            className="flex-shrink-0"
                        />
                    </div>

                    {/* Card Body */}
                    <div className="mt-6 text-center">
                        <h2 className="text-[#1E1D4C] font-bold text-[31px]">Advocacy</h2>
                        <p className="text-[#5E6282] text-[21px] leading-[40px] mt-4">
                            Our advocacy extends to both individuals seeking franchise
                            opportunities and franchises looking for the right candidates.
                        </p>
                    </div>
                </div>
            </div>


            {/* card-3  */}
            <div className=" card w-96">
                <figure className="px-10 pt-10">
                    <Image alt="honesty" src='/assets/category/amico.svg' height={151} width={151} />
                </figure>
                <div className="items-center text-center card-body">
                    <h2 className="text-[#1E1D4C] font-baiJamjuree font-semibold text-[31px]">Availability</h2>
                    <p className="font-baiJamjuree text-[#5E6282] text-[21px] leading-[40.341px]">Our unwavering commitment is to always be there when you need us. </p>
                    
                </div>
            </div>
        </div>
    )}
export default Card;