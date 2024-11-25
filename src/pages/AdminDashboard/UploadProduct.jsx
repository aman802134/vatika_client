import { MdCloudUpload } from "react-icons/md";
// import { useState } from "react";

const UploadProduct = () => {
  // const [file, setFile] = useState();
  // const [input, setInput] = useState();
  // const handleFile = (e) => {
  //   setFile(e.target.files[0]);
  // };
  // const handleInput = (e) => {
  //   setInput(e.target.value);
  // };
  // const handleOnSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(file, input);
  // };
  return (
    <>
      <div className="w-full h-full flex flex-col justify-start items-center px-5 py-3 space-y-8">
        <div className="w-full flex justify-start items-center">
          <h1 className="font-Roboto_serif font-medium text-DarkGreen text-xl">
            Upload new Products
          </h1>
        </div>
        <div className="w-8/12 py-3 px-3 rounded-md bg-lightWhite shadow2">
          <form
            action="/upload/create-product"
            method="post"
            encType="multipart/form-data"
            className="w-full flex flex-col space-y-5"
          >
            <div className="w-full h-40 flex justify-center items-center py-10 px-10 border-4 rouonded-md border-dotted bg-blue-50 ">
              <label htmlFor=""></label>
              <input type="file" name="image" id="fileUpload" className="" />
              <MdCloudUpload className="text-6xl cursor-pointer" />
            </div>
            <div className="w-full px-5 space-y-1">
              <label
                htmlFor=""
                className="font-Roboto_serif font-medium text-lg tracking-wider text-DarkGreen"
              >
                Enter your product name
              </label>
              <input
                type="text"
                name="productName"
                id="productName"
                className="w-full py-3 px-2 rounded-md outline-none border-none shadow"
              />
            </div>
            <div className="w-full flex flex-col px-5 space-y-1">
              <label
                htmlFor=""
                className="font-Roboto_serif font-medium text-lg tracking-wider text-DarkGreen"
              >
                Enter product category
              </label>
              <select
                name="category"
                id="category"
                className="w-full py-3 px-2 rounded-md outline-none border-none shadow"
              >
                <option
                  value="flower"
                  className="font-Roboto_serif font-normal text-base"
                >
                  Flowers
                </option>
                <option
                  value="flower"
                  className="font-Roboto_serif font-normal text-base"
                >
                  Fruits Plants
                </option>
                <option
                  value="flower"
                  className="font-Roboto_serif font-normal text-base"
                >
                  Show Plants
                </option>
              </select>
            </div>
            <div className="w-full px-5 space-y-1">
              <label
                htmlFor=""
                className="font-Roboto_serif font-medium text-lg tracking-wider text-DarkGreen"
              >
                Enter product price
              </label>
              <input
                type="text"
                name="price"
                id="price"
                className="w-full py-3 px-2 rounded-md outline-none border-none shadow"
              />
            </div>
            <div className="w-full px-5 space-y-1">
              <label
                htmlFor=""
                className="font-Roboto_serif font-medium text-lg tracking-wider text-DarkGreen"
              >
                Enter your product quantity
              </label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                className="w-full py-3 px-2 rounded-md outline-none border-none shadow"
              />
            </div>
            <div className="w-full px-5 space-y-1">
              <label
                htmlFor=""
                className="font-Roboto_serif font-medium text-lg tracking-wider text-DarkGreen"
              >
                Enter your product description
              </label>
              <input
                type="text"
                name="description"
                id="description"
                className="w-full py-3 px-2 rounded-md outline-none border-none shadow"
              />
            </div>
            <div className="w-full px-5">
              <button
                type="submit"
                className="w-32 py-3 px-2 rounded-md bg-DarkGreen text-white font-Roboto_serif font-medium text-lg tracking-wider"
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UploadProduct;
