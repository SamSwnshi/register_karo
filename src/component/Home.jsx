import React from "react";
import heroImg from "../assets/hero_model.webp"

const Home = () => {
  return (
    <div className="px-28 border-b-1 h-[600px] ">
      <div className="flex items-center justify-between">
        <div>
          <p>We take care of ALL your business compliance needs</p>
          <h1>
            <span>Register</span>
            <span>Karo</span>
          </h1>
          <p>
            An online business compliance platform that helps entrepreneurs and{" "}
            <br />
            other individuals with various, registrations, tax filings, and
            other legal matters.
          </p>
          <button>Get Started</button>
        </div>
        <div>
          <img src={heroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
