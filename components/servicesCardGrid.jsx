"use client";
import { useRouter } from "next/navigation";

const ServicesCardGrid = () => {
  const router = useRouter();
  return (
    <div className="bg-gray-100 w-full flex items-center justify-center">
      <div className="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] h-full ">
        <div className="container text-gray-900 mb-10">
          <div className="flex flex-wrap h-full">
            <div className="w-full px-4">
              <div className="text-center mx-auto mb-12 lg:mb-20  md:max-w-[750px] px-6">
                <span className="font-semibold text-lg text-orange-400 mb-2 block">
                  Our Services
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
                  What We Offer
                </h2>
                <div className=" text-gray-900  text-sm md:text-base">
                  <div>
                    <strong>From Idea to market ready products.</strong>
                  </div>
                  <span>
                    We make your product manufacturing ready, handling
                    everything from mold development to mass production. With
                    quality control that meets industry standards and on-demand
                    services across sectors from consumer to industrial we turn
                    your vision into scalable, real-world products.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className=" p-5 grid grid-cols-2 md:grid-cols-4  gap-4 md:gap-8 mb-10">
            {/* Card 1 */}
            <div
              className="group relative cursor-pointer p-4 md:p-8 rounded-2xl bg-white border border-orange-200 hover:border-orange-bg-orange-500/20 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-2"
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
              <h4 className="font-semibold text-xl text-dark mb-3">
                Mould Trial&gt;
              </h4>
              <p className="text-gray-900  text-sm md:text-base">
                Ensure flawless production with our expert mould trial services
                today.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="group relative cursor-pointer p-4 md:p-8 rounded-2xl bg-white border border-orange-200 hover:border-orange-bg-orange-500/20 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-2"
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
              <h4 className="font-semibold text-xl text-dark mb-3">
                Mass Production&gt;
              </h4>
              <p className="text-gray-900  text-sm md:text-base">
                Reliable and scalable mass production solutions for high-quality
                manufacturing.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="group relative cursor-pointer p-4 md:p-8 rounded-2xl bg-white border border-orange-200 hover:border-orange-bg-orange-500/20 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-2"
              onClick={() =>
                router.push("/services/custom-product-development")
              }
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
              <h4 className="font-semibold text-xl text-dark mb-3">
                Custom Product Development&gt;
              </h4>
              <p className="text-gray-900  text-sm md:text-base">
                Transform ideas into reality with our expert custom product
                development services for injection moulded parts.
              </p>
            </div>

            {/* Card 4 */}
            <div
              className="group relative cursor-pointer p-4 md:p-8 rounded-2xl bg-white border border-orange-200 hover:border-orange-bg-orange-500/20 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-2"
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
              <h4 className="font-semibold text-xl text-dark mb-3">
                Mould Manufacturing&gt;
              </h4>
              <p className="text-gray-900  text-sm md:text-base">
                Precision-engineered mould manufacturing for seamless and
                efficient production.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCardGrid;
