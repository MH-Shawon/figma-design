import Image from "next/image";

const Testimony = () => {
  return (
    <section className="flex flex-col justify-center lg:flex-row lg:items-center">
      <div className="pl-12 space-y-8 lg:w-1/3">
        <p className="text-sm font-poppins font-semibold tracking-wide text-[#5E6282] uppercase">
          Testimonials
        </p>
        <h2 className="w-[320px] text-4xl font-bold capitalize text-primary font-volkhov">
          What People Say About Us.
        </h2>

        <div className="flex gap-2 mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="87"
            height="12"
            viewBox="0 0 87 12"
            fill="none"
          >
            <circle cx="6" cy="6" r="6" fill="#39425D" />
            <circle cx="44" cy="6" r="6" fill="#E5E5E5" />
            <circle cx="81" cy="6" r="6" fill="#E5E5E5" />
          </svg>
        </div>
      </div>

      {/* Testimonial Card */}

      <div className="relative mr-24 mt-28 text-[#5E6282] font-poppins">
       
        <div className="absolute w-[450px] h-[245px] rounded-lg bg-[#F7F7F7] border-2 -bottom-[67px] left-12">
          <div className="relative w-full h-full">
            <div className="absolute text-left bottom-5 left-8">
              <h1 className="font-semibold text-[#5E6282]">Chris Thomas</h1>
              <p className="text-sm text-[#5E6282]">CEO of Red Button</p>
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
            “On the Windows talking painted pasture yet its express parties use.
            Sure last upon he same as knew next. Or believed or diverted no.”
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
  );
};
export default Testimony;
