import React, { useContext } from "react";
import { useParams, useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shared from "../components/Shared";
import Menu from "../components/Menu";
import { CartContext } from "../components/Provider";

export const earphoneDetailsLoader = async ({ params }) => {
  const response = await fetch("/data.json");
  const earphones = await response.json();
  const earphone = earphones.find((p) => p.id === parseInt(params.id));
  if (!earphone) {
    throw new Response("Not Found", { status: 404 });
  }
  return earphone;
};

const EarphoneDetails = () => {
  const earphone = useLoaderData();
  const { addToCart } = useContext(CartContext);
  const [cartItems, setCartItems] = useState(0);

  const addItems = (id) => {
    setCartItems(cartItems + 1);
  };

  return (
    <>
      <main className="h-full w-screen flex flex-col py-16">
        <div className="w-40">
          <Link to={"/earphones"}>
            <button className="back-btn text-gray-700 hover:text-[#D87D4A] text-md font-bold mt-2 mb-6 text-left ml-4 w-38 ">
              <span className="text-xs text-gray-700">&lt; &lt;</span> Go Back
            </button>
          </Link>
        </div>
        {/*  earphone */}
        <div className="earphone-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  my-auto lg:mb-16  mx-8 lg:gap-4 items-center  justify-center lg:mx-28 rounded-md ">
          {/*  earphone image */}
          <div className=" h-full w-full ">
            <picture>
              <source
                srcSet={earphone.image.desktop}
                media="(min-width: 1024px)"
              />
              <source
                srcSet={earphone.image.tablet}
                media="(min-width: 768px)"
              />
              <img
                src={earphone.image.mobile}
                alt=""
                className="left-0 top-0 rounded-md"
              />
            </picture>
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
            <p className="price font-bold">{`$${earphone.price}`}</p>
            <div className="flex justify-center items-center gap-4">
              <button
                className="bg-gray-300 hover:bg-gray-400 text-black text-sm font-bold p-2 rounded-sm mt-4 left-0 w-24 cursor-pointer "
                onClick={addItems}
              >
                {cartItems}
              </button>

              <button
                className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white text-sm p-2 rounded-sm mt-4 left-0 w-28 cursor-pointer"
                onClick={() => addToCart(earphone)}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        {/* //Features container */}
        <div className="features grid grid-cols-1 md:grid-cols-10 lg:grid-cols-10 my-auto  mx-8 lg:gap-4 items-start text-left  lg:h-[400px] lg:mx-28 rounded-md p-6">
          {/* features data */}
          <div className=" h-full w-full lg:col-span-6  ">
            <h1 className="text-4xl font-bold tracking-wide mb-4 ">Features</h1>
            <p className="text-xl">{earphone.features}</p>
          </div>
          {/* IN TEH BOX */}
          <div className=" w-full h-full rounded-sm p-4 pl-12 flex flex-col   text-gray-950 lg:col-span-4 items-start text-left ">
            <h3 className="text-3xl mb-4 font-bold tracking-wide ">
              IN THE BOX
            </h3>
            <ul>
              {earphone.includes.map((box, index) => (
                <li className="mb-4 text-lg flex gap-3 " key={index}>
                  <p className=" font-bold text-[#D87D4A]">{`${box.quantity}x`}</p>
                  {box.item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Pictures */}
        <div className="pictures grid grid-cols-1 md:grid-cols-10 lg:grid-cols-10 mx-8 my-auto lg:mb-16 gap-6 lg:gap-4  lg:mx-28 rounded-md">
          {/* TWO PICTURES */}
          <div className="h-full w-full lg:h-full lg:w-full  lg:col-span-4 flex flex-col gap-10  ">
            <picture className="picture-1 ">
              <source
                srcSet={earphone.gallery.first.desktop}
                media="(min-width: 1024px)"
                className="h-[200px]"
              />
              <source
                srcSet={earphone.gallery.first.tablet}
                media="(min-width: 768px)"
                className="h-[200px]"
              />
              <img
                src={earphone.gallery.first.mobile}
                alt=""
                className="h-[200px] rounded-md"
              />
            </picture>
            <picture className="picture-2 ">
              <source
                srcSet={earphone.gallery.second.desktop}
                media="(min-width: 1024px)"
                className="h-[200px]"
              />
              <source
                srcSet={earphone.gallery.second.tablet}
                media="(min-width: 768px)"
                className="h-[200px]"
              />
              <img
                src={earphone.gallery.second.mobile}
                alt=""
                className="h-[200px] rounded-md"
              />
            </picture>
          </div>
          {/* ONE PICTURE */}
          <div className="  rounded-sm text-gray-950 lg:col-span-6 ">
            <picture className="Big-picture">
              <source
                srcSet={earphone.gallery.third.desktop}
                media="(min-width: 1024px)"
              />
              <source
                srcSet={earphone.gallery.third.tablet}
                media="(min-width: 768px)"
              />
              <img
                src={earphone.gallery.third.mobile}
                alt=""
                className=" rounded-md"
              />
            </picture>
          </div>
        </div>
        {/* Other products  */}
        <div className="justify-center items-center text-center mt-16 text-2xl">
          <h1 className="text-center font-bold">YOU MAY ALSO LIKE</h1>
        </div>
        <div className="Other-products grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mb-12 mx-auto gap-16 lg:gap-4 items-center justify-centerp-4 h-[1300px] lg:h-[400px]">
          {earphone.others.map((item, index) => (
            <div
              className="menu-item w-64 h-64  mx-auto lg:mx-0 lg:gap-2 relative pt-4 lg:pt-6"
              key={index}
            >
              <picture>
                <source
                  srcSet={item.image.desktop}
                  media="min-width:1024px"
                  className=""
                />
                <source
                  srcSet={item.image.tablet}
                  media="(min-width:768px)"
                  className=""
                />

                <img
                  src={item.image.mobile}
                  alt={item.name}
                  className=" absolute -top-8 left-0 w-full h-full object-cover z-10 "
                />
              </picture>

              <div className="shop-item-info items-center justify-center text-center pt-20 pb-2 absolute bottom-0 w-full  h-[40%] lg:h-[50%] rounded-sm gap-4">
                <h3 className="shop-item-name font-bold text-lg mt-6 lg:mt-8 ">
                  {item.name}
                </h3>
                <button className="other-item-btn bg-[#D87D4A] hover:bg-[#FBAF85] text-gray-100 py-2 px-4 text-sm rounded-sm my-2 lg:my-2 ">
                  SEE PRODUCT
                </button>
              </div>
            </div>
          ))}
        </div>
        <Menu />
        <Shared />
      </main>
    </>
  );
};

export default EarphoneDetails;
