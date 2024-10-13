import CommonLayout from "@/components/layouts/commonLayout";
import Card from "./Card";

const Categories = () => {
  return (
    <CommonLayout>

      
    <div className="mt-10 container mx-auto lg:mt-[100px]  sm:px-8  overflow-hidden ">
      <h5 className="text-center text-[#5E6282] font-poppins font-semibold text-sm sm:text-base">
        Category
      </h5>
      <h4 className="text-center text-[#14183E] font-volkhov text-2xl sm:text-3xl lg:text-[50px] font-bold mt-2">
        We Offer Best Services
      </h4>

      <div className="mt-6 sm:mt-8 lg:mt-10 h-auto lg:min-h-[570px]">
        <Card />
      </div>
    </div>
    </CommonLayout>


  );
};
export default Categories;
