import React from 'react';
import down from "../assets/down.png";
import up from "../assets/up.png";
import man from "../assets/man.png";
import people from '../assets/people.png';
import growth from '../assets/growth.png';

const Photos = () => {
  return (
    <div className="bg-[#F0F4FF] py-10">
      <div className="flex flex-wrap justify-center items-center gap-6 px-4">
        <img
          src={man}
          alt="man"
          className="w-20 sm:w-24 md:w-28 lg:w-32 bg-[#164760] rounded shadow-md"
        />
        <img
          src={down}
          alt="down"
          className="w-8 sm:w-10 md:w-48"
        />
        <img
          src={people}
          alt="people"
          className="w-20 sm:w-24 md:w-28 lg:w-32 bg-[#FE9C28] rounded shadow-md"
        />
        <img
          src={up}
          alt="up"
          className="w-8 sm:w-10 md:w-48"
        />
        <img
          src={growth}
          alt="growth"
          className="w-20 sm:w-24 md:w-28 lg:w-32 bg-[#164760] rounded shadow-md"
        />
      </div>
    </div>
  );
};

export default Photos;
