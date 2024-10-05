import Image from "next/image";

const Card=()=>{
    return(
        <div className="container flex gap-3 mx-auto">
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
            <div className="shadow-xl card bg-base-100 w-96">
                <figure className="px-10 pt-10">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="items-center text-center card-body">
                    <h2 className="text-[#1E1D4C] font-baiJamjuree font-semibold text-[31px]">Honesty</h2>
                    <p className="font-baiJamjuree text-[#5E6282] text-[21px] leading-[40.341px]">We prioritize authenticity and follow a transparent, non-pushy approach.</p>
                    <div className="card-actions">
                        
                    </div>
                </div>
            </div>
            <div className="shadow-xl card bg-base-100 w-96">
                <figure className="px-10 pt-10">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="items-center text-center card-body">
                    <h2 className="text-[#1E1D4C] font-baiJamjuree font-semibold text-[31px]">Honesty</h2>
                    <p className="font-baiJamjuree text-[#5E6282] text-[21px] leading-[40.341px]">We prioritize authenticity and follow a transparent, non-pushy approach.</p>
                    <div className="card-actions">
                        
                    </div>
                </div>
            </div>
        </div>
    )}
export default Card;