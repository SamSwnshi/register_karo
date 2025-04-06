import React from "react";
import youtube from "../assets/youtube.png";
import link from "../assets/linkdin.png";
import fb from "../assets/fb.png";
import insta from "../assets/iinsta.png";
import twitter from "../assets/twitter.png";

const Footer = () => {
  return (
    <div className="px-4 md:px-36 h-full flex flex-col bg-[#0D1321] text-white gap-10 tracking-wider">
      <div className="flex flex-col md:flex-row justify-between mt-10 gap-10 md:gap-0 text-center md:text-left items-center md:items-start">
        <div>
          <p className="text-[#FE9C28] font-bold mb-10">START A BUSINESS</p>
          <div className="flex flex-col gap-3 font-semibold">
            <p>Private Limited Company</p>
            <p>Limited Liability Partnership</p>
            <p>One Person Company</p>
            <p>Section 8 Company Registration</p>
            <p>Nidhi Company Registration</p>
            <p>Producer Company Registration</p>
            <p>MSME Registration</p>
          </div>
        </div>
        <div>
          <p className="text-[#FE9C28] font-bold mb-10">GOVERNMENT REGISTRATION</p>
          <div className="flex flex-col gap-3 font-semibold items-center md:items-start">
            <p>FSSAI Registration</p>
            <p>IEC Registration</p>
            <p>Trademark Registration</p>
            <p>DSC Registration</p>
          </div>
        </div>
        <div>
          <p className="text-[#FE9C28] font-bold mb-10">COMPLIANCE & TAX</p>
          <div className="flex flex-col gap-3 font-semibold items-center md:items-start">
            <p>Compliance Pvt Ltd</p>
            <p>Compliance LLP</p>
            <p>GST Registration</p>
          </div>
        </div>
        <div>
          <p className="text-[#FE9C28] font-bold mb-10 text-right md:text-left">BIS & CDSCO</p>
          <div className="flex flex-col gap-3 font-semibold items-end md:items-start">
            <p>BIS Certification</p>
            <p>BIS FMCS Certification</p>
            <p>BIS CRS Certification</p>
            <p>ISI Mark Certification</p>
            <p>CDSCO Registration</p>
            <p>Medical Device Registration</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="border border-[#FE9C28] w-48 font-semibold px-4 py-2 flex items-center justify-center">
          See all the Services
        </button>
      </div>

      <hr className="border-[#FE9C28]" />

      <div className="icons flex gap-10 justify-center">
        <img src={youtube} alt="" className="bg-[#FE9C28]" />
        <img src={link} alt="" className="bg-[#FE9C28]" />
        <img src={fb} alt="" className="bg-[#FE9C28]" />
        <img src={insta} alt="" className="bg-[#FE9C28]" />
        <img src={twitter} alt="" className="bg-[#FE9C28]" />
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <p className="text-[#FE9C28] font-semibold">Elevate Your Business with RegisterKaro</p>
          <p className="text-sm">
            As a leading technology-driven legal services and advisory firm, we empower SMEs and entrepreneurs on their business journey...
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[#FE9C28] font-semibold">Environmental Solutions</p>
          <p className="text-sm">
            RegisterKaro offers a comprehensive range of services to address environmental challenges in business...
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[#FE9C28] font-semibold">Navigating Regulatory Affairs</p>
          <p className="text-sm">
            In India, regulatory bodies like BIS, CDSCO, RBI, SEBI, and IRDAI hold the keys to licenses and registrations...
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[#FE9C28] font-semibold">Business Registration Expertise</p>
          <p className="text-sm">
            We are renowned for facilitating business registration, whether it's as a private limited company...
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[#FE9C28] font-semibold">Safeguarding Intellectual Property</p>
          <p className="text-sm">
            Intellectual property protection is vital for modern businesses. Our team excels in IP registration services...
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[#FE9C28] font-semibold">Simplifying Taxation</p>
          <p className="text-sm">
            RegisterKaro is your all-in-one solution for tax-related needs. Our dedicated professionals assist with...
          </p>
        </div>
      </div>

      <hr className="border-[#FE9C28]" />

      <div className="flex flex-col items-center justify-center gap-5 mb-8 font-semibold text-center">
        <p>
          By continuing this page, you agree to our <span className="text-[#FE9C28]">Terms & Conditions, Privacy Policy and Refund Policy.</span>
        </p>
        <p>© 2025 - Safe Ledger Private Limited. All rights reserved.</p>
        <p className="w-full max-w-4xl text-sm text-center">
          Please note that we are a facilitating platform enabling access to reliable professionals...
        </p>
      </div>
    </div>
  );
};

export default Footer;
