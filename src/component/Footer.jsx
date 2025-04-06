import React from "react";
import youtube from "../assets/youtube.png";

const Footer = () => {
  return (
    <div className="px-36 h-full flex flex-col bg-[#0D1321] text-white gap-10 tracking-wider ">
      <div className="flex justify-between mt-10 ">
        <div>
          <div>
            <p className="text-[#FE9C28] font-bold mb-10">START A BUSINESS</p>
          </div>
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
          <div>
            <p className="text-[#FE9C28] font-bold mb-10">
              GOVERNMENT REGISTRATION
            </p>
          </div>
          <div className="flex flex-col gap-3 font-semibold items-center">
            <p>FSSAI Registration</p>
            <p>IEC Registration</p>
            <p>Trademark Registration</p>
            <p>DSC Registration</p>
          </div>
        </div>
        <div>
          <div>
            <p className="text-[#FE9C28] font-bold mb-10">COMPLIANCE & TAX</p>
          </div>
          <div className="flex flex-col gap-3 font-semibold items-center">
            <p>Compliance Pvt Ltd</p>
            <p>Compliance LLP</p>
            <p>GST Registration</p>
          </div>
        </div>
        <div>
          <div className="flex justify-end">
            <p className="text-[#FE9C28]   font-bold mb-10">BIS & CDSCO</p>
          </div>
          <div className="flex flex-col gap-3 font-semibold  items-end">
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

      <hr className=" border-[#FE9C28] " />

      <div>
        <div className="icons flex gap-10">
          <img src={youtube} alt="" className="bg-[#FE9C28]" />
          <img src={youtube} alt="" className="bg-[#FE9C28]" />
          <img src={youtube} alt="" className="bg-[#FE9C28]" />
          <img src={youtube} alt="" className="bg-[#FE9C28]" />
          <img src={youtube} alt="" className="bg-[#FE9C28]" />
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <p className="text-[#FE9C28] font-semibold">Elevate Your Business with RegisterKaro</p>
          <p className="text-sm">
            As a leading technology-driven legal services and advisory firm, we
            empower SMEs and entrepreneurs on their business journey. Our expert
            team covers business registration, legal compliance, tax filing, IPR
            registration, and more. With over 200 professionals, we've served
            50,000+ satisfied customers, ensuring startup compliance with our
            country's legal and regulatory systems.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[#FE9C28] font-semibold">Environmental Solutions</p>
          <p className="text-sm">
            RegisterKaro offers a comprehensive range of services to address
            environmental challenges in business. Our seasoned environmental
            experts, with over a decade of experience, provide comprehensive
            solutions for environmental compliance and advisory, including
            battery waste management, plastic waste management, and e-waste
            management.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[#FE9C28] font-semibold">Navigating Regulatory Affairs</p>
          <p className="text-sm">
            In India, regulatory bodies like BIS, CDSCO, RBI, SEBI, and IRDAI
            hold the keys to licenses and registrations for banks, financial
            institutions, and insurance businesses. We simplify this process by
            connecting you with our legal professionals. We understand your
            needs, handle license or registration applications, liaise with
            authorities, and deliver the licenses you require.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[#FE9C28] font-semibold">Business Registration Expertise</p>
          <p className="text-sm">
            We are renowned for facilitating business registration, whether it's
            as a private limited company, one-person company, Section 8 company,
            LLP, public company, or Nidhi company. Our consultancy services
            extend from business setup from scratch to ongoing compliance.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[#FE9C28] font-semibold">Safeguarding Intellectual Property</p>
          <p className="text-sm">
            Intellectual property protection is vital for modern businesses. Our
            team excels in IP registration services such as trademark
            registration, handling objections, managing assignments, copyright
            registration, and patent registration.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[#FE9C28] font-semibold">Simplifying Taxation</p>
          <p className="text-sm">
            RegisterKaro is your all-in-one solution for tax-related needs. Our
            dedicated professionals assist with GST registration, professional
            tax registration, GST return filing, TDS return filing, income tax
            return filing, and secretarial audits. Your tax matters are in
            capable hands with RegisterKaro.
          </p>
        </div>
      </div>

      <hr className=" border-[#FE9C28] "/>

      <div className="flex flex-col items-center justify-center gap-5 mb-8 font-semibold">
        <p>
          By continuing this page, you agree to our <span className="text-[#FE9C28]">Terms & Conditions, Privacy
          Policy and Refund Policy.</span>
        </p>
        <p>© 2025 - Safe Ledger Private Limited. All rights reserved.</p>
        <p className="w-7xl text-sm text-center">
          Please note that we are a facilitating platform enabling access to
          reliable professionals. We are not a law firm and do not provide legal
          services ourselves. The information on this website is for the purpose
          of knowledge only and should not be relied upon as legal advice or
          opinion.
        </p>
      </div>
    </div>
  );
};

export default Footer;