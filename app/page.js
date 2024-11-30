"use client";
import Link from "next/link";
import Image from "next/image";
import { Tabs } from "@/components/ui/tabs/tabs";
import { motion } from "framer-motion";
import Carousel from "@/components/ui/carousel/carousel";
import Contactform from "@/components/ui/contactform";
export default function TabsDemo() {
  const tabs = [
    {
      title: "Platic Injection Moulding",
      value: "plastic",
      content: (
        // <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <div className="p-2 bg-purple-700 rounded-2xl">
          <div className=" text-3xl font-extrabold  text-white absolute z-20 break-words max-w-[50%] m-20 ">
            Some sample text here, i need to apply gradient or use grids
          </div>

          <Image
            src="/assets/images/machine1.jpg "
            alt="pim"
            width="1000"
            height="1000"
            className="object-cover rounded-xl mx-auto "
          />
        </div>
        // </div>
      ),
    },
    {
      title: "Insert molding",
      value: "insert",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Insert tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Overmolding",
      value: "over",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Over tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Liquid silicone rubber molding",
      value: "lsr",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Lsr tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center mt-16 ">
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
              We <span className="text-orange-500">Manufacture</span>{" "}
            </div>
            <div>
              to support <span className="text-orange-500">innovation!</span>
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

      <div className=" w-full  mt-4 ">
        <Carousel />
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
}

const DummyContent = () => {
  return (
    <Image
      // src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
