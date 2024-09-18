import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className=" mt-20 flex flex-col items-center justify-center">
      <div className="text-white">Hello flex test div</div>
      <div className="text-3xl text-white ">
        We are <span className="font-extrabold">AK</span> Engineers
      </div>
      <div className="w-[75vh] mt-4 text-center">
        Plastic Injection molding service providers with 25+ years of
        experience. We offer a varied range of services offered from product
        development to final production for a different type of material from
        Polycarbonate to Ethylene-Vinyl Acetate(EVA) with specialized experience
        in electrical products.
      </div>
      <div className="flex flex-row mt-4">
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
