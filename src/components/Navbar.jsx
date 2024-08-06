import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [navVisible, setNavVisible] = useState(false);
  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  const activeStyle = {
    fontweight: "bold",
    color: "#D87D4A",
    textDecoration: "underline",
  };
  return (
    <nav className=" bg-[#1a1919] px-8 lg:px-32 py-4 text-gray-100">
      <div className=" flex items-center justify-between gap-4 ">
        <div className=" flex flex-row-reverse items-center gap-16 lg:gap-0 lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <h2 className="text-2xl font-bold">audiophile</h2>
          <ul className="sm:my-2 hidden md:flex lg:flex items-center justify-between gap-8 text-[10px] font-bold">
            <li className="text-gray-100 hover:text-[#D87D4A]">
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                HOME
              </NavLink>
            </li>
            <li className="text-gray-100 hover:text-[#D87D4A]">
              <NavLink
                to="/headphones"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                HEADPHONES
              </NavLink>
            </li>
            <li className="text-gray-100 hover:text-[#D87D4A]">
              <NavLink
                to="/speakers"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                SPEAKERS
              </NavLink>
            </li>
            <li className="text-gray-100 hover:text-[#D87D4A]">
              <NavLink
                to="/earphones"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                EARPHONES
              </NavLink>
            </li>
          </ul>
          <div className="md:hidden lg:hidden ">
            <button onClick={toggleNav} className="text-white text-3xl">
              &#9776;
            </button>
          </div>
          {navVisible && (
            <ul className="md:hidden lg:hidden mt-2 space-y-2">
              <li className="text-gray-100 hover:text-[#D87D4A]">
                <NavLink to="/">HOME</NavLink>
              </li>
              <li className="text-gray-100 hover:text-[#D87D4A]">
                <NavLink to="/headphones">HEADPHONES</NavLink>
              </li>
              <li className="text-gray-100 hover:text-[#D87D4A]">
                <NavLink to="/speakers">SPEAKERS</NavLink>
              </li>
              <li className="text-gray-100 hover:text-[#D87D4A]">
                <NavLink to="/earphones">EARPHONES</NavLink>
              </li>
            </ul>
          )}
        </div>
        <div className="flex items-center">
          <p className="text-md">
            <FaShoppingCart />
          </p>
        </div>
      </div>
      <div className="-bottom-1 h-px left-0 right-0 bg-gray-200 mt-3"></div>
    </nav>
  );
};

export default Navbar;
