import React from "react";

const PrivacyPage = () => {
  return (
    <div className="bg-white h-[90vh] flex items-center justify-center">
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h6 className="text-lg text-orange-600 font-medium text-center mb-2">
              Privacy Policy
            </h6>
            <h2 className=" mb-10 text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]">
              Privacy Policy
            </h2>
            <div>
              <ul className="text-gray-900 text-xl  pl-6">
                <li className="mb-5">
                  <div className="font-bold">Data Collection:</div> We collect
                  user information such as name, email, and phone number when
                  you fill out contact forms or place an order.
                </li>
                <li className="mb-5">
                  <div className="font-bold">Data Usage:</div> Your information
                  is used only to fulfill orders and improve our services.
                </li>
                <li className="mb-5">
                  <div className="font-bold">Data Security:</div>We use
                  industry-standard encryption to protect your personal
                  information.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
