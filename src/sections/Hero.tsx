"use client";

import Spline from "@splinetool/react-spline/next";
import ArrowIcon from "@/assets/arrow-right.svg";
import { motion } from "framer-motion";
import { useRef } from "react";
import { ProductShowcase } from "@/sections/ProductShowcase";

export const Hero = () => {
  const showcaseRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToShowcase = () => {
    if (showcaseRef.current) {
      showcaseRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        className="min-h-screen pt-10 pb-16 md:pt-20 md:pb-28 
        bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#7A9E7E,#E3E1D9_100%)] 
        overflow-x-clip flex items-center"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-x-16">
            {/* Left Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter 
                bg-gradient-to-b from-[#013220] via-[#1B5E20] to-[#66BB6A] 
                text-transparent bg-clip-text mt-4 sm:mt-6"
                animate={{ translateX: [-30, 30] }}
                transition={{ repeat: Infinity, repeatType: "mirror", duration: 3, ease: "easeInOut" }}
              >
                EcoVisit
              </motion.h1>

              <p className="text-lg sm:text-2xl md:text-3xl text-[#2E7D32] tracking-tight mt-4 sm:mt-6">
                Stay informed and take control of your environment with EcoVisit—monitor air quality, compare pollution levels, and predict future trends for a healthier tomorrow.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 items-center justify-center md:justify-start mt-8">
                <button
                  className="btn btn-primary px-6 py-3 text-base sm:text-lg flex items-center gap-2"
                  onClick={handleScrollToShowcase}
                >
                  Get Started <ArrowIcon className="h-5 w-5" />
                </button>

                <button className="btn btn-text flex items-center gap-2 text-base sm:text-lg">
                  {/* Secondary action (optional) */}
                </button>
              </div>
            </div>

            {/* Right - 3D Model */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]">
                <Spline scene="https://prod.spline.design/AMwKB0p2IZGP2BXB/scene.splinecode" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⬇️ Target Section to Scroll To */}
      <div ref={showcaseRef}>
        <ProductShowcase />
      </div>
    </>
  );
};
