import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { GrDeliver } from "react-icons/gr";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";

const Profile = () => {
  return (
    <>
      <div className="w-12 h-12 bg-ButtonBg rounded-full flex items-center justify-center py-2 px-4 group/profileSection cursor-pointer">
        <h3 className="text-2xl font-Young_serif font-medium text-BlackColor">
          AP
        </h3>
        <div className="absolute top-16 right-5 w-50 h-60 bg-lightWhite rounded-2xl p-5 invisible group-hover/profileSection:visible">
          <ul className="flex flex-col space-y-4 w-full">
            <li>
              <Link className="flex space-x-2 items-center ">
                <MdDashboard className="text-xl" />
                <span className="text-lg font-Roboto_serif font-medium">
                  Dashboard
                </span>
              </Link>
            </li>
            <li>
              <Link className="flex space-x-2 items-center">
                <FaShoppingCart className="text-xl" />
                <span className="text-lg font-Roboto_serif font-medium">
                  Your cart
                </span>
              </Link>
            </li>
            <li>
              <Link className="flex space-x-2 items-center">
                <GrDeliver className="text-xl" />
                <span className="text-lg font-Roboto_serif font-medium">
                  Your Orders
                </span>
              </Link>
            </li>
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
      </div>
    </>
  );
};

export default Profile;
