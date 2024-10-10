const Banner = () => {
  return (
    <div className="container mx-auto text-white">
      <div className="w-full mt-6 carousel">
        {banners.map((banner, index) => (
          <div
            style={{
              backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${index + 1
                }.jpg)`,
            }}
            key={index}
            id={`slide${index + 1}`}
            className="relative w-full bg-top bg-no-repeat bg-cover carousel-item h-[600px] rounded-lg"
          >
            <div className="flex items-center w-full h-full pl-36">
              <div className="space-y-6">
                <h1 className="text-5xl font-bold">{banner.title}</h1>
                <p>{banner.description}</p>
                <button className="mr-4 btn btn-primary">Discover More</button>
                <button className="text-white btn btn-outline">Latest Project</button>
              </div>
            </div>
            <div className="absolute flex justify-between bottom-12 right-12">
              <a href={banner.prev} className="mr-5 btn btn-circle hover:bg-primary hover:text-white">
                ❮
              </a>
              <a href={banner.next} className="btn btn-circle hover:bg-primary hover:text-white">
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
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide2",
    prev: "#slide6",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide3",
    prev: "#slide1",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide4",
    prev: "#slide2",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide5",
    prev: "#slide3",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide6",
    prev: "#slide4",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide1",
    prev: "#slide5",
  },
];

export default Banner;