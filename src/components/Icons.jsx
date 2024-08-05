import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import "tailwindcss/tailwind.css";

const Icons = () => {
  return (
    <div className="grid grid-cols-3 space-x-4 lg:gap-16 justify-between items-center self-center  mx-auto lg:p-8 mt-4 lg:mt-8 lg:ml-32  ">
      {/* <a
        href="https://whatsapp.com"
        className="text-green-600 text-3xl hover:text-green-800 grid grid-cols-2 "
      >
        <FaWhatsapp className="w-8 h-8 " />
        <p className="">WhatsApp</p>
      </a> */}
      <a
        href="https://facebook.com"
        className="text-gray-100 hover:text-[#D87D4A]"
      >
        <FaFacebook className="w-6 h-6 " />
        {/* <p className="">Facebook</p> */}
      </a>
      <a
        href="https://twitter.com"
        className="text-gray-100 hover:text-[#D87D4A]"
      >
        <FaTwitter className="w-6 h-6" />
        {/* <p className="">Twitter</p> */}
      </a>
      <a
        href="https://instagram.com"
        className="text-gray-100 hover:text-[#D87D4A]"
      >
        <FaInstagram className="w-6 h-6" />
        {/* <p className="">Instagram</p> */}
      </a>
      {/* <a
        href="https://linkedin.com"
        className="text-blue-700 text-3xl hover:text-blue-900 grid grid-cols-2"
      >
        <FaLinkedin className="w-8 h-8" />
        <p className="">LinkedIn</p>
      </a> */}
    </div>
  );
};

export default Icons;
