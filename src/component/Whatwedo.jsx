import React from "react";
import MainImg from "../assets/img1.jpeg"
import collage1 from "../assets/img2.jpeg"
import collage2 from "../assets/img3.jpeg"

const Whatwedo = () => {
  return (
    <div className="px-28 bg-[#F0F4FF]  flex items-center justify-center h-screen">
      <div className="w-1/2">
        <p>WHAT WE DO</p>
        <p>Receive support at every stage of business development.</p>
        <p>
          Launch, grow and scale with ease. Each of our clients has a dedicated
          team that is committed to answering all queries within 24 hours, so
          you can rely on our helpful and professional support throughout your
          business journey.
        </p>
        <div>
          <button>Popular Services</button>
          <button>Get Started</button>
        </div>
      </div>
      <div className="flex w-1/2 gap-5">
        <div className="flex flex-col gap-5">
          <img src={collage1} alt="" />
          <img src={collage2} alt="" />
        </div>
        <div>
          <img src={MainImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Whatwedo;
