import React from "react";

const OrderList = () => {
  return (
    <>
      <div className="w-full py-2 px-3 grid grid-cols-6 rounded-md">
        <div className="flex flex-col space-y-3.5">
          <span className="text-lg font-serif font-medium text-gray-500">
            O-ID
          </span>
          <p className="text-sm font-serif font-light">#345</p>
        </div>
        <div className="flex flex-col space-y-3.5">
          <span className="text-lg font-serif font-medium text-gray-500">
            P-ID
          </span>
          <p className="text-sm font-serif font-light">#567</p>
        </div>
        <div className="flex flex-col space-y-3.5">
          <span className="text-lg font-serif font-medium text-gray-500">
            Name
          </span>
          <p className="text-sm font-serif font-light">Aman</p>
        </div>
        <div className="flex flex-col space-y-3">
          <span className="text-lg font-serif font-medium text-gray-500 ">
            Status
          </span>
          <div className="text-sm text-center font-serif font-light w-24 pr-5 py-1 rounded-2xl bg-amber-100 relative">
            <span className="">pending</span>
            <span className="w-4 h-4 rounded-full animate-pulse bg-amber-800 absolute right-1 top-[6px]"></span>
          </div>
        </div>
        <div className="flex flex-col space-y-3.5">
          <span className="text-lg font-serif font-medium text-gray-500">
            Date
          </span>
          <p className="text-sm font-serif font-light">20-3-25</p>
        </div>
        <div className="flex flex-col space-y-3.5">
          <span className="text-lg font-serif font-medium text-gray-500">
            Price
          </span>
          <p className="text-sm font-serif font-light">$59</p>
        </div>
      </div>
    </>
  );
};

export default OrderList;
