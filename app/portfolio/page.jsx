"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Image from "next/image";

// ProjectCard component
const ProjectCard = ({ project, index, controls }) => {
  const isEven = index % 2 === 0;

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hidden: {
      opacity: 0,
      y: 50,
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={variants}
      className={`flex flex-col lg:flex-row gap-8 xl:gap-12 border-b-[3px] pb-16 border-orange-600/30 mb-16 ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      <div className="w-full lg:w-1/2 h-full">
        <Parallax speed={8}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="overflow-hidden rounded-3xl shadow-2xl border-[1px] border-orange-600/50 h-full"
          >
            <Image
              height={800}
              width={800}
              className="w-full h-full max-h-[400px] object-cover hover:scale-105 transition-transform duration-500"
              src={project.image}
              alt={project.title}
              loading="lazy"
            />
          </motion.div>
        </Parallax>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <motion.h2
          className="text-gray-900 text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6"
          whileInView={{ x: 0 }}
          initial={{ x: isEven ? -50 : 50 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-orange-600 bg-clip-text ">{project.title}</span>
        </motion.h2>

        <motion.div
          className="text-gray-700 space-y-4 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {project.content}
        </motion.div>
      </div>
    </motion.div>
  );
};

// Main component
const CompletedProjects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const projects = [
    {
      title: "Enclosure Box – Two-Part Moulded for Perfect Fit",
      image: "/assets/images/box-combined.jpg",
      content: (
        <p className="font-medium text-base sm:text-lg mb-4">
          This enclosure required precise two-part moulding with seamless
          alignment and durability. We supported the full design and development
          process, applying Design for Manufacturing (DFM) principles to ensure
          optimal moldability and proper fit of mating parts. The result: a
          robust, easy-to-assemble enclosure ideal for protecting internal
          components in various applications.
        </p>
      ),
    },
    {
      title: "Glass Break Device – Safe & Effective Insert Moulding",
      image: "/assets/images/glassbreakercombo.jpg",
      content: (
        <p className="font-medium text-base sm:text-lg mb-4">
          For this critical emergency-use product, we provided support from
          ideation to final production. Through expert insert moulding, we
          ensured the product performs effectively during emergencies while
          eliminating risks caused by loose fits. Designed for both performance
          and user safety, this solution combines functionality with a sleek,
          purpose-driven design.
        </p>
      ),
    },
    {
      title: "Holder – Precision Injection Moulding for Functional Support",
      image: "/assets/images/holder.jpg",
      content: (
        <p className="font-medium text-base sm:text-lg mb-4">
          We partnered with the client to deliver a high-quality holder using
          cost-effective and safe plastic materials. From material selection to
          mould refinement, we ensured the product met strict functional and
          production requirements. Our injection moulding expertise allowed for
          consistent, scalable manufacturing—delivering a durable, reliable, and
          user-safe solution.
        </p>
      ),
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-400/10 via-white to-white px-5 md:px-16 flex flex-col mt-4 md:mt-16 h-full w-full gap-16">
      <div className="pt-20 lg:pt-16 pb-12 lg:pb-12 h-full">
        <motion.div
          className="p-5 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
            <motion.span
              className="font-semibold text-lg text-orange-600 mb-2 block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Portfolio
            </motion.span>
            <motion.h2
              className="font-bold  text-orange-600 text-4xl md:text-[40px] mb-1 md:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Projects
            </motion.h2>
            <motion.div
              className="h-1  w-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            />
          </div>
        </motion.div>

        <div ref={ref}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              controls={controls}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Wrapper component with ParallaxProvider
const CompletedProjectsWrapper = () => {
  return (
    <ParallaxProvider>
      <CompletedProjects />
    </ParallaxProvider>
  );
};

export default CompletedProjectsWrapper;
