import React from "react";
import Card from "../Other/Card";
import leaf4 from "/leaf_4.png";
import leaf5 from "/leaf_5.png";

const LatestProducts = () => {
  return (
    <section className="w-full pt-24 pb-20 px-3 md:px-18 lg:px-28 flex flex-col space-y-10 relative">
      <div className="hidden md:block absolute top-5 -right-5 z-20">
        <img
          src={leaf4}
          alt="branch with leafs"
          className="h-44 object-fill blur-[1px]"
        />
      </div>
      <div className="hidden md:block absolute top-10 -left-16 z-20">
        <img
          src={leaf5}
          alt="branch with leafs"
          className="h-48 object-fill blur-[1px] rotate-90"
        />
      </div>
      <h1 className="text-3xl md:text-4xl font-sans font-semibold tracking-wide">
        latest products
      </h1>
      <div className="w-full sm:grid grid-cols-2 lg:grid-cols-3 space-y-5">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default LatestProducts;
