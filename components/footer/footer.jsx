import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="relative bg-black pt-8 pb-6 border-gray-300 border-t-[0.5px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-white">AK Engineers</h4>
            {/* <h5 className="text-lg mt-0 mb-2 text-slate-600">Our Office</h5> */}
            <div className="mt-2">
              <div className="w-full mb-4 md:w-1/2 h-72 ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4230.291095493794!2d72.85107896247833!3d19.16196276576265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7a93cb59cff%3A0x51db944f3e339549!2sA.K.%20Engineers!5e0!3m2!1sen!2sin!4v1726656935006!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map showing A.K. Engineers"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap text-center md:items-top   mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-orange-500 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      className="text-white hover:text-orange-500 font-semibold block pb-2 text-sm"
                      href="/about"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <a
                      className="text-white hover:text-orange-500 font-semibold block pb-2 text-sm"
                      href="/services"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <Link
                      className="text-white hover:text-orange-500 font-semibold block pb-2 text-sm"
                      href="/portfolio"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-white hover:text-orange-500 font-semibold block pb-2 text-sm"
                      href="/"
                    >
                      Hello
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-orange-500 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      className="text-white hover:text-orange-500 font-semibold block pb-2 text-sm"
                      href="site-map"
                    >
                      Site Map
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-white hover:text-orange-500 font-semibold block pb-2 text-sm"
                      href="tnc"
                    >
                      Terms &amp; Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-white hover:text-orange-500 font-semibold block pb-2 text-sm"
                      href="/privacy"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-white hover:text-orange-500 font-semibold block pb-2 text-sm"
                      href="/contact-us"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className=" md:ml-64  mt-8 border-[0.5px] border-orange-500 p-5 rounded-xl">
                <div className="text-orange-500 font-semibold">
                  <u>ADDRESS</u> <br />
                </div>
                <Link
                  className="hover:text-orange-500 focus:text-orange-500"
                  href={"https://maps.app.goo.gl/dpLaLGgHrcBzJ28f8"}
                  target="_blank"
                >
                  <u>Office:</u> Gala N-3, Jawle Compound, Near Sai Baba Trust,
                  M.G. Road, Andheri (E), Mumbai-400093. <br /> <br />
                </Link>
                <Link
                  className="hover:text-orange-500 focus:text-orange-500"
                  href={"https://maps.app.goo.gl/VmYxdx3BD3choef88"}
                  target="_blank"
                >
                  <u>Works:</u> Unit No. 1, Gala No. 12, Bldg No. 2, Rajprabha
                  Udyog Nagar Ext. 1, Golani Naka, Vasai (E), Palghar-401208
                </Link>

                <div className="flex items-center justify-center mt-5">
                  <div className=" h-10 w-10 rounded-full flex items-center justify-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="#FF5722"
                      viewBox="0 0 479.058 479.058"
                    >
                      <path
                        d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                        data-original="#000000"
                      />
                    </svg>
                  </div>
                  <a
                    href="javascript:void(0)"
                    className="text-orange-500 text-md "
                  >
                    <strong className="text-white">
                      info@akengineersplastic.in
                    </strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-slate-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-white font-semibold py-1">
              © <span className="text-orange-500">AK</span> Engineers.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
