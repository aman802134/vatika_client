import React from "react";
import { Link } from "react-router-dom";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { IoSettings } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";

const Profile = () => {
  return (
    <div className="w-48 h-56 absolute right-3 rounded-xl bg-amber-50 drop-shadow-sm">
      <ul className="w-full h-full px-1 py-1.5 flex flex-col justify-between items-center ">
        <li className="w-full flex items-center space-x-1.5 py-1.5 px-2.5 rounded-xl shadow-2xs cursor-pointer">
          <RiAccountCircleFill size={20} />
          <Link to="/profile" className="font-mono font-light text-lg">
            Profile
          </Link>
        </li>
        <li className="w-full flex items-center space-x-1.5 py-1.5 px-2.5 rounded-xl shadow-2xs cursor-pointer">
          <FaCartShopping size={20} />
          <Link to="/carts" className="font-mono font-light text-lg">
            Carts
          </Link>
        </li>
        <li className="w-full flex items-center space-x-1.5 py-1.5 px-2.5 rounded-xl shadow-2xs cursor-pointer">
          <BiSolidPurchaseTag size={20} />
          <Link to="/orders" className="font-mono font-light text-lg">
            Orders
          </Link>
        </li>
        <li className="w-full flex items-center space-x-1.5 py-1.5 px-2.5 rounded-xl shadow-2xs cursor-pointer">
          <IoSettings size={20} />
          <Link to="/setting" className="font-mono font-light text-lg">
            Setting
          </Link>
        </li>
        <li className="w-full flex items-center space-x-1.5 py-1.5 px-2.5 rounded-xl shadow-2xs cursor-pointer">
          <RiLogoutCircleLine size={20} />
          <Link to="/logout" className="font-mono font-light text-lg">
            logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
