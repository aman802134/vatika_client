import React from "react";
import ProductLeftAside from "../../components/Other/ProductLeftAside";
import SearchBar from "../../components/Other/SearchBar";
import Card from "../../components/Other/Card";
// import Button from "../../components/Other/Button";
import ProductRightAside from "../../components/Other/ProductRightAside";

const Products = () => {
  return (
    <>
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-[40%_70%] lg:grid-cols-[20%_60%_20%]">
        <ProductLeftAside />
        <main className="w-full h-[100vh] overflow-x-hidden overflow-y-scroll scrollbar-hidden">
          <div className="w-2/2 md:pl-5 md:pr-24">
            <SearchBar />
          </div>
          <div className="w-full px-10 py-5 grid grid-cols-1 lg:grid-cols-2 gap-1.5">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </main>
        <aside className="w-full h-[100vh] overflow-x-hidden overflow-y-scroll rounded-md shadow scrollbar-hidden">
          <ProductRightAside />
        </aside>
      </div>
    </>
  );
};

export default Products;
