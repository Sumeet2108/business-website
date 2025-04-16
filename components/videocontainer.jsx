"use client";
import { useEffect, useState } from "react";

const HeroVideo = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showVideo && (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/assets/vids/homepage_vid.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      )}
    </>
  );
};

export default HeroVideo;
