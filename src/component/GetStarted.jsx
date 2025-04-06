import React from 'react';

const GetStarted = () => {
  return (
    <div className="px-6 md:px-28 py-16 bg-white">

      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
          Grow Your Business instead of Complex <br />
          Registration processes and leave it for us
        </h2>
      </div>

      <div className="relative flex flex-col lg:flex-row items-center justify-center gap-12">

 
        <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md space-y-4">
          <p className="text-gray-600 mb-4 text-center">
            With other service providers you would have to pay for each compliance filing individually!
          </p>
          {[
            'Payroll compliance - Rs.5,000',
            'Leave Management - Rs.2,000',
            'Financial Preparation and Audit support - Rs.4,000',
            'Annual general Meeting Minutes - Rs.1,000',
            'Maintenance of Statutory Registers - Rs.1,000',
          ].map((item, index) => (
            <div key={index} className="border rounded px-4 py-2 flex items-center gap-2">
              <span className="text-orange-500 text-lg">✅</span>
              <span className="text-gray-800 text-sm">{item}</span>
            </div>
          ))}
        </div>


        <div className="absolute lg:relative -top-4 lg:top-1/2 lg:-translate-y-1/2 bg-yellow-400 text-white font-bold text-sm w-16 h-16 flex items-center justify-center rounded-full shadow-lg z-10">
          35k
        </div>

   
        <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md text-center space-y-4">
          <div className="border rounded px-4 py-2 flex items-center justify-center gap-2">
            <span className="text-orange-500 text-lg">✅</span>
            <span className="text-gray-800 text-sm">Use RegisterKaro</span>
          </div>
          <p className="text-gray-700">
            Get all your <span className="font-semibold">Compliance</span> done with the help of <span className="font-semibold">Industry Experts</span> and channelize that precious time to grow your <span className="font-semibold">business</span>.
          </p>
          <button className="text-orange-500 font-semibold hover:underline">Get Started!</button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
