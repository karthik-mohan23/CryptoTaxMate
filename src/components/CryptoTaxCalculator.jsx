const CryptoTaxCalculator = () => {
  return (
    <div className="bg-default-gray max-w-[83rem] mx-auto lg:flex  gap-1 ">
      <div className=" bg-white w-full max-w-[55.0625rem] lg:bg-default-gray pt-4 px-4  lg:pt-0 ">
        <div className="px-4  max-w-[55.0625rem] mx-auto bg-white  md:mt-7 lg:mb-5 rounded-2xl p-[1.0625rem] lg:pt-[2.1875rem] lg:pb-[3.625rem] lg:ps-[4.9375rem] lg:pe-[4.5625rem] border border-border-gray lg:border-none">
          <h1 className=" font-bold text-2xl leading-[2.125rem] text-center pb-7 lg:pb-10">
            Free Crypto Tax Calculator Australia
          </h1>
          <div className="border  border-black w-full max-w-[44.5625rem]  h-20"></div>
        </div>
        {/* FAQ */}
        <div className="bg-white max-w-[55.0625rem] mx-auto h-[600px] pt-12 lg:pt-6 lg:px-6 lg:pb-10 rounded-2xl">
          <h2 className="text-2xl font-bold  leading-5">
            Frequently Asked Questions
          </h2>
          <div className="max-w-[51.875rem] border border-black">faqs</div>
        </div>
      </div>
      {/* card */}
      <div className=" mt-[4.25rem] mb-[3.875rem] lg:mt-7 lg:mb-0">
        <div className="bg-default-blue mx-auto  w-96 max-w-[26.6875rem] h-96   rounded-2xl"></div>
      </div>
    </div>
  );
};
export default CryptoTaxCalculator;
