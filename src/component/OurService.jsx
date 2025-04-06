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
      name: "VAT Registration,Preparation & Filing",
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
    <div className="px-34 h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div>
          <h1 className="text-[#FE9C28] font-semibold text-4xl mb-10">
            OUR SERVICES
          </h1>
        </div>
        <div>
          <div className="grid grid-cols-4 h-full gap-20">
            {data.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-6 ">
                <div className="w-24 shadow-2xl rounded-md">
                  <img src={item.img} alt="" />
                </div>
                <div >
                  <p className="" >
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr className="w-1/2 border-gray-300 my-4 mt-8" />
        <div className="w-full h-13 flex justify-between mt-8 ">
          <div className="gap-1 flex flex-col">
            <p>
              Our Client Services Team is always happy to talk to you about what
              is best for
            </p>
            <p>your needs. Contact our team to find out if we are the
            right fit for you.</p>
          </div>
          <div className="flex items-end">
            <p className="text-[#FE9C28] hover:text-orange-600 cursor-pointer">Explore our services </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
