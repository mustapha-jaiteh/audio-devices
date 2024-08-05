import React from "react";
import Menu from "../components/Menu";
import Shared from "../components/Shared";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Speakers = () => {
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
        <h2 className="text-gray-100 text-4xl">SPEAKERS</h2>
      </header>
      <main className="h-full w-screen flex flex-col py-20">
        {/* First speaker */}
        <div className="speaker-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  my-auto lg:mb-16  mx-8 lg:gap-4 items-center  justify-center h-[700px] lg:h-[400px] lg:mx-28 rounded-md ">
          {data
            .filter((item) => item.id === 6)
            .map((speaker1) => {
              return (
                <>
                  {/* zx9 speaker image */}
                  <div className=" h-full w-full ">
                    <picture>
                      <source
                        srcSet={speaker1.categoryImage.desktop}
                        media="(min-width: 1024px)"
                      />
                      <source
                        srcSet={speaker1.categoryImage.tablet}
                        media="(min-width: 768px)"
                      />
                      <img
                        src={speaker1.categoryImage.mobile}
                        alt=""
                        className="left-0 top-0 rounded-md"
                      />
                    </picture>
                  </div>
                  {/* zx9 speaker description */}
                  <div className=" w-full h-full rounded-sm p-4 pl-12 flex flex-col items-center lg:items-start text-center lg:text-left lg:top-48 lg:left-32 text-gray-950 ">
                    <h5 className=" text-[12px] text-[#D87D4A] tracking-widest mb-4 ">
                      NEW PRODUCT
                    </h5>
                    <h3 className="text-3xl mb-4 font-bold tracking-wide  items-center lg:item-left ">
                      {speaker1.name}
                    </h3>
                    <p className="mb-4 text-sm">{speaker1.description}</p>
                    <Link to={`/speakers/${speaker1.id}`}>
                      <button className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white font-bold p-2 rounded mt-4 left-0 w-32">
                        See Product
                      </button>
                    </Link>
                  </div>
                </>
              );
            })}
        </div>
        {/* Second speaker  */}
        <div className="headphone-2 flex flex-col-reverse lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  my-auto lg:mb-16  mx-8 lg:gap-4 items-center  justify-center h-[700px] lg:h-[400px] lg:mx-28 rounded-md ">
          {data
            .filter((item) => item.id === 5)
            .map((speaker2) => {
              return (
                <>
                  {/* zx7 speaker description */}
                  <div className=" w-full h-full rounded-sm p-4 pl-12 flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:top-48 lg:left-32 text-gray-950 ">
                    <h3 className="text-3xl mb-4 font-bold tracking-wide ">
                      {speaker2.name}
                    </h3>
                    <p className="mb-4 text-sm">{speaker2.description}</p>
                    <Link to={`/speakers/${speaker2.id}`}>
                      <button className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white font-bold p-2 rounded mt-4 left-0 w-32">
                        See Product
                      </button>
                    </Link>
                  </div>
                  {/* zx7 speaker image */}
                  <div className=" h-full w-full ">
                    <picture>
                      <source
                        srcSet={speaker2.categoryImage.desktop}
                        media="(min-width: 1024px)"
                      />
                      <source
                        srcSet={speaker2.categoryImage.tablet}
                        media="(min-width: 768px)"
                      />
                      <img
                        src={speaker2.categoryImage.mobile}
                        alt=""
                        className="left-0 top-0 rounded-md"
                      />
                    </picture>
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

export default Speakers;
