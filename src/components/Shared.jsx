import React from "react";
import bestGearDesktop from "/images/shared/desktop/image-best-gear.jpg";
import bestGearMobile from "/images/shared/mobile/image-best-gear.jpg";
import bestGearTablet from "/images/shared/tablet/image-best-gear.jpg";

const Shared = () => {
  return (
    <div className="shared flex flex-col-reverse lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  my-auto  mx-8 lg:gap-4 items-center  justify-center h-[700px] lg:h-full lg:mx-28 rounded-md ">
      <div className=" w-full h-full rounded-sm px-4 lg:pr-12 flex flex-col justify-center items-center lg:items-left text-center md:text-center lg:text-left lg:top-48 lg:left-32 lg:w-full text-gray-900">
        <h3 className="text-4xl mb-4 font-medium tracking-wide ">
          BRINGING YOU THE <span className="text-[#D87D4A]">BEST</span> AUDIO
          GEAR
        </h3>
        <p className="mb-4 text-xl ">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment
        </p>
      </div>
      <div className=" h-full w-full">
        <picture>
          <source srcSet={bestGearDesktop} media="(min-width: 1024px)" />
          <source srcSet={bestGearTablet} media="(min-width: 768px)" />
          <source srcSet={bestGearMobile} media="(min-width: 640px)" />
          <img
            src={bestGearMobile}
            alt=""
            className="left-0 top-0 rounded-md"
          />
        </picture>
      </div>
    </div>
  );
};

export default Shared;
