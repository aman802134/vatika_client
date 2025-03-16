import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <button className="px-3 md:px-5 py-1.5 rounded-full border-[1px] border-login-btn">
      <Link
        to="/products"
        className="text-gray-900 text-lg font-mono font-light"
      >
        See all
      </Link>
    </button>
  );
};

export default Button;
