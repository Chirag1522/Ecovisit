"use client";

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import React from "react";

const testimonials = [
  {
    text: "Delhi's AQI Hits 'Severe' Levels Amidst Rising Vehicle Emissions and Crop Burning",
    imageSrc: avatar1.src,
    name: "Hindustan Times",
    username: "@ht_news",
  },
  {
    text: "Mumbai Maintains 'Moderate' AQI as Sea Breeze Helps Disperse Pollutants",
    imageSrc: avatar2.src,
    name: "The Indian Express",
    username: "@indianexpress",
  },
  {
    text: "Bangalore's Green Cover Plays Key Role in Keeping AQI Below 100, Study Finds",
    imageSrc: avatar3.src,
    name: "Times of India",
    username: "@timesofindia",
  },
  {
    text: "Ahmedabad Records Worst Air Quality of the Year Due to Construction Dust",
    imageSrc: avatar4.src,
    name: "NDTV India",
    username: "@ndtv",
  },
  {
    text: "Chennai's AQI Improves After Rain Showers Clear Out Pollutants",
    imageSrc: avatar5.src,
    name: "The Hindu",
    username: "@the_hindu",
  },
  {
    text: "Kanpur Among Top 3 Most Polluted Cities in India, Says CPCB Report",
    imageSrc: avatar6.src,
    name: "India Today",
    username: "@indiatoday",
  },
  {
    text: "Hyderabad Sees Spike in AQI Due to Festival Fireworks, Authorities Urge Caution",
    imageSrc: avatar7.src,
    name: "Scroll.in",
    username: "@scroll_in",
  },
  {
    text: "Air Pollution Worsening in Northern India, Experts Urge Public to Wear Masks",
    imageSrc: avatar8.src,
    name: "BBC India",
    username: "@bbcnewsindia",
  },
  {
    text: "Lucknow Launches Air Quality Monitoring Campaign in Schools and Colleges",
    imageSrc: avatar9.src,
    name: "LiveMint",
    username: "@livemint",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number
}) => (
  <div className={props.className}>
    <motion.div
      animate={{ 
        translateY: "-50%"
      }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-6 pb-6"
    >
      {/* React Fragment  */}
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonials.map(({ text, imageSrc, name, username }) => (
            <div className="card" key={text}>
              <div>{text}</div>
              <div className="flex items-center gap-2 mt-5">
                <Image
                  src={imageSrc}
                  alt={name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-5">
                    {name}
                  </div>
                  <div className="leading-5 tracking-tight">{username}</div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
          <div className="text-2xl font-extrabold tracking-wide text-gray-800 uppercase border-b-2 border-black inline-block">
  Latest News
</div>

          </div>
          <h2 className="section-title mt-5 mb-5 text-3xl font-bold tracking-tight text-gray-900">
  Real-Time Air Quality Headlines
</h2>

          <p className="section-description">
          From credible sources to real-time coverage, our AQI news section keeps users informed about air quality across India.
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
