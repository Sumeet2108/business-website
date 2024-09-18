"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  {
    src: "/assets/images/machine1.jpg",
    alt: "Image 1",
    text: "Project 1",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    src: "/assets/images/machine2.jpg",
    alt: "Image 2",
    text: "Project 2",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    src: "/assets/images/overmolding.png",
    alt: "Image 3",
    text: "Project 3",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let intervalId;
    if (autoplay) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000); // Change image every 4 seconds
    }

    return () => clearInterval(intervalId);
  }, [autoplay]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setAutoplay(true); // Reset autoplay on manual change
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    setAutoplay(true); // Reset autoplay on manual change
  };

  return (
    <div className="relative w-full h-[550px] overflow-hidden">
      <div className="absolute inset-0 transition-opacity duration-500">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className=""
            />
            {index === currentIndex && (
              <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 text-white text-center">
                <h2 className="text-4xl font-bold">{image.text}</h2>
                <p className="mt-2 text-lg">{image.paragraph}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={prevImage}
        className="absolute left-0 top-0 h-full w-28 bg-transparent text-white text-4xl flex items-center justify-center"
      >
        &#10094; {/* Left Arrow */}
      </button>

      <button
        onClick={nextImage}
        className="absolute right-0 top-0 h-full w-28 bg-transparent text-white text-4xl flex items-center justify-center"
      >
        &#10095; {/* Right Arrow */}
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
