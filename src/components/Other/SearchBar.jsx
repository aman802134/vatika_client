import React from "react";
import { useForm } from "react-hook-form";

const SearchBar = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="w-full py-8 px-5">
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex"
        >
          <input
            type="search"
            name="search"
            id="search"
            {...register("search", { required: true })}
            placeholder="search your product"
            className="w-full py-1.5 px-2.5 rounded-l-2xl bg-amber-50 text-gray-900 text-sm font-serif font-medium border-none outline-none shadow"
          />
          <button
            onClick={onSubmit}
            className="px-3 py-1.5 rounded-r-2xl border-none outline-none shadow bg-login-btn text-white text-lg font-serif font-medium text-center cursor-pointer"
          >
            search
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
