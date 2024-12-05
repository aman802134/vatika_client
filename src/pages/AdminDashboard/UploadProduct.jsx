import { MdCloudUpload } from "react-icons/md";
// import { useState } from "react";
// import ApiService from "../../customHooks/useApiRequestHandler";
import { useForm } from "react-hook-form";
import axios from "axios";
// const api = axios.create({
//   baseURL: "http://localhost:4000",
// });

const UploadProduct = () => {
  // const [file, setFile] = useState();
  // const [input, setInput] = useState();
  // const [data, setData] = useState();
  // console.log(data);
  const {
    register,
    handleSubmit,
    watch,
    // formState: { errors },
  } = useForm();
  // console.log(data);
  console.log(watch("image"));
  // const createProduct = async (data) => {
  //   console.log(data);
  //   console.log(data.image);
  //   console.log(data.image.FileList.length);
  //   // const formData = new FormData();
  //   // formData.append("name", data.name);
  //   // formData.append("category", data.category);
  //   // formData.append("quantity", data.quantity);
  //   // formData.append("description", data.description);
  //   // formData.append("price", data.price);
  //   // formData.append("image", data.image[0]);
  //   // console.log(formData.name);

  //   // try {
  //   //   const response = await axios.post(
  //   //     "http://localhost:4000/upload/create-product",
  //   //     formData
  //   //   );
  //   //   console.log(response.data);
  //   // } catch (error) {
  //   //   console.error(error);
  //   // }
  // };
  const onSubmit = async (data) => {
    console.log(data.image);
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);
    console.log(formData, "image added succesfully");
    formData.append("name", data.name);
    formData.append("category", data.category);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("quantity", data.quantity);

    // Send the formData to the server
    const response = await axios.post(
      "http://localhost:4000/upload/create-product",
      formData
    );
    console.log(response.data);
  };

  // const upload = ApiService.CreateProduct(setData);
  // console.log(upload);

  // console.log(upload);
  // const handleFile = (e) => {
  //   setFile(e.target.files[0]);
  // };
  // const handleInput = (e) => {
  //   setInput(e.target.value);
  // };
  // const handleOnSubmit = (e) => {
  //   e.preventDefault();
  //   // console.log(file, input);
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
            onSubmit={handleSubmit(onSubmit)}
            method="post"
            encType="multipart/form-data"
            className="w-full flex flex-col space-y-5"
          >
            <div className="w-full h-40 flex justify-center items-center py-10 px-10 border-4 rouonded-md border-dotted bg-blue-50 ">
              <label htmlFor=""></label>
              <input
                type="file"
                name="image"
                id="fileUpload"
                {...register("image")}
                className=""
              />
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
                name="name"
                id="productName"
                {...register("name")}
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
              {/* <select
                name="category"
                id="category"
                {...register("category")}
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
              </select> */}
              <input
                type="text"
                name="category"
                id="category"
                {...register("category")}
                className="w-full py-3 px-2 rounded-md outline-none border-none shadow"
              />
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
                {...register("price")}
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
                {...register("quantity")}
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
                {...register("description")}
                className="w-full py-3 px-2 rounded-md outline-none border-none shadow"
              />
            </div>
            <div className="w-full px-5">
              <button
                // onClick={handleOnSubmit}
                type="submit"
                name="upload"
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
