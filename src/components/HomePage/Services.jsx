import React from "react";
import { FaTruckFast } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";
import { PiPottedPlantFill } from "react-icons/pi";
import { AiFillDollarCircle } from "react-icons/ai";

const Services = () => {
  return (
    <>
      <div className="w-full">
        <div className="w-full flex justify-center items-center py-10">
          <h1 className="text-4xl font-sans font-semibold">Our services</h1>
        </div>
        <div className="w-full pb-10 px-10 flex justify-between items-center flex-wrap-reverse">
          <div className="w-72 h-44 py-2.5 px-2.5 rounded-lg shadow-xl space-y-1.5 bg-light-green">
            <span className="flex  items-center space-x-4 ">
              <FaTruckFast size={40} className="text-login-btn" />
              <p className="text-lg text-login-btn font-sans font-bold">
                Fast Service
              </p>
            </span>
            <p className="text-xs text-gray-900 font-mono font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              obcaecati iste possimus est sint, nam veniam facere voluptatum
              reprehenderit illo dolorum, ducimus quas debitis pariatur sapiente
              atque a accusamus rem.
            </p>
          </div>
          <div className="w-72 h-44 py-2.5 px-2.5 rounded-lg shadow-xl space-y-1.5 bg-light-green">
            <span className="flex  items-center space-x-4 ">
              <MdSupportAgent size={40} className="text-login-btn" />
              <p className="text-lg text-login-btn font-sans font-bold">
                Fast Service
              </p>
            </span>
            <p className="text-xs text-gray-900 font-mono font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              obcaecati iste possimus est sint, nam veniam facere voluptatum
              reprehenderit illo dolorum, ducimus quas debitis pariatur sapiente
              atque a accusamus rem.
            </p>
          </div>
          <div className="w-72 h-44 py-2.5 px-2.5 rounded-lg shadow-xl space-y-1.5 bg-light-green">
            <span className="flex  items-center space-x-4 ">
              <PiPottedPlantFill size={40} className="text-login-btn" />
              <p className="text-lg text-login-btn font-sans font-bold">
                Fast Service
              </p>
            </span>
            <p className="text-xs text-gray-900 font-mono font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              obcaecati iste possimus est sint, nam veniam facere voluptatum
              reprehenderit illo dolorum, ducimus quas debitis pariatur sapiente
              atque a accusamus rem.
            </p>
          </div>
          <div className="w-72 h-44 py-2.5 px-2.5 rounded-lg shadow-xl space-y-1.5 bg-light-green">
            <span className="flex  items-center space-x-4 ">
              <AiFillDollarCircle size={40} className="text-login-btn" />
              <p className="text-lg text-login-btn font-sans font-bold">
                Fast Service
              </p>
            </span>
            <p className="text-xs text-gray-900 font-mono font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              obcaecati iste possimus est sint, nam veniam facere voluptatum
              reprehenderit illo dolorum, ducimus quas debitis pariatur sapiente
              atque a accusamus rem.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
