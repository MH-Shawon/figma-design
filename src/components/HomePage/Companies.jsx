import Image from "next/image";
import CommonLayout from "../layouts/commonLayout";

const Companies = () => {
  return (
      <div className="py-8 text-center bg-[#F4F6F6] p-5">
        <CommonLayout>
        <h2 className="text-xl font-baiJamjuree text-primary tracking-[2.8px] font-semibold">
          Trusted by Over 1K+ Companies
        </h2>
        <div className="flex flex-wrap justify-between mt-6 space-x-2 md:space-x-24 space-y-5">
          <Image
            src="/assets/companies/Microsoft.svg"
            alt="Microsoft Logo"
            width={116.377}
            height={24.993}
            className="fill-gray-500"
          />

          <Image
            src="/assets/companies/Entrepreneur.svg"
            alt="Entrepreneur Logo"
            width={127.377}
            height={24.993}
            className="fill-gray-500"
          />
          <Image
            src="/assets/companies/Fortune.png"
            alt="Fortune Logo"
            width={120.377}
            height={19.993}
            className="fill-gray-500"
          />
          <Image
            src="/assets/companies/Business web.svg"
            alt="BusinessNews Logo"
            width={92.377}
            height={29.993}
            className="fill-gray-500"
          />
          <Image
            src="/assets/companies/Mashable.svg"
            alt="Mashable Logo"
            width={102.377}
            height={17.993}
            className="fill-gray-500"
          />
        </div>
      </CommonLayout>
    </div>
  );
};
export default Companies;
