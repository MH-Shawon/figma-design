import { ChevronDown, Star } from "lucide-react";

const Swiper = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex flex-col md:flex-row">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-center bg-no-repeat bg-cover bg-lightgray"
            style={{ backgroundImage: "url('/assets/images/1.png')" }}
          ></div>

          {/* Content Overlay */}
          <div className="relative  w-[470px] h-[386px] flex-shrink-0 bg-white bg-opacity-90 backdrop-blur-[7.5px] p-12">
            <h1 className="mb-4 font-serif text-4xl md:text-5xl">
              <span className="text-primary">Franchise</span>{" "}
              <span className="text-gray-800">Growth and Support Services</span>
            </h1>
            <p className="mb-6 text-gray-600">
              Franchise Growth and Support Services provides comprehensive
              assistance for aspiring and established franchise owners.
            </p>
            <button className="px-6 py-3 text-white transition duration-300 rounded-md bg-primary hover:primary">
              Book Your Free $1 Consultation
            </button>

           
            
          </div>

          {/* Rating Overlay */}
          <div className="absolute p-4 bg-white shadow-md bottom-14 right-[100px]">
            <div className="flex items-center mb-2 space-x-2">
              <div className="flex">
                <span className="mr-2 text-xl font-bold">4.9</span>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 mt-2 fill-current text-primary"
                  />
                ))}
              </div>
              
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 overflow-hidden bg-gray-300 border-2 border-white rounded-full"
                  >
                    {/* Assuming the image files are named 'avatar1.png', 'avatar2.png', etc., in the public folder */}
                    <img
                      src={`/avatar${i + 1}.png`}  // Reference to the image in the public folder
                      alt={`User avatar ${i + 1}`}
                      width={32}
                      height={32}
                    />
                  </div>
                ))}

                {/* SVG element added after the avatars */}
                <div className="flex items-center justify-center w-8 h-8 ml-1 border-2 border-white rounded-full bg-primary">
                  <p className='text-white'>5k</p>
                </div>
              </div>


            </div>
          </div>
          <div className="absolute p-4 rounded-lg bottom-1 right-[80px]">
            
            <div className="flex items-center space-x-2">
                          <span className="text-xl font-notoSerifJP text-[#717171] font-bold">
                              Expand, Diversify, and Safeguard Your Portfolio
                          </span>
            </div>
          </div>
          <div className="absolute p-4 -bottom-12 -right-16 ">
            
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="104" height="104" viewBox="0 0 124 124" fill="none">
                <g filter="url(#filter0_b_5_1422)">
                  <rect width="124" height="124" fill="#244D4D" />
                </g>
                <path d="M62 48V76.5M62 76.5L72 66.5M62 76.5L52 66.5" stroke="white" stroke-width="3" stroke-linecap="round" />
                <defs>
                  <filter id="filter0_b_5_1422" x="-50" y="-50" width="224" height="224" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="25" />
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_5_1422" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_5_1422" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
              <div className="py-6 text-black ">
                  <div className="">
                      

                  </div>
              </div>
      </div>

      {/* Footer */}
      
    </div>
  );
};
export default Swiper;
