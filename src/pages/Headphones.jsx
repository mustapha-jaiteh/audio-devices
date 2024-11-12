import React from "react";
import Menu from "../components/Menu";
import Shared from "../components/Shared";
// import data from "../services/data.json";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cart from "../components/Cart";
import HeadphoneDetails from "./HeadphoneDetails";

const Headphones = () => {
  const [data, setData] = useState([]);

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
  // console.log(data);
  //  data.find((item) => item.id === 1);
  // useEffect(() => {
  //   fetch("/data.json")
  //     .then((response) => response.json())
  //     .then((data) => setData(data))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);
  return (
    <>
      <header className="bg-[#1a1919]  bg-cover bg-center w-full h-[100px] justify-center items-center text-center p-8">
        <h2 className="text-gray-100 text-4xl">HEADPHONES</h2>
      </header>
      <main className="h-full w-screen flex flex-col py-20">
        {/* First headphone */}
        <div className="headphone-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  my-auto lg:mb-16  mx-8 lg:gap-4 items-center  justify-center h-[700px] lg:h-[400px] lg:mx-28 rounded-md ">
          {data
            .filter((item) => item.id === 4)
            .map((hp, index) => {
              return (
                <>
                  {/* xx99 II headphone image */}
                  <div className=" h-full w-full " key={index}>
                    <picture>
                      <source
                        srcSet={hp.categoryImage.desktop}
                        media="(min-width: 1024px)"
                      />
                      <source
                        srcSet={hp.categoryImage.tablet}
                        media="(min-width: 768px)"
                      />
                      <img
                        src={hp.categoryImage.mobile}
                        alt=""
                        className="left-0 top-0 rounded-md"
                      />
                    </picture>
                  </div>
                  {/* xx99 II headphone description */}
                  <div className=" w-full h-full rounded-sm p-4 pl-12 flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:top-48 lg:left-32 text-gray-950 ">
                    <h5 className=" text-[12px] text-[#D87D4A] tracking-widest mb-4 ">
                      NEW PRODUCT
                    </h5>
                    <h3 className="text-3xl mb-4 font-bold tracking-wide ">
                      {hp.name}
                    </h3>
                    <p className="mb-4 text-sm">{hp.description}</p>
                    <Link to={`/headphones/${hp.id}`}>
                      <button className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white font-bold p-2 rounded mt-4 left-0 w-32">
                        See Product
                      </button>
                    </Link>
                  </div>
                </>
              );
            })}
        </div>
        {/* Second headphone  */}
        <div className="headphone-2 flex flex-col-reverse lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  my-auto lg:mb-16  mx-8 lg:gap-4 items-center  justify-center h-[700px] lg:h-[400px] lg:mx-28 rounded-md ">
          {data
            .filter((item2) => item2.id === 3)
            .map((hp2) => {
              return (
                <>
                  {/* xx99 I headphone description */}
                  <div className=" w-full h-full rounded-sm p-4 pl-12 flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:top-48 lg:left-32 text-gray-950 ">
                    <h3 className="text-3xl mb-4 font-bold tracking-wide ">
                      {hp2.name}
                    </h3>
                    <p className="mb-4 text-sm">{hp2.description}</p>
                    <Link to={`/headphones/${hp2.id}`}>
                      <button className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white font-bold p-2 rounded mt-4 left-0 w-32">
                        See Product
                      </button>
                    </Link>
                  </div>
                  {/* xx99 I headphone image */}
                  <div className=" h-full w-full ">
                    <picture>
                      <source
                        srcSet={hp2.categoryImage.desktop}
                        media="(min-width: 1024px)"
                      />
                      <source
                        srcSet={hp2.categoryImage.tablet}
                        media="(min-width: 768px)"
                      />
                      <img
                        src={hp2.categoryImage.mobile}
                        alt=""
                        className="left-0 top-0 rounded-md"
                      />
                    </picture>
                  </div>
                </>
              );
            })}
        </div>
        {/* Third headphone */}
        <div className="headphone-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  my-auto lg:mb-16  mx-8 lg:gap-4 items-center  justify-center h-[700px] lg:h-[400px] lg:mx-28 rounded-md ">
          {data
            .filter((item3) => item3.id === 2)
            .map((hp3) => {
              return (
                <>
                  {/* xx99 I headphone image */}
                  <div className=" h-full w-full ">
                    <picture>
                      <source
                        srcSet={hp3.categoryImage.desktop}
                        media="(min-width: 1024px)"
                      />
                      <source
                        srcSet={hp3.categoryImage.tablet}
                        media="(min-width: 768px)"
                      />
                      <img
                        src={hp3.categoryImage.mobile}
                        alt=""
                        className="left-0 top-0 rounded-md"
                      />
                    </picture>
                  </div>
                  {/* xx99 I headphone description */}
                  <div className=" w-full h-full rounded-sm p-4 lg:p-6 pl-12 flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:top-48 lg:left-32 text-gray-950 ">
                    <h3 className="text-3xl mb-4 font-bold tracking-wide ">
                      {hp3.name}
                    </h3>
                    <p className="mb-4 text-sm">{hp3.description}</p>
                    <Link to={`/headphones/${hp3.id}`}>
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

export default Headphones;
