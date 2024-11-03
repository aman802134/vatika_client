import {
  createBrowserRouter,
  RouterProvider,
  // Link,
} from "react-router-dom";
import Root_layout from "../layout/Root_layout";
import HomePage from "../pages/Home/HomePage";
import ProductPage from "../pages/Product/ProductPage";
import Auth_layout from "../layout/Auth_layout";
import LoginPage from "../pages/Auth/LoginPage";
import RegisterPage from "../pages/Auth/RegisterPage";
import AdminDashboard_layout from "../layout/AdminDashboard_layout";
import AdminHome from "../pages/AdminDashboard/AdminHome";
import Expenses from "../pages/AdminDashboard/Expenses";
import TotalOrders from "../pages/AdminDashboard/TotalOrders";
import UploadProduct from "../pages/AdminDashboard/UploadProduct";
import Products from "../pages/AdminDashboard/Products";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root_layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/products",
          element: <ProductPage />,
        },
      ],
    },
    {
      path: "/auth",
      element: <Auth_layout />,
      children: [
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
      ],
    },
    {
      path: "/dashboard/admin",
      element: <AdminDashboard_layout />,
      children: [
        {
          index: true,
          element: <AdminHome />,
        },
        {
          path: "expenses",
          element: <Expenses />,
        },
        {
          path: "totalOrders",
          element: <TotalOrders />,
        },
        {
          path: "totalProducts",
          element: <Products />,
        },
      ],
    },
    {
      path: "/dashboard/admin/upload",
      element: <UploadProduct />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Router;
