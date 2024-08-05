import React from "react";
import { Link } from "react-router-dom";
import Icons from "./Icons";

const Footer = () => {
  return (
    <div className="footer flex flex-col-reverse lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-[#1a1919]  lg:gap-4 items-center  justify-center text-center lg:text-left  lg:px-28 h-full mt-12 ">
      <div className="leftSide w-full h-full rounded-sm pt-12 flex flex-col items-center text-center lg:items-left lg:text-left  lg:top-48 lg:left-32 text-gray-100 mb-6 px-8 ">
        <h2 className="text-2xl font-bold mb-6">audiophile</h2>
        <p className="mb-10 text-gray-400 text-xs">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <h5 className="text-sm font-mono text-gray-400">
          Copyright 2021. All Rights Reserved
        </h5>
      </div>
      <div className="rightSide pt-12 px-16 w-full h-full">
        <ul className="sm:my-2 sm:grid sm:grid-cols-1 lg:flex items-center justify-between gap-6 text-[10px] font-bold">
          <li className="text-gray-100 hover:text-[#D87D4A] my-4 lg:my-0">
            <Link to="/">HOME</Link>
          </li>
          <li className="text-gray-100 hover:text-[#D87D4A] my-4 lg:my-0">
            <Link to="/headphones">HEADPHONES</Link>
          </li>
          <li className="text-gray-100 hover:text-[#D87D4A] my-4 lg:my-0">
            <Link to="/speakers">SPEAKERS</Link>
          </li>
          <li className="text-gray-100 hover:text-[#D87D4A] my-4 lg:my-0">
            <Link to="/earphones">EARPHONES</Link>
          </li>
        </ul>
        <Icons />
      </div>
    </div>
  );
};

export default Footer;
