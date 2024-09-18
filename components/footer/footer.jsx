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
              <div className="w-full md:w-1/2 h-52">
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
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-violet-600 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      className="text-white hover:text-violet-600 font-semibold block pb-2 text-sm"
                      href="/about"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <a
                      className="text-white hover:text-violet-600 font-semibold block pb-2 text-sm"
                      href="/services"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <Link
                      className="text-white hover:text-violet-600 font-semibold block pb-2 text-sm"
                      href="/portfolio"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-white hover:text-violet-600 font-semibold block pb-2 text-sm"
                      href="/"
                    >
                      Hello
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-violet-600 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      className="text-white hover:text-violet-600 font-semibold block pb-2 text-sm"
                      href="site-map"
                    >
                      Site Map
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-white hover:text-violet-600 font-semibold block pb-2 text-sm"
                      href="tnc"
                    >
                      Terms &amp; Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-white hover:text-violet-600 font-semibold block pb-2 text-sm"
                      href="/privacy"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-white hover:text-violet-600 font-semibold block pb-2 text-sm"
                      href="/contact-us"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className=" md:ml-64  mt-8 border-[0.5px] border-violet-600 p-5 rounded-xl">
                <div className="text-violet-600 font-semibold">
                  ADDRESS: <br />
                </div>
                <Link
                  className="hover:text-violet-600 focus:text-violet-600"
                  href={"https://maps.app.goo.gl/dpLaLGgHrcBzJ28f8"}
                  target="_blank"
                >
                  <u>Office:</u> Gala N-3, Jawle Compound, Near Sai Baba Trust,
                  M.G. Road, Andheri (E), Mumbai-400093. <br /> <br />
                </Link>
                <Link
                  className="hover:text-violet-600 focus:text-violet-600"
                  href={"https://maps.app.goo.gl/VmYxdx3BD3choef88"}
                  target="_blank"
                >
                  <u>Works:</u> Unit No. 1, Gala No. 12, Bldg No. 2, Rajprabha
                  Udyog Nagar Ext. 1, Golani Naka, Vasai (E), Palghar-401208
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-slate-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-white font-semibold py-1">
              © AK Engineers.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
