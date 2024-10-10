import Image from "next/image";

const Schedule = () => {
  return (
    <div>
      <div className="w-full hero">
        <div className="flex-col px-16 hero-content lg:flex-row-reverse">
          <div className="w-full">
            <div className="relative  mt-32 h-[250px] w-[420px] bg-primary">
              <div className="absolute p-1 bg-white shadow-lg w-[420px] bottom-8 right-8 -left-8">
                <Image
                  src="/assets/images/Rectangle 4307.png"
                  alt="Styled Design"
                  width={600}
                  height={485}
                  className="rounded-lg "
                />
              </div>
            </div>
          </div>
          <div>
            <div className="text-primary bg-[#F5F5F5] w-1/2 flex ">
              <button className="mr-8 btn hover:btn-primary bg-[#F5F5F5]">
                Work-Life Balance
              </button>
              <button className="mr-8 btn hover:btn-primary bg-[#F5F5F5]">
                Wealth Creation
              </button>
              <button className="btn hover:btn-primary bg-[#F5F5F5]">
                {" "}
                Transferrable Skills
              </button>
            </div>
            <div className="h-[1px] mt-8 bg-primary w-[550px]"></div>
            <div className="space-y-8">
              <div className="w-[480px] mt-3">
                <h1 className="text-5xl font-volkhov text-[#6C6C6C] capitalize">
                  <span className="text-primary">Flexible</span> Schedules,
                  Optimal Earnings
                </h1>
              </div>

              <div className="text-[#5F5F64]">
                <p className="pr-[500px]">
                  Mortgage loan officers appreciate the freedom to manage their
                  time. Franchising provides that same flexibility, allowing you
                  to build your portfolio and set your own hours while earning
                  based on your effort.
                </p>
              </div>
              <button className="btn btn-primary w-[260px] h-[58px]">
                Unlock Your Potential
              </button>
            </div>
            <div className="mt-8 ml-52">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="87"
                height="12"
                viewBox="0 0 87 12"
                fill="none"
              >
                <circle cx="6" cy="6" r="6" fill="#244D4D" />
                <circle cx="44" cy="6" r="6" fill="#C7C7C7" />
                <circle cx="81" cy="6" r="6" fill="#C7C7C7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Schedule;