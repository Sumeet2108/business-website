import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className=" mt-28 flex flex-col items-center justify-center">
      <div className="text-6xl w-full text-center font-semibold text-white border-b-[1px] border-white pb-10">
        ABOUT US
      </div>

      <div className="flex flex-col  items-center mt-32">
        <div className="text-8xl text-white text-center ">
          <span className="font-extrabold">AK</span> <br /> Engineers
        </div>
        <div className="w-[85vh] mt-4 text-lg text-center">
          At A.K. Engineers, we are a leading provider of plastic injection
          moulding services, proudly serving OEMs and startups across India for
          over 25 years. Our extensive experience spans various industries,
          including mechanical, automotive, medical, and consumer technology.
        </div>
      </div>
      <div className="py-20 w-full mt-32 bg-orange-500 flex flex-col items-center justify-center">
        <div className="text-5xl font-semibold">Our Mission</div>
        <div className=" text-center mt-4 text-lg  w-[80vh] ">
          Our mission is to deliver high-quality products while embracing
          sustainable practices in our manufacturing processes. We are committed
          to innovation, offering design consultation and comprehensive support
          for new product development—from ideation to production. With the
          capability to mass-produce over 100,000 units, we ensure that your
          projects are executed with precision and efficiency.
        </div>
      </div>

      <div className="py-20 w-full   flex flex-col items-center justify-center">
        <div className="text-5xl font-semibold">Values</div>
        <div className=" text-center mt-4 text-lg  w-[80vh] ">
          Our core values are centered around People, Integrity, Excellence, and
          Collaboration. We believe in fostering strong relationships with our
          clients and partners, ensuring transparency in all our dealings.
          Additionally, we actively engage in collaboration with universities to
          test new materials, enabling us to stay at the forefront of industry
          advancements.
        </div>
      </div>

      <div className="py-20 w-full bg-orange-500  flex flex-col items-center justify-center">
        <div className=" text-center mt-4 text-2xl font-semibold  w-[150vh] ">
          Join us as we continue to push the boundaries of innovation and
          quality in plastic injection moulding.
          <br /> Together, we can turn your ideas into reality.
        </div>
      </div>
      <div className="flex flex-row ">
        <div>
          <Image
            src={"/assets/images/machine1.jpg"}
            height={800}
            width={600}
            className=" object-contain"
          ></Image>
        </div>
        <div>
          <Image
            src={"/assets/images/machine2.jpg"}
            height={800}
            width={800}
            className=" object-contain"
          ></Image>
        </div>
        <div>
          <Image
            src={"/assets/images/machine2.jpg"}
            height={800}
            width={800}
            className=" object-contain"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default page;
