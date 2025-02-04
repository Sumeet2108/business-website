import Accordion from "@/components/accordion/accordion";
import React from "react";

const Page = () => {
  const faqData = [
    {
      question: "What materials do you work with?",
      answer:
        "We work with a variety of plastics, including ABS, PVC, and polypropylene. Contact us for specific material inquiries.",
    },
    {
      question: "What industries do you serve?",
      answer:
        " We serve industries like automotive, consumer goods, electronics, and healthcare",
    },
    {
      question: "How can I place an order?",
      answer:
        "You can contact us via our website or email us directly at info@akengineersplastic.in",
    },
    {
      question: "What is your average production time?",
      answer:
        "   Production timelines vary depending on the project size and complexity but typically range from initial lead time of at-most 1 week prior to start date of production.",
    },
  ];
  return (
    <div className="bg-white h-full flex items-center justify-center">
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h6 className="text-lg text-orange-600 font-medium text-center mb-2">
              FAQs
            </h6>
            <h2 className=" mb-10 text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]">
              Frequently asked questions
            </h2>
            <Accordion data={faqData} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
