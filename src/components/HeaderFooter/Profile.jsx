import React from "react";
import { Link } from "react-router-dom";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { IoSettings } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";

const Profile = () => {
  return (
    <div className="w-full h-full  flex flex-col space-y-5 justify-center items-center ">
      <div className="w-full flex justify-center items-center">
        <h1 className="text-3xl font-serif font-semibold tracking-wide">
          Good Evening ! Aman
        </h1>
      </div>
      <form className="relative boxShadow p-8 w-4/5 rounded-md">
        <div className="absolute top-0 right-0">Edit</div>
        <div className="w-full flex justify-between items-center space-y-10">
          <div className="flex flex-col space-y-1">
            <label htmlFor="name" className="text-sm font-serif font-medium">
              UserName
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Aman"
              readOnly
              className="text-lg font-serif font-semibold outline-none border-none bg-light_beige rounded-md px-4 py-1.5"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="name" className="text-sm font-serif font-medium">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="paman0486@gmail.com"
              readOnly
              className="text-lg font-serif font-semibold outline-none border-none bg-light_beige rounded-md px-4 py-1.5"
            />
          </div>
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col space-y-1">
            <label htmlFor="name" className="text-sm font-serif font-medium">
              Contact number
            </label>
            <input
              type="text"
              name="contact"
              id="contact"
              placeholder=""
              readOnly
              className="text-lg font-serif font-semibold outline-none border-none bg-light_beige rounded-md px-4 py-1.5"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="name" className="text-sm font-serif font-medium">
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Patna"
              readOnly
              className="text-lg font-serif font-semibold outline-none border-none bg-light_beige rounded-md px-4 py-1.5"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-1.5 py-5">
          <h1 className="text-sm font-serif font-medium">Gender</h1>
          <div className="flex space-x-5 justify-start items-center">
            <div className="flex justify-center items-center space-x-1.5">
              <input
                type="radio"
                name="gender"
                id="gender"
                className="text-lg font-serif font-semibold outline-none border-none bg-light_beige rounded-md px-4 py-1.5"
              />
              <label htmlFor="gender">Male</label>
            </div>
            <div className="flex justify-center items-center space-x-1.5">
              <input
                type="radio"
                name="gender"
                id="gender"
                className="text-lg font-serif font-semibold outline-none border-none bg-light_beige rounded-md px-4 py-1.5"
              />
              <label htmlFor="gender">female</label>
            </div>
            <div className="flex justify-center items-center space-x-1.5">
              <input
                type="radio"
                name="gender"
                id="gender"
                className="text-lg font-serif font-semibold outline-none border-none bg-light_beige rounded-md px-4 py-1.5"
              />
              <label htmlFor="gender">Other</label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
