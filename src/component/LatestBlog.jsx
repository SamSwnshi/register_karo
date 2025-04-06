import React, { useEffect, useState } from 'react';
import v from '../assets/v.png';
import opc from '../assets/opc.png';
import startup from '../assets/startup.png';

const LatestBlog = () => {
  const data = [
    {
      image: v,
      name: "Punishable Offence Under FSSAI: Know the Rules",
      date: "April 03, 2025 at 11:AM",
      author: "Written by Jai Raj"
    },
    {
      image: opc,
      name: "One Person Company Can Be Registered As? Exploring OPC Structures and Requirements!",
      date: "April 03, 2025 at 11:AM",
      author: "Written by Om Adesh Ghai!"
    },
    {
      image: startup,
      name: "A Complete Guide to Registering a Startup in India: Step-by-Step",
      date: "April 03, 2025 at 11:AM",
      author: "Written by Komal Sharma"
    },
    {
      image: v,
      name: "FSSAI Rules: Know the Penalties",
      date: "April 03, 2025 at 11:AM",
      author: "Written by Jai Raj"
    },
    {
      image: opc,
      name: "OPC Requirements: A Practical Guide",
      date: "April 03, 2025 at 11:AM",
      author: "Written by Om Adesh Ghai!"
    },
    {
      image: startup,
      name: "Startup India Registration: A Complete Step-by-Step Guide",
      date: "April 03, 2025 at 11:AM",
      author: "Written by Komal Sharma"
    }
  ];

  const [groupSize, setGroupSize] = useState(getGroupSize());
  const [currentPage, setCurrentPage] = useState(0);

  function getGroupSize() {
    const width = window.innerWidth;
    if (width < 640) return 1; // small screens
    if (width < 1024) return 2; // medium screens
    return 3; // large screens
  }

  useEffect(() => {
    const handleResize = () => {
      setGroupSize(getGroupSize());
      setCurrentPage(0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(data.length / groupSize);
  const slides = Array.from({ length: totalPages }, (_, i) =>
    data.slice(i * groupSize, i * groupSize + groupSize)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalPages]);

  return (
    <div className="px-4 py-10 w-full bg-[#F8FAFC]">
      <h2 className="text-3xl sm:text-4xl text-[#FE9C28] font-semibold mb-8 text-center">
        Latest Blog
      </h2>
      <div className="w-full max-w-[1280px] mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            width: `${totalPages * 100}%`,
            transform: `translateX(-${currentPage * (100 / totalPages)}%)`
          }}
        >
          {slides.map((group, idx) => (
            <div
              key={idx}
              className="flex justify-center gap-6 flex-shrink-0 px-2"
              style={{ width: `${100 / totalPages}%` }}
            >
              {group.map((item, index) => (
                <div
                  key={index}
                  className="bg-white w-[90%] sm:w-[300px] rounded-lg shadow-md p-4 border"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-md h-40 w-full object-cover mb-3"
                  />
                  <h3 className="font-bold text-md sm:text-lg mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-500 mb-1">{item.date}</p>
                  <p className="text-sm text-gray-700">{item.author}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
