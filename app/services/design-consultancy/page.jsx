import React from "react";
import Image from "next/image";

const DesignPage = () => {
  return (
    <section className="mt-20 mb-12 py-12 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm md:text-base text-gray-400 mb-2">
          Services &gt; Design Consultancy
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-white mb-10">
          Design Consultancy
        </h1>
        <p className="text-base sm:text-xl text-center text-gray-300 mb-8">
          These consultancy services are tailored to help you develop
          high-quality, cost-effective parts that are optimized for injection
          moulding from the outset.
        </p>

        <ul className=" space-y-6 text-left max-w-3xl mx-auto text-gray-200">
          <li className="text-lg sm:text-xl hover:underline cursor-default">
            <strong className="underline">
              Concept-to-Production Guidance:
            </strong>
            <br />
            <span className="text-base">
              Expert advice from initial concept through to full-scale
              manufacturing, ensuring design feasibility.
            </span>
          </li>
          <li className="text-lg sm:text-xl hover:underline cursor-default">
            <strong className="underline">Material & Process Selection:</strong>
            <br />
            <span className="text-base">
              Assistance in selecting the optimal materials and injection
              moulding processes for durability, functionality, and
              cost-efficiency.
            </span>
          </li>
          <li className="text-lg sm:text-xl hover:underline cursor-default">
            <strong className="underline">
              Design for Manufacturability (DFM):
            </strong>
            <br />
            <span className="text-base">
              Ensuring designs are optimized for injection moulding to reduce
              complexity, minimize waste, and improve production efficiency.
            </span>
          </li>
          <li className="text-lg sm:text-xl hover:underline cursor-default">
            <strong className="underline">
              Prototype Development & Testing:
            </strong>
            <br />
            <span className="text-base ">
              Creating prototypes to validate design, fit, and functionality
              before committing to full production.
            </span>
          </li>
          <li className="text-lg sm:text-xl hover:underline cursor-default">
            <strong className="underline">Cost Optimization Strategies:</strong>
            <br />
            <span className="text-base">
              Reducing costs by refining designs for efficient moulding,
              minimizing cycle times, and eliminating unnecessary features.
            </span>
          </li>
          <li className="text-lg sm:text-xl hover:underline cursor-default">
            <strong className="underline">
              Advanced Simulation & Analysis
            </strong>
            <br />
            <span className="text-base">
              Using CAD and mould flow analysis to predict and resolve potential
              issues like warpage and shrinkage.
            </span>
          </li>
          <li className="text-lg sm:text-xl hover:underline cursor-default">
            <strong className="underline">Iterative Design Support:</strong>
            <br />
            <span className="text-base">
              Working with you through design iterations to achieve optimal
              results while meeting functional and aesthetic requirements.
            </span>
          </li>
          <li className="text-lg sm:text-xl hover:underline cursor-default">
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

        {/* Image Section */}
        <div className="mt-12 flex flex-col md:flex-row justify-center ">
          <div className="w-full md:w-[500px] h-[300px] relative">
            <Image
              src="/assets/images/designcon.jpg"
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

export default DesignPage;
