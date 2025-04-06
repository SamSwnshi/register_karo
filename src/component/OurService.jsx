import React from "react";
import company from "../assets/Company.png";
import secretarial from "../assets/secretarial.png";
import virtual from "../assets/virtual.png";
import annual from "../assets/annual.png";
import gst from "../assets/gst.png";
import payroll from "../assets/payroll.png";
import bookkeeping from "../assets/bookkeeping.png";
import live from "../assets/live.png";

const OurService = () => {
  const data = [
    {
      name: "Company Formation",
      img: company,
    },
    {
      name: "Company Secretarial Services",
      img: secretarial,
    },
    {
      name: "Virtual Office Address",
      img: virtual,
    },
    {
      name: "Annual Compliance Services",
      img: annual,
    },
    {
      name: "VAT Registration, Preparation & Filing",
      img: gst,
    },
    {
      name: "Payroll Services",
      img: payroll,
    },
    {
      name: "Bookkeeping Services",
      img: bookkeeping,
    },
    {
      name: "Live Online Webinars & Workshops",
      img: live,
    },
  ];

  return (
    <div className="bg-white px-6 md:px-20 py-16">

      <div className="text-center mb-12">
        <h1 className="text-[#FE9C28] font-bold text-3xl md:text-4xl">OUR SERVICES</h1>
      </div>


      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center">
        {data.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center gap-4">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white shadow-lg">
              <img src={item.img} alt={item.name} className="w-12 h-12 object-contain" />
            </div>
            <p className="text-sm md:text-base text-gray-800">{item.name}</p>
          </div>
        ))}
      </div>


      <hr className="w-1/2 mx-auto border-gray-300 my-12" />


      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-gray-700">
            Our Client Services Team is always happy to talk to you about what is best for
            your needs. <br className="hidden md:block" />
            Contact our team to find out if we are the right fit for you.
          </p>
        </div>
        <div className="text-center md:text-right">
          <p className="text-[#FE9C28] hover:text-orange-600 cursor-pointer font-medium">
            Explore our services
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurService;
