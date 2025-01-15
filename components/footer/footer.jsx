"use client";
import React from "react";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaIndustry,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" border-t-[1px] border-white py-10 bg-black">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
        {/* eddress, email and the map */}
        <div className="">
          <div className="flex flex-row justify-center ">
            <FaIndustry className="mr-2 mt-1" />
            <span>
              {" "}
              Unit No. 1, Gala No. 12, Bldg No. 2, <br /> Rajprabha Udyog Nagar
              Ext. 1,
              <br /> Golani Naka, Vasai (E), Palghar-401208
            </span>
          </div>
          <a
            href="mailto:info@akengineersplastic.in"
            className="flex items-center mt-2 hover:text-[#FFA500]"
          >
            <FaEnvelope className="mr-2 " />
            <span>info@akengineersplastic.in</span>
          </a>

          {/* phone */}
          {/* <div className="flex items-center mt-2">
            <FaPhoneAlt className="mr-2" />
            <span>+1 234 567 890</span>
          </div> */}

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4230.291095493794!2d72.85107896247833!3d19.16196276576265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7a93cb59cff%3A0x51db944f3e339549!2sA.K.%20Engineers!5e0!3m2!1sen!2sin!4v1726656935006!5m2!1sen!2sin"
            className=" mt-6 rounded-xl w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map showing A.K. Engineers"
          />
        </div>

        {/* Center Section: Logo */}
        <a href="/">
          <div className=" text-center">
            <img
              src="/assets/images/ak-logo.png"
              alt="AK-Logo"
              className="w-20"
            />
            <p>
              <span className="text-[#3A3E9A]">Eng</span>
              <span className="text-[#D6AE5A]">ineers</span>
            </p>
          </div>
        </a>

        {/* Right Section: Links */}
        <div className="flex flex-row gap-8  ">
          <div className="flex flex-col mb-5">
            <Link href="/about" className="text-white mb-2 hover:underline">
              About Us
            </Link>
            <Link href="/services" className="text-white mb-2 hover:underline">
              Services
            </Link>
            <Link href="/portfolio" className="text-white mb-2 hover:underline">
              Portfolio
            </Link>
            <Link href="/faqs" className="text-white hover:underline">
              FAQs
            </Link>
          </div>

          <div className="flex flex-col">
            <Link href="/sitemap" className="text-white mb-2 hover:underline">
              Sitemap
            </Link>
            <Link href="/terms" className="text-white mb-2 hover:underline">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="text-white mb-2 hover:underline">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-white hover:underline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-5 border-gray-300" />

      {/* Copyright and GST No */}
      <div className="flex justify-between max-w-6xl mx-auto">
        <div className="text-sm text-white">&copy; AK Engineers</div>
        <div className="text-sm text-white">GST No: 12AABCD3456E1Z7</div>
      </div>
    </footer>
  );
};

export default Footer;
