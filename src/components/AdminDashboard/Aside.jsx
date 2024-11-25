import { Link } from "react-router-dom";
import image from "/plant.jpg";
import { MdDashboard } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { MdCloudUpload } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";

const Aside = () => {
  return (
    <>
      <aside className="w-60 h-[100vh] max-h-[100vh] shadow2 px-3 overflow-x-hidden overflow-y-scroll webkitScroller">
        <div className="flex items-center">
          <Link to="/" className="logo flex items-center space-x-2">
            <img src={image} alt="plantSvg" width={30} height={30} />
            <h1 className="text-2xl text-BlackColor font-Young_serif font-medium tracking-wide ">
              Vatika
            </h1>
          </Link>
        </div>
        <div className="w-full py-8">
          <ul className="w-full h-full flex flex-col space-y-5">
            <li className="w-full flex items-center space-x-2 rounded-md shadow2 py-2 px-2">
              <MdDashboard className="text-xl" />
              <Link
                to="/dashboard/admin"
                className="font-Roboto_serif font-normal text-base tracking-wide text-DarkGreen"
              >
                Overview
              </Link>
            </li>
            <li className="w-full flex items-center space-x-2 rounded-md shadow2 py-2 px-2">
              <p className="text-xl">₹</p>
              <Link
                to="expenses"
                className="font-Roboto_serif font-normal text-base tracking-wide text-DarkGreen"
              >
                Expenses
              </Link>
            </li>
            <li className="w-full flex items-center space-x-2 rounded-md shadow2 py-2 px-2">
              <MdOutlineProductionQuantityLimits className="text-xl" />
              <Link
                to="/dashboard/admin/totalProducts"
                className="font-Roboto_serif font-normal text-base tracking-wide text-DarkGreen"
              >
                Total Products
              </Link>
            </li>
            <li className="w-full flex items-center space-x-2 rounded-md shadow2 py-2 px-2">
              <MdOutlineProductionQuantityLimits className="text-xl" />
              <Link
                to="/dashboard/admin/sales"
                className="font-Roboto_serif font-normal text-base tracking-wide text-DarkGreen"
              >
                Total Sales
              </Link>
            </li>
            <li className="w-full flex items-center space-x-2 rounded-md shadow2 py-2 px-2">
              <TbTruckDelivery className="text-xl" />
              <Link
                to="/dashboard/admin/totalOrders"
                className="font-Roboto_serif font-normal text-base tracking-wide text-DarkGreen"
              >
                Total Orders
              </Link>
            </li>
            <li className="w-full flex items-center space-x-2 rounded-md shadow2 py-2 px-2">
              <MdCloudUpload className="text-xl" />
              <Link
                to="/dashboard/admin/upload"
                className="font-Roboto_serif font-normal text-base tracking-wide text-DarkGreen"
              >
                Upload
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full h-20 py-2 px-3 rounded-md shadow">
          <ul className="w-full h-full flex flex-col justify-between space-y-2">
            <li>
              <Link className="flex space-x-2 items-center">
                <IoSettings className="text-xl" />
                <span className="text-lg font-Roboto_serif font-medium">
                  Settings
                </span>
              </Link>
            </li>
            <li>
              <Link className="flex space-x-2 items-center">
                <FiLogOut className="text-xl" />
                <span className="text-lg font-Roboto_serif font-medium">
                  Logout
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Aside;
