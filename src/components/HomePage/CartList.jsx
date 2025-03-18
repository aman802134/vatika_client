import React from "react";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const CartList = () => {
  return (
    <>
      <div className="w-full h-28 flex space-x-2.5 shadow py-1.5 px-1.5">
        <div className="w-24 bg-center bg-cover rounded-sm">
          <img
            src="/Logo.jpg"
            alt="plant in pot"
            className="aspect-[2/2] rounded-sm"
          />
        </div>
        <div className="w-full h-full flex flex-col justify-start space-y-3.5 items-center">
          <div className="w-full flex justify-center items-center">
            <h1 className="w-3/1 underline font-serif font-medium text-sm text-gray-800 cursor-pointer">
              <Link to="/detail">Macadamia Glossy green leaves</Link>
            </h1>
            <span>
              <RxCross2 className="cursor-pointer" />
            </span>
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="flex justify-start items-center space-x-5">
              <button className="w-6 h-6 rounded-full py-0.5 px-0.5 bg-login-btn flex justify-center items-center cursor-pointer text-white">
                -
              </button>
              <p className="text-sm font-serif font-semibold  text-gray-800">
                1
              </p>
              <button className="w-6 h-6 rounded-full py-0.5 px-0.5 bg-login-btn flex justify-center items-center cursor-pointer text-white">
                +
              </button>
            </div>
            <div>
              <span className="text-lg font-serif font-medium text-gray-700">
                $99
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartList;
