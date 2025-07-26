"use client";
import React from "react";
import Link from "next/link";
import {
  FaIndustry,
  FaEnvelope,
  FaApple,
  FaAndroid,
  FaGoogle,
  FaFacebook,
} from "react-icons/fa";

import Marquee from "react-fast-marquee";

const Footer = () => {
  return (
    <footer className=" w-full border-t-[1px] border-white py-10 bg-black ">
      <div className="px-32 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section: Address and Email */}
          <div className="flex flex-col items-center md:items-start">
            {/* Address*/}
            <div className="flex flex-col md:flex-row items-center md:items-start mb-5">
              <FaIndustry className="text-white text-md mr-3 mb-2 md:mb-0 mt-1" />
              <span className="text-center md:text-left text-white">
                Unit No. 1, Gala No. 12, Bldg No. 2, <br />
                Rajprabha Udyog Nagar Ext. 1, <br />
                Golani Naka, Vasai (E), Palghar-401208
              </span>
            </div>

            {/* Email*/}
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <FaEnvelope className="text-white text-md mr-3 mb-2 md:mb-0 mt-1" />
              <a
                href="mailto:info@akengineersplastic.in"
                className="hover:text-[#FFA500] text-white"
              >
                info@akengineersplastic.in
              </a>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4230.291095493794!2d72.85107896247833!3d19.16196276576265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7a93cb59cff%3A0x51db944f3e339549!2sA.K.%20Engineers!5e0!3m2!1sen!2sin!4v1726656935006!5m2!1sen!2sin&output=embed"
              className="mt-6 rounded-xl w-3/4 h-[120px] md:h-[125px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map showing A.K. Engineers"
            />
          </div>

          {/* Center Section: Logo */}
          <a href="/" className="my-5 md:my-0">
            <div className="text-center">
              <img
                src="/assets/images/ak-logo.png"
                alt="AK-Logo"
                className="w-20 mx-auto"
              />
              <p>
                <span className="text-[#3A3E9A]">Eng</span>
                <span className="text-[#D6AE5A]">ineers</span>
              </p>
            </div>
          </a>

          {/* Right Section: Links */}
          <div className="top-0 w-full md:w-1/5 ">
            {/* marquee*/}
            {/* <div>Our Clients:</div> */}
            {/* <Marquee className="" autoFill="true">
              <FaApple className="ml-4 text-white text-3xl" />
              <FaAndroid className="ml-4 text-white text-3xl" />
              <FaGoogle className="ml-4 text-white text-3xl" />
              <FaFacebook className="ml-4 text-white text-3xl" />
              <FaAndroid className="ml-4 text-white text-3xl" />
              <FaGoogle className="ml-4 text-white text-3xl" />
              <FaFacebook className="ml-4 text-white text-3xl" />
            </Marquee> */}

            <div className="flex flex-row justify-center gap-8 md:gap-16 mt-6">
              <div className="flex flex-col mb-5 text-left">
                <Link href="/about" className="text-white mb-2 hover:underline">
                  About Us
                </Link>
                <Link
                  href="/services"
                  className="text-white mb-2 hover:underline"
                >
                  Services
                </Link>
                <Link
                  href="/portfolio"
                  className="text-white mb-2 hover:underline"
                >
                  Portfolio
                </Link>
                <Link href="/faq" className="text-white hover:underline">
                  FAQs
                </Link>
              </div>

              <div className="flex flex-col text-left">
                <Link
                  href="/sitemap"
                  className="text-white mb-2 hover:underline"
                >
                  Sitemap
                </Link>
                <Link href="/terms" className="text-white mb-2 hover:underline">
                  T&C
                </Link>
                <Link
                  href="/privacy"
                  className="text-white mb-2 hover:underline"
                >
                  Privacy Policy
                </Link>
                <Link href="/contact-us" className="text-white hover:underline">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divi line*/}
        <hr className="my-5 border-gray-300" />

        {/* Copyright and GST */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-white text-center md:text-left">
            &copy; AK Engineers. All rights reserved
          </div>
          <div className="text-sm text-white text-center md:text-right">
            GST No: 27BCXPS8915E1ZT
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
