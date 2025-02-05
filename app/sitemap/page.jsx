"use client";
import React from "react";
import Link from "next/link";

const Sitemap = () => {
  return (
    <div className="container mx-auto px-6 py-12 bg-[#0A0A0A] text-white mt-16">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-[#FFA500]">
        Sitemap
      </h1>
      <p className="text-center text-lg mb-12">
        Explore the structure of our website by browsing through the pages
        listed below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Main Pages Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#FFA500]">Main Pages</h2>
          <ul className="list-none space-y-3 text-lg">
            <li>
              <Link href="/" className=" hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className=" hover:underline">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/about" className=" hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className=" hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/services" className=" hover:underline">
                Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#FFA500]">Services</h2>
          <ul className="list-none space-y-3 text-lg">
            <li>
              <Link href="/services/mould-trail" className=" hover:underline">
                Mould Trail
              </Link>
            </li>
            <li>
              <Link
                href="/services/mass-production"
                className=" hover:underline"
              >
                Mass Production
              </Link>
            </li>
            <li>
              <Link
                href="/services/custom-product-development"
                className=" hover:underline"
              >
                Custom Product Development
              </Link>
            </li>
            <li>
              <Link
                href="/services/mould-manufacturing"
                className=" hover:underline"
              >
                Mould Manufacturing
              </Link>
            </li>
          </ul>
        </div>

        {/* Footer Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#FFA500]">
            Additional Links
          </h2>
          <ul className="list-none space-y-3 text-lg">
            <li>
              <Link href="/terms" className=" hover:underline">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className=" hover:underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} AK Engineers. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Sitemap;
