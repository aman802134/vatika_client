import React from "react";

const Toast = ({ value }) => {
  return (
    <>
      <div className="w-56 h-12 py-1.5 px-1.5 rounded-md bg-pinkish-cream border-b-2 border-dark-green flex justify-center items-center absolute top-0 right-0 transition-all duration-1000">
        <h1 className="text-sm font-medium font-serif">{value}</h1>
      </div>
    </>
  );
};

export default Toast;
