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
      name: "ONe Perso Company Can Be Registered As? Exploring OPC Structures and Requirements!",
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

  const [currentPage, setCurrentPage] = useState(0);
  const groupSize = 3;
  const totalPages = Math.ceil(data.length / groupSize);

  const slides = Array.from({ length: totalPages }, (_, i) =>
    data.slice(i * groupSize, i * groupSize + groupSize)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [totalPages]);

  return (
    <div className="px-4 py-10 overflow-hidden w-full">
      <h2 className="text-4xl text-[#FE9C28] font-semibold mb-8 text-center">Latest Blog</h2>
      <div className="w-full max-w-[1024px] mx-auto overflow-hidden ">
        <div
          className="flex transition-transform duration-500 ease-in-out "
          style={{
            width: `${totalPages * 100}%`,
            transform: `translateX(-${currentPage * (100 / totalPages)}%)`
          }}
        >
          {slides.map((group, idx) => (
            <div
              key={idx}
              className="w-full flex justify-center gap-20 flex-shrink-0"
              style={{ width: `${100 / totalPages}%` }}
            >
              {group.map((item, index) => (
                <div
                  key={index}
                  className="w-[300px] bg-white rounded-lg shadow-lg p-4 border "
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-md h-40 w-full object-cover mb-3"
                  />
                  <h3 className="font-bold text-lg mb-1">{item.name}</h3>
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
