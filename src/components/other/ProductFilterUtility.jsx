const ProductFilterUtility = () => {
  return (
    <>
      <aside className="w-full h-full flex flex-col space-y-3 p-5 px-4">
        <div className="w-full">
          <h1 className="font-Roboto_serif font-normal text-2xl tracking-wide text-DarkGreen">
            Filter Products by :
          </h1>
        </div>
        <div className="py-4 px-3 flex flex-col space-y-2 shadow">
          <div className="flex flex-col items-center justify-start">
            <div className="w-full">
              <h1 className="font-Young_serif font-normal text-base tracking-wide text-DarkGreen">
                Filter By Price :
              </h1>
            </div>
            <div className="flex flex-col space-y-5 py-2">
              <div className="w-full flex justify-start items-center space-x-5">
                <input
                  type="checkbox"
                  name="firstRange"
                  id="firstRange"
                  className="w-5 h-5"
                />
                <label
                  htmlFor="firstRange"
                  className="text-xl font-Young_serif font-normal tracking-wide text-DarkGreen"
                >
                  ₹50 - ₹100
                </label>
              </div>
              <div className="w-full flex justify-center items-center space-x-5">
                <input
                  type="checkbox"
                  name="firstRange"
                  id="firstRange"
                  className="w-5 h-5"
                />
                <label
                  htmlFor="firstRange"
                  className="text-xl font-Young_serif font-normal tracking-wide text-DarkGreen"
                >
                  ₹100 - ₹200
                </label>
              </div>
              <div className="w-full flex justify-center items-center space-x-5">
                <input
                  type="checkbox"
                  name="firstRange"
                  id="firstRange"
                  className="w-5 h-5"
                />
                <label
                  htmlFor="firstRange"
                  className="text-xl font-Young_serif font-normal tracking-wide text-DarkGreen"
                >
                  ₹200 - ₹300
                </label>
              </div>
              <div className="w-full flex justify-center items-center space-x-5">
                <input
                  type="checkbox"
                  name="firstRange"
                  id="firstRange"
                  className="w-5 h-5"
                />
                <label
                  htmlFor="firstRange"
                  className="text-xl font-Young_serif font-normal tracking-wide text-DarkGreen"
                >
                  ₹300 - ₹400
                </label>
              </div>
              <div className="w-full flex justify-center items-center space-x-5">
                <input
                  type="checkbox"
                  name="firstRange"
                  id="firstRange"
                  className="w-5 h-5"
                />
                <label
                  htmlFor="firstRange"
                  className="text-xl font-Young_serif font-normal tracking-wide text-DarkGreen"
                >
                  ₹400 - ₹500
                </label>
              </div>
              <div className="w-full flex justify-center items-center space-x-5">
                <input
                  type="checkbox"
                  name="firstRange"
                  id="firstRange"
                  className="w-5 h-5"
                />
                <label
                  htmlFor="firstRange"
                  className="text-xl font-Young_serif font-normal tracking-wide text-DarkGreen"
                >
                  ₹500 - ₹600
                </label>
              </div>
              <div className="w-full flex justify-center items-center space-x-5">
                <input
                  type="checkbox"
                  name="firstRange"
                  id="firstRange"
                  className="w-5 h-5"
                />
                <label
                  htmlFor="firstRange"
                  className="text-xl font-Young_serif font-normal tracking-wide text-DarkGreen"
                >
                  ₹600 - ₹700
                </label>
              </div>
              <div className="w-full flex justify-center items-center space-x-5">
                <input
                  type="checkbox"
                  name="firstRange"
                  id="firstRange"
                  className="w-5 h-5"
                />
                <label
                  htmlFor="firstRange"
                  className="text-xl font-Young_serif font-normal tracking-wide text-DarkGreen"
                >
                  ₹700 - ₹800
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4 px-3 flex flex-col space-y-2 shadow">
          <div className="flex flex-col items-center justify-start">
            <div className="w-full">
              <h1 className="font-Young_serif font-normal text-base tracking-wide text-DarkGreen">
                Filter By Category :
              </h1>
            </div>
            <div className="flex flex-col space-y-5 py-2">
              <div className="w-full flex justify-start items-center space-x-5">
                <input
                  type="checkbox"
                  name="firstRange"
                  id="firstRange"
                  className="w-5 h-5"
                />
                <label
                  htmlFor="firstRange"
                  className="text-xl font-Young_serif font-normal tracking-wide text-DarkGreen"
                >
                  Flower
                </label>
              </div>
              <div className="w-full flex justify-start items-center space-x-5">
                <input
                  type="checkbox"
                  name="firstRange"
                  id="firstRange"
                  className="w-5 h-5"
                />
                <label
                  htmlFor="firstRange"
                  className="text-xl font-Young_serif font-normal tracking-wide text-DarkGreen"
                >
                  Fruits
                </label>
              </div>
              <div className="w-full flex justify-start items-center space-x-5">
                <input
                  type="checkbox"
                  name="firstRange"
                  id="firstRange"
                  className="w-5 h-5"
                />
                <label
                  htmlFor="firstRange"
                  className="text-xl font-Young_serif font-normal tracking-wide text-DarkGreen"
                >
                  Show Plant
                </label>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default ProductFilterUtility;
