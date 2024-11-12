import React from "react";
import { useState, useEffect } from "react";
import { menuImages } from "../services/menuImages";
import { Link } from "react-router-dom";

// import data from "../services/data.json";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   //take the data from the JSON file
  //   setMenu(data);
  // }, []);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("error fetching data", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="menu-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 my-12 mx-auto  lg:gap-4 items-center justify-centerp-4 lg:h-[400px] ">
        {menuImages.map((item, index) => (
          <div
            className="menu-item w-64 h-64 mt-16 lg:mt-16 mx-auto lg:mx-0 lg:gap-2 relative pt-0 lg:pt-16"
            key={index}
          >
            <picture>
              <source
                srcSet={item.image}
                media="min-width:1024px"
                className=""
              />
              <source
                srcSet={item.image}
                media="(min-width:768px)"
                className=""
              />
              <source
                srcSet={item.image}
                media="(min-width:640px)"
                className=""
              />
              <img
                src={item.image}
                alt={item.name}
                className=" absolute -top-8 left-0 w-full h-full object-cover z-10 "
              />
            </picture>

            <div className="shop-item-info items-center justify-center text-center pt-32 pb-2 absolute bottom-0 w-full bg-gray-200 h-[70%] rounded-sm">
              <h3 className="shop-item-name font-bold text-sm">{item.name}</h3>

              <Link to={"/checkout"}>
                <button className="shop-item-btn text-gray-700 hover:text-[#D87D4A] text-sm font-bold">
                  shop <span className="text-xs text-[#D87D4A]">&gt;</span>{" "}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;
