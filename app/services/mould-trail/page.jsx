import React from "react";
import Link from "next/link";
import Image from "next/image";

const MouldTrailPage = () => {
  return (
    <section className=" mt-16 md:mt-18 mb-12 pb-12  bg-white text-white">
      <div className="flex flex-row bg-black gap-0 md:gap-2  ">
        <div className=" w-1/2  flex flex-col items-start justify-center ml-5 md:ml-10  h-96 md:h-[75vh] max-h-96 md:max-h-[720px]">
          <p className=" text-base  md:text-lg  text-gray-400 mb-2">
            <Link href="/services">Services</Link> &gt; Mould Trial Service
          </p>
          <h1 className="text-3xl md:text-7xl font-bold  text-white mb-5">
            Mould Trial Service
          </h1>
          <p className="text-base  md:text-lg  sm:text-xl  text-gray-300 ">
            Mould Trial service ensures your mould is optimized for reliable,
            efficient, and high-quality production.
          </p>
        </div>
        <div className="w-1/2 relative">
          <img
            src="/assets/images/mouldtrail1.jpg"
            alt="mould 1"
            className="absolute top-2 md:top-5 left-5 w-[65%] h-[50%] object-cover border-2 border-white rounded-xl"
          />
          <img
            src="/assets/images/mouldtrail2.jpg"
            alt="mould 2"
            className="absolute bottom-5 md:bottom-8 right-2 md:right-8 w-[65%] h-[50%] object-cover border-2 border-white rounded-xl"
          />
        </div>
      </div>

      <div className=" flex items-start justify-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10 ">
        <ul className="space-y-6 text-left max-w-3xl mx-auto text-black">
          <li className="text-lg sm:text-xl  cursor-default">
            <strong className="">Material Selection Assistance:</strong>
            <br />
            <span className=" text-base  md:text-lg  ">
              Expert guidance to choose the best materials for your product
              needs.
            </span>
          </li>
          {/* <li className="text-lg sm:text-xl  cursor-default">
            <strong className="">Production Cost Optimization:</strong>
            <br />
            <span className="text-base  md:text-lg ">
              Solutions to minimize costs while maintaining high quality.
            </span>
          </li> */}
          <li className="text-lg sm:text-xl  cursor-default">
            <strong className="">Mould Issue Rectification:</strong>
            <br />
            <span className="text-base  md:text-lg ">
              Troubleshooting and resolving common mould defects (e.g., warpage,
              flash, short shots).
            </span>
          </li>
          <li className="text-lg sm:text-xl  cursor-default">
            <strong className="">
              Support for University & Post-Doctoral Research:
            </strong>
            <br />
            <span className="text-base  md:text-lg ">
              Technical support for academic and research projects.
            </span>
          </li>
          <li className="text-lg sm:text-xl  cursor-default">
            <strong className="">Process Parameter Optimization:</strong>
            <br />
            <span className="text-base  md:text-lg ">
              Fine-tuning temperature, pressure, and cycle time for consistent
              results.
            </span>
          </li>
          {/* <li className="text-lg sm:text-xl  cursor-default">
            <strong className="">Prototype Development:</strong>
            <br />
            <span className="text-base  md:text-lg ">
              Rapid prototyping for design validation before full-scale
              production.
            </span>
          </li> */}
          <li className="text-lg sm:text-xl  cursor-default">
            <strong className="">Quality Assurance & Testing:</strong>
            <br />
            <span className="text-base  md:text-lg ">
              Rigorous testing to ensure moulded parts meet all required
              standards.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MouldTrailPage;
