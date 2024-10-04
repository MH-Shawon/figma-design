const Banner = () => {
  return (
    <div className="w-full text-white border border-red-300 bg-base-300">
      <div className="carousel">
        {banners.map((banner, index) => (
          <div
            style={{
              backgroundImage: ` url(/assets/images/banner.png)`,
            }}
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item relative w-[970px] bg-right  bg-no-repeat h-[670px] rounded-xl"
          >
                <div className=" h-[570px] w-[460px] pl-10 mr-10  mt-[180px]">
              <div className="space-y-6  bg-[rgba(255,255,255,0.90)]">
                        <h1 className="text-5xl font-notoSerifJP text-[#6C6C6C] tracking-[-1.47px]">
                            {banner.title}
                </h1>
                        <p className="font-baiJamjuree text-[20px] text-[#5F5F64]">{banner.description}
                </p>
                <button className="btn-sm btn btn-primary">
                  Book Your Free 1:1 Consultation
                </button>
              </div>
            </div>
            <div className="absolute flex justify-between transform bottom-12 right-12">
              <a href={banner.prev} className="mr-6 btn btn-circle">
                ❮
              </a>
              <a href={banner.next} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const banners = [
  {
        title: "Franchise Growth and Support Services",
    description:
      "Franchise Growth and Support Services provides comprehensive assistance for aspiring and established franchise owners.",
    next: "#slide2",
    prev: "#slide4",
  },
//   {
//       title: "Franchise Growth and Support Services",
//       description:
//           "Franchise Growth and Support Services provides comprehensive assistance for aspiring and established franchise owners.",
//     next: "#slide3",
//     prev: "#slide1",
//   },
//   {
//       title: "Franchise Growth and Support Services",
//       description:
//           "Franchise Growth and Support Services provides comprehensive assistance for aspiring and established franchise owners.",
//     next: "#slide4",
//     prev: "#slide2",
//   },
//   {
//       title: "Franchise Growth and Support Services",
//       description:
//           "Franchise Growth and Support Services provides comprehensive assistance for aspiring and established franchise owners.",
//     next: "#slide1",
//     prev: "#slide3",
//   },
];

export default Banner;
