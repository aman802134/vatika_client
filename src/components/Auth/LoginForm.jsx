import { Link } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";

const LoginForm = () => {
  return (
    <>
      <div className="w-full h-full py-5 px-10">
        <div className="w-9/12  bg-BodyColor px-10 py-5 rounded-md shadow">
          <form className=" space-y-4">
            <div className="w-full">
              <h1 className="font-Roboto_serif font-bold text-xl text-DarkGreen">
                LOGIN...
              </h1>
            </div>
            <div className="w-full h-full flex flex-col space-y-8">
              <div className="flex items-center relative">
                <label htmlFor="email"></label>
                <MdOutlineMail className="absolute left-2 top-1/2 -translate-y-1/2 text-2xl text-DarkGreen" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="enter your registered email"
                  required
                  className="w-11/12 p-3  border-b-2 border-DarkGreen rounded-md outline-none px-10 text-sm font-Roboto_serif font-medium text-DarkGreen"
                />
              </div>
              <div className="flex items-center relative">
                <label htmlFor="password"></label>
                <RiLockPasswordLine className="absolute left-2 top-1/2 -translate-y-1/2 text-2xl text-DarkGreen" />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="enter your password"
                  required
                  className="w-11/12 p-3  border-b-2 border-DarkGreen rounded-md outline-none px-10 text-sm font-Roboto_serif font-medium text-DarkGreen"
                />
              </div>
            </div>
            <div className="w-full py-10 px-3">
              <button className=" w-11/12 py-2 px-2 bg-DarkGreen rounded-full outline-none border-none font-Roboto_serif font-medium text-lg text-lightWhite">
                <Link to="/">Login</Link>
              </button>
            </div>
            <div className="w-full py-2 px-3">
              <button className=" w-11/12 py-2 px-2 bg-lightWhite rounded-full outline-none border-none font-Roboto_serif font-medium text-lg text-DarkGreen flex items-center space-x-2">
                <FcGoogle className="text-3xl" />
                <Link to="/firebase">Sign in with Google</Link>
              </button>
            </div>
            <div className="">
              <div className="w-full">
                <div className="flex space-x-2">
                  <span>don&apos;t have account yet ?</span>
                  <Link to="/auth/register" className="underline">
                    create new account
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
