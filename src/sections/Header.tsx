"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Import assets
import Logo from "@/assets/LOGO.jpg";
import MenuIcon from "@/assets/menu.svg";

type HeaderProps = {
  onLatestNewsClick: () => void;
};

export const Header = ({ onLatestNewsClick }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20 text-xl">
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Image src={Logo} alt="SaaS Logo" height={40} width={40} />

            {/* Mobile menu toggle */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-black"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
</button>


            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-12 text-black/60 items-center">
              <Link href="#">Home</Link>
              <Link href="Comparison.html">Comparison</Link>
              <Link href="WorldMap.html">Map</Link>
              <Link href="Prediction.html">Predict</Link>
              <button onClick={onLatestNewsClick} className="hover:text-black">
                Latest News
              </button>
            </nav>
          </div>

          {/* Mobile Nav */}
          {menuOpen && (
            <nav className="flex flex-col mt-4 gap-4 md:hidden text-black/60">
              <Link href="#">Home</Link>
              <Link href="Comparison.html">Comparison</Link>
              <Link href="WorldMap.html">Map</Link>
              <Link href="Prediction.html">Predict</Link>
              <button onClick={onLatestNewsClick} className="text-left">
                Latest News
              </button>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};
