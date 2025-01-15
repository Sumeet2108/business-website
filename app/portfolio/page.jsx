import React from "react";

const page = () => {
  return (
    <div className=" bg-black px-5 flex flex-col mt-16 h-full w-full gap-16">
      <div className="p-5   text-center text-5xl font-semibold ">
        <h1>Portfolio</h1>
      </div>
      <div className="flex flex-row gap-5 border-b  pb-16 border-white">
        <div className="w-1/2">
          <img
            className="rounded-3xl"
            src="/assets/images/deskorganizer.png"
            alt="desk organizer"
          />
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center ">
          <h2 className="  text-4xl font-semibold">
            Project 1: Desk Organiser Prototype
          </h2>
          <br />
          <p>
            Building prototype using 3D printing machine for bespoke Desk
            organiser design.
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-5 mb-10 ">
        <div className="w-1/2 flex flex-col items-center justify-center ">
          <h2 className="text-4xl font-semibold ">Project 2: Mould Design</h2>{" "}
          <br />
          <p>
            Creation of IoT device outer case using PC and ABS material for mass
            production of 10000+ unit.
          </p>
        </div>
        <div className="w-1/2">
          <img
            className="rounded-3xl"
            src="/assets/images/designformanufac.png"
            alt="design manufac"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
