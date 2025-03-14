import React from "react";
import { Outlet } from "react-router-dom";
import svg from "/nature.svg";
const AuthLayout = () => {
  return (
    <>
      <section className="w-full grid grid-cols-1 md:grid-cols-2 overflow-y-hidden bg-auth">
        <aside className="w-full h-full hidden md:flex md:h-[100vh]">
          <img
            src={svg}
            alt="nature svg"
            className="w-full h-full md:h-10/12"
          />
        </aside>
        <Outlet />
      </section>
    </>
  );
};

export default AuthLayout;
