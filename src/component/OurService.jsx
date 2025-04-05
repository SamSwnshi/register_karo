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
    <div className="h-screen ">
      <div className="flex flex-col items-center justify-center">
        <div>
          <h1>OUR SERVICES</h1>
        </div>
        <div>
          <div className="grid grid-cols-4">
            {data.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center border-2">
                <div className="w-24 border-2">
                  <img src={item.img} alt="" />
                </div>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <hr className="border w-1/2 border-gray-300 my-4"/>
        <div className="w-full flex justify-evenly">
          <div>
            <p>Our Client Services Team is always happy to talk to you about what is best for<br/> your needs. Contact our team to find out if we are the right fit for you.</p>
          </div>
            <div>
              <p>Explore our services </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
