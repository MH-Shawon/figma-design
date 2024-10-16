import Image from "next/image";

const SubscribeSection = () => {
  return (
    <div className="container mx-auto h-[350px] flex items-center justify-center  mt-[94px] mb-[55px]">
      <div
        
        className="bg-[#B1B1B1] space-y-10 relative lg:w-[90%] w-[100%] md:rounded-[129px_20px_20px_20px] rounded-[20px] h-[407px]"
      >
        <div className="absolute p-3 text-white hidden lg:block h-[70px] w-[70px] rounded-full opacity-100 -top-10 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
          >
            <circle cx="35" cy="35" r="35" fill="#244D4D" />
            <path
              d="M52.6105 23.9904C53.3018 25.1878 53.2092 26.6136 52.3677 27.711L33.8939 51.8182C33.1321 52.8123 31.8776 53.3191 30.5948 53.0729C29.3387 52.8313 28.3427 51.9156 27.997 50.6841L25.2635 40.9555L24.9789 39.9435L24.2449 39.191L17.1864 31.9595C16.2927 31.0444 15.9977 29.724 16.4166 28.5154C16.8311 27.3206 17.8708 26.4536 19.1527 26.2856L49.267 22.3404C50.6381 22.1604 51.9192 22.793 52.6105 23.9904Z"
              fill="white"
            />
            <path
              d="M25.2636 40.9555L27.997 50.6841C28.3427 51.9157 29.3386 52.8313 30.5948 53.0729C31.8776 53.3192 33.1321 52.8124 33.8939 51.8182L52.3677 27.7111C53.2092 26.6137 53.3018 25.1879 52.6105 23.9905L24.9789 39.9436L25.2636 40.9555Z"
              fill="white"
            />
            <path
              d="M36.2233 33.4515C36.5044 33.9385 36.338 34.5616 35.8504 34.8431L25.2637 40.9553L24.979 39.9434L24.245 39.1909L34.8317 33.0787C35.3193 32.7973 35.9421 32.9646 36.2233 33.4515Z"
              fill="#244D4D"
            />
            <path
              d="M25.2636 40.9554L35.8503 34.8432C36.3379 34.5617 36.5044 33.9387 36.2232 33.4517L24.9789 39.9435L25.2636 40.9554Z"
              fill="#244D4D"
            />
          </svg>
        </div>
        <div className="absolute p-3 text-white h-[351.521px] md:w-[264px] w-0  rounded-[0px_24px_0px_50px]  -top-10 md:-right-3 ">
          <div>
            <Image
              alt="circle"
              src="/assets/Group 42.png"
              width={264}
              height={251}
              className="hidden w-full h-full md:block"
            />
          </div>
        </div>
        <div className="absolute p-3 text-white h-[480.521px] md:w-[364px] w-0 rounded-[0px_24px_0px_50px]  -bottom-[216px] ">
          <div>
            <Image
              alt="circle"
              src="/assets/Group 43.png"
              width={264}
              height={251}
              className="hidden w-full h-full md:block"
            />
          </div>
        </div>
        <div className='md:py-[60px] md:space-y-16 space-y-16'>

  
        <h3 className="text-center  text-[#5E6282] font-semibold text-[33px] font-poppins px-[5px] md:px-[150px] z-10 top-10">
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </h3>
        <form className="flex items-center justify-center w-[100%] top-52">
          <div className="z-10 flex items-center w-[63%] md:w-[50%]">
            <Image
              src="/assets/Group 46.svg"
              alt="Email Icon"
              width={21}
              height={18}
              className="absolute ml-3 "
            />

            <input
              type="email"
              placeholder="Your email"
              className="p-3 bg-white text-[#39425D] rounded-lg w-[100%] pl-11"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 ml-2 text-base font-semibold text-white rounded-lg bg-primary"
          >
            Subscribe
          </button>
        </form>
</div>
      </div>
    </div>
  );
};

export default SubscribeSection;
