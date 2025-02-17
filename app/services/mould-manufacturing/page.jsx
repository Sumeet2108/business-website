"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
    // {
    //   title: "Quick Turnaround & Delivery",
    //   content:
    //     "Fast lead times and reliable delivery schedules to meet your project timelines.",
    // },
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
    <section className=" mt-16 md:mt-18 mb-12 pb-12  bg-white text-white">
      <div className="flex flex-row bg-black gap-0 md:gap-2 ">
        <div className=" w-1/2  flex flex-col items-start justify-center ml-5 md:ml-10  h-96 md:h-[50vh] max-h-96 md:max-h-[720px]">
          <p className=" text-xs md:text-base  text-gray-400 mb-2">
            <Link href="/services">Services</Link> &gt; Mould Manufacturing
          </p>
          <h1 className="text-3xl md:text-7xl font-bold  text-white mb-5">
            Mould Manufacturing
          </h1>
          <p className="text-base  sm:text-xl  text-gray-300 ">
            This range of mould manufacturing support ensures efficient,
            high-quality production for any project, from prototypes to
            large-scale mass production.
          </p>
        </div>
        <div className="w-1/2 relative">
          <img
            src="/assets/images/MouldManufacturing.jpg"
            alt="mould 1"
            className="absolute top-20 md:top-12 left-6  md:left-20 w-[75%] h-[75%] object-cover border-2 border-white rounded-xl"
          />
          {/* <img
            src="/assets/images/crates.jpg"
            alt="mould 2"
            className="absolute bottom-5 md:bottom-8 right-2 md:right-8 w-[65%] h-[50%] object-cover border-2 border-white rounded-xl"
          /> */}
        </div>
      </div>
      <div className=" flex items-start justify-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10 ">
        <ul className="space-y-6 text-left max-w-3xl mx-auto text-black">
          {dropdownContent.map((item, index) => (
            <li key={index} className="text-lg sm:text-xl  cursor-default">
              <strong className="">{item.title}:</strong>
              <br />
              <span className="text-base  md:text-lg">{item.content}</span>
            </li>
          ))}
        </ul>

        {/* <div className="mt-12 flex flex-col md:flex-row justify-center gap-8">
          <div className="w-full md:w-[500px] h-[300px] relative">
            <Image
              src="/assets/images/MouldManufacturing.jpg"
              alt="Mould trial process"
              layout="fill"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default MouldManufacturingPage;
