import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "/Logo.jpg";
import { RiMenu2Line } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
import MobileNav from "./MobileNav";
import Cart from "../../components/HomePage/Cart";
import { IoPerson } from "react-icons/io5";
import { useAuth } from "../../customHooks/useAuth";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);
  const { data, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleAuth = () => {
    if (!data) {
      navigate("/auth/login");
    } else {
      navigate("/account");
    }
  };
  const handleClick = () => {
    setToggleMenu(!toggleMenu);
  };
  const handleCartToggle = () => {
    setToggleCart(!toggleCart);
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <header className="w-full h-16 flex justify-between items-center py-1.5 rounded-lg overflow-hidden">
        <div className="flex justify-center items-center space-x-2">
          <div className="px-2.5 cursor-pointer">
            <RiMenu2Line size={30} onClick={handleClick} />
          </div>
          <div className="flex justify-center items-center space-x-1.5">
            <img
              src={Logo}
              alt="plant image"
              className=" w-12 h-12 rounded-full"
            />
            <Link
              to="/"
              className="font-serif font-bold text-2xl tracking-wide"
            >
              Vatika
            </Link>
          </div>
          {toggleMenu && <MobileNav toggle={handleClick} />}
        </div>
        {toggleCart && <Cart value={handleCartToggle} />}
        <div className="flex items-center space-x-5 px-5">
          <Link onClick={handleAuth} to="/account" className="cursor-pointer">
            <IoPerson size={25} />
          </Link>
          <button className="cursor-pointer" onClick={handleCartToggle}>
            <FaCartShopping size={25} className="text-login-btn" />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
