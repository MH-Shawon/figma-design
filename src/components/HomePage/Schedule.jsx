import Image from "next/image";

const Schedule = () => {
  return (
    <div>
      <div className="w-full hero">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <div className="w-full">
            <Image src='/assets/images/Rectangle 4307.png' alt="schedule" height={480} width={650}  className=""/>
          </div>
          <div>
            <div className="text-primary bg-[#F5F5F5] w-1/2 flex">
              <button className="mr-8 btn hover:btn-primary">
                Work-Life Balance
              </button>
              <button className="mr-8 btn hover:btn-primary">
                Wealth Creation
              </button>
              <button className="btn hover:btn-primary">
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
                          <button className="btn btn-primary w-[260px] h-[58px]">Unlock Your Potential</button>  
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default Schedule;
