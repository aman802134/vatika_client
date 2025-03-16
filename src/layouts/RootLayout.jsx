import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/HeaderFooter/Header";
import Footer from "../components/HeaderFooter/Footer";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
