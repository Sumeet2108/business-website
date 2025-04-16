"use client";
import { useEffect, useState } from "react";
import Contactform from "@/components/ui/contactform";
import Link from "next/link";
import Image from "next/image";
import { Tabs } from "@/components/ui/tabs/tabs";
import { motion } from "framer-motion";
import { Carousel, IconButton } from "@material-tailwind/react";
import ServicesCardGrid from "./servicesCardGrid";
import { useRouter } from "next/navigation";

import dynamic from "next/dynamic";
const HeroVideo = dynamic(() => import("./videocontainer"), { ssr: false });

const Home = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center bg-white max-w-full ">
      <div
        className=" border-b-[1px] border-white relative w-full  h-96 md:h-[75vh]  max-h-96 md:max-h-[720px]  overflow-hidden custom-cursor"
        onClick={() => {
          const targetSection = document.getElementById("target-section");
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <HeroVideo />
        <div className=" md:px-14  ml-6 relative z-10 flex items-center justify-start h-full text-white">
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

      <div className=" h-full px-2 md:px-14">
        {/* Services Main div */}
        <div className="  mt-4 w-full text-gray-900 font-medium text-3xl md:text-5xl p-5 text-center md:text-left">
          Our Services:
        </div>

        {/* Services Cards here */}
        <div className=" p-2 md:p-5 grid grid-cols-2 md:grid-cols-4  gap-2 md:gap-8 ">
          {/* Card 1 */}
          <div
            className=" border-[1px] border-orange-500 border-opacity-30 cursor-pointer p-5 md:px-7 xl:px-10 rounded-[20px] bg-white  group relative shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-2"
            onClick={() => router.push("/services/mould-trail")}
          >
            <div className=" w-[40px] md:w-[70px] h-[40px] md:h-[70px] flex items-center justify-center bg-orange-400 rounded-xl md:rounded-2xl mb-8">
              <svg
                className=" h-[35px] md:h-[48px] w-[35px] md:w-[48px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#FFFFFF"
              >
                <path d="M356-120H180q-24 0-42-18t-18-42v-176q44-5 75.5-34.5T227-463q0-43-31.5-72.5T120-570v-176q0-24 18-42t42-18h177q11-40 39.5-67t68.5-27q40 0 68.5 27t39.5 67h173q24 0 42 18t18 42v173q40 11 65.5 41.5T897-461q0 40-25.5 67T806-356v176q0 24-18 42t-42 18H570q-5-48-35.5-77.5T463-227q-41 0-71.5 29.5T356-120Zm-176-60h130q25-61 69.89-84t83-23Q501-287 546-264t70 84h130v-235h45q20 0 33-13t13-33q0-20-13-33t-33-13h-45v-239H511v-48q0-20-13-33t-33-13q-20 0-33 13t-13 33v48H180v130q48.15 17.82 77.58 59.69Q287-514.45 287-462.78 287-412 257.5-370T180-310v130Zm285-281Z" />
              </svg>
            </div>
            <h4 className="font-semibold text-base md:text-xl text-gray-900 mb-3 ">
              Mould Trial&gt;
            </h4>
            <p className="text-gray-900  text-sm md:text-base">
              Ensure flawless production with our expert mould trial services
              today.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className=" border-[1px] border-orange-500 border-opacity-30 cursor-pointer p-5 md:px-7 xl:px-10 rounded-[20px] bg-white  group relative shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-2"
            onClick={() => router.push("/services/mass-production")}
          >
            <div className=" w-[40px] md:w-[70px] h-[40px] md:h-[70px] flex items-center justify-center bg-orange-400 rounded-xl md:rounded-2xl mb-8">
              <svg
                className=" h-[35px] md:h-[48px] w-[35px] md:w-[48px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#FFFFFF"
              >
                <path d="M201-120q-50 0-85-35t-35-85q0-50 35-85t85-35h560q50 0 85 35t35 85q0 50-35 85t-85 35H201Zm0-60h560q25.5 0 42.75-17.25T821-240q0-25.5-17.25-42.75T761-300H201q-25.5 0-42.75 17.25T141-240q0 25.5 17.25 42.75T201-180Zm190-260q-12.75 0-21.37-8.63Q361-457.25 361-470v-340q0-12.75 8.63-21.38Q378.25-840 391-840h340q12.75 0 21.38 8.62Q761-822.75 761-810v340q0 12.75-8.62 21.37Q743.75-440 731-440H391Zm30-60h280v-280H421v280ZM79-530v-60h221v60H79Zm401-120h162v-60H480v60Zm-319 0h147v-60H161v60Zm260 150v-280 280Z" />
              </svg>
            </div>
            <h4 className="font-semibold text-base md:text-xl text-gray-900 mb-3">
              Mass Production&gt;
            </h4>
            <p className="text-gray-900  text-sm md:text-base">
              Reliable and scalable mass production solutions for high-quality
              manufacturing.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className=" border-[1px] border-orange-500 border-opacity-30 cursor-pointer p-5 md:px-7 xl:px-10 rounded-[20px] bg-white  group relative shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-2"
            onClick={() => router.push("/services/custom-product-development")}
          >
            <div className=" w-[40px] md:w-[70px] h-[40px] md:h-[70px] flex items-center justify-center bg-orange-400 rounded-xl md:rounded-2xl mb-8">
              <svg
                className=" h-[35px] md:h-[48px] w-[35px] md:w-[48px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#FFFFFF"
              >
                <path d="m357-513 90-90-75-75-48 48-42-42 48-48-75-74-90 90 192 191Zm346 348 90-91-75-75-48 48-42-42 48-48-74-74-90 90 191 192Zm8-615 70 70-70-70ZM276-120H120v-156l194-194L80-704l174-176 236 235 178-178q9-9 20-13t22-4q11 0 22 4t20 13l71 71q9 9 13 20t4 22q0 11-4 22t-13 20L645-490l235 235L705-81 471-315 276-120Zm-96-60h70l393-394-70-70-393 394v70Zm428-429-35-35 70 70-35-35Z" />
              </svg>
            </div>
            <h4 className="font-semibold text-base md:text-xl text-gray-900 mb-3">
              Custom Product Development&gt;
            </h4>
            <p className="text-gray-900  text-sm md:text-base">
              Transform ideas into reality with our expert custom product
              development services for injection moulded parts.
            </p>
          </div>

          {/* Card 4 */}
          <div
            className=" border-[1px] border-orange-500 border-opacity-30 cursor-pointer p-5 md:px-7 xl:px-10 rounded-[20px] bg-white  group relative shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-2"
            onClick={() => router.push("/services/mould-manufacturing")}
          >
            <div className=" w-[40px] md:w-[70px] h-[40px] md:h-[70px] flex items-center justify-center bg-orange-400 rounded-xl md:rounded-2xl mb-8">
              <svg
                className=" h-[35px] md:h-[48px] w-[35px] md:w-[48px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#FFFFFF"
              >
                <path d="M220-80q-23 0-41.5-18T160-140v-680q0-23 18.5-41.5T220-880h580v60H693v60q0 14-12.5 27T654-720H368q-14 0-26.5-13T329-760v-60H220v680h188q-38-26-58.5-63T329-293v-193h364v193q0 53-21 90t-59 63h187v60H220Zm290.5-86q51.5 0 87-37.04T633-293v-133H389v133q0 52.92 35 89.96Q459-166 510.5-166Zm-.5-394q16.58 0 27.79-11.21T549-599q0-16.58-11.21-27.79T510-638q-16.58 0-27.79 11.21T471-599q0 16.58 11.21 27.79T510-560Zm1 134Z" />
              </svg>
            </div>
            <h4 className="font-semibold text-base md:text-xl text-gray-900 mb-3">
              Mould Manufacturing&gt;
            </h4>
            <p className="text-gray-900  text-sm md:text-base">
              Precision-engineered mould manufacturing for seamless and
              efficient production.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="w-full h-auto grid grid-cols-1 md:grid-cols-4 gap-5 p-6 text-2xl">
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
          href={"services/custom-product-development"}
          className="flex flex-col border-white border-[1px] gap-4 p-2 md:p-4 rounded-xl text-center hover:bg-white hover:text-black text-base md:text-2xl"
        >
          <div>Custom Product Development</div>
        </Link>
        <Link
          href={"services/mould-manufacturing"}
          className="flex flex-col border-white border-[1px] gap-4 p-2 md:p-4 rounded-xl text-center hover:bg-white hover:text-black text-base md:text-2xl"
        >
          <div>Mould Manufacturing</div>
        </Link>
      </div> */}

      <div className=" w-full h-500 md:h-[800px] mt-4  ">
        <Carousel
          autoplay="true"
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handlePrev}
              className=" invisible md:visible !absolute top-2/4 left-14 -translate-y-2/4 bg-[#FFA500] hover:bg-orange-700"
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
              className=" invisible md:visible !absolute top-2/4 !right-14 -translate-y-2/4 bg-[#FFA500] hover:bg-orange-700"
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
            <div className="absolute bottom-4 left-2/4 z-20 flex -translate-x-2/4 gap-2">
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

      <div className="pb-2 pt-4 bg-white  w-full flex flex-col justify-center items-center border-y-[1px] border-black">
        <h3 className=" text-2xl md:text-4xl font-semibold ">
          Our Trusted Clients
        </h3>
        <div className=" px-6 md:px-6 my-2 grid grid-cols-4 gap-8 md:gap-32 items-center ">
          <img
            src="/assets/images/hifi-logo.jpeg"
            alt="hifi-electric-logo"
            className="object-contain w-20 md:w-40"
          ></img>

          <img
            src="/assets/images/elleyes-logo.jpg"
            alt="elleyes-logo "
            className="object-contain w-20 md:w-40"
          ></img>

          <img
            src="/assets/images/avon-logo.png"
            alt="avon-logo"
            className="object-contain w-20 md:w-40"
          ></img>

          <img
            src="/assets/images/profile-solution-logo.png"
            alt="profile-solutiom-logo"
            className="object-contain w-20 md:w-40"
          ></img>
        </div>
      </div>

      <div className="w-full">
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
