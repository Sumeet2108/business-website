"use client";
import React, { useState } from "react";
import Image from "next/image";

const MassProd = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const dropdownContent = [
    {
      title: "High-Volume Production",
      content:
        "Equipped to handle large orders efficiently with consistent quality.",
    },
    {
      title: "Scalable Manufacturing Solutions",
      content:
        "Flexible production setups to meet both small and large batch requirements.",
    },
    {
      title: "Complex Mould Design Support",
      content:
        "Expertise in designing moulds with complex geometries, undercuts, and multi-cavity configurations.",
    },
    {
      title: "Advanced Automation",
      content:
        "Automated systems and machinery to streamline processes and reduce lead times.",
    },
    {
      title: "Quality Control at Scale",
      content:
        "High-accuracy moulds for intricate parts requiring precise dimensions and tolerances.",
    },
    {
      title: "Quick Turnaround & Delivery",
      content:
        "Rigorous inspection processes ensure quality across every unit in high-volume production.",
    },
    {
      title: "Optimized Lead Times",
      content:
        "Fast turnaround from design to delivery for time-sensitive projects.",
    },
    {
      title: "Cost-Efficiency for Large Orders",
      content:
        "Competitive pricing structures for bulk production, reducing per-unit cost.",
    },
    {
      title: " End-to-End Support",
      content:
        "Comprehensive service from material selection through to final product delivery.",
    },
  ];

  return (
    <section className="mt-20 mb-12 py-12 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm md:text-base text-gray-400 mb-2">
          Services &gt; Mass Production
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-white mb-10">
          Mass Production
        </h1>
        <p className="text-base sm:text-xl text-center text-gray-300 mb-8">
          ab
        </p>

        <ul className="space-y-6 text-left max-w-3xl mx-auto text-gray-200">
          {dropdownContent.map((item, index) => (
            <li
              key={index}
              className="text-lg sm:text-xl cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <div className="flex justify-between items-center">
                <strong className="underline">{item.title}</strong>
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
              src="/assets/images/machines.jpg"
              alt="Mould trial process"
              layout="fill"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-[500px] h-[300px] relative">
            <Image
              src="/assets/images/crates.jpg"
              alt="Mould testing and production"
              layout="fill"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MassProd;
