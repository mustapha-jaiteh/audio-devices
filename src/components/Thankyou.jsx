import React from "react";
import { useContext } from "react";
import { CartContext } from "./Provider";

const Thankyou = ({ closeThankyou }) => {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price, 0);
  let shipping = 0;
  if (total > 0) {
    shipping = 50;
  }
  const grandTotal = total + shipping;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50 mx-4 lg:mx-0">
      <div className="bg-white p-8 rounded-lg  w-96">
        <div>
          <h2 className="text-3xl font-bold mb-4">THANK YOU FOR YOU ORDER</h2>
          <p className="text-gray-500 text-sm">
            Yoy will receive an email confirmation shortly
          </p>
        </div>

        <div className="bg-white p-8 rounded-md w-full h-auto  top-0 ">
          <div className="flex justify-between items-center mb-4"></div>
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
            </div>
            <div className="gap-12 grid  grid-cols-2  justify-center">
              <div className="total-text">
                <p className=" text-sm font-bold text-gray-500 mt-6 ">
                  GRAND TOTAL
                </p>
              </div>
              <div className="total-number">
                <p className="text-sm font-bold text-slate-900 flex  mt-6">
                  ${grandTotal}
                </p>
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white font-bold p-2 rounded mt-4 left-0 w-full tracking-wides"
          onClick={closeThankyou}
        >
          GO BACK
        </button>
      </div>
    </div>
  );
};

export default Thankyou;
