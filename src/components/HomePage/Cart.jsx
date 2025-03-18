import React from "react";
import { RxCross1 } from "react-icons/rx";
import CartList from "./CartList";
import { Link } from "react-router-dom";

const Cart = ({ value }) => {
  return (
    <>
      <aside className="w-8/9 lg:w-96 fixed right-0 top-0 bg-auth space-y-5 z-50  px-5 py-5 overflow-hidden">
        <div className="w-full flex justify-between items-center py-3.5 px-5 bg-auth-light">
          <h1 className="text-lg text-white font-serif font-medium">Cart</h1>
          <RxCross1
            onClick={value}
            size={30}
            className="cursor-pointer bg-gray-300 py-1.5 px-1.5 rounded-full hover:animate-spin"
          />
        </div>
        <div className="w-full space-y-2.5 h-[18rem] lg:overflow-y-scroll overflow-x-hidden scrollbar-hidden">
          <CartList />
          <CartList />
          <CartList />
          <CartList />
          <CartList />
          <CartList />
        </div>
        <div className="w-full shadow bg-white">
          <button className="py-3 px-4 w-full bg-auth-light">
            <Link
              to="/buy"
              className="text-lg text-white font-serif font-medium"
            >
              Buy now
            </Link>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Cart;
