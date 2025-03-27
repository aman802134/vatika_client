import React from "react";
import Card from "../Other/Card";

const LatestProducts = () => {
  return (
    <section className="w-full pt-24 pb-20 px-10 md:px-18 lg:px-20 flex flex-col space-y-10 relative">
      <h1 className="text-3xl md:text-4xl font-sans font-semibold tracking-wide">
        latest products
      </h1>
      <div className="w-full grid gap-2.5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default LatestProducts;
