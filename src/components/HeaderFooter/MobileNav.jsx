import React from "react";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
import { BiLogOut, BiSolidPurchaseTag } from "react-icons/bi";
import { IoSettings } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { FaTruckFast } from "react-icons/fa6";
import { PiPottedPlantFill } from "react-icons/pi";

const MobileNav = ({ toggle }) => {
  return (
    <>
      <nav className="w-2/3 lg:w-1/4 h-[100vh] bg-auth-light fixed z-40 top-0 left-0">
        <div className="w-full flex justify-start items-center py-2.5 px-2 bg-auth">
          <RxCross1
            size={40}
            className="cursor-pointer px-3 py-3 bg-gray-300 rounded-full"
            onClick={toggle}
          />
        </div>
        <ul className="w-full h-full overflow-y-scroll bg-amber-50 flex flex-col space-y-8 py-14">
          <li className="w-full flex items-center space-x-1.5 py-1.5 px-2.5 shadow-2xs cursor-pointer">
            <IoHome size={20} />
            <Link to="/" className="font-mono font-light text-lg text-gray-900">
              Home
            </Link>
          </li>
          <li className="w-full flex items-center space-x-1.5 py-1.5 px-2.5 shadow-2xs cursor-pointer">
            <FaTruckFast size={20} />
            <Link
              to="/services"
              className="font-mono font-light text-lg text-gray-900"
            >
              services
            </Link>
          </li>
          <li className="w-full flex items-center space-x-1.5 py-1.5 px-2.5 shadow-2xs cursor-pointer">
            <PiPottedPlantFill size={20} />
            <Link
              to="/products"
              className="font-mono font-light text-lg text-gray-900"
            >
              products
            </Link>
          </li>
          <li className="w-full flex items-center space-x-1.5 py-1.5 px-2.5 shadow-2xs cursor-pointer">
            <RiAccountCircleFill size={20} />
            <Link
              to="/profile"
              className="font-mono font-light text-lg text-gray-900"
            >
              Profile
            </Link>
          </li>
          <li className="w-full flex items-center space-x-1.5 py-1.5 px-2.5 shadow-2xs cursor-pointer">
            <FaCartShopping size={20} />
            <Link
              to="/carts"
              className="font-mono font-light text-lg text-gray-900"
            >
              Carts
            </Link>
          </li>
          <li className="w-full flex items-center space-x-1.5 py-1.5 px-2.5 shadow-2xs cursor-pointer">
            <BiSolidPurchaseTag size={20} />
            <Link
              to="/orders"
              className="font-mono font-light text-lg text-gray-900"
            >
              Orders
            </Link>
          </li>
          <li className="w-full flex items-center space-x-1.5 py-1.5 px-2.5 shadow-2xs cursor-pointer">
            <IoSettings size={20} />
            <Link
              to="/setting"
              className="font-mono font-light text-lg text-gray-900"
            >
              Setting
            </Link>
          </li>
          <li className="w-full flex items-center space-x-1.5 py-1.5 px-2.5 shadow-2xs cursor-pointer">
            <BiLogOut size={20} />
            <Link
              to="/setting"
              className="font-mono font-light text-lg text-gray-900"
            >
              logout
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobileNav;
