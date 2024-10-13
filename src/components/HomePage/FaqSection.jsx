import CommonLayout from "../layouts/commonLayout";

const FaqSection = () => {
  

  return (
    <CommonLayout>
      
    <section className="py-4 bg-[#EFEFEF] h-auto rounded-2xl container mx-auto mb-2 mt-[140px]">
      <div className="text-center">
        <h4 className="font-poppins text-[#5E6282] font-semibold">FAQ</h4>
        <h3 className="font-volkhov font-bold text-[#14183E] text-[36px] md:text-[50px]">Frequently Asked Questions</h3>
      </div>
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center max-w-full p-4 mx-auto gap-x-16 gap-y-5 lg:flex-row lg:justify-between">
          <div className="w-full space-y-4 lg:w-1/2">
            <div tabIndex={0} className="collapse collapse-plus bg-[#FFF] rounded-2xl shadow-md">
              <input type="checkbox" />
              <div className="text-xl font-medium collapse-title text-[#170F49]">Why is Webflow the best nocode tool?</div>
              <div className="collapse-content text-[#6F6C90]">
                <p>Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor.</p>
              </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus bg-[#FFF] rounded-2xl shadow-md">
              <input type="checkbox" />
              <div className="text-xl font-medium collapse-title text-[#170F49]">When was Webflow founded?</div>
              <div className="collapse-content text-[#6F6C90]">
                <p>Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor.</p>
              </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus bg-[#FFF] rounded-2xl shadow-md">
              <input type="checkbox" />
              <div className="text-xl font-medium collapse-title text-[#170F49]">Is NoCode the future of the web?</div>
              <div className="collapse-content text-[#6F6C90]">
                <p>Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor.</p>
              </div>
            </div>
          </div>
          <div className="w-full space-y-4 lg:w-1/2">
            <div tabIndex={0} className="collapse collapse-plus bg-[#FFF] rounded-2xl shadow-md">
              <input type="checkbox" />
              <div className="text-xl font-medium collapse-title text-[#170F49]">How to launch a Webflow website?</div>
              <div className="collapse-content text-[#6F6C90]">
                <p>Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor.</p>
              </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus bg-[#FFF] rounded-2xl shadow-md">
              <input type="checkbox" />
              <div className="text-xl font-medium collapse-title text-[#170F49]">Who founded BRIX Templates?</div>
              <div className="collapse-content text-[#6F6C90]">
                <p>Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor.</p>
              </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus bg-[#FFF] rounded-2xl shadow-md">
              <input type="checkbox" />
              <div className="text-xl font-medium collapse-title text-[#170F49]">Who are the Webflow founders?</div>
              <div className="collapse-content text-[#6F6C90]">
                <p>Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </CommonLayout>

  );
};

const faqData = [
  {
    question: "How to create an account?",
    answer:
      "To create an account, find the 'Sign up' or 'Create account' button, fill out the registration form with your personal information, and click 'Create account' or 'Sign up.' Verify your email address if needed, and then log in to start using the platform.",
  },
  {
    question: "Have any trust issues?",
    answer:
      "Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence and achieve your content marketing goals with ease.",
  },
  {
    question: "How can I reset my password?",
    answer:
      "Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence and achieve your content marketing goals with ease.",
  },
  {
    question: "What is the payment process?",
    answer:
      "Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence and achieve your content marketing goals with ease.",
  },
];
export default FaqSection;
