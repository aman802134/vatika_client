import React from "react";
import Button from "../Other/Button";
import Card2 from "../Other/Card2";
import leaf6 from "/leaf_6.png";
import leaf7 from "/leaf_7.png";

const OurCollection = () => {
  return (
    <section className="w-full pt-24 pb-20 px-3 md:px-18 lg:px-10 flex flex-col space-y-10 relative bg-light-green">
      <div className="hidden md:block absolute -top-8 -left-5 z-20">
        <img src={leaf6} alt="branch with leafs" className="h-48 object-fill" />
      </div>
      <div className="hidden md:block absolute -top-0 right-0.5 z-20">
        <img
          src={leaf7}
          alt="branch with leafs"
          className="h-56 w-96 object-fill"
        />
      </div>
      <div className="w-full flex justify-between md:px-4 md:justify-center md:space-x-8 items-center lg:px-5">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-sans font-semibold tracking-wide">
          Our Collections
        </h1>
        <div>
          <Button />
        </div>
      </div>
      <div className="w-full sm:grid grid-cols-2 lg:grid-cols-3 xl:flex xl:space-x-5 xl:overflow-x-scroll xl:overflow-y-hidden space-y-5 px-5 scrollbar-hidden">
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
      </div>
    </section>
  );
};

export default OurCollection;
