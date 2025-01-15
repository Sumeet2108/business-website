"use client";
import React from "react";
import { useRouter } from "next/navigation";

const AboutPage = () => {
  const router = useRouter();

  return (
    <div className="bg-white mt-16 flex flex-col items-center justify-center py-6">
      <div className="h-full px-5 relative w-full max-w-screen-xl">
        {/* Image and overlay container */}
        <div className="relative">
          <img
            alt="about_machinerypic"
            src="/assets/images/about_machinery.png"
            className="rounded-xl object-cover w-full"
          />
          {/* black overlay on the image */}
          <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>

          {/* Overlay text and button centered on the image */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            {/* Text */}
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold">
              25 years of Plastic Injection Moulding Expertise
            </h2>
            {/* Button */}
            <button
              onClick={() => router.push("/contact-us")}
              className="mt-6 text-md md:text-lg bg-[#FFA500] text-white py-3 px-6 rounded-full shadow-lg hover:bg-yellow-600"
            >
              Contact Us
            </button>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-black text-2xl sm:text-3xl font-semibold">
            Comprehensive Capabilities
          </h2>
        </div>

        {/* 4 Cards Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 mt-8">
          {/* 1 */}
          <div className="bg-white text-black p-6 rounded-lg border-[#FFA500] border-[1px]">
            <img src="/assets/icons/gear.svg" alt="gear" className="h-9 py-2" />
            <h3 className="text-xl font-semibold">Mechanical</h3>
            <p>
              Delivering precision components for industrial and mechanical
              applications.
            </p>
          </div>
          {/* 2 */}
          <div className="bg-white text-black p-6 rounded-lg border-[#FFA500] border-[1px]">
            <img src="/assets/icons/car.svg" alt="car" className="h-9 py-2" />
            <h3 className="text-xl font-semibold">Automotive</h3>
            <p>Delivering precision components for automotive applications.</p>
          </div>
          {/* 3 */}
          <div className="bg-white text-black p-6 rounded-lg border-[#FFA500] border-[1px]">
            <img
              src="/assets/icons/medical.svg"
              alt="medical"
              className="h-9 py-2"
            />
            <h3 className="text-xl font-semibold">Medical</h3>
            <p>Delivering precision components for medical technology.</p>
          </div>
          {/* 4 */}
          <div className="bg-white text-black p-6 rounded-lg border-[#FFA500] border-[1px]">
            <img
              src="/assets/icons/consumer.svg"
              alt="consumer"
              className="h-9 py-2"
            />
            <h3 className="text-xl font-semibold">Consumer Technology</h3>
            <p>Delivering precision components for consumer technology.</p>
          </div>
        </div>

        {/* 3 Cards Section */}
        <div className="grid grid-cols-3 gap-2 md:gap-6 mt-8">
          {/* 1 */}
          <div className="bg-white text-black p-6 rounded-lg border-[#FFA500] border-[1px]">
            <h3 className="text-2xl font-semibold">50+ </h3>
            <p className="text-md md:text-xl">Projects Completed</p>
          </div>
          {/* 2 */}
          <div className="bg-white text-black p-6 rounded-lg border-[#FFA500] border-[1px]">
            <h3 className="text-2xl font-semibold">25+ </h3>
            <p className="text-md md:text-xl">Years of Expertise</p>
          </div>
          {/* 3 */}
          <div className="bg-white text-black p-6 rounded-lg border-[#FFA500] border-[1px]">
            <h3 className="text-2xl font-semibold">30+</h3>
            <p className="text-md md:text-xl">Clients Served</p>
          </div>
        </div>

        {/* Why Choose A.K Engineers Section */}
        <div className="mt-8">
          <h3 className="text-black text-2xl sm:text-3xl font-semibold">
            Why Choose A.K Engineers
          </h3>
        </div>

        {/* The 5 Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-6 mt-8">
          {/* 1 */}
          <div className="bg-white text-black p-6 rounded-lg border-[#FFA500] border-[1px]">
            <img src="/assets/icons/tick.svg" alt="tick" className="h-9 py-2" />
            <h3 className=" text-md md:text-xl font-semibold">
              Quality Assurance
            </h3>
            <p>Adherence to industry standards for quality and precision.</p>
          </div>
          {/* 2 */}
          <div className="bg-white text-black p-6 rounded-lg border-[#FFA500] border-[1px]">
            <img
              src="/assets/icons/toolbox.svg"
              alt="toolbox"
              className="h-9 py-2"
            />
            <h3 className="text-md md:text-xl font-semibold">
              Tooling and Prototype
            </h3>
            <p>State-of-the-art tooling and prototype services.</p>
          </div>
          {/* 3 */}
          <div className="bg-white text-black p-6 rounded-lg border-[#FFA500] border-[1px]">
            <img src="/assets/icons/bulb.svg" alt="bulb" className="h-9 py-2" />
            <h3 className="text-md md:text-xl font-semibold">
              Startup-Friendly
            </h3>
            <p>Tailored solutions for startups with flexible designs.</p>
          </div>
          {/* 4 */}
          <div className="bg-white text-black p-6 rounded-lg border-[#FFA500] border-[1px]">
            <img
              src="/assets/icons/logistics.svg"
              alt="logistics"
              className="h-9 py-2"
            />
            <h3 className="text-md md:text-xl font-semibold">
              Logistics Support
            </h3>
            <p>Streamlined logistics for on-time project delivery.</p>
          </div>
          {/* 5 */}
          <div className="bg-white text-black p-6 rounded-lg border-[#FFA500] border-[1px]">
            <img
              src="/assets/icons/infra.svg"
              alt="infra"
              className="h-9 py-2"
            />
            <h3 className="text-md md:text-xl font-semibold">Infrastructure</h3>
            <p>Robust infrastructure for large-scale production.</p>
          </div>
        </div>

        {/* Image Below Grid */}
        <div className="mt-8 mb-8">
          <img
            alt="building"
            src="/assets/images/building.png"
            className="w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
