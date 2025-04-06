import React from 'react';

const Card = () => {
  return (
    <div className="bg-[#164C6E] px-6 md:px-28 py-16 w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
 
        <div className="bg-white rounded-xl p-6 flex flex-col justify-between h-full shadow-md">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Small business & Startup Accounts
            </h3>
            <p className="text-gray-600 mb-6">
              Make sure your business meets its statutory requirements.
            </p>
          </div>
          <div>
            <p className="font-semibold text-sm text-gray-800">Number of employees</p>
            <p className="text-gray-800 font-bold">0 – 10</p>
          </div>
          <div className="mt-4 text-right text-orange-500 text-xl">→</div>
        </div>


        <div className="bg-white rounded-xl p-6 flex flex-col justify-between h-full shadow-md">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Growing Business Package
            </h3>
            <p className="text-gray-600 mb-6">
              Additional support to help you reach your business goals.
            </p>
          </div>
          <div>
            <p className="font-semibold text-sm text-gray-800">Number of employees</p>
            <p className="text-gray-800 font-bold">11 – 50</p>
          </div>
          <div className="mt-4 text-right text-orange-500 text-xl">→</div>
        </div>


        <div className="bg-white rounded-xl p-6 flex flex-col justify-between h-full shadow-md">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Scale-Up Company Offer
            </h3>
            <p className="text-gray-600 mb-6">
              Compliance, reporting & analysis of performance.
            </p>
          </div>
          <div>
            <p className="font-semibold text-sm text-gray-800">Number of employees</p>
            <p className="text-gray-800 font-bold">50+</p>
          </div>
          <div className="mt-4 text-right text-orange-500 text-xl">→</div>
        </div>


        <div className="bg-white rounded-xl p-6 flex flex-col justify-between h-full shadow-md">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Setting up a business
            </h3>
            <p className="text-gray-600 mb-6">
              Make sure your business meets its statutory requirements.
            </p>
          </div>
          <div>
            <p className="font-semibold text-sm text-gray-800">
              Company Formation Services
            </p>
          </div>
          <div className="mt-4 text-right text-orange-500 text-xl">→</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
