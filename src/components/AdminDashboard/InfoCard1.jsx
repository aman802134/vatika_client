import React from "react";
import { Link } from "react-router-dom";

const InfoCard1 = () => {
  return (
    <>
      <div className="w-sm h-36 rounded-md boxShadow bg-center bg-cover flex justify-between py-3 bg-dark-greenish-blue">
        <div className="px-5 space-y-1.5">
          <span className="text-gray-400 text-sm font-serif font-medium">
            sold
          </span>
          <h1 className="text-white text-xl font-serif font-bold">
            Total plants sold
          </h1>
          <span className="flex space-x-8">
            <p className="text-white text-2xl font-serif font-bold">5450</p>
            <p className="text-gray-300 text-sm font-serif font-medium flex justify-center items-center underline">
              <Link to="/dashboard/admin/stock">Sells</Link>
            </p>
          </span>
        </div>
        <div className="w-[6rem]">
          <img src="/Nataliya.png" alt="" className="aspect-[3/4]" />
        </div>
      </div>
    </>
  );
};

export default InfoCard1;
