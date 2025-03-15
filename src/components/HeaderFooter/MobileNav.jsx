import React from "react";
import { ImCross } from "react-icons/im";
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
      <nav className="w-xs h-[100vh] md:hidden bg-amber-300 absolute z-20 top-0">
        <div className="w-xs flex justify-end items-center py-2.5 pr-2.5 fixed bg-amber-300">
          <ImCross
            size={30}
            className="cursor-pointer"
            onClick={toggle}
          ></ImCross>
        </div>
        <ul className="w-full h-full overflow-y-scroll bg-amber-100 flex flex-col space-y-8 py-14">
          <li className="w-full flex items-center space-x-1.5 py-1.5 px-2.5 rounded-xl shadow-2xs cursor-pointer bg-red-300">
            <IoHome size={20} />
            <Link to="/" className="font-mono font-light text-lg">
              Home
            </Link>
          </li>
          <li className="w-full flex items-center space-x-1.5 py-1.5 px-2.5 rounded-xl shadow-2xs cursor-pointer bg-red-300">
            <FaTruckFast size={20} />
            <Link to="/services" className="font-mono font-light text-lg">
              services
            </Link>
          </li>
          <li className="w-full flex items-center space-x-1.5 py-1.5 px-2.5 rounded-xl shadow-2xs cursor-pointer bg-red-300">
            <PiPottedPlantFill size={20} />
            <Link to="/products" className="font-mono font-light text-lg">
              products
            </Link>
          </li>
          <li className="w-full flex items-center space-x-1.5 py-1.5 px-2.5 rounded-xl shadow-2xs cursor-pointer bg-red-300">
            <RiAccountCircleFill size={20} />
            <Link to="/profile" className="font-mono font-light text-lg">
              Profile
            </Link>
          </li>
          <li className="w-full flex items-center space-x-1.5 py-1.5 px-2.5 rounded-xl shadow-2xs cursor-pointer bg-red-300">
            <FaCartShopping size={20} />
            <Link to="/carts" className="font-mono font-light text-lg">
              Carts
            </Link>
          </li>
          <li className="w-full flex items-center space-x-1.5 py-1.5 px-2.5 rounded-xl shadow-2xs cursor-pointer bg-red-300">
            <BiSolidPurchaseTag size={20} />
            <Link to="/orders" className="font-mono font-light text-lg">
              Orders
            </Link>
          </li>
          <li className="w-full flex items-center space-x-1.5 py-1.5 px-2.5 rounded-xl shadow-2xs cursor-pointer bg-red-300">
            <IoSettings size={20} />
            <Link to="/setting" className="font-mono font-light text-lg">
              Setting
            </Link>
          </li>
          <li className="w-full flex items-center space-x-1.5 py-1.5 px-2.5 rounded-xl shadow-2xs cursor-pointer bg-red-300">
            <BiLogOut size={20} />
            <Link to="/setting" className="font-mono font-light text-lg">
              logout
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobileNav;
