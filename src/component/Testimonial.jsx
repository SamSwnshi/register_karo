import React, { useState, useEffect } from "react";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";

const reviews = [
  {
    name: "Trinity Finserv LLP",
    avatar: avatar1,
    source: "Google",
    text: "Great experience to have associated with REGISTER KARO team. All documentations for registration was done online with prompt updates. Thanks to entire team, especially Priyanka mam, for personally updating me and Himanshi for coordinating... Thank you..."
  },
  {
    name: "BlueOcean Pvt Ltd",
    avatar: avatar2,
    source: "Google",
    text: "RegisterKaro made the entire registration process seamless. Timely updates, professional service, and a supportive team!"
  },
  {
    name: "NextGen Ventures",
    avatar: avatar3,
    source: "Google",
    text: "Highly satisfied with their incorporation service. A special thanks to the backend team for keeping me in loop throughout."
  }
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000); // auto-slide every 4 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  const review = reviews[current];

  return (
    <div className="px-10 lg:px-28 py-16 min-h-screen bg-gradient-to-br from-blue-50 to-white relative overflow-hidden flex flex-col lg:flex-row justify-between items-center gap-10">
      {/* LEFT SIDE */}
      <div className="lg:w-1/2">
        <p className="text-lg text-gray-700 mb-2">
          <span className="font-semibold text-primary">RegisterKaro</span> is used by tens of thousands of founders to start,
          manage, and grow their business
        </p>
        <p className="text-2xl text-orange-500 font-bold">20,000+</p>
        <h1 className="text-4xl font-bold mb-2">Happy Customers</h1>
        <p className="text-gray-600 mb-2">
          We are one of India's highest rated service providers. We are known for completing business incorporations and compliance services in record time.
        </p>
        <p className="text-sm text-gray-500 mt-2">RegisterKaro is a Startup India registered company</p>
      </div>

      {/* RIGHT SIDE */}
      <div className="lg:w-1/2 relative flex justify-center items-center">
        {/* Testimonial Card */}
        <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-md z-10 transition-all duration-500 ease-in-out">
          <div className="mb-4 text-sm text-gray-500 flex items-center gap-2">
            <span>Posted on</span>
            <strong className="text-black">{review.source}</strong>
          </div>
          <p className="text-gray-800 text-base leading-relaxed mb-4">{review.text}</p>
          <div className="flex items-center gap-3">
            <img
              src={review.avatar}
              alt={review.name}
              className="w-10 h-10 rounded-full border-2 border-orange-400"
            />
            <span className="font-semibold text-gray-800">{review.name}</span>
          </div>
        </div>

        {/* Floating avatars */}
        <img src={avatar1} className="absolute top-0 left-0 w-12 h-12 rounded-full border-4 border-white shadow-md" />
        <img src={avatar2} className="absolute top-10 right-0 w-12 h-12 rounded-full border-4 border-white shadow-md" />
        <img src={avatar3} className="absolute bottom-4 right-10 w-12 h-12 rounded-full border-4 border-white shadow-md" />

        {/* Navigation Arrows */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
          <button
            onClick={handlePrev}
            className="bg-white border border-gray-300 p-2 rounded-full shadow-md hover:bg-gray-100 text-xl"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="bg-white border border-gray-300 p-2 rounded-full shadow-md hover:bg-gray-100 text-xl"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
