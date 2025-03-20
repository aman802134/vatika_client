import React from "react";
import { Link } from "react-router-dom";

const InfoCard4 = () => {
  return (
    <div className="w-sm h-36 rounded-md boxShadow bg-center bg-cover flex justify-between py-3 bg-pinkish-cream">
      <div className="px-5 space-y-1.5">
        <span className="text-dark-green text-sm font-serif font-medium">
          orders
        </span>
        <h1 className="text-dark-green text-xl font-serif font-bold">
          Total Orders
        </h1>
        <span className="flex space-x-8">
          <p className="text-dark-green text-2xl font-serif font-bold">6709</p>
          <p className="text-dark-green text-sm font-serif font-medium flex justify-center items-center underline">
            <Link to="/dashboard/admin/stock">Orders</Link>
          </p>
        </span>
      </div>
      <div className="w-[6.5rem]">
        <img src="/Bonsai.png" alt="" className="aspect-[3/4]" />
      </div>
    </div>
  );
};

export default InfoCard4;
