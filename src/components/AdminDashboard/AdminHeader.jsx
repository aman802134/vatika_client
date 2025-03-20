import React from "react";
import AdminSearchBar from "./AdminSearchBar";
import { IoMdNotificationsOutline } from "react-icons/io";

const AdminHeader = () => {
  return (
    <>
      <header className="w-full h-18 shadow-2xs flex justify-between items-center px-5">
        <AdminSearchBar />
        <div className="w-full flex justify-end items-center space-x-4">
          <div className="w-10 h-10 rounded-md flex justify-center items-center boxShadowGradient">
            <IoMdNotificationsOutline size={25} className="cursor-pointer" />
          </div>
          <div className="flex justify-center items-center space-x-1.5">
            <span className="w-14 h-12 rounded-full boxShadowGradient bg-center bg-cover">
              <img
                src="/person.jpg"
                alt=""
                className="rounded-full aspect-[2/2]"
              />
            </span>
            <span className="flex flex-col">
              <h3 className="text-xl font-serif font-semibold">
                Welcome, Aman
              </h3>
              <h4 className="flex justify-start">
                <span className="text-sm font-serif font-normal text-gray-500">
                  admin
                </span>
              </h4>
            </span>
          </div>
        </div>
      </header>
    </>
  );
};

export default AdminHeader;
