import React from "react";
import leaf2 from "/leaf_5.png";
import { MdStar } from "react-icons/md";
import { MdStarHalf } from "react-icons/md";
import { Link } from "react-router-dom";

const SingleProduct = () => {
  return (
    <>
      <section className="w-full grid grid-cols-1 md:grid-cols-2 bg-amber-50">
        <div className="w-full py-10 px-2 flex flex-col relative">
          <div className=" bg-lime-green rounded-b-full h-96 w-72 md:absolute md:top-0 md:left-1/2 md:transform md:-translate-x-1/2 z-10"></div>
          <div>
            <img
              src={leaf2}
              alt="branch with leaf"
              className="absolute bottom-10 sm:bottom-40 left-1/2 transform -translate-x-1/2 h-80 z-20"
            />
          </div>
        </div>
        <div className="w-full py-10 px-10 bg-white">
          <div className="w-full flex flex-col space-y-10">
            <div className="space-y-2.5">
              <h1 className="text-3xl font-serif font-bold tracking-wide">
                Jacaranda mimosifolia
              </h1>
              <h2 className="text-xl font-mono font-medium tracking-wide">
                Deciduous subtropical tree
              </h2>
              <span className="flex space-x-1">
                <MdStar size={20} className="text-yellow-300" />
                <MdStar size={20} className="text-yellow-300" />
                <MdStar size={20} className="text-yellow-300" />
                <MdStarHalf size={20} className="text-yellow-300" />
              </span>
              <p className="text-sm text-gray-800 font-mono font-normal tracking-wide flex flex-col space-y-2.5">
                <span className="text-sm text-gray-900 font-mono font-semibold">
                  Detail:
                </span>
                <span className="text-balance w-2/2">
                  Jacaranda mimosifolia, commonly known as the Jacaranda tree,
                  is a deciduous subtropical tree renowned for its striking
                  display of lavender-blue or purple trumpet-shaped flowers
                </span>
                <Link
                  to="/detail"
                  className="text-sm  text-gray-900 font-mono font-semibold underline"
                >
                  view detail
                </Link>
              </p>
            </div>
            <div className="w-full md:flex justify-start items-center space-y-5 md:space-x-8">
              <span className="flex justify-center items-center space-x-5">
                <button className="w-10 h-10 rounded-full text-center border-2 bg-auth-light text-white text-lg cursor-pointer">
                  -
                </button>
                <p className="text-xl font-mono font-bold">1</p>
                <button className="w-10 h-10 rounded-full text-center border-2 bg-auth-light text-white text-lg cursor-pointer">
                  +
                </button>
              </span>
              <span className="w-full">
                <button className="w-full py-2.5 px-1.5 bg-login-btn rounded-sm">
                  <Link
                    to="/add-to-cart"
                    className="text-lg text-white font-serif font-bold "
                  >
                    Add to cart
                  </Link>
                </button>
              </span>
            </div>
            <div className="w-full py-2.5">
              <button className="w-full py-2.5 px-1.5 rounded-sm border-2 border-login-btn">
                <Link
                  to="/buy-now"
                  className="text-lg text-gray-900 font-serif font-bold "
                >
                  Buy now
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
