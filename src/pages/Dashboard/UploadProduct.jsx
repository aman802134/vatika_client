import React, { useState } from "react";
import { useForm } from "react-hook-form";
import api from "../../api/api";
import Toast from "../../components/Other/Toast";
import Spinner from "../../components/Other/Spiner";

const ProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data) => {
    setisLoading(true);
    // Form submission logic would be implemented here
    // console.log("Form Data:", data);
    // console.log("Image:", image
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    if (image) {
      formData.append("image", image);
    }
    try {
      const response = await api.post("/product/create-product", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if (response.status == 201) {
        reset();
        setImage(null);
        setImagePreview(null);
      } else {
        alert("Failed to add product.");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      reset();
      setisLoading(false);
    }
  };
  if (isLoading) {
    return <Spinner />;
  }
  <Toast />;
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-dark-greenish-blue py-4 px-6">
            <h2 className="text-xl font-bold text-gray-100">Add New Product</h2>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-6 space-y-6"
            encType="multipart/form-data"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-green-800"
                >
                  Product Name
                </label>
                <input
                  id="name"
                  {...register("name", {
                    required: "Product name is required",
                  })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-800 focus:border-green-800"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Type Field */}
              <div>
                <label
                  htmlFor="type"
                  className="block text-sm font-medium text-green-800"
                >
                  Product type
                </label>
                <select
                  id="type"
                  {...register("type", { required: "type is required" })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-800 focus:border-green-800"
                >
                  <option value="">Select a product type</option>
                  <option value="aquatic">aquatic</option>
                  <option value="desert">desert</option>
                  <option value="ornamental">ornamental</option>
                </select>
                {errors.category && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.category.message}
                  </p>
                )}
              </div>

              {/* Category Field */}
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-green-800"
                >
                  Category
                </label>
                <select
                  id="category"
                  {...register("category", {
                    required: "Category is required",
                  })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-800 focus:border-green-800"
                >
                  <option value="">Select a category</option>
                  <option value="indoor">indoor</option>
                  <option value="outdoor">outdoor</option>
                </select>
                {errors.category && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.category.message}
                  </p>
                )}
              </div>

              {/* Price Field */}
              <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-green-800"
                >
                  Price ($)
                </label>
                <input
                  type="number"
                  id="price"
                  {...register("price", {
                    required: "Price is required",
                    min: { value: 0, message: "Price must be positive" },
                    valueAsNumber: true,
                  })}
                  step="0.01"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-800 focus:border-green-800"
                />
                {errors.price && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.price.message}
                  </p>
                )}
              </div>

              {/* Quantity Field */}
              <div>
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-green-800"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  {...register("quantity", {
                    required: "Quantity is required",
                    min: { value: 1, message: "Quantity must be at least 1" },
                    valueAsNumber: true,
                  })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-800 focus:border-green-800"
                />
                {errors.quantity && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.quantity.message}
                  </p>
                )}
              </div>

              {/* Image Upload */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-green-800">
                  Product Image
                </label>
                <div className="mt-1 flex items-center space-x-6">
                  <div className="flex-shrink-0 h-32 w-32 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center overflow-hidden bg-gray-100">
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-gray-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor="file"
                      className="cursor-pointer inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-dark-green hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="-ml-1 mr-2 h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      Upload Image
                    </label>
                    <input
                      id="file"
                      name="image"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="sr-only"
                    />
                    <p className="mt-2 text-xs text-gray-500">
                      JPG, PNG or GIF up to 5MB
                    </p>
                  </div>
                </div>
              </div>

              {/* Description Field */}
              <div className="md:col-span-2">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-green-800"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  {...register("description", {
                    required: "Description is required",
                  })}
                  rows={4}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-800 focus:border-green-800"
                ></textarea>
                {errors.description && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.description.message}
                  </p>
                )}
              </div>
            </div>

            <div className="pt-4 flex justify-end border-t border-gray-200">
              <button
                type="button"
                className="mr-3 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-dark-green hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-dark-green hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800"
              >
                Save Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductForm;
