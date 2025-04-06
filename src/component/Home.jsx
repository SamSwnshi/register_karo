import React from "react";
import heroImg from "../assets/hero_model.webp";

const Home = () => {
  return (
    <div className="px-6 md:px-28 py-16 bg-white relative overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6">
          <p className="text-lg font-medium text-gray-700">
            We take care of ALL your business compliance needs
          </p>
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-[#1A365D]">Register</span>
            <span className="text-[#FE9C28]">Karo</span>
          </h1>
          <p className="text-gray-600">
            An online business compliance platform that helps entrepreneurs and
            other individuals with various, registrations, tax filings, and
            other legal matters.
          </p>
          <button className="bg-[#FE9C28] text-white font-semibold px-6 py-2 rounded-md w-fit hover:bg-[#f89210] transition">
            Get Started
          </button>
        </div>

        {/* Hero Image with Stats */}
        <div className="relative mt-10 md:mt-0 md:w-1/2 flex justify-end items-end">
          {/* Orange Polygon Background */}
          <div className="absolute -z-10 top-0 right-0 w-[300px] h-[420px] bg-[#FE9C28] rounded-bl-[90px] rotate-[0deg]"></div>

          {/* Dotted pattern (top right) */}
          <div className="absolute top-0 right-24 w-20 h-20 grid grid-cols-4 gap-1 opacity-60">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-[#1A365D] rounded-full" />
            ))}
          </div>

          {/* Hero Image */}
          <img src={heroImg} alt="Hero" className="w-[300px] h-auto z-10" />

          {/* Stats Cards */}
          <div className="absolute top-10 right-[160px] bg-white shadow-lg rounded-lg p-4 w-36 text-center">
            <p className="text-2xl font-bold">500+</p>
            <p className="text-xs text-gray-500 mt-1">Businesses Incorporated Every Month</p>
          </div>

          <div className="absolute bottom-20 right-44 bg-white shadow-lg rounded-lg p-4 w-36 text-center">
            <p className="text-2xl font-bold">20,000+</p>
            <p className="text-xs text-gray-500 mt-1">Clients all over India</p>
          </div>

          <div className="absolute bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 w-36 text-center">
            <p className="text-2xl font-bold">250+</p>
            <p className="text-xs text-gray-500 mt-1">Professionals Network</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
