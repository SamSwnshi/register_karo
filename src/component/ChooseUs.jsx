import React from "react";
import model from "../assets/why_model.png";
import download from "../assets/download.png";

const ChooseUs = () => {
  return (
    <div className="px-34 h-screen bg-blue-100 flex ">
      <div className="flex w-full items-center justify-between border">
        <div>
          <div>
            <img src={model} alt="" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div>
            <h1>WHY CHOOSE US</h1>
            <p>
              Our All-In-One Platform And Team Of Experts will help direct you
              in the right path
            </p>
            <p>
              And ensure that your business starts the right way in record time.
            </p>
          </div>
          <div className=" flex justify-between gap-4">
            <div className="flex flex-col gap-5">
              <div className="bg-white px-8   py-2 w-full rounded flex gap-4 justify-start">
                <img src={download} alt="arrow" className="ml-6" />
                <p>Affordable</p>
              </div>
              <div className="bg-white px-8  py-2 w-full rounded flex gap-4 justify-start">
                <img src={download} alt="arrow" className="ml-6" />
                <p>Simplified Process</p>
              </div>
              <div className="bg-white px-8  py-2 w-full rounded flex gap-4 justify-start">
                <img src={download} alt="arrow" className="ml-6" />
                <p>Instant Response</p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="bg-white px-8 py-2 w-full rounded flex gap-4 justify-start">
                <img src={download} alt="arrow" className="ml-6" />
                <p>Compliance Ensured</p>
              </div>
              <div className="bg-white px-8  py-2 w-full rounded flex gap-4 justify-start">
                <img src={download} alt="arrow" className="ml-6" />
                <p>On-time Service</p>
              </div>
              <div className="bg-white px-8  py-2 w-full rounded flex gap-4 justify-start">
                <img src={download} alt="arrow" className="ml-6" />
                <p>Industry Experts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
