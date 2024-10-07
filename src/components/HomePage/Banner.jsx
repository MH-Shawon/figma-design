const Banner = () => {
  return (
    <div>
      <div className="relative flex items-center justify-center bg-[#FFF]">
        {/* Background Image */}
        <div
          className="absolute top-0 right-32 w-[873px] h-[476px] bg-cover bg-no-repeat bg-[#d3d3d3] flex-shrink-0"
          style={{ backgroundImage: "url('/assets/images/banner.png')" }}
        ></div>

        {/* Content */}
        <div className="relative right-[440px] space-x-8 mt-20">
          {/* Text Section */}
          <div className="w-[400px]  p-10 bg-white shadow-lg bg-opacity-90">
            <h1 className="text-4xl font-bold text-[#6C6C6C] font-notoSerifJP tracking-[-1.47px] ">
              <span className="text-primary">Franchise</span> Growth <br /> and
              Support Services
            </h1>
            <p className="mt-4 font-baiJamjuree text-[#5F5F64]">
              Franchise Growth and Support Services provides comprehensive
              assistance for aspiring and established franchise owners.
            </p>
            <button className="px-6 py-2 mt-6 text-white rounded-lg shadow-md bg-primary hover:bg-primary">
              Book Your Free 1 Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
