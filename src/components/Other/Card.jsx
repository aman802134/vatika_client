import React from "react";
import coverImg from "/Courrousel.jpg";
import { FaRegHeart } from "react-icons/fa";
import { MdStar } from "react-icons/md";
import { MdStarHalf } from "react-icons/md";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <>
      <div className="w-56 flex flex-col rounded-2xl shadow-md bg-amber-50">
        <div className="w-full relative ">
          <img
            src={coverImg}
            alt="a green plant with pot"
            className="w-full rounded-t-2xl object-cover aspect-[2/2]"
          />
          <span className="absolute top-2 right-2.5 py-1.5 px-1.5 rounded-xl bg-red-300 animate-pulse">
            <FaRegHeart className="text-red-700 cursor-pointer " />
          </span>
        </div>
        <div className="w-full flex flex-col py-2.5 px-3.5">
          <h1 className="text-xl font-mono font-medium">Meemosa peudica</h1>
          <span className="flex space-x-1">
            <MdStar size={20} className="text-yellow-300" />
            <MdStar size={20} className="text-yellow-300" />
            <MdStar size={20} className="text-yellow-300" />
            <MdStarHalf size={20} className="text-yellow-300" />
          </span>
          <div className="w-full flex justify-between items-center py-1.5">
            <div className="flex flex-col">
              <span className="text-xs text-gray-800 font-mono font-light">
                Price:
              </span>
              <span className="text-lg text-gray-600 font-mono font-medium">
                $20
              </span>
            </div>
            <div>
              <button className="px-4 py-2 bg-login-btn rounded-tl-2xl rounded-br-2xl">
                <Link
                  to="/product-detail/:id"
                  className="text-sm text-white font-mono font-medium"
                >
                  view product
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
