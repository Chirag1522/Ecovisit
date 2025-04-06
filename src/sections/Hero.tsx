"use client";
import Spline from '@splinetool/react-spline/next';
import ArrowIcon from "@/assets/arrow-right.svg";
import { motion } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);

  return (
    <section
      ref={heroRef}
      className="h-screen pt-8 pb-20 md:pt-5 md:pb-10 
      bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#7A9E7E,#E3E1D9_100%)] 
      overflow-x-clip"
    >
      <div className="container mx-auto px-4">
        <div className="md:flex items-center gap-x-16">
          {/* Left Content */}
          <div className="md:w-1/2">
            <div className="tag"></div>
            <motion.h1
              className="text-7xl md:text-9xl font-bold tracking-tighter bg-gradient-to-b from-[#013220] via-[#1B5E20] to-[#66BB6A] text-transparent bg-clip-text mt-6"
              animate={{ translateX: [-30, 30] }}
              transition={{ repeat: Infinity, repeatType: "mirror", duration: 3, ease: "easeInOut" }}
            >
              EcoVisit
            </motion.h1>

            <p className="text-3xl text-[#2E7D32] tracking-tight mt-6">
              "Stay informed and take control of your environment with EcoVisit—monitor air quality, compare pollution levels, and predict future trends for a healthier tomorrow."
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary"> Get Started</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Right - 3D Model */}
          <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
            <div className="w-[500px] h-[500px] md:w-[600px] md:h-[600px]">
              <Spline scene="https://prod.spline.design/AMwKB0p2IZGP2BXB/scene.splinecode" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
