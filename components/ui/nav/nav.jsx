"use client";
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-lg  w-full z-20 fixed top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link href="/" className=" flex flex-col items-center justify-center">
            <motion.span
              className=" text-2xl  font-extrabold text-black -mb-2"
              initial={{ rotateY: 0 }}
              whileHover={{ rotateY: 360 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              AK
            </motion.span>

            <div className="text-xs mt-0 text-black">Engineers</div>
          </Link>

          <div className="hidden md:flex items-center space-x-6 ">
            <NavItem
              title="Services"
              items={[
                "Mass production",
                "Mould trail",
                "Design consultancy",
                "Mould Manufacturing",
              ]}
              href="/services"
            />
            <NavItem
              title="Portfolio"
              items={["A Project", "B Project"]}
              href="/portfolio"
            />
            <NavItem title="About Us" href="/about" />
            <NavItem title="Contact Us" href="/contactus" />
          </div>

          {/* Mobile menu button here*/}
          <div className="flex md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <motion.div
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={{
                  closed: { rotate: 0 },
                  open: { rotate: 45 },
                }}
                className="relative w-6 h-6"
              >
                <motion.span
                  className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-700"
                  variants={{
                    closed: { rotate: 0, y: -8 },
                    open: { rotate: 90, y: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                />

                <motion.span
                  className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-700"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                />

                <motion.span
                  className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-700"
                  variants={{
                    closed: { rotate: 0, y: 8 },
                    open: { rotate: 0, y: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu is here*/}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 md:hidden"
          >
            <div className="px-2 pt-4 pb-3 space-y-1 sm:px-3">
              <MobileNavItem title="Services" />
              <MobileNavItem title="Portfolio" />
              <MobileNavItem title="About Us" />
              <MobileNavItem title="Contact Us" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavItem = ({ title, items, href }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={href || "#"}
        className={`text-gray-700 px-3 py-2 rounded-md text-sm font-medium ${
          title === "Contact Us"
            ? "hover:bg-[#7020be] hover:text-white"
            : "hover:bg-black hover:text-white"
        }`}
      >
        {title}
      </Link>
      <AnimatePresence>
        {isHovered && items && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-5 w-48 bg-white shadow-lg ring-1 ring-black ring-opacity-5"
          >
            {" "}
            <DropdownMenu items={items} />{" "}
          </motion.div>
        )}{" "}
      </AnimatePresence>{" "}
    </div>
  );
};

const DropdownMenu = ({ items }) => (
  <div className="py-1">
    {" "}
    {items.map((item, index) => (
      <Link
        key={index}
        href="#"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
      >
        {" "}
        {item}{" "}
      </Link>
    ))}{" "}
  </div>
);
const MobileNavItem = ({ title }) => (
  <Link
    href="#"
    className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
  >
    {" "}
    {title}{" "}
  </Link>
);
export default Navbar;
