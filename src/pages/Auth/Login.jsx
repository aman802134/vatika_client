import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "../../api/api";
import { useQueryClient } from "@tanstack/react-query";

const Login = () => {
  const queryClient = useQueryClient();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await api.post("/auth/login", data);
      const token = response.data;
      console.log(token);
      if (response.status === 201) {
        queryClient.invalidateQueries({ queryKey: ["auth"] });
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="w-full h-[100vh] flex flex-col lg:px-10 lg:py-10">
        <div className="py-3 px-5">
          <h1 className=" font-mono font-bold text-3xl">Welcome back,</h1>
          <p className="text-sm font-mono font-light">
            Login to your account to continue...
          </p>
        </div>
        <div className="w-full h-full px-5 py-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col bg-auth-light p-5 space-y-8 md:space-y-10 rounded-lg"
          >
            <div>
              <label htmlFor="email"></label>
              <input
                type="email"
                name="email"
                id="email"
                {...register("email", { required: true })}
                placeholder="Enter your registerd email"
                className="w-full border-b-2 border-gray-400 outline-none py-1.5 font-mono font-medium text-sm md:text-[16px]"
              />
            </div>
            <div>
              <label htmlFor="password"></label>
              <input
                type="password"
                name="password"
                id="password"
                {...register("password", { required: true })}
                placeholder="Enter your registerd password"
                className="w-full border-b-2 border-gray-400 outline-none py-1.5 font-mono font-medium text-sm md:text-[16px]"
              />
              <div className="flex justify-between items-center py-1.5">
                <div className="flex justify-center items-center space-x-1">
                  <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    className="w-4 h-4"
                  />
                  <label
                    htmlFor="remember"
                    className="text-[12px] md:text-sm font-light font-mono"
                  >
                    Remember me
                  </label>
                </div>
                <Link
                  to="/forgot-password"
                  className="text-[12px] md:text-sm font-light font-mono"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col space-y-3">
                <button
                  type="submit"
                  onClick={onSubmit}
                  className="w-full rounded-xl font-serif font-bold text-xl text-white bg-login-btn py-1.5 cursor-pointer"
                >
                  Login
                </button>
                <p className="text-sm font-light font-mono">
                  Don't have an account?
                  <Link to="/auth/register" className="underline">
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
