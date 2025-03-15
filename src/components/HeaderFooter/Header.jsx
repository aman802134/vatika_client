import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/Logo.jpg";
import Profile from "./Profile";
import { AiOutlineMenu } from "react-icons/ai";
import MobileNav from "./MobileNav";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleClick = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <>
      <header className="w-full h-16 grid grid-cols-[10%_80%] md:grid-cols-[50%_20%_30%] lg:grid-cols-3 items-center py-1.5">
        <div className="w-10 md:hidden">
          <div className="px-2.5 cursor-pointer">
            <AiOutlineMenu size={30} className="" onClick={handleClick} />
          </div>
        </div>
        {toggleMenu && <MobileNav toggle={handleClick} />}
        <div className="w-full hidden md:block px-2.5">
          <ul className="flex items-center space-x-4">
            <li className="py-1 rounded-full px-3 bg-auth-light">
              <Link to="/about" className="font-mono text-lg text-white">
                About
              </Link>
            </li>
            <li className="py-1 rounded-full px-3 bg-auth-light">
              <Link to="/services" className="font-mono text-lg text-white">
                Services
              </Link>
            </li>
            <li className="py-1 rounded-full px-3 bg-auth-light">
              <Link to="/products" className="font-mono text-lg text-white">
                Products
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full flex justify-center items-center space-x-1.5 pr-10 md:pr-0">
          <img
            src={Logo}
            alt="plant image"
            className="w-12 h-12 rounded-full"
          />
          <Link to="/" className="font-serif font-bold text-2xl tracking-wide">
            Vatika
          </Link>
        </div>
        <div className="w-full hidden md:flex justify-end items-center space-x-5 px-2.5">
          <div>
            <button className="py-1 rounded-full px-5 bg-auth-light transition-colors hover:bg-login-btn">
              <Link to="/auth/login" className="font-mono text-lg text-white">
                Login
              </Link>
            </button>
          </div>
          <div>
            <div className="group/profile">
              <div className="cursor-pointer">
                <img
                  src={Logo}
                  alt="profile"
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <div className="translate-x-44 opacity-0 transition-all hidden group-hover/profile:-translate-x-0 group-hover/profile:block group-hover/profile:opacity-100">
                <Profile />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
