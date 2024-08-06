import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import herodesktop from "./assets/home/desktop/image-hero.jpg";
import herotablet from "./assets/home/tablet/image-header.jpg";
import heromobile from "./assets/home/mobile/image-header.jpg";
import Menu from "./components/Menu.jsx";
import Shared from "./components/Shared.jsx";
import imageSpeakerDesktop from "./assets/home/desktop/image-speaker-zx9.png";
import imageSpeakerDestop2 from "./assets/home/desktop/image-speaker-zx7.jpg";
import imageEarphoneDesktop from "./assets/home/desktop/image-earphones-yx1.jpg";
import imageSpeakerTablet from "./assets/home/tablet/image-speaker-zx9.png";
import imageSpeakerTablet2 from "./assets/home/tablet/image-speaker-zx7.jpg";
import imageEarphoneTablet from "./assets/home/tablet/image-earphones-yx1.jpg";
import imageSpeakerMobile from "./assets/home/mobile/image-speaker-zx9.png";
import imageSpeakerMobile2 from "./assets/home/mobile/image-speaker-zx7.jpg";
import imageEarphoneMobile from "./assets/home/mobile/image-earphones-yx1.jpg";
import { Link } from "react-router-dom";

function App() {
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   //take the data from the JSON file
  //   const imageSpeaker = data.find((item) => item.name === "ZX9 SPEAKERS");
  //   setMenu(data);
  // }, []);
  return (
    <>
      <header className=" bg-cover bg-center w-full h-[500px] flex flex-col justify-center items-center">
        <picture>
          <source srcSet={herodesktop} media="(min-width: 1024px)" />
          <source srcSet={herotablet} media="(min-width: 768px)" />
          <img src={heromobile} alt="hero" className="w-full relative" />
        </picture>
        {/* <img src={hero} alt="hero" className="w-full relative" /> */}
        <div className="text-gray-100 absolute mx-4 justify-center items-center text-center lg:text-left lg:top-48 lg:left-32 lg:w-[30%] py-4">
          <h5 className=" text-[9px] text-gray-400 tracking-widest mb-4">
            NEW PRODUCT
          </h5>
          <h1 className="text-3xl mb-4 font-bold tracking-wide">
            XX 99 MARK II HEADPHONES
          </h1>
          <p className="mb-4 text-sm">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link to={"/headPhones"}>
            <button className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white font-bold py-2 px-4 rounded mt-4">
              See Product
            </button>
          </Link>
        </div>
      </header>

      <main className="h-full w-screen flex flex-col">
        <Menu />
        <div className="zx9-speaker grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  my-auto mb-14 md:mb-14 lg:mb-16  mx-8 bg-[#D87D4A]  lg:gap-4 items-center  justify-center p-4 h-[700px] lg:h-[400px] lg:mx-28 rounded-md bg-[url(./home/desktop/pattern-circles.svg')] bg-right-top ">
          <div className=" h-full w-full">
            <picture>
              <source
                srcSet={imageSpeakerDesktop}
                media="(min-width: 1024px)"
              />
              <source srcSet={imageSpeakerTablet} media="(min-width: 768px)" />
              <img
                src={imageSpeakerMobile}
                alt=""
                className=" h-48 lg:h-80  mt-10 lg:mt-16 m-auto lg:ml-20 "
              />
            </picture>
          </div>
          <div className=" w-full h-full rounded-sm p-12 flex flex-col justify-center items-center lg:items-left text-center md:text-center lg:text-left lg:top-48 lg:left-32 lg:w-[80%] ">
            <h3 className="text-3xl mb-4 font-bold tracking-wide text-gray-100">
              ZX9 SPEAKERS
            </h3>
            <p className="mb-4 text-sm text-gray-100">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link to={"/speakers"}>
              <button className="bg-[#000000] hover:bg-[#616060] text-white font-bold p-2 rounded mt-4 left-0 w-32">
                See Product
              </button>
            </Link>
          </div>
        </div>
        <div className="zx7-speaker mb-16 lg:mb-auto mx-auto lg:gap-4 items-center justify-centerp-4 h-full lg:h-[300px] lg:mx-28 rounded-md bg-right-top relative">
          <picture>
            <source srcSet={imageSpeakerDestop2} media="(min-width: 1024px)" />
            <source srcSet={imageSpeakerTablet2} media="(min-width: 768px)" />
            <img src={imageSpeakerMobile2} alt="" className=" rounded-md " />
          </picture>
          <div className=" absolute left-16 top-12">
            <h3 className="text-2xl mb-4 text-gray-900 tracking-wid font-semibold">
              ZX7 SPEAKER
            </h3>
            <Link to={"/speakers"}>
              <button className=" hover:bg-[#000000] text-black hover:text-gray-100 font-bold p-2 rounded mt-4 left-0 w-32 border-2 border-black">
                See Product
              </button>
            </Link>
          </div>
        </div>
        <div className="earphone grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  my-auto lg:mb-16  mx-8 gap-16  lg:gap-4 items-center  justify-center  lg:mx-28 rounded-md  ">
          <div className=" h-full w-full">
            <picture>
              <source src={imageEarphoneDesktop} media="(min-width: 1024px)" />
              <source src={imageEarphoneTablet} media="(min-width: 768px)" />
              <img
                src={imageEarphoneMobile}
                alt=""
                className=" rounded-md left-0 top-0 "
              />
            </picture>
          </div>
          <div className=" bg-gray-300 py-6 pl-8  lg:pt-14 lg:pl-16 rounded-md h-full w-full">
            <h3 className="text-2xl mb-4 text-gray-900 tracking-wid font-semibold">
              YX1 EARPHONES
            </h3>
            <Link to={"/earphones"}>
              <button className="hover:bg-[#000000] text-black hover:text-gray-100 font-bold p-2 rounded mt-4 left-0 w-32 border-2 border-black">
                See Product
              </button>
            </Link>
          </div>
        </div>
        <Shared />
      </main>
    </>
  );
}

export default App;
