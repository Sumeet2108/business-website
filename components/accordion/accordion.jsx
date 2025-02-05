"use client";
import React, { useState } from "react";

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="accordion-group">
      {data.map((faq, index) => (
        <div
          onClick={() => handleAccordionToggle(index)}
          key={index}
          className={` w-full text-left accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl ${
            activeIndex === index
              ? "bg-orange-50 text-orange-600"
              : "hover:bg-orange-50"
          }`}
        >
          <div
            className={`group inline-flex items-center justify-between leading-8  w-full transition duration-500 text-left hover:text-orange-600
              ${activeIndex === index ? " text-orange-600" : "text-gray-900"}`}
          >
            <h5 className=" text-xl md:text-2xl font-semibold">
              {faq.question}
            </h5>
            <svg
              className={`text-gray-500 transition duration-500 group-hover:text-orange-600 ${
                activeIndex === index ? "rotate-180" : ""
              }`}
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <div
            className=" w-full px-0 overflow-hidden"
            style={{
              maxHeight: activeIndex === index ? "250px" : "0",
              transition: "max-height 0.2s ease-out",
            }}
          >
            <p className=" mt-1 text-base md:text-lg text-gray-900 leading-6">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
