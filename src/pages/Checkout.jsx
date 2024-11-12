import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../components/Provider";
import { useContext } from "react";
import { useState } from "react";
import Thankyou from "../components/Thankyou";

const Checkout = () => {
  const [thankyouPupUp, setThankyouPupUp] = useState(false);

  const { cart } = useContext(CartContext);
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  let shipping = 0;
  if (total > 0) {
    shipping = 50;
  }
  const grandTotal = total + shipping;

  const openThankyou = () => {
    setThankyouPupUp(true);
  };
  const closeThankyou = () => {
    setThankyouPupUp(false);
  };
  return (
    <div className="checkout-container bg-gray-200 h-full w-full p-4 lg:p-16 grid grid-cols-1 lg:grid-cols-10 gap-8 ">
      <form
        action="#"
        method="post"
        className="checkout-form w-full lg:col-span-6 p-4 lg:p-4 rounded-md bg-white shadow-md"
      >
        <h1 className="text-black text-2xl font-bold m-4">CHECKOUT</h1>
        <div className="billing-details">
          <h2 className="text-[#D87D4A] text-sm font-bold m-4">
            BILLING DETAILS
          </h2>
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-10 w-full px-4 lg:px-6">
            <div className="full-name flex flex-col gap-2">
              <label>Full Name:</label>
              <input
                className="border border-slate-500 rounded-lg p-2 text-black"
                type="text"
                name="fullName"
                placeholder="full name"
                // value={formData.fullName}
                // onChange={handleChange}
              />
              {/* {errors.fullName && <span>{errors.fullName}</span>} */}
            </div>
            <div className="email flex flex-col gap-2">
              <label>Email:</label>
              <input
                className="border border-slate-500 rounded-lg p-2 text-black"
                type="email"
                name="email"
                placeholder="email"
                // value={""}
                // onChange={""}
              />
              {/* {errors.email && <span>{errors.email}</span>} */}
            </div>
            <div className="phone flex flex-col gap-2">
              <label>Phone:</label>
              <input
                className="border border-slate-500 rounded-lg p-2 text-black"
                type="text"
                name="phone"
                placeholder="phone number"
                // value={formData.phone}
                // onChange={handleChange}
              />
              {/* {errors.phone && <span>{errors.phone}</span>} */}
            </div>
          </div>
        </div>
        {/* shipping details */}
        <div className="shipping-details mt-12 lg:mt-16">
          <h2 className="text-[#D87D4A] text-sm font-bold m-4">
            SHIPPING INFO
          </h2>
          <div className="full-name flex flex-col gap-2 my-4 mx-4 lg:mx-8">
            <label>Address:</label>
            <input
              className="border border-slate-500  rounded-lg p-2 text-black"
              type="text"
              name="address"
              placeholder="address"
              // value={formData.fullName}
              // onChange={handleChange}
            />
            {/* {errors.fullName && <span>{errors.fullName}</span>} */}
          </div>
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-10 w-full px-4 lg:px-8">
            <div className="full-name flex flex-col gap-2">
              <label>ZIP Code:</label>
              <input
                className="border border-slate-500 rounded-lg p-2 text-black"
                type="text"
                name="zipCode"
                placeholder="zip code"
                // value={formData.fullName}
                // onChange={handleChange}
              />
              {/* {errors.fullName && <span>{errors.fullName}</span>} */}
            </div>
            <div className="email flex flex-col gap-2">
              <label>City:</label>
              <input
                className="border border-slate-500 rounded-lg p-2 text-black"
                type="text"
                name="city"
                placeholder="city"
                // value={""}
                // onChange={""}
              />
              {/* {errors.email && <span>{errors.email}</span>} */}
            </div>
            <div className="phone flex flex-col gap-2">
              <label>Country:</label>
              <input
                className="border border-slate-500 rounded-lg p-2 text-black"
                type="text"
                name="country"
                placeholder="country"
                // value={formData.phone}
                // onChange={handleChange}
              />
              {/* {errors.phone && <span>{errors.phone}</span>} */}
            </div>
          </div>
        </div>
        {/* payment details */}
        <div className="payment-details mt-12 lg:mt-16">
          <h2 className="text-[#D87D4A] text-sm font-bold m-4">
            PAYMENT DETAILS
          </h2>
          <h3 className="text-sm font-bold m-4">Payment Method</h3>
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-10 w-full px-4 lg:px-8">
            <label>e-Money</label>
            <label>Cash on Delivery</label>
            <input
              className="border border-slate-500 rounded-lg p-2 text-black"
              type="radio"
              name="payment-method"
              value="cash"
            />

            <input
              className="border border-slate-900 rounded-lg p-2 text-black"
              type="radio"
              name="payment-method"
              value="cash"
            />

            <div className="e-money flex flex-col gap-2">
              <label>e-Money Number:</label>
              <input
                className="border border-slate-500 rounded-lg p-2 text-black"
                type="text"
                name="e-money-number"
                placeholder="e-money number"
                value={""}
                onChange={""}
              />
              {/* {errors.email && <span>{errors.email}</span>} */}
            </div>
            <div className="PIN flex flex-col gap-2">
              <label>e-Money PIN:</label>
              <input
                className="border border-slate-500 rounded-lg p-2 text-black"
                type="number"
                name="e-money-PIN"
                placeholder="e-money PIN"
                // value={formData.phone}
                // onChange={handleChange}
              />
              {/* {errors.phone && <span>{errors.phone}</span>} */}
            </div>
          </div>
        </div>
      </form>
      {/* SUMMERY */}
      <div className=" bg-gray-100 bg-opacity-0 flex h-auto lg:col-span-4  ">
        <div className="bg-white p-8 rounded-md w-full h-auto  top-0 ">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg text-slate-900 font-bold ">SUMMERY</h2>
          </div>
          <div className="flex flex-col  mb-4">
            <div className="flex flex-col mb-4">
              {cart.map((item, index) => (
                <div className=" flex flex-row mb-4">
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
              {/* <div className="flex flex-col gap-12 justify-center">
                <button className="text-sm font-bold text-slate-900">
                  <span className="mr-2">x</span>1{" "}
                </button>
                <button className="text-sm font-bold text-slate-900">
                  <span className="mr-2">x</span>2{" "}
                </button>
                <button className="text-sm font-bold text-slate-900 ">
                  <span className="mr-2">x</span>1{" "}
                </button>
              </div> */}
            </div>
            <div className="gap-12 grid  grid-cols-2  justify-center">
              <div className="total-text">
                <p className=" text-sm font-bold text-gray-500 mt-8 ">TOTAL</p>
                <p className=" text-sm font-bold text-gray-500 mt-6 ">
                  SHIPPING
                </p>

                <p className=" text-sm font-bold text-gray-500 mt-6 ">
                  GRAND TOTAL
                </p>
              </div>
              <div className="total-number">
                <p className="text-sm font-bold text-slate-900 flex  mt-6">
                  ${total}
                </p>
                <p className="text-sm font-bold text-slate-900 flex mt-6">
                  ${shipping}
                </p>

                <p className="text-sm font-bold text-slate-900 flex  mt-6">
                  ${grandTotal}
                </p>
              </div>
            </div>

            {/* <Link to={"/checkout"}> */}
            <button
              className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white font-bold p-2 rounded mt-4 left-0 w-full tracking-widest"
              onClick={openThankyou}
            >
              CONTINUE TO BUY
            </button>
            {thankyouPupUp ? <Thankyou closeThankyou={closeThankyou} /> : null}
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
