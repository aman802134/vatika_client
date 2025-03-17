import React from "react";
import { MdStar } from "react-icons/md";
import { MdStarHalf } from "react-icons/md";
// import leaf5 from "/leaf_5.png";

const ProductLeftAside = () => {
  return (
    <>
      <aside className="w-full h-[100vh] overflow-x-hidden overflow-y-scroll scrollbar-hidden py-5 shadow rounded-xl">
        <h1 className="text-lg font-sans font-semibold px-5 py-5">Filter</h1>
        <div className="w-full h-full flex flex-col py-4 space-y-3">
          <div className="w-full flex flex-col space-y-2 shadow px-5 py-3">
            <h3 className="text-lg font-serif font-semibold ">category</h3>
            <ul className="w-full space-y-1.5">
              <li className="w-full flex justify-start items-center space-x-2 ">
                <input
                  type="checkbox"
                  name="indoor"
                  id="indoor"
                  className="rounded-md accent-auth-light py-1.5 px-1.5 w-4 h-4"
                />
                <span className="text-base font-serif font-medium text-gray-900">
                  Indoor
                </span>
              </li>
              <li className="w-full flex justify-start items-center space-x-2 ">
                <input
                  type="checkbox"
                  name="Outdoor"
                  id="Outdoor"
                  className="rounded-md accent-auth-light py-1.5 px-1.5 w-4 h-4"
                />
                <span className="text-base font-serif font-medium text-gray-900">
                  Outdoor
                </span>
              </li>
              <li className="w-full flex justify-start items-center space-x-2 ">
                <input
                  type="checkbox"
                  name="Aquatic"
                  id="Aquatic"
                  className="rounded-md accent-auth-light py-1.5 px-1.5 w-4 h-4"
                />
                <span className="text-base font-serif font-medium text-gray-900">
                  Aquatic
                </span>
              </li>
              <li className="w-full flex justify-start items-center space-x-2 ">
                <input
                  type="checkbox"
                  name="Apartments"
                  id="Apartments"
                  className="rounded-md accent-auth-light py-1.5 px-1.5 w-4 h-4"
                />
                <span className="text-base font-serif font-medium text-gray-900">
                  Apartments
                </span>
              </li>
              <li className="w-full flex justify-start items-center space-x-2 ">
                <input
                  type="checkbox"
                  name="Gardening"
                  id="Gardening"
                  className="rounded-md accent-auth-light py-1.5 px-1.5 w-4 h-4"
                />
                <span className="text-base font-serif font-medium text-gray-900">
                  Gardening
                </span>
              </li>
              <li className="w-full flex justify-start items-center space-x-2 ">
                <input
                  type="checkbox"
                  name="Desert"
                  id="Desert"
                  className="rounded-md accent-auth-light py-1.5 px-1.5 w-4 h-4"
                />
                <span className="text-base font-serif font-medium text-gray-900">
                  Desert
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full py-5 px-5 flex flex-col space-x-3 shadow">
            <h2 className="text-lg font-serif font-semibold ">Price Range</h2>
            <input type="range" name="range" id="" min="0" max="100" />
          </div>
          <div className="w-full py-5 px-5 flex flex-col space-y-2.5 shadow">
            <h2 className="text-lg font-serif font-semibold ">Rating</h2>
            <span className="flex justify-start items-center space-x-1">
              <MdStar size={25} className="text-yellow-500" />
              <MdStar size={25} className="text-yellow-500" />
              <MdStar size={25} className="text-yellow-500" />
              <MdStarHalf size={25} className="text-yellow-500" />
              above
            </span>
          </div>
          <div className="w-full py-5 px-5">
            <div className="relative w-full max-w-md rounded-lg overflow-hidden">
              {/* Background container with the gradient overlay */}
              <div
                className="relative w-full aspect-[2/1] bg-cover bg-center rounded-lg overflow-hidden"
                style={{
                  backgroundImage: `url('/leaf_6.png')`, // Replace with your actual image in production
                }}
              >
                {/* Green gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-100/80"></div>

                {/* Content container */}
                <div className="relative z-10 h-full flex flex-col justify-center p-6">
                  {/* Main text content */}
                  <h2 className="text-white font-serif font-bold text-2xl">
                    Off 50%
                  </h2>

                  <p className="text-white font-serif font-medium mb-4">
                    Summer Campaign
                  </p>

                  {/* Call to action button */}
                  <div className="flex items-center">
                    <button className="text-white text-sm font-serif font-medium flex items-center cursor-pointer">
                      Watch Now
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default ProductLeftAside;
