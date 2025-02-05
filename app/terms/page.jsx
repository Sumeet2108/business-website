import React from "react";

const TermsPage = () => {
  return (
    <div className="bg-white h-full flex items-center justify-center">
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h6 className="text-lg text-orange-600 font-medium text-center mb-2">
              T&C
            </h6>
            <h2 className=" mb-10 text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]">
              Terms & Conditions
            </h2>
            <div>
              <ul className="text-gray-900 text-xl  pl-6">
                <li className="mb-5">
                  <div className=" text-2xl font-bold text-orange-700">
                    Agreement:
                  </div>{" "}
                  By accessing and using our website, you agree to comply with
                  these terms.
                </li>
                <li className="mb-5">
                  <div className=" text-2xl font-bold text-orange-700">
                    Orders and Payments:
                  </div>{" "}
                  All orders are subject to approval. Payment terms will be
                  specified at the time of order confirmation.
                </li>
                <li className="mb-5">
                  <div className=" text-2xl font-bold text-orange-700">
                    Intellectual Property:
                  </div>{" "}
                  All website content, including images, text, and designs, is
                  the property of A.K. Engineers.
                </li>
                <li className="mb-5">
                  <div className=" text-2xl font-bold text-orange-700">
                    Liability:
                  </div>{" "}
                  We are not responsible for delays caused by unforeseen
                  circumstances, such as supply chain issues or natural
                  disasters.
                </li>
                <li className="mb-5">
                  <div className=" text-2xl font-bold text-orange-700">
                    Changes to Terms:
                  </div>
                  We reserve the right to modify these terms at any time without
                  prior notice.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
