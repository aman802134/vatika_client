import React from "react";
import { useForm } from "react-hook-form";
import { IoSearch } from "react-icons/io5";

const AdminSearchBar = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="w-full">
      <form action="" onSubmit={handleSubmit(onSubmit)} className="w-full">
        <input
          type="search"
          name="search"
          id="search"
          {...register("search", { required: true })}
          placeholder="search your product"
          className="w-1/4 py-1.5 px-8 rounded-md text-gray-900 text-sm font-serif font-medium border-none outline-none shadow absolute"
        />
        <IoSearch className="relative left-2 top-2" />
      </form>
    </div>
  );
};

export default AdminSearchBar;
