import logo from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container mx-auto px-4">

        {/* About Us Section */}
        <div className="max-w-3xl mx-auto mb-10">
          <h2 className="text-white text-2xl font-semibold mb-4">About Us</h2>
          <p className="text-[#BCBCBC] leading-relaxed">
            Team Ecovisit is on a mission to make environmental data accessible, engaging, and insightful. 
            We harness the power of real-time AQI analytics and predictive tools to help users make informed 
            decisions for a healthier tomorrow. Our platform combines clean design with cutting-edge tech to 
            ensure everyone, everywhere can track the air they breathe.
          </p>
        </div>

        {/* Logo */}
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#f87bff,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={logo} height={40} alt="SaaS logo" className="relative" />
        </div>

        {/* Navigation */}
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <Link href="">Home</Link>
          <Link href="Comparison.html">Comparison</Link>
          <Link href="WorldMap.html">Map</Link>
          <Link href="Prediction.html">Prediction</Link>
        </nav>

        

        {/* Copyright */}
        <p className="mt-6">
          &copy; 2025 Team Ecovisit, Inc. All rights reserved.
          <br />
          <Link className="hover:text-white transition-all" href="">
            Made with ❤️ by Team Ecovisit
          </Link>
        </p>
      </div>
    </footer>
  );
};
