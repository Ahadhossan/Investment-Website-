import React from 'react'

const Footer = () => {
  return (
    <div className="pt-12 bg-[#5306e0] pb-12">
      {/* define grid system */}
      <div className="w-[90%] mx-auto  grid grid-cols-1 border-b-[1.5px] border-b-slate-300 pb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-start">
        {/* 1st part footer */}
        <div className="lg:mx-auto mx-0">
          <h1 className="text-[15px] md:text-[23px] font-bold text-white">
            <span className="text-[25px] md:text-[37px] text-yellow-300">
              IN
            </span>
            Vestor
          </h1>
          <p className="text-white text-opacity-60 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="mt-4 text-white">support@gmail.com</p>
          <p className="mt-2 text-xl font-bold text-red-300">+(123) 456 7890</p>
        </div>
        {/* 2nd part footer */}
        <div className="lg:mx-auto mx-0">
          <h1 className="text-lg mb-6 font-semibold text-white">Company</h1>
          <p className=" opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed text-white">
            About
          </p>
          <p className=" opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed text-white">
            Affiliate
          </p>
          <p className=" opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed text-white">
            Careers & Culture
          </p>
          <p className=" opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed text-white">
            Blog
          </p>
          <p className=" opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed text-white">
            Press
          </p>
        </div>
        {/* 3rd part footer */}
        <div className="lg:mx-auto mx-0">
          <h1 className="text-lg mb-6 font-semibold text-white">
            Our Information
          </h1>
          <p className=" opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed text-white">
            Return Policy
          </p>
          <p className=" opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed text-white">
            Privacy Policy
          </p>
          <p className=" opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed text-white">
            Terms & Conditions
          </p>
          <p className=" opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed text-white">
            Site Map
          </p>
          <p className=" opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed text-white">
            Store Hours
          </p>
        </div>
        {/* 4th part footer */}
        <div className="lg:mx-auto mx-0">
          <h1 className="text-lg mb-6 font-semibold text-white">About Us</h1>
          <p className=" opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed text-white">
            Support Center
          </p>
          <p className=" opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed text-white">
            Customer Support
          </p>
          <p className=" opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed text-white">
            About Us
          </p>
          <p className=" opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed text-white">
            Copyright
          </p>
          <p className=" opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed text-white">
            Popular Campaign
          </p>
        </div>
      </div>

      {/* copyright text */}
      <div className="w-[90%] mx-auto mt-4 text-[15px] text-white opacity-75">
        Copyright © 2024 by Ahad Hossain
      </div>
    </div>
  );
}

export default Footer
