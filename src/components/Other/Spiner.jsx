import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-16 h-16 border-4 border-green-500 border-dashed rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
