import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import RootLayout from "./layouts/RootLayout";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import DashboardLayout from "./layouts/DashboardLayout";
import Home from "./pages/Home/Home";
import { AuthContextProvider } from "./context/AuthContextProvider";
import ProtectedRoute from "./context/ProtectedRoute";
import Products from "./pages/Home/Products";
import ProductDetail from "./pages/Home/ProductDetail";
import Account from "./pages/Home/Account";
import OverView from "./pages/Dashboard/OverView";
import ProductStocks from "./pages/Dashboard/ProductStocks";
import UploadProduct from "./pages/Dashboard/UploadProduct";
import Profile from "./components/HeaderFooter/Profile";

const App = () => {
  const querryClient = new QueryClient();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/account",
          element: <ProtectedRoute />,
          children: [
            {
              element: <Account />,
              children: [
                {
                  index: true,
                  element: <Profile />,
                },
                {
                  path: "orders",
                  element: <Profile />,
                },
                {
                  path: "recent-view",
                  element: <Profile />,
                },
                {
                  path: "delivery-address",
                  element: <Profile />,
                },
              ],
            },
          ],
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/product-detail/:id",
          element: <ProductDetail />,
        },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
    {
      path: "/dashboard/admin",
      element: <ProtectedRoute adminOnly={true} />,
      children: [
        {
          element: <DashboardLayout />,
          children: [
            {
              index: true,
              element: <OverView />,
            },
            {
              path: "stock",
              element: <ProductStocks />,
            },
            {
              path: "upload",
              element: <UploadProduct />,
            },
          ],
        },
      ],
    },
    {
      path: "/unAuthorized",
      element: <div>UnAuthorized</div>,
    },
  ]);
  return (
    <>
      <QueryClientProvider client={querryClient}>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        <AuthContextProvider>
          <RouterProvider router={router} />
        </AuthContextProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
