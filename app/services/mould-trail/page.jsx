import React from "react";
import Image from "next/image";

const MouldTrailPage = () => {
  return (
    <section className="mt-20 mb-12 py-12 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm md:text-base text-gray-400 mb-2">
          Services &gt; Mould Trial Service
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-white mb-10">
          Mould Trial Service
        </h1>
        <p className="text-base sm:text-xl text-center text-gray-300 mb-8">
          This service ensures your mould is optimized for reliable, efficient,
          and high-quality production.
        </p>

        <ul className="space-y-6 text-left max-w-3xl mx-auto text-gray-200">
          <li className="text-lg sm:text-xl lg:hover:underline cursor-default">
            <strong className="underline">
              Material Selection Assistance:
            </strong>
            <br />
            <span className="text-base">
              Expert guidance to choose the best materials for your product
              needs.
            </span>
          </li>
          <li className="text-lg sm:text-xl lg:hover:underline cursor-default">
            <strong className="underline">Production Cost Optimization:</strong>
            <br />
            <span className="text-base">
              Solutions to minimize costs while maintaining high quality.
            </span>
          </li>
          <li className="text-lg sm:text-xl lg:hover:underline cursor-default">
            <strong className="underline">Mould Issue Rectification:</strong>
            <br />
            <span className="text-base">
              Troubleshooting and resolving common mould defects (e.g., warpage,
              flash, short shots).
            </span>
          </li>
          <li className="text-lg sm:text-xl lg:hover:underline cursor-default">
            <strong className="underline">
              Support for University & Post-Doctoral Research:
            </strong>
            <br />
            <span className="text-base">
              Technical support for academic and research projects.
            </span>
          </li>
          <li className="text-lg sm:text-xl lg:hover:underline cursor-default">
            <strong className="underline">
              Process Parameter Optimization:
            </strong>
            <br />
            <span className="text-base">
              Fine-tuning temperature, pressure, and cycle time for consistent
              results.
            </span>
          </li>
          <li className="text-lg sm:text-xl lg:hover:underline cursor-default">
            <strong className="underline">Prototype Development:</strong>
            <br />
            <span className="text-base">
              Rapid prototyping for design validation before full-scale
              production.
            </span>
          </li>
          <li className="text-lg sm:text-xl lg:hover:underline cursor-default">
            <strong className="underline">Quality Assurance & Testing:</strong>
            <br />
            <span className="text-base">
              Rigorous testing to ensure moulded parts meet all required
              standards.
            </span>
          </li>
        </ul>

        {/* Image Section */}
        <div className="mt-12 flex flex-col md:flex-row justify-center gap-8">
          <div className="w-full md:w-[500px] h-[300px] relative">
            <Image
              src="/assets/images/mouldtrail1.jpg"
              alt="Mould trial process"
              layout="fill"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-[500px] h-[300px] relative">
            <Image
              src="/assets/images/mouldtrail2.jpg"
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

export default MouldTrailPage;
