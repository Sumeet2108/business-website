import React from "react";
import Image from "next/image";
const MassProd = () => {
  return (
    <div className=" mt-28 flex flex-col items-center justify-center">
      <div className=" underline text-2xl w-full text-center font-semibold text-white  border-white">
        Services
      </div>
      <div className="text-6xl w-full text-center font-semibold text-white border-b-[1px] border-white pb-10">
        Mass Production
      </div>

      <div className="flex flex-col items-center mt-32">
        <ul className="list-disc space-y-5 text-2xl text-white max-w-5xl">
          <li className="">
            <div className="py-2 pl-6 rounded-lg font-semibold transition-colors duration-300 ease-in-out hover:bg-white hover:text-black">
              <span>High-Volume Production:</span> Equipped to handle large
              orders efficiently with consistent quality.
            </div>
          </li>

          <li>
            <div className=" p-2 rounded-lg font-semibold transition-colors duration-300 ease-in-out hover:bg-white hover:text-black">
              Scalable Manufacturing Solutions: Flexible production setups to
              meet both small and large batch requirements.
            </div>
          </li>
          <li>
            <div className=" p-2 rounded-lg font-semibold transition-colors duration-300 ease-in-out hover:bg-white hover:text-black">
              Advanced Automation: Automated systems and machinery to streamline
              processes and reduce lead times.
            </div>
          </li>
          <li>
            <div className=" p-2 rounded-lg font-semibold transition-colors duration-300 ease-in-out hover:bg-white hover:text-black">
              Quality Control at Scale: Rigorous inspection processes ensure
              quality across every unit in high-volume production.
            </div>
          </li>
          <li>
            <div className=" p-2 rounded-lg font-semibold transition-colors duration-300 ease-in-out hover:bg-white hover:text-black">
              Optimized Lead Times: Fast turnaround from design to delivery for
              time-sensitive projects.
            </div>
          </li>
          <li>
            Cost-Efficiency for Large Orders: Competitive pricing structures for
            bulk production, reducing per-unit cost.
          </li>
          <li>
            End-to-End Support: Comprehensive service from material selection
            through to final product delivery.
          </li>
        </ul>
        <p className="mt-6 text-center text-lg text-gray-700">
          These capabilities ensure high-quality, cost-effective, and timely
          production for any volume.
        </p>
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

export default MassProd;
