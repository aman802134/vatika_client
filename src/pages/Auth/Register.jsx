import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "../../api/api";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Register = () => {
  const schema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const response = await api.post("/auth/register", data);
      if (response.status === 201) {
        navigate("/auth/login");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="w-full h-[100vh] flex flex-col lg:px-10 lg:py-10">
        <div className="py-3 px-5">
          <h1 className=" font-mono font-bold text-3xl">Welcome,</h1>
          <p className="text-sm font-mono font-light">
            Register yourself to get started...
          </p>
        </div>
        <div className="w-full h-full px-5 py-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col bg-light-green p-5 space-y-8 md:space-y-10 rounded-lg"
          >
            <div>
              <label htmlFor="name"></label>
              <input
                type="text"
                name="name"
                id="name"
                {...register("name", { required: true })}
                placeholder="Enter your full name"
                className="w-full border-b-2 border-gray-400 outline-none py-1.5 font-mono font-medium text-sm md:text-[16px]"
              />
              {errors.name && (
                <span className="text-red-500 text-sm font-mono">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div>
              <label htmlFor="email"></label>
              <input
                type="email"
                name="email"
                id="email"
                {...register("email", { required: true })}
                placeholder="Enter your email"
                className="w-full border-b-2 border-gray-400 outline-none py-1.5 font-mono font-medium text-sm md:text-[16px]"
              />
              {errors.email && (
                <span className="text-red-500 text-sm font-mono">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div>
              <label htmlFor="password"></label>
              <input
                type="password"
                name="password"
                id="password"
                {...register("password", { required: true })}
                placeholder="Enter your password"
                className="w-full border-b-2 border-gray-400 outline-none py-1.5 font-mono font-medium text-sm md:text-[16px]"
              />
              {errors.password && (
                <span className="text-red-500 text-sm font-mono">
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className="flex flex-col space-y-2">
              <div>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full rounded-xl font-serif font-bold text-xl text-white bg-login-btn py-1.5 cursor-pointer"
                >
                  Register
                </button>
              </div>
              <div className="text-center">
                <p className="text-sm font-light font-mono">
                  Already have an account?
                  <Link to="/auth/login" className="underline">
                    Login
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

export default Register;
