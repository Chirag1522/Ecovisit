"use client";

import productImage from "@/assets/AQIadvisoryChart.png";
import pyramidImage from "@/assets/cloudbg.png";
import tubeImage from "@/assets/dustbg.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section 
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#C8D8C6] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading">
          
          <h3 className="section-title  text-5xl md:text-5xl ">
          Importance of Air Quality
          </h3>
          <p className="section-description mt-6 text-lg">
          Air pollution can harm anyone, but it can be especially dangerous for many people, including children and teens, people with asthma and other lung diseases, anyone over 65, people who have diabetes or cardiovascular disease or who are pregnant. Even healthy adults who exercise or work outdoors can be harmed. Being aware of when the air quality is bad gives you the chance to take steps to protect your health.
          </p>
          <div className="section -description text-center text-4xl md:text-4xl font-bold tracking-tighter bg-gradient-to-b from-[#013220] via-[#1B5E20] to-[#66BB6A] text-transparent bg-clip-text mt-6 ">
            <h2>AQI Advisory Chart</h2>
          </div>

        </div>
        <div className="relative">
          <Image src={productImage} alt="product Image" className="mt-10" />
          <motion.img
            src={pyramidImage.src}
            alt="pyramid Image"
            width={300}
            height={300}
            className="hidden md:block absolute -right-52 -top-36"
            style={{
              translateY
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="tube Image"
            width={300}
            height={300}
            className="hidden md:block absolute bottom-32 -left-56"
            style={{
              translateY
            }}
          />
        </div>
      </div>
    </section>
  );
};
