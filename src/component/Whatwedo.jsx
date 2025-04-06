import React from "react";
import MainImg from "../assets/img1.jpeg";
import collage1 from "../assets/img2.jpeg";
import collage2 from "../assets/img3.jpeg";

const Whatwedo = () => {
  return (
    <div className="px-6 lg:px-28 py-20 bg-[#F0F4FF] flex flex-col lg:flex-row items-center justify-between gap-10">
      {/* LEFT TEXT CONTENT */}
      <div className="lg:w-1/2 space-y-6">
        <p className="text-sm tracking-wide text-gray-500 font-semibold">WHAT WE DO</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-snug">
          Receive support at every stage of business development.
        </h2>
        <p className="text-gray-600 text-base">
          Launch, grow and scale with ease. Each of our clients has a dedicated
          team that is committed to answering all queries within 24 hours, so
          you can rely on our helpful and professional support throughout your
          business journey.
        </p>
        <div className="flex gap-4 pt-4">
          <button className="bg-orange-400 text-white font-medium px-6 py-3 rounded-full hover:bg-orange-500 transition">
            Popular Services
          </button>
          <button className="bg-white border border-gray-300 text-gray-800 font-medium px-6 py-3 rounded-full hover:shadow-md transition flex items-center gap-2">
            Get Started <span className="text-xl">→</span>
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE COLLAGE */}
      <div className="relative lg:w-1/2 flex justify-center">
        {/* Decorative Dot Background (optional, use bg image or a component here) */}
        <div className="absolute top-0 left-10 w-32 h-32 bg-[radial-gradient(circle,_#000_1px,_transparent_1px)] bg-[length:10px_10px] opacity-10 rounded-full z-0" />

        {/* Images */}
        <div className="flex gap-6 items-center z-10">
          <div className="flex flex-col gap-6">
            <img src={collage1} alt="collage1" className="w-40 h-40 object-cover rounded-lg shadow-md" />
            <img src={collage2} alt="collage2" className="w-40 h-40 object-cover rounded-lg shadow-md" />
          </div>
          <div>
            <img src={MainImg} alt="main" className="w-52 h-72 object-cover rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whatwedo;
