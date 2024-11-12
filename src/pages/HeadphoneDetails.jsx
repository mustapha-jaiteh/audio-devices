import React from "react";
import { useParams, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shared from "../components/Shared";
import Menu from "../components/Menu";
// import { useProductContext } from "../components/Provider";
import { CartContext } from "../components/Provider";
import { useContext } from "react";

export const headphoneDetailsLoader = async ({ params }) => {
  const response = await fetch("/data.json");
  const headphones = await response.json();
  const headphone = headphones.find((p) => p.id === parseInt(params.id));
  if (!headphone) {
    throw new Response("Not Found", { status: 404 });
  }
  return headphone;
};

const HeadphoneDetails = ({ product }) => {
  const headphone = useLoaderData();

  const { addToCart } = useContext(CartContext);

  const [cartItems, setCartItems] = useState(0);

  const addItems = (id) => {
    setCartItems(cartItems + 1);
  };

  //   const { id } = useParams();
  //   const [headphone, setHeadphone] = useState({});

  //   useEffect(() => {
  //     fetch("/data.json")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         const headphone = data.find((p) => p.id === parseInt(id));
  //         setHeadphone(headphone);
  //       })
  //       .catch((error) => console.error("Error fetching data:", error));
  //   }, [id]);

  //   if (!headphone) {
  //     return <div>Loading...</div>;
  //   }
  return (
    <>
      <main className="h-full w-screen flex flex-col py-16">
        <div className="w-40">
          <Link to={"/headphones"}>
            <button className="back-btn text-gray-700 hover:text-[#D87D4A] text-md font-bold mt-2 mb-6 text-left ml-4 w-38 ">
              <span className="text-xs text-gray-700">&lt; &lt;</span> Go Back
            </button>
          </Link>
        </div>
        {/*  headphone */}
        <div className="headphone-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  my-auto lg:mb-16  mx-8 lg:gap-4 items-center  justify-center h-[700px] lg:h-[400px] lg:mx-28 rounded-md ">
          {/*  headphone image */}
          <div className=" h-full w-full ">
            <picture>
              <source
                srcSet={headphone.image.desktop}
                media="(min-width: 1024px)"
              />
              <source
                srcSet={headphone.image.tablet}
                media="(min-width: 768px)"
              />
              <img
                src={headphone.image.mobile}
                alt=""
                className="left-0 top-0 rounded-md"
              />
            </picture>
          </div>
          {/* headphone description */}
          <div className=" w-full h-full rounded-sm p-4 pl-12 flex flex-col items-start text-left lg:top-48 lg:left-32 text-gray-950 ">
            <h5 className=" text-[12px] text-[#D87D4A] tracking-widest mb-4 ">
              NEW PRODUCT
            </h5>
            <h3 className="text-3xl mb-4 font-bold tracking-wide ">
              {headphone.name}
            </h3>
            <p className="mb-4 text-sm">{headphone.description}</p>
            <p className="price font-bold">{`$${headphone.price}`}</p>
            <div className="flex justify-center items-center gap-4">
              <button
                className="bg-gray-300 hover:bg-gray-400 text-black text-sm font-bold p-2 rounded-sm mt-4 left-0 w-24 cursor-pointer "
                onClick={addItems}
              >
                {cartItems}
              </button>

              <button
                className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white text-sm p-2 rounded-sm mt-4 left-0 w-28 cursor-pointer"
                onClick={() => addToCart(headphone)}
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
            <h1 className="text-3xl font-bold tracking-wide mb-4 ">Features</h1>
            <p className="text-sm">{headphone.features}</p>
          </div>
          {/* IN TEH BOX */}
          <div className=" w-full h-full rounded-sm p-4 pl-12 flex flex-col   text-gray-950 lg:col-span-4 items-start text-left ">
            <h3 className="text-3xl mb-4 font-bold tracking-wide ">
              IN THE BOX
            </h3>
            <ul>
              {headphone.includes.map((box, index) => (
                <li className="mb-4 text-sm flex gap-3 " key={index}>
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
                srcSet={headphone.gallery.first.desktop}
                media="(min-width: 1024px)"
                className="h-[200px]"
              />
              <source
                srcSet={headphone.gallery.first.tablet}
                media="(min-width: 768px)"
                className="h-[200px]"
              />
              <img
                src={headphone.gallery.first.mobile}
                alt=""
                className="h-[200px] rounded-md"
              />
            </picture>
            <picture className="picture-2 ">
              <source
                srcSet={headphone.gallery.second.desktop}
                media="(min-width: 1024px)"
                className="h-[200px]"
              />
              <source
                srcSet={headphone.gallery.second.tablet}
                media="(min-width: 768px)"
                className="h-[200px]"
              />
              <img
                src={headphone.gallery.second.mobile}
                alt=""
                className="h-[200px] rounded-md"
              />
            </picture>
          </div>
          {/* ONE PICTURE */}
          <div className="  rounded-sm text-gray-950 lg:col-span-6 ">
            <picture className="Big-picture">
              <source
                srcSet={headphone.gallery.third.desktop}
                media="(min-width: 1024px)"
              />
              <source
                srcSet={headphone.gallery.third.tablet}
                media="(min-width: 768px)"
              />
              <img
                src={headphone.gallery.third.mobile}
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
          {headphone.others.map((item, index) => (
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

export default HeadphoneDetails;
