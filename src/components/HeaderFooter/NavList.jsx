import React from "react";

const NavList = () => {
  return (
    <div>
      <li className="w-full flex items-center space-x-1.5 py-1.5 px-2.5 shadow-2xs cursor-pointer">
        <IoHome size={20} />
        <Link to="/" className="font-mono font-light text-lg text-">
          Home
        </Link>
      </li>
    </div>
  );
};

export default NavList;
