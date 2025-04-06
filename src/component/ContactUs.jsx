import React from "react";

const ContactUs = () => {
  return (
    <div className="px-4 lg:px-28 py-20 bg-white min-h-screen flex justify-center items-center">
      <div className="bg-[#F0F4FF] rounded-xl p-10 flex flex-col lg:flex-row gap-8 w-full max-w-6xl shadow-md">
        {/* LEFT CONTACT INFO */}
        <div className="lg:w-1/2 space-y-6">
          {/* <h2 className="text-3xl font-bold text-orange-500">CONTACT US</h2> */}
          <div className="flex items-start gap-4">
            <div className="bg-orange-200 p-2 rounded-full">
              📍
            </div>
            <div>
              <h3 className="font-semibold text-lg">Main Office</h3>
              <p className="text-gray-700">
                Safe Ledger Private Limited <br />
                #101, Oxford Towers, 139, HAL Old Airport Rd, Kodihalli, <br />
                Bengaluru, Karnataka 560008
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-orange-200 p-2 rounded-full">
              📞
            </div>
            <div>
              <h3 className="font-semibold text-lg">Make a call</h3>
              <p className="text-gray-700">Phone: +91 84477 46183</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-orange-200 p-2 rounded-full">
              ⏰
            </div>
            <div>
              <h3 className="font-semibold text-lg">Working Hours</h3>
              <p className="text-gray-700">
                Monday - Friday: 9:00 - 06:00 <br />
                Saturday - Sunday: Holiday
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-orange-200 p-2 rounded-full">
              ✉️
            </div>
            <div>
              <h3 className="font-semibold text-lg">Send an email</h3>
              <p className="text-gray-700">
                support@registerkaro.in <br />
                admin@registerkaro.in
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input type="text" placeholder="Enter your name" className="w-full border border-gray-300 p-2 rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input type="email" placeholder="Enter your email" className="w-full border border-gray-300 p-2 rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input type="tel" placeholder="Enter your phone" className="w-full border border-gray-300 p-2 rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea placeholder="Enter your message" rows={4} className="w-full border border-gray-300 p-2 rounded-md"></textarea>
            </div>
            <button className="bg-orange-400 text-white font-semibold px-6 py-2 rounded-md hover:bg-orange-500 transition">
              Send Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
