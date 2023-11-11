const CryptoTaxCalculator = () => {
  return (
    <div className="bg-default-gray max-w-[83rem] mx-auto lg:flex  gap-1 ">
      <div className=" bg-white w-full max-w-[55.0625rem] lg:bg-default-gray pt-4 px-4  lg:pt-0 ">
        <div className="px-4  max-w-[55.0625rem] mx-auto bg-white  md:mt-7 lg:mb-5 rounded-2xl p-[1.0625rem] lg:pt-[2.1875rem] lg:pb-[3.625rem] lg:ps-[4.9375rem] lg:pe-[4.5625rem] border border-border-gray lg:border-none">
          <h1 className=" font-bold text-2xl leading-[2.125rem] text-center pb-7 lg:pb-10">
            Free Crypto Tax Calculator Australia
          </h1>
          <div className=" w-full max-w-[44.5625rem]  h-20">
            {/* first row */}
            <div className="flex gap-5">
              {/* financial entry */}
              <div className=" flex w-full flex-col sm:flex-row sm:gap-2 sm:items-center">
                <label className="text-f-primary text-sm lg:text-[0.9375rem] w-40 ">
                  Financial Year
                </label>
                <select
                  id="country"
                  className="bg-default-gray w-full h-10 px-4 py-2 max-w-[17.0625rem] md:h-12 md:p-3 rounded-lg">
                  <option
                    value="23"
                    selected
                    className="text-f-primary text-base font-medium ">
                    FY 2023-24
                  </option>
                </select>
              </div>
              {/* country */}
              <div className=" flex w-full flex-col sm:flex-row sm:gap-2 sm:items-center">
                <label className="text-f-primary text-sm lg:text-[0.9375rem]">
                  Country
                </label>
                <select
                  id="country"
                  className="bg-default-gray w-full  h-10 px-4 py-2 max-w-[17.0625rem] md:h-12 md:p-3 rounded-lg">
                  <option
                    value="Australia"
                    selected
                    className="text-f-primary text-base font-medium">
                    Australia
                  </option>
                </select>
              </div>
            </div>
            {/* end of first row */}
            {/* divider */}
            <div className="bg-divider opacity-60 w-full h-[1px]"></div>
            {/* end of divider */}
          </div>
        </div>
        {/* FAQ */}
        <div className="bg-white max-w-[55.0625rem] mx-auto h-[37.5rem] pt-12 lg:pt-6 lg:px-6 lg:pb-10 rounded-2xl">
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
