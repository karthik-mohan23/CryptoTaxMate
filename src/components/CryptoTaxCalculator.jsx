const CryptoTaxCalculator = () => {
  return (
    <div className="bg-default-gray max-w-[83rem] mx-auto lg:flex  gap-1 ">
      <div className=" bg-white w-full max-w-[55.0625rem] lg:bg-default-gray pt-4 px-4  lg:pt-0 ">
        <div className="px-4  max-w-[55.0625rem] mx-auto bg-white  md:mt-7 lg:mb-5 rounded-2xl p-[1.0625rem] lg:pt-[2.1875rem] lg:pb-[3.625rem] lg:ps-[4.9375rem] lg:pe-[4.5625rem] border border-border-gray lg:border-none">
          <h1 className=" font-bold text-2xl leading-[2.125rem] text-center pb-7 lg:pb-10">
            Free Crypto Tax Calculator Australia
          </h1>
          <div className=" w-full max-w-[44.5625rem] flex flex-col gap-6  ">
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
            {/* second row */}
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10 ">
              {/* financial entry */}
              <div className=" flex flex-col gap-[6px] w-full ">
                <label className="text-f-primary text-[0.9375rem] ">
                  Enter purchase price of Crypto
                </label>
                <input
                  id="country"
                  className="bg-default-gray w-full  h-10 px-4 py-2  md:h-12 md:p-3 rounded-lg text-f-primary text-base font-medium"
                  value="$ 30,000"></input>
              </div>
              {/* country */}
              <div className=" flex flex-col gap-[6px] w-full ">
                <label className="text-f-primary text-[0.9375rem]">
                  Enter sale price of Crypto
                </label>
                <input
                  id="country"
                  className="bg-default-gray w-full h-10 px-4 py-2  md:h-12 md:p-3 rounded-lg text-f-primary text-base font-medium"
                  value="$ 20,000"></input>
              </div>
            </div>
            {/* end of second row */}
            {/* third row */}
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
              {/* financial entry */}
              <div className=" flex flex-col gap-[6px] w-full ">
                <label className="text-f-primary text-[0.9375rem] ">
                  Enter your Expenses
                </label>
                <input
                  id="country"
                  className="bg-default-gray w-full  h-10 px-4 py-2  md:h-12 md:p-3 rounded-lg text-f-primary text-base font-medium"
                  value="$ 5,000"></input>
              </div>
              {/* buttons */}
              <div className="  w-full ">
                <p className="text-f-primary text-sm pb-[6px]">
                  Investment Type
                </p>
                {/* button 1 */}
                <div className=" flex  w-full gap-[10px] items-center">
                  <div className="flex flex-col w-full">
                    <button className="text-xs lg:text-lg  ps-3  py-[12.5px] lg:py-[17px]   pe-[71px] lg:px-0   border border-btn-border-gray font-medium rounded-lg mb-1 flex-1">
                      Short Term
                    </button>
                    <p className="text-[13px] font-medium text-btn-border-gray">
                      &lt; 12 months
                    </p>
                  </div>
                  {/* button 2 */}
                  <div className="flex flex-col w-full">
                    <button className="text-xs lg:text-lg ps-3  py-[12.5px] lg:py-[17px]   pe-[75px] lg:px-0 border-2 border-default-blue bg-default-blue text-default-blue bg-opacity-5 font-medium rounded-lg mb-1 flex-1">
                      Long Term
                    </button>
                    <p className="text-[13px] font-medium text-btn-border-gray">
                      &gt; 12 months
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* end of third row */}
            {/* fourth row */}
            <div className="flex w-full flex-col gap-2 lg:flex-row lg:items-center lg:gap-10">
              {/* financial entry */}
              <div className=" flex flex-col gap-[6px] w-full ">
                <label className="text-f-primary text-sm text-[0.9375rem] mb-[6px]">
                  Select Your Annual Income
                </label>
                <select
                  id="country"
                  className="bg-default-gray w-full  h-10 px-4 py-2  md:h-12 md:p-3 rounded-lg">
                  <option
                    value="Australia"
                    selected
                    className="text-f-primary text-base font-medium">
                    $45,001 - $120,000
                  </option>
                </select>
              </div>
              {/* country */}
              <div className=" flex items-center gap-2 lg:flex-col  lg:self-end    w-full ">
                <p className="text-xs lg:text-sm text-btn-border-gray leading-6 self-start">
                  Tax Rate:
                </p>
                <p className="text-xs lg:text-sm text-btn-border-gray self-start">
                  $ 5,902 + 32.5% of excess over $45,001
                </p>
              </div>
            </div>
            {/* end fourth row */}
            {/* fifth row */}
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
              {/* financial entry */}
              <div className=" flex flex-col gap-[6px] w-full ">
                <label className="text-f-primary text-[0.9375rem] ">
                  Capital gains amount
                </label>
                <input
                  id="country"
                  className="bg-default-gray w-full  h-10 px-4 py-2  md:h-12 md:p-3 rounded-lg text-f-primary text-base font-medium"
                  value="$ 5,000"></input>
              </div>
              {/* country */}
              <div className=" flex flex-col gap-[6px] w-full ">
                <label className="text-f-primary text-[0.9375rem]">
                  Discount for long term gains
                </label>
                <input
                  id="country"
                  className="bg-default-gray w-full h-10 px-4 py-2  md:h-12 md:p-3 rounded-lg text-f-primary text-base font-medium"
                  value="$ 2,500"></input>
              </div>
            </div>
            {/* end of fifth row */}
            {/* sixth row */}
            <div className="px-7 pt-9 lg:px-0 lg:pt-0 lg:flex lg:flex-row lg:items-center lg:gap-10">
              {/* green container */}
              <div className="bg-green-btn pt-5 pb-[17px] px-9 rounded-lg mb-5 lg:mb-0 lg:flex-1 ">
                <p className="text-base text-f-primary mb-2  w-[221px] mx-auto font-medium">
                  Net Capital gains tax amount
                </p>
                <p className="font-bold text-2xl text-green-btn-text text-center">
                  $ 2,500
                </p>
              </div>
              {/* blue container */}
              <div className="bg-btn-blue py-5 px-9 rounded-lg lg:flex-1">
                <p className="text-base text-f-primary mb-2  w-[221px] mx-auto font-medium">
                  The tax you need to pay*
                </p>
                <p className="font-bold text-2xl text-blue-btn-text text-center">
                  $ 812.5
                </p>
              </div>
            </div>
            {/* end row */}
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
