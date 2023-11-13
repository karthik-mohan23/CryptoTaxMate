import { faqs } from "../utils/faq.js";

const FaqContent = () => {
  return (
    <div>
      {faqs.map((faq, index) => {
        const { question, answer } = faq;
        return (
          <div key={question} className="my-[15px]">
            <h4 className="text-lg lg:text-xl font-bold">
              {index + 1}. {question}
            </h4>
            <p className="text-base leading-6 mt-[10px] lg:mb-3">{answer}</p>
            <div className="bg-divider opacity-60 w-full h-[1px] my-[15px]"></div>
          </div>
        );
      })}
    </div>
  );
};
export default FaqContent;
