"use client";

import { useRef } from "react";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Testimonials } from "@/sections/Testimonials";

export default function Home() {
  const testimonialsRef = useRef<HTMLDivElement | null>(null);

  const scrollToTestimonials = () => {
    testimonialsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header onLatestNewsClick={scrollToTestimonials} />
      <Hero />
      
      {/* 👇 Latest News / Testimonials section */}
      <div ref={testimonialsRef}>
        <Testimonials />
      </div>

      <Footer />
    </>
  );
}
