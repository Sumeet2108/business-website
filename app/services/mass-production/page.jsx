"use client";
import React from "react";

import Link from "next/link";

const MassProd = () => {
  return (
    <section className=" mt-16 md:mt-18 mb-12 pb-12  bg-white text-white">
      <div className="flex flex-row bg-black gap-0 md:gap-2 ">
        <div className=" w-1/2  flex flex-col items-start justify-center ml-5 md:ml-10  h-96 md:h-[75vh]  max-h-96 md:max-h-[720px]">
          <p className=" text-xs md:text-base  text-gray-400 mb-2">
            <Link href="/services">Services</Link> &gt; Mass Production
          </p>
          <h1 className="text-3xl md:text-7xl font-bold  text-white mb-5">
            Mass Production
          </h1>
          <p className="text-base  sm:text-xl  text-gray-300 ">
            Support capability from small scale batch production to multi-
            thousands mass production units to suite your requirements.
          </p>
        </div>
        <div className="w-1/2 relative">
          <img
            src="/assets/images/machines.jpg"
            alt="mould 1"
            className="absolute top-2 md:top-5 left-5 w-[65%] h-[50%] object-cover border-2 border-white rounded-xl"
          />
          <img
            src="/assets/images/crates.jpg"
            alt="mould 2"
            className="absolute bottom-5 md:bottom-8 right-2 md:right-8 w-[65%] h-[50%] object-cover border-2 border-white rounded-xl"
          />
        </div>
      </div>

      <div className=" flex items-start justify-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10 ">
        <ul className="space-y-6 text-left max-w-3xl mx-auto text-black">
          <li className="text-lg sm:text-xl  cursor-default">
            <strong className="">High-Volume Production:</strong>
            <br />
            <span className=" text-base  md:text-lg">
              Equipped to handle large orders efficiently with consistent
              quality.
            </span>
          </li>
          <li className="text-lg sm:text-xl  cursor-default">
            <strong className="">Scalable Manufacturing Solutions:</strong>
            <br />
            <span className="text-base  md:text-lg ">
              Flexible production setups to meet both small and large batch
              requirements.
            </span>
          </li>
          {/* <li className="text-lg sm:text-xl  cursor-default">
            <strong className="">Complex Mould Design Support:</strong>
            <br />
            <span className="text-base ">
              Expertise in designing moulds with complex geometries, undercuts,
              and multi-cavity configurations.
            </span>
          </li> */}
          {/* <li className="text-lg sm:text-xl  cursor-default">
            <strong className="">Advanced Automation:</strong>
            <br />
            <span className="text-base ">
              Automated systems and machinery to streamline processes and reduce
              lead times.
            </span>
          </li> */}
          <li className="text-lg sm:text-xl  cursor-default">
            <strong className="">Quality Control at Scale:</strong>
            <br />
            <span className="text-base  md:text-lg ">
              Rigorous inspection process ensure quality across every unit in
              high-volume production.
            </span>
          </li>
          {/* <li className="text-lg sm:text-xl  cursor-default">
            <strong className="">Quick Turnaround & Delivery:</strong>
            <br />
            <span className="text-base ">
              Rigorous inspection processes ensure quality across every unit in
              high-volume production.
            </span>
          </li> */}
          <li className="text-lg sm:text-xl  cursor-default">
            <strong className="">Optimized Lead Times:</strong>
            <br />
            <span className="text-base  md:text-lg ">
              Fast turnaround from design to delivery for time-sensitive
              projects.
            </span>
          </li>
          <li className="text-lg sm:text-xl  cursor-default">
            <strong className="">Cost-Efficiency for Large Orders:</strong>
            <br />
            <span className="text-base  md:text-lg ">
              Competitive pricing structures for bulk production, reducing
              per-unit cost.
            </span>
          </li>
          <li className="text-lg sm:text-xl  cursor-default">
            <strong className="">End-to-End Support:</strong>
            <br />
            <span className="text-base  md:text-lg ">
              Comprehensive service from material selection through to final
              product delivery.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MassProd;
