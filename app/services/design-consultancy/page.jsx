import React from "react";
import Image from "next/image";
import Link from "next/link";

const DesignPage = () => {
  return (
    <section className=" mt-16 md:mt-20 mb-12 pb-12  bg-white text-white">
      <div className="flex flex-row bg-black gap-0 md:gap-2 ">
        <div className=" w-1/2  flex flex-col items-start justify-center ml-5 md:ml-10  h-96 md:h-[50vh]">
          <p className=" text-xs md:text-base  text-gray-400 mb-2">
            <Link href="/services">Services</Link> &gt; Design Consultancy
          </p>
          <h1 className="text-3xl md:text-7xl font-bold  text-white mb-5">
            Design Consultancy
          </h1>
          <p className="text-base  sm:text-xl  text-gray-300 ">
            These consultancy services are tailored to help you develop
            high-quality, cost-effective parts that are optimized for injection
            moulding from the outset.
          </p>
        </div>
        <div className="w-1/2 relative">
          <img
            src="/assets/images/designcon.jpg"
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
          <li className="text-lg sm:text-xl  cursor-default">
            <strong className="underline">
              Concept-to-Production Guidance:
            </strong>
            <br />
            <span className="text-base">
              Expert advice from initial concept through to full-scale
              manufacturing, ensuring design feasibility.
            </span>
          </li>
          <li className="text-lg sm:text-xl  cursor-default">
            <strong className="underline">Material & Process Selection:</strong>
            <br />
            <span className="text-base">
              Assistance in selecting the optimal materials and injection
              moulding processes for durability, functionality, and
              cost-efficiency.
            </span>
          </li>
          <li className="text-lg sm:text-xl  cursor-default">
            <strong className="underline">
              Design for Manufacturability (DFM):
            </strong>
            <br />
            <span className="text-base">
              Ensuring designs are optimized for injection moulding to reduce
              complexity, minimize waste, and improve production efficiency.
            </span>
          </li>
          <li className="text-lg sm:text-xl  cursor-default">
            <strong className="underline">
              Prototype Development & Testing:
            </strong>
            <br />
            <span className="text-base ">
              Creating prototypes to validate design, fit, and functionality
              before committing to full production.
            </span>
          </li>
          <li className="text-lg sm:text-xl  cursor-default">
            <strong className="underline">Cost Optimization Strategies:</strong>
            <br />
            <span className="text-base">
              Reducing costs by refining designs for efficient moulding,
              minimizing cycle times, and eliminating unnecessary features.
            </span>
          </li>
          <li className="text-lg sm:text-xl  cursor-default">
            <strong className="underline">
              Advanced Simulation & Analysis
            </strong>
            <br />
            <span className="text-base">
              Using CAD and mould flow analysis to predict and resolve potential
              issues like warpage and shrinkage.
            </span>
          </li>
          <li className="text-lg sm:text-xl  cursor-default">
            <strong className="underline">Iterative Design Support:</strong>
            <br />
            <span className="text-base">
              Working with you through design iterations to achieve optimal
              results while meeting functional and aesthetic requirements.
            </span>
          </li>
          <li className="text-lg sm:text-xl  cursor-default">
            <strong className="underline">
              Compliance & Standards Adherence:
            </strong>
            <br />
            <span className="text-base">
              Ensuring parts meet industry standards and regulatory
              requirements.
            </span>
          </li>
        </ul>
      </div>

      {/* <div className="mt-12 flex flex-col md:flex-row justify-center ">
          <div className="w-full md:w-[500px] h-[300px] relative">
            <Image
              src="/assets/images/designcon.jpg"
              alt="Mould trial process"
              layout="fill"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div> */}
    </section>
  );
};

export default DesignPage;
