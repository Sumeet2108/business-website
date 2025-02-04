"use client";
import React from "react";
import Contactform from "@/components/ui/contactform";
import Link from "next/link";
import Image from "next/image";
import { Tabs } from "@/components/ui/tabs/tabs";
import { motion } from "framer-motion";
import { Carousel, IconButton } from "@material-tailwind/react";

const Home = () => {
  return (
    <div className="flex flex-col items-center  ">
      <div
        className=" border-b-[1px] border-white relative w-full h-96 md:h-[75vh]  overflow-hidden custom-cursor"
        onClick={() => {
          const targetSection = document.getElementById("target-section");
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/vids/cnc.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className=" ml-6 relative z-10 flex items-center justify-start h-full text-white">
          <h1 className="text-3xl md:text-7xl font-bold ">
            <div className="mb-6">
              We <span className="text-[#FFA500]">Manufacture</span>{" "}
            </div>
            <div>
              to support <span className="text-[#FFA500]">innovation!</span>
            </div>
          </h1>
        </div>
        <div id="target-section"></div>
      </div>
      <div className="mt-4 w-full text-5xl p-5 text-center md:text-left">
        Our Services:
      </div>

      <div className="w-full h-auto grid grid-cols-1 md:grid-cols-4 gap-5 p-6 text-2xl">
        <Link
          href={"services/mould-trail"}
          className="flex flex-col border-white border-[1px] gap-4 p-2 md:p-4 rounded-xl text-center hover:bg-white hover:text-black text-base md:text-2xl"
        >
          <div>Mould Trial</div>
        </Link>
        <Link
          href={"services/mass-production"}
          className="flex flex-col border-white border-[1px] gap-4 p-2 md:p-4 rounded-xl text-center hover:bg-white hover:text-black text-base md:text-2xl"
        >
          <div>Mass Production</div>
        </Link>
        <Link
          href={"services/design-consultancy"}
          className="flex flex-col border-white border-[1px] gap-4 p-2 md:p-4 rounded-xl text-center hover:bg-white hover:text-black text-base md:text-2xl"
        >
          <div>Design Consultancy</div>
        </Link>
        <Link
          href={"services/mould-manufacturing"}
          className="flex flex-col border-white border-[1px] gap-4 p-2 md:p-4 rounded-xl text-center hover:bg-white hover:text-black text-base md:text-2xl"
        >
          <div>Mould Manufacturing</div>
        </Link>
      </div>

      <div className=" w-full h-500 md:h-[800px] mt-4 ">
        <Carousel
          autoplay="true"
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handlePrev}
              className=" invisible md:visible !absolute top-2/4 left-4 -translate-y-2/4 bg-[#FFA500] hover:bg-orange-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handleNext}
              className=" invisible md:visible !absolute top-2/4 !right-4 -translate-y-2/4 bg-[#FFA500] hover:bg-orange-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}
          loop="true"
          className=""
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-orange-800" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <img
            src="/assets/images/index_deskorganizer.png"
            alt=" desk organizer"
            className="h-full w-full object-cover"
          />
          <img
            src="/assets/images/designformanufac.png"
            alt=" design for manufacture"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div>
      <div>
        <Contactform />
      </div>
      {/* <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <div className="text-3xl font-semibold mb-4">Our Services</div>
      <Tabs tabs={tabs} />
    </div> */}
    </div>
  );
};

export default Home;
