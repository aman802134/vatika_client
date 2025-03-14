import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import RootLayout from "./layouts/RootLayout";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import DashboardLayout from "./layouts/DashboardLayout";
import Home from "./pages/Home/Home";
import { AuthContextProvider } from "./context/AuthContextProvider";
import ProtectedRoute from "./context/ProtectedRoute";

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
          path: "/about",
          element: <h1>About</h1>,
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
        <ReactQueryDevtools initialIsOpen={false} />
        <AuthContextProvider>
          <RouterProvider router={router} />
        </AuthContextProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
