import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { IoMdPerson } from "react-icons/io";
import ApiRequestService from "../../customHooks/useApiRequestHandler";
const RegisterForm = () => {
  // const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(input);
  };
  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const register = ApiRequestService.useRegister(input);
  console.log(register);
  return (
    <>
      <div className="w-full h-full py-5 px-10">
        <div className="w-9/12  bg-BodyColor px-10 py-5 rounded-md shadow">
          <form onSubmit={handleSubmit} className=" space-y-4">
            <div className="w-full">
              <h1 className="font-Roboto_serif font-bold text-xl text-DarkGreen">
                Create your new account
              </h1>
            </div>
            <div className="w-full h-full flex flex-col space-y-8">
              <div className="flex items-center relative">
                <label htmlFor="username"></label>
                <IoMdPerson className="absolute left-2 top-1/2 -translate-y-1/2 text-2xl text-DarkGreen" />
                <input
                  onChange={handleInput}
                  type="text"
                  name="name"
                  placeholder="enter your  username"
                  required
                  className="w-11/12 p-3  border-b-2 border-DarkGreen rounded-md outline-none px-10 text-sm font-Roboto_serif font-medium text-DarkGreen"
                />
              </div>
              <div className="flex items-center relative">
                <label htmlFor="email"></label>
                <MdOutlineMail className="absolute left-2 top-1/2 -translate-y-1/2 text-2xl text-DarkGreen" />
                <input
                  onChange={handleInput}
                  type="email"
                  name="email"
                  placeholder="enter your email"
                  required
                  className="w-11/12 p-3  border-b-2 border-DarkGreen rounded-md outline-none px-10 text-sm font-Roboto_serif font-medium text-DarkGreen"
                />
              </div>
              <div className="flex items-center relative">
                <label htmlFor="password"></label>
                <RiLockPasswordLine className="absolute left-2 top-1/2 -translate-y-1/2 text-2xl text-DarkGreen" />
                <input
                  onChange={handleInput}
                  type="password"
                  name="password"
                  placeholder="enter your password"
                  required
                  className="w-11/12 p-3  border-b-2 border-DarkGreen rounded-md outline-none px-10 text-sm font-Roboto_serif font-medium text-DarkGreen"
                />
              </div>
            </div>
            <div className="w-full py-10 px-3">
              <button
                type="submit"
                onClick={handleInput}
                className=" w-11/12 py-2 px-2 bg-DarkGreen rounded-full outline-none border-none font-Roboto_serif font-medium text-lg text-lightWhite"
              >
                Register
              </button>
            </div>
            <div className="w-full flex justify-center items-center">
              <span className="text-sm font-Roboto_serif font-normal text-gray-400 py-2">
                Or sign up using
              </span>
            </div>
            <div className="w-full py-2 px-3">
              <button className=" w-11/12 py-2 px-2 bg-lightWhite rounded-full outline-none border-none font-Roboto_serif font-medium text-lg text-DarkGreen flex items-center space-x-2">
                <FcGoogle className="text-3xl" />
                <Link to="">Sign in with Google</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
