import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

const ProductCard = ({ name, image }) => {
  return (
    <>
      <div className="w-[270px] min-w-[270px] h-auto bg-lightWhite rounded-2xl flex flex-col shadow">
        <div className="w-full h-full">
          <img
            src={image}
            alt="plant with pot"
            className="w-full h-auto bg-cover bg-center bg-no-repeat rounded-t-2xl"
          />
        </div>
        <div className="w-full flex flex-col px-4 py-2 space-y-2">
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
            <h1 className="font-Roboto_serif font-normal text-base tracking-wider  text-DarkGreen">
              {name}
            </h1>
          </div>
          <div>
            <span className="text-lg font-Roboto_serif font-medium text-BlackColor">
              ₹ 500
            </span>
          </div>
          <div className="w-full flex items-center space-x-2 py-4">
            <p className="text-xs text-DarkGreen font-Roboto_serif font-semibold bg-WheatColor rounded-full px-2 py-2">
              moderate water
            </p>
            <p className="text-xs text-lightWhite font-Roboto_serif font-semibold bg-blueMoonShell rounded-full px-2 py-2">
              indirect light
            </p>
          </div>
          <div className="w-full pb-2">
            <button className="w-full outline-none border-none bg-orange text-white px-4 py-2 rounded-full text-center font-Roboto_serif font-normal tracking-wider">
              <Link to="/cart">Add to basket</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
