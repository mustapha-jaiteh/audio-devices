import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import headphone1 from "/images/cart/image-xx59-headphones.jpg";
// import headphone2 from "/images/cart/image-xx99-mark-one-headphones.jpg";
// import headphone3 from "/images/cart/image-xx99-mark-two-headphones.jpg";
// import item from "/images/cart/image-yx1-earphones.jpg";
// import speaker1 from "/images/cart/image-zx7-speaker.jpg";
// import speaker2 from "/images/cart/image-zx9-speaker.jpg";
import { CartContext } from "./Provider";
import { useContext } from "react";

const Cart = ({ cartClose }) => {
  const { cart, removeFromCart } = useContext(CartContext);

  // const items = [
  //   {
  //     img: headphone1,
  //     name: "XX99 MK II",
  //     price: 2.999,
  //   },
  //   {
  //     img: headphone2,
  //     name: "XX59",
  //     price: 899,
  //   },
  //   {
  //     img: headphone3,
  //     name: "YX1",
  //     price: 599,
  //   },
  // ];

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-0 flex justify-end mx-4 lg:right-16 w-auto items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg text-slate-900 font-bold ">CART 3</h2>
          <button
            className="text-slate-900  hover:text-[#D87D4A] hover:underline "
            onClick={removeFromCart}
          >
            Remove all
          </button>
        </div>
        <div>
          <div className="flex flex-col  mb-4">
            <div className=" col-span-2  ">
              {cart.map((item, index) => (
                <div key={index} className="flex mb-4">
                  <div className="">
                    <picture>
                      <source
                        srcSet={item.image.desktop}
                        media="(min-width: 1024px)"
                      />
                      <source
                        srcSet={item.image.tablet}
                        media="(min-width: 768px)"
                      />
                      <img
                        src={item.image.mobile}
                        alt=""
                        className="w-16 h-16 mr-4 "
                      />
                    </picture>
                  </div>
                  <div className="">
                    <div className="ml-3 text-sm text-slate-900 font-bold">
                      {item.name}
                    </div>

                    <div className="ml-3 text-sm font-medium text-slate-900 flex justify-between">
                      ${item.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className=" flex flex-row gap-12">
              <p className=" text-sm font-bold text-gray-500 ">TOTAL</p>
              <p className="text-sm font-bold text-slate-900">${total}</p>
            </div>
          </div>
          <Link to={"/checkout"}>
            <button className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white font-bold p-2 rounded mt-4 left-0 w-full tracking-widest">
              CHECKOUT
            </button>
          </Link>
        </div>
        <button
          onClick={cartClose}
          className="mt-4 text-red-500 hover:underline font-semibold self-center"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Cart;
