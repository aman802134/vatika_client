import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
const NewProductCard = () => {
  return (
    <>
      <div className="w-[250px] min-w-[250px] h-auto bg-lightWhite rounded-2xl flex flex-col shadow">
        <div className="w-full h-full">
          <img
            src="/plant.jpg"
            alt="plant with pot"
            className="w-full h-auto bg-cover bg-center bg-no-repeat rounded-t-2xl"
          />
        </div>
        <div className="flex flex-col px-4 py-2 space-y-4">
          <div className="flex items-center justify-between">
            <span className="flex items-center space-x-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <CiStar />
              4.5
            </span>
            <span>
              <CiHeart className="text-2xl cursor-pointer" />
            </span>
          </div>
          <div className="w-full">
            <h1 className="font-Roboto_serif font-normal text-base tracking-wider text-DarkGreen">
              Lucky jade plant
            </h1>
          </div>
          <div>
            <span className="text-lg font-Roboto_serif font-medium text-BlackColor">
              ₹ 500
            </span>
          </div>
          <div className="w-full flex justify-between items-center px-2">
            <button className="outline-none border-none ">
              <Link
                to="/products"
                className="font-Roboto_serif font-thin text-base text-BlackColor bg-ButtonBg
                px-2 py-1 rounded-full "
              >
                Cart
              </Link>
            </button>
            <button className="outline-none border-none px-2 py-1">
              <Link
                to="/products"
                className="font-Roboto_serif font-thin text-base text-lightWhite bg-orange
                px-2 py-1 rounded-full"
              >
                Detail
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewProductCard;
