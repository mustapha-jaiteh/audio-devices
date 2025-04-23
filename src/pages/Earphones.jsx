import React from "react";
import Menu from "../components/Menu";
import Shared from "../components/Shared";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Earphones = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("data.json");
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
      <header className="bg-[#1a1919]  bg-cover bg-center w-full h-[100px] justify-center items-center text-center p-8">
        <h2 className="text-gray-100 text-4xl">ERAPHONES</h2>
      </header>
      <main className="h-full w-screen flex flex-col py-20">
        {/* Wireless Earphone */}
        <div className="headphone-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  my-auto lg:mb-16  mx-8 lg:gap-4 items-center  justify-center  lg:mx-28 rounded-md ">
          {data
            .filter((item) => item.id === 1)
            .map((earphone) => {
              return (
                <>
                  {/* earphone image */}
                  <div className=" h-full w-full ">
                    <img
                      src={earphone.categoryImage.desktop}
                      alt=""
                      className="left-0 top-0 rounded-md"
                    />
                  </div>
                  {/* earphone description */}
                  <div className=" w-full h-full rounded-sm p-4 pl-12 flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:top-48 lg:left-32 text-gray-950 ">
                    <h5 className=" text-[20px] text-[#D87D4A] tracking-widest mb-4 ">
                      NEW PRODUCT
                    </h5>
                    <h3 className="text-4xl mb-4 font-bold tracking-wide ">
                      {earphone.name}
                    </h3>
                    <p className="mb-4 text-xl">{earphone.description}</p>
                    <Link to={`/earphones/${earphone.id}`}>
                      <button className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white font-bold p-2 rounded mt-4 left-0 w-32">
                        See Product
                      </button>
                    </Link>
                  </div>
                </>
              );
            })}
        </div>

        <Menu />
        <Shared />
      </main>
    </>
  );
};

export default Earphones;
