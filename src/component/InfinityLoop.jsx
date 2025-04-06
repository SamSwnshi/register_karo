import React from "react";
import adobe from "../assets/adobe.png";
import amazon from "../assets/amazon.png";
import amd from "../assets/amd.png";
import dell from "../assets/dell.png";
import google from "../assets/google.png";
import hp from "../assets/hp.png";
import huawei from "../assets/huawei.png";
import lee from "../assets/lee.png";
import mc from "../assets/mc.png";
import stack from "../assets/stack.png";

const companies = [
  adobe,
  amazon,
  amd,
  dell,
  google,
  hp,
  huawei,
  lee,
  mc,
  stack,
];

const InfinityLoop = () => {
  return (
    <div className="bg-[#F0F4FF] py-20 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          We <span className="text-orange-500 font-bold">partner</span> with the best,<br />
          so that your business can flow <span className="text-orange-500 font-bold">seamlessly.</span>
        </h2>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Your Business needs numerous expertise and that's why we are providing
          you the best services with the best names in the field.
        </p>
      </div>

      {/* Row 1 - Scroll left */}
      <div className="overflow-hidden mb-8">
        <div className="flex w-max animate-scroll">
          {[...companies, ...companies].map((img, idx) => (
            <div
              key={idx}
              className="shadow-md w-20 h-20 m-3 bg-white rounded-lg flex items-center justify-center"
            >
              <img src={img} alt="logo" className="w-12 h-12 object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - Scroll left with delay */}
      <div className="overflow-hidden">
        <div
          className="flex w-max animate-scroll"
          style={{ animationDelay: "3s" }}
        >
          {[...companies, ...companies].map((img, idx) => (
            <div
              key={idx}
              className="shadow-md w-20 h-20 m-3 bg-white rounded-lg flex items-center justify-center"
            >
              <img src={img} alt="logo" className="w-12 h-12 object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* Custom animation using Tailwind + inline style */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default InfinityLoop;
