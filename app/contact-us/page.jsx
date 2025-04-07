import React from "react";
import Contactform from "@/components/ui/contactform";
const page = () => {
  return (
    <div className=" mt-16 md:mt-8">
      <div className="bg-[url('/assets/images/index_deskorganizer.png')] bg-cover bg-bottom h-[40vh] md:h-[60vh] flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>
        <h2 className="text-white text-4xl md:text-7xl font-bold relative">
          Contact Us
        </h2>
      </div>
      <div>
        <Contactform />
      </div>
    </div>
  );
};

export default page;
