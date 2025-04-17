import React from "react";

const page = () => {
  return (
    <div className=" bg-gray-100 px-5 md:px-16 flex flex-col mt-16 h-full w-full gap-16">
      <div className="pt-20 lg:pt-16 pb-12 lg:pb-12 h-full">
        <div className="p-5 text-center text-5xl font-semibold ">
          <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
            <span className="font-semibold text-lg text-orange-700 mb-2 block">
              Portfolio
            </span>
            <h2
              className="
              font-bold
              text-3xl
              sm:text-4xl
              md:text-[40px]
              text-gray-900
              mb-4
              "
            >
              Our Projects
            </h2>
          </div>
        </div>
        <div className="flex flex-row gap-5 border-b-[3px]  pb-16 border-orange-700 mb-16">
          <div className="w-1/2 ">
            <img
              className="rounded-3xl shadow-xl border-[1px] border-orange-700"
              src="/assets/images/deskorganizer.png"
              alt="desk organizer"
            />
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center ">
            <h2 className=" text-gray-900 text-4xl font-semibold">
              Project 1:{" "}
              <span className="text-orange-700">Desk Organiser Prototype</span>
            </h2>
            <br />
            <p className="text-gray-800">
              Building prototype using 3D printing machine for bespoke Desk
              organiser design.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-5 mb-10 ">
          <div className="w-1/2 flex flex-col items-center justify-center ">
            <h2 className="text-gray-900 text-4xl font-semibold ">
              Project 2: <span className="text-orange-700">Mould Design</span>
            </h2>{" "}
            <br />
            <p className="text-gray-800">
              Creation of IoT device outer case using PC and ABS material for
              mass production of 10000+ unit.
            </p>
          </div>
          <div className="w-1/2">
            <img
              className="rounded-3xl shadow-xl border-[1px] border-orange-700 "
              src="/assets/images/designformanufac.png"
              alt="design manufac"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
