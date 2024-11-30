"use client";
import React, { useState } from "react";
import Image from "next/image";

const MouldManufacturingPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const dropdownContent = [
    {
      title: "Small Batch Production Moulds",
      content:
        "Custom moulds tailored for smaller production runs with flexible tooling solutions.",
    },
    {
      title: "Prototype Moulds",
      content:
        "Rapid prototyping moulds for design validation and testing before large-scale production.",
    },
    {
      title: "Complex Mould Design Support",
      content:
        "Expertise in designing moulds with complex geometries, undercuts, and multi-cavity configurations.",
    },
    {
      title: "Multi-Cavity & Family Moulds",
      content:
        "Efficient tooling for producing multiple parts simultaneously, increasing production efficiency.",
    },
    {
      title: "Precision Engineering & Tight Tolerances",
      content:
        "High-accuracy moulds for intricate parts requiring precise dimensions and tolerances.",
    },
    {
      title: "Quick Turnaround & Delivery",
      content:
        "Fast lead times and reliable delivery schedules to meet your project timelines.",
    },
    {
      title: "Tool Maintenance & Repair",
      content:
        "Ongoing support for mould maintenance and repairs to extend mould lifespan and ensure consistent quality.",
    },
    {
      title: "Material & Process Compatibility",
      content:
        "Moulds tailored to work with various materials and production processes for optimal results.",
    },
  ];

  return (
    <section className="mt-20 mb-12 py-12 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm md:text-base text-gray-400 mb-2">
          Services &gt; Mould Manufacturing
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-white mb-10">
          Mould Manufacturing
        </h1>
        <p className="text-base sm:text-xl text-center text-gray-300 mb-8">
          This range of mould manufacturing support ensures efficient,
          high-quality production for any project, from prototypes to
          large-scale mass production.
        </p>

        <ul className="space-y-6 text-left max-w-3xl mx-auto text-gray-200">
          {dropdownContent.map((item, index) => (
            <li
              key={index}
              className="text-lg sm:text-xl cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <div className="flex justify-between items-center">
                <strong className="underline">{item.title}:</strong>
                <span className="text-base text-gray-400">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>

              {openIndex === index && (
                <div className="mt-2 text-base">{item.content}</div>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col md:flex-row justify-center gap-8">
          <div className="w-full md:w-[500px] h-[300px] relative">
            <Image
              src="/assets/images/MouldManufacturing.jpg"
              alt="Mould trial process"
              layout="fill"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MouldManufacturingPage;
