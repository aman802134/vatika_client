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
          element: <Account />,
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
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/dashboard/admin",
      element: <ProtectedRoute />,
      children: [
        {
          element: <DashboardLayout />,
          children: [
            {
              index: true,
              element: <h1>this is dashboard Home</h1>,
            },
          ],
        },
      ],
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
