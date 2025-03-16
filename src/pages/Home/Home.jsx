import React from "react";
import Courrousell from "../../components/HomePage/Courrousell";
import LatestProducts from "../../components/HomePage/LatestProducts";
import OurCollection from "../../components/HomePage/OurCollection";
import SingleProduct from "../../components/HomePage/SingleProduct";
// import { useAuth } from "../../customHooks/useAuth";
const Home = () => {
  return (
    <>
      <Courrousell />
      <LatestProducts />
      <OurCollection />
      <SingleProduct />
    </>
  );
};

export default Home;
