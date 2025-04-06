import React from "react";
import model from "../assets/why_model.png";
import download from "../assets/download.png";

const ChooseUs = () => {
  return (
    <div className="bg-blue-100 py-16 px-6 md:px-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side Image */}
        <div className="relative flex justify-center w-full md:w-1/2">
          <img src={model} alt="Expert" className="w-[300px] md:w-[350px]" />
          
          {/* Mobile Card */}
          <div className="absolute bottom-0 left-8 bg-white rounded-xl shadow-lg p-3 px-4 text-center text-sm">
            <p className="font-semibold">100+ Ratings</p>
            <p className="text-gray-500">Trusted by 20,000+ clients</p>
          </div>
        </div>

        {/* Right Side Text + Feature List */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-orange-500 font-bold text-2xl mb-4">WHY CHOOSE US</h1>
          <p className="text-gray-700 mb-1">
            Our All-In-One Platform And Team Of Experts will help direct you
            in the right path
          </p>
          <p className="text-gray-700 mb-6">
            And ensure that your business starts the right way in record time.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Affordable",
              "Compliance Ensured",
              "Simplified Process",
              "On-time Service",
              "Instant Response",
              "Industry Experts",
            ].map((text, index) => (
              <div
                key={index}
                className="bg-white py-2 px-4 rounded flex items-center gap-4 shadow-sm"
              >
                <img src={download} alt="check" className="w-5 h-5" />
                <p className="text-gray-800 text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
