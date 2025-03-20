import React from "react";
import { Link } from "react-router-dom";
import { IoGrid } from "react-icons/io5";
import { GiExpense } from "react-icons/gi";
import { FaTruckFast } from "react-icons/fa6";
import { IoMdCloudUpload } from "react-icons/io";
import { BsFillBoxFill } from "react-icons/bs";
import { TbReportSearch } from "react-icons/tb";
import { SlGraph } from "react-icons/sl";
import { FaGear } from "react-icons/fa6";
import { RiLogoutCircleLine } from "react-icons/ri";

const AdminSideBar = () => {
  return (
    <>
      <aside className="w-full h-[100vh] overflow-x-hidden overflow-y-scroll flex flex-col scrollbar-hidden boxShadow">
        <div className="w-full h-24 flex justify-start items-center px-3 space-x-2">
          <img src="/Logo.jpg" alt="" className="rounded-full h-12 w-12" />
          <Link
            to="/dasboard/admin"
            className="text-2xl font-serif font-bold tracking-wide"
          >
            Vatika
          </Link>
        </div>
        <div className="w-full flex-1 py-5">
          <ul className="w-full h-full flex flex-col space-y-4 px-2">
            <li className="w-full flex justify-start items-center space-x-3 rounded-md py-2 px-1.5 boxShadowGradient cursor-pointer bg-dark-greenish-blue">
              <IoGrid size={20} className="text-muted-taupe" />
              <Link
                to="/dashboard/admin/"
                className="text-sm text-muted-taupe font-serif font-medium"
              >
                Overview
              </Link>
            </li>
            <li className="w-full flex justify-start items-center space-x-3 rounded-md py-2 px-1.5 boxShadowGradient cursor-pointer bg-dark-greenish-blue">
              <GiExpense size={20} className="text-muted-taupe" />
              <Link
                to="/dashboard/admin/expenses"
                className="text-sm text-muted-taupe font-serif font-medium"
              >
                Expenses
              </Link>
            </li>
            <li className="w-full flex justify-start items-center space-x-3 rounded-md py-2 px-1.5 boxShadowGradient cursor-pointer bg-dark-greenish-blue">
              <FaTruckFast size={20} className="text-muted-taupe" />
              <Link
                to="/dashboard/admin/order"
                className="text-sm text-muted-taupe font-serif font-medium"
              >
                Orders
              </Link>
            </li>
            <li className="w-full flex justify-start items-center space-x-3 rounded-md py-2 px-1.5 boxShadowGradient cursor-pointer bg-dark-greenish-blue">
              <IoMdCloudUpload size={20} className="text-muted-taupe" />
              <Link
                to="/dashboard/admin/upload"
                className="text-sm text-muted-taupe font-serif font-medium"
              >
                Upload
              </Link>
            </li>
            <li className="w-full flex justify-start items-center space-x-3 rounded-md py-2 px-1.5 boxShadowGradient cursor-pointer bg-dark-greenish-blue">
              <BsFillBoxFill size={20} className="text-muted-taupe" />
              <Link
                to="/dashboard/admin/stock"
                className="text-sm text-muted-taupe font-serif font-medium"
              >
                Stocks
              </Link>
            </li>
            <li className="w-full flex justify-start items-center space-x-3 rounded-md py-2 px-1.5 boxShadowGradient cursor-pointer bg-dark-greenish-blue">
              <TbReportSearch size={20} className="text-muted-taupe" />
              <Link
                to="/dashboard/admin/report"
                className="text-sm text-muted-taupe font-serif font-medium"
              >
                Reports
              </Link>
            </li>
            <li className="w-full flex justify-start items-center space-x-3 rounded-md py-2 px-1.5 boxShadowGradient cursor-pointer bg-dark-greenish-blue">
              <SlGraph size={20} className="text-muted-taupe" />
              <Link
                to="/dashboard/admin/analyse"
                className="text-sm text-muted-taupe font-serif font-medium"
              >
                Analytics
              </Link>
            </li>
            <li className="w-full flex justify-start items-center space-x-3 rounded-md py-2 px-1.5 boxShadowGradient cursor-pointer bg-dark-greenish-blue">
              <FaGear size={20} className="text-muted-taupe" />
              <Link
                to="/dashboard/admin/setting"
                className="text-sm text-muted-taupe font-serif font-medium"
              >
                Settings
              </Link>
            </li>
            <li className="w-full flex justify-start items-center space-x-3 rounded-md py-2 px-1.5 boxShadowGradient cursor-pointer bg-dark-greenish-blue">
              <RiLogoutCircleLine size={20} className="text-muted-taupe" />
              <Link
                to="/auth/logout"
                className="text-sm text-muted-taupe font-serif font-medium"
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default AdminSideBar;
