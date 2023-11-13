import { useState } from "react";
import DesktopCard from "./DesktopCard";
import FaqContent from "./FaqContent";
import MobileCard from "./MobileCard";

const investmentTypeTerm = [
  {
    title: "Short Term",
    duration: " < 12 months",
  },
  {
    title: "Long Term",
    duration: " > 12 months",
  },
];

const CryptoTaxCalculator = () => {
  const [inputValues, setInputValues] = useState({
    purchasePrice: "",
    salePrice: "",
    expenses: "",
    investmentType: "",
  });

  const [btnIndex, setBtnIndex] = useState(1);
  const handleBtnIndex = (index) => {
    setBtnIndex(index);
  };

  // income option
  const [selectedAnnualIncomeOption, setSelectedAnnualIncomeOption] =
    useState("$0 - $18,200");

  //  function to calculate the tax value based on the selected option
  const calculateTaxValue = (selectedOption) => {
    switch (selectedOption) {
      case "$0 - $18,200":
        return "0%";
      case "$18,201 - $45,000":
        return "Nil + 19% of excess over $18,200";
      case "$45,001 - $120,000":
        return "$5,092 + 32.5% of excess over $45,000";
      case "$120,001 - $180,000":
        return "$29,467 + 37% of excess over $120,000";
      case "$180,001+":
        return "$51,667 + 45% of excess over $180,000";
      default:
        return "Invalid option";
    }
  };
  // Update the tax value whenever the selected option changes
  const handleAnnualIncomeChange = (event) => {
    setSelectedAnnualIncomeOption(event.target.value);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    // Check if value is a number and limit to a maximum of 5 digits
    if (!isNaN(value) && value.length <= 5) {
      // Remove the negative symbol
      // Use parseFloat to handle decimal input
      const sanitizedValue = Math.abs(parseFloat(value));
      // Update the inputValues object with the new value for the specified field
      setInputValues({
        ...inputValues,
        [name]: sanitizedValue,
      });
    }
  };

  console.log(btnIndex);

  return (
    <div className="bg-default-gray max-w-[83rem] mx-auto xl:flex  gap-1 ">
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
                <select className="bg-default-gray w-full h-10 px-4 py-2 max-w-[17.0625rem] md:h-12 md:p-3 rounded-lg">
                  <option className="text-f-primary text-base font-medium ">
                    FY 2023-24
                  </option>
                </select>
              </div>
              {/* country */}
              <div className=" flex w-full flex-col sm:flex-row sm:gap-2 sm:items-center">
                <label className="text-f-primary text-sm lg:text-[0.9375rem]">
                  Country
                </label>
                <select className="bg-default-gray w-full  h-10 px-4 py-2 max-w-[17.0625rem] md:h-12 md:p-3 rounded-lg">
                  <option className="text-f-primary text-base font-medium">
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
              {/* Purchase Price */}
              <div className=" flex flex-col gap-[6px] w-full ">
                <label className="text-f-primary text-[0.9375rem] ">
                  Enter purchase price of Crypto
                </label>
                <div className="flex  items-center bg-default-gray w-full  h-10 px-4 py-2  md:h-12 md:p-3 rounded-lg text-f-primary text-base font-medium">
                  <span>$</span>
                  <input
                    type="number"
                    value={inputValues.purchasePrice}
                    name="purchasePrice"
                    onChange={(event) => handleInputChange(event)}
                    className="bg-default-gray w-full h-full px-4 py-2  md:h-12 md:p-3 rounded-lg text-f-primary text-base font-medium  outline-none"></input>
                </div>
              </div>
              {/* Sale Price */}
              <div className=" flex flex-col gap-[6px] w-full ">
                <label className="text-f-primary text-[0.9375rem]">
                  Enter sale price of Crypto
                </label>
                <div className="flex items-center bg-default-gray h-10   md:h-12 w-full px-4 py-2 md:p-3 rounded-lg">
                  <span>$</span>
                  <input
                    className="bg-default-gray w-full h-full px-4 py-2 md:p-3    text-f-primary text-base font-medium outline-none"
                    type="number"
                    value={inputValues.salePrice}
                    name="salePrice"
                    onChange={(event) => handleInputChange(event)}></input>
                </div>
              </div>
            </div>
            {/* end of second row */}
            {/* third row */}
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
              {/* Expenses */}
              <div className=" flex flex-col gap-[6px] w-full ">
                <label className="text-f-primary text-[0.9375rem] ">
                  Enter your Expenses
                </label>
                <div className="flex items-center bg-default-gray w-full  h-10 px-4 py-2  md:h-12 md:p-3 rounded-lg">
                  <span>$</span>
                  <input
                    className="bg-default-gray w-full  h-10 px-4 py-2  md:h-12 md:p-3 rounded-lg text-f-primary text-base font-medium outline-none"
                    type="number"
                    value={inputValues.expenses}
                    name="expenses"
                    onChange={(event) => handleInputChange(event)}></input>
                </div>
              </div>
              {/* Investment type */}
              <div className="  w-full ">
                <p className="text-f-primary text-sm pb-[6px]">
                  Investment Type
                </p>
                {/* button 1 */}
                <div className=" flex  w-full gap-[10px] items-center">
                  {investmentTypeTerm.map((type, index) => (
                    <div
                      key={type.title}
                      onClick={() => handleBtnIndex(index)}
                      className="flex flex-col w-full">
                      <button
                        className={`text-xs md:text-lg    py-[12.5px] lg:py-[17px]   font-medium rounded-lg mb-1 flex-1 flex justify-center items-center gap-1 ${
                          index === btnIndex
                            ? "border-2 border-default-blue bg-default-blue text-default-blue bg-opacity-5"
                            : "border  border-btn-border-gray"
                        } `}>
                        {index === btnIndex ? (
                          <>
                            {type.title}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-4 h-4 md:w-6 md:h-6">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                          </>
                        ) : (
                          type.title
                        )}
                      </button>
                      <p className="text-[13px] font-medium text-btn-border-gray">
                        {type.duration}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* end of third row */}
            {/* fourth row */}
            <div className="flex w-full flex-col gap-2 lg:flex-row lg:items-center lg:gap-10">
              {/* Annual Income*/}
              <div className=" flex flex-col gap-[6px] w-full ">
                <label className="text-f-primary text-sm text-[0.9375rem] mb-[6px]">
                  Select Your Annual Income
                </label>
                <select
                  className="bg-default-gray w-full  h-10 px-4 py-2  md:h-12 md:p-3 rounded-lg"
                  value={selectedAnnualIncomeOption}
                  onChange={handleAnnualIncomeChange}>
                  <option className="text-f-primary text-base font-medium">
                    $0 - $18,200
                  </option>
                  <option className="text-f-primary text-base font-medium">
                    $18,201 - $45,000
                  </option>
                  <option className="text-f-primary text-base font-medium">
                    $45,001 - $120,000
                  </option>
                  <option className="text-f-primary text-base font-medium">
                    $120,001 - $180,000
                  </option>
                  <option className="text-f-primary text-base font-medium">
                    $180,001+
                  </option>
                </select>
              </div>
              {/* Tax rate */}
              <div className=" flex items-center gap-2 lg:flex-col  lg:self-end    w-full ">
                <p className="text-xs lg:text-sm text-btn-border-gray leading-6 self-start">
                  Tax Rate:
                </p>
                <p className="text-xs lg:text-sm text-btn-border-gray lg:self-start">
                  {calculateTaxValue(selectedAnnualIncomeOption)}
                </p>
              </div>
            </div>
            {/* end fourth row */}
            {/* fifth row */}
            {/* hide  Capital gains amount &  Discount for long term gains when short term is selected */}
            {btnIndex == 1 && (
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
                {/*  Capital gains amount */}
                <div className=" flex flex-col gap-[6px] w-full ">
                  <label className="text-f-primary text-[0.9375rem] ">
                    Capital gains amount
                  </label>
                  <div className="flex items-center bg-default-gray w-full  h-10 px-4 py-2  md:h-12 md:p-3 rounded-lg">
                    <span>$</span>
                    <input
                      className="bg-default-gray w-full  h-10 px-4 py-2  md:h-12 md:p-3 rounded-lg text-f-primary text-base font-medium outline-none"
                      value=""></input>
                  </div>
                </div>
                {/* Discount for long term gains */}
                <div className=" flex flex-col gap-[6px] w-full ">
                  <label className="text-f-primary text-[0.9375rem]">
                    Discount for long term gains
                  </label>
                  <div className="flex items-center bg-default-gray w-full  h-10 px-4 py-2  md:h-12 md:p-3 rounded-lg">
                    <span>$</span>
                    <input
                      className="bg-default-gray w-full  h-10 px-4 py-2  md:h-12 md:p-3 rounded-lg text-f-primary text-base font-medium outline-none"
                      value=""></input>
                  </div>
                </div>
              </div>
            )}

            {/* end of fifth row */}
            {/* sixth row */}
            <div className="px-7 pt-9 lg:px-0 lg:pt-0 lg:flex lg:flex-row lg:items-center lg:gap-10">
              {/* Net Capital gains tax amount */}
              <div className="bg-green-btn pt-5 pb-[17px] px-9 rounded-lg mb-5 lg:mb-0 lg:flex-1 ">
                <p className="text-base text-f-primary mb-2  w-[221px] mx-auto font-medium">
                  Net Capital gains tax amount
                </p>
                <p className="font-bold text-2xl text-green-btn-text text-center">
                  $ 2,500
                </p>
              </div>
              {/* The tax you need to pay */}
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
        <div className="bg-white max-w-[55.0625rem] mx-auto  pt-12 pb-16 lg:pt-6 lg:px-6 lg:pb-10 rounded-2xl">
          <h2 className="text-2xl font-bold  leading-5 mb-4 lg:pb-4">
            Frequently Asked Questions
          </h2>
          <div className="max-w-[51.875rem]">
            <FaqContent />
          </div>
        </div>
      </div>
      {/* card */}
      <div className=" mt-[4.25rem] mb-[3.875rem] lg:mt-7 lg:mb-0">
        <MobileCard className="xl:hidden" />
        <DesktopCard className="hidden xl:block" />
      </div>
    </div>
  );
};
export default CryptoTaxCalculator;
