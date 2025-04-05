import React from "react";

const ContactUs = () => {
  return (
    <div className="px-28 h-screen">
      <div className="bg-blue-300 h-[550px]">
        <div>
          <h1>CONTACT US</h1>
        </div>
        <div>
          <div>
            <div>
              <h1>Main Office</h1>
              <p>
                Safe Ledger Private Limited #101, Oxford Towers, 139, HAL Old
                Airport Rd, Kodihalli, Bengaluru, Karnataka 560008
              </p>
            </div>
            <div>
              <h1>Make a call</h1>
              <p>Phone: +91 84477 46183</p>
            </div>
            <div>
              <h1>Working Hours</h1>
              <p>Monday-friday: 9:00- 06:00 Saturday-Sunday: Holiday</p>
            </div>
            <div>
              <h1>Send an email</h1>
              <p>support@registerkaro.in admin@registerkaro.in</p>
            </div>
          </div>
          <div>
            <h1>Contact Us</h1>
            <label>
              Name
              <input type="text" placeholder="Enter Name" />
            </label>
            <label>
              Email
              <input type="email" placeholder="Enter Name" />
            </label>
            <label>
              Phone
              <input type="number" placeholder="Enter Name" />
            </label>
            <label>
              Message
              <input type="textarea" placeholder="Enter Name" />
            </label>
            <button>Send Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
