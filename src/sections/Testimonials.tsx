"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

import Image from "next/image";
import { motion } from "framer-motion";

const fetchAQINews = async () => {
  const apiKey = "b450280909ab46ae8654c7695a10e189";  // Replace with your actual API key
  const url = `https://newsapi.org/v2/everything?q="air quality" AND "India"&language=en&sortBy=publishedAt&apiKey=${apiKey}`;
  const response = await axios.get(url);
  return response.data.articles;
};

const TestimonialsColumn = (props: { className?: string; testimonials: any[]; duration?: number }) => (
  <div className={props.className}>
    <motion.div
      animate={{ translateY: "-50%" }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-6 pb-6"
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonials.map(({ title, source, author, description, url, urlToImage }) => (
            <div className="card" key={title}>
              {/* Image from the article */}
              {urlToImage && (
                <Image
                  src={urlToImage}
                  alt={title}
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              )}
              <div>{description || "No description available"}</div>

              {/* Source info */}
              <div className="flex items-center gap-2 mt-5">
                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-5">{source?.name}</div>
                  <div className="leading-5 tracking-tight">By {author || "Unknown"}</div>
                </div>
              </div>

              <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2">
                Read More
              </a>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);


export const Testimonials = () => {
  const [newsData, setNewsData] = useState<any[]>([]);

  useEffect(() => {
    const loadNews = async () => {
      const newsArticles = await fetchAQINews();
      setNewsData(newsArticles);
    };
    loadNews();
  }, []);

  // Split the data into 3 columns for displaying
  const firstColumn = newsData.slice(0, 3);
  const secondColumn = newsData.slice(3, 6);
  const thirdColumn = newsData.slice(6, 9);

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
