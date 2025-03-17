import React, { useState } from "react";

const ProductRightAside = () => {
  const [care, setCare] = useState("easy");
  const [light, setLight] = useState("medium");
  const [size, setSize] = useState("small");
  return (
    <>
      <div className="w-full h-full flex flex-col space-y-6 pb-5">
        <div className="bg-green-50 rounded-lg p-4 shadow-sm">
          <h3 className="text-lg font-semibold text-green-800 mb-2">
            Featured Plant
          </h3>
          <div className="flex flex-col items-center">
            <div className="relative w-full h-48 mb-3">
              <div className="absolute inset-0 bg-white rounded-lg flex items-center justify-center">
                <img
                  src="/Courrousel.jpg"
                  alt="Monstera Deliciosa"
                  className="h-40 object-cover"
                />
              </div>
              <div className="absolute top-2 right-2 bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                Best Seller
              </div>
            </div>
            <h4 className="font-medium">Monstera Deliciosa</h4>
            <div className="flex items-center my-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className={`w-4 h-4 ${
                    star <= 4 ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-xs ml-1 text-gray-600">(126)</span>
            </div>
            <div className="font-semibold text-green-700">₹1,299</div>
            <button className="mt-3 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition">
              View Details
            </button>
          </div>
        </div>
        <div className="bg-green-50 rounded-lg p-4 shadow-sm">
          <h3 className="text-lg font-semibold text-green-800 mb-3">
            Plant Finder
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Find the perfect plant for your space
          </p>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Care Level
              </label>
              <select
                value={care}
                onChange={(e) => setCare(e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 bg-white p-2 text-sm"
              >
                <option value="easy">Easy Care</option>
                <option value="medium">Medium Care</option>
                <option value="expert">Expert Care</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Light Needs
              </label>
              <select
                value={light}
                onChange={(e) => setLight(e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 bg-white p-2 text-sm"
              >
                <option value="low">Low Light</option>
                <option value="medium">Medium Light</option>
                <option value="bright">Bright Light</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Plant Size
              </label>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 bg-white p-2 text-sm"
              >
                <option value="small">Small (Under 30cm)</option>
                <option value="medium">Medium (30-60cm)</option>
                <option value="large">Large (Over 60cm)</option>
              </select>
            </div>

            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition">
              Find Plants
            </button>
          </div>
        </div>
        <div className="bg-green-50 rounded-lg p-4 shadow-sm">
          <h3 className="text-lg font-semibold text-green-800 mb-3">
            Recently Viewed
          </h3>

          <div className="space-y-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex items-center space-x-3 border-b border-gray-200 pb-3 last:border-0"
              >
                <div className="w-16 h-16 bg-white rounded flex items-center justify-center">
                  <img
                    src="/Logo.jpg"
                    alt={`Plant ${item}`}
                    className="h-12 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium">Ficus Elastica</h4>
                  <div className="flex items-center my-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`w-3 h-3 ${
                          star <= 4 ? "text-yellow-400" : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-sm font-semibold text-green-700">
                    ₹899
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductRightAside;
