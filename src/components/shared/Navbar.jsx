import Link from "next/link";
import CommonLayout from "../layouts/commonLayout";

const Navbar = () => {
  const navLinks = [
    {
      title: "Why Franchising",
      path: "/whyFranchising",
    },
    {
      title: "Our Story",
      path: "/ourStory",
    },
    {
      title: "Our Process",
      path: "/ourProcess",
    },
    {
      title: "Franchise Brands",
      path: "/franchiseBrands",
    },
    {
      title: "Contact Us",
      path: "/contactUs",
    },
    {
      title: "FAQs",
      path: "/faqs",
    },
  ];

  return (
    <CommonLayout>
      
    <div className="container mx-auto mb-4">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="text-[26px] font-notoSerifJP text-[#515151]  tracking-[-0.78px] font-bold">
            <span className="text-primary">Franchies</span>Expert
          </a>
        </div>
        <div className="hidden navbar-center lg:flex ">
          {navLinks.map((item) => (
            <Link
              className="mr-6 duration-200 hover:text-primary hover:underline text-[#515151] font-baiJamjuree"
              key={item.path}
              href={item.path}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="navbar-end ">
            <button className="hidden text-white btn-primary btn btn-sm sm:block">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
    </CommonLayout>
  );
};

export default Navbar;
