import React from "react";
import { Link, Outlet } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { GiShoppingBag } from "react-icons/gi";
import { RiSearchEyeLine } from "react-icons/ri";
import { RiLogoutCircleLine } from "react-icons/ri";

const Account = () => {
  return (
    <>
      <main className="w-full h-screen px-10 py-5">
        <div className="w-full h-[80vh] flex justify-center items-center boxShadow rounded-md overflow-hidden">
          <aside className="w-64 h-full bg-dark-green rounded-2xl flex flex-col space-y-5">
            <div className="w-full h-20 flex justify-start items-center rounded-b-2xl shadow-xl p-3 space-x-1.5">
              <div className="w-14 h-14 rounded-full bg-light_beige flex justify-center items-center">
                <h1 className="bg-light-green text-2xl font-serif font-semibold">
                  AP
                </h1>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="text-lg font-serif font-medium text-white">
                  Aman pandey
                </span>
                <span className="text-sm font-serif font-medium text-white">
                  10:27:60
                </span>
              </div>
            </div>
            <div className="px-2 pb-4 h-full flex flex-col justify-between items-center ">
              <ul className="w-full h-full flex flex-col space-y-3">
                <li className="w-full flex justify-start items-center space-x-2.5 border-l-4 border-[1px] border-white px-1.5 py-1.5 rounded-sm cursor-pointer">
                  <IoPerson size={20} className="text-white" />
                  <Link
                    to="/account/"
                    className="text-sm text-white font-serif font-bold"
                  >
                    Profile
                  </Link>
                </li>
                <li className="w-full flex justify-start items-center space-x-2.5 border-l-4 border-[1px] border-white px-1.5 py-1.5 rounded-sm cursor-pointer">
                  <GiShoppingBag size={20} className="text-white" />
                  <Link
                    to="/account/orders"
                    className="text-sm text-white font-serif font-bold"
                  >
                    My orders
                  </Link>
                </li>
                <li className="w-full flex justify-start items-center space-x-2.5 border-l-4 border-[1px] border-white px-1.5 py-1.5 rounded-sm cursor-pointer">
                  <RiSearchEyeLine size={20} className="text-white" />
                  <Link
                    to="/account/recent-view"
                    className="text-sm text-white font-serif font-bold"
                  >
                    Recent view
                  </Link>
                </li>
                <li className="w-full flex justify-start items-center space-x-2.5 border-l-4 border-[1px] border-white px-1.5 py-1.5 rounded-sm cursor-pointer">
                  <FaLocationDot size={20} className="text-white" />
                  <Link
                    to="/account"
                    className="text-sm text-white font-serif font-bold"
                  >
                    Delivery address
                  </Link>
                </li>
              </ul>
              <div className="w-full flex justify-start items-center space-x-2.5 border-l-4 border-[1px] border-white px-1.5 py-1.5 rounded-sm cursor-pointer">
                <RiLogoutCircleLine size={20} className="text-white" />
                <Link
                  to="/logout"
                  className="text-sm text-white font-serif font-bold"
                >
                  Logout
                </Link>
              </div>
            </div>
          </aside>
          <section className="flex-1">
            <Outlet />
          </section>
        </div>
      </main>
    </>
  );
};

export default Account;
