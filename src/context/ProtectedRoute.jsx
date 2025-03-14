import React, { useEffect } from "react";
import { useAuth } from "../customHooks/useAuth";
import { useNavigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ adminOnly = false }) => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useAuth();
  console.log("this is protected route :", data);

  useEffect(() => {
    // Only perform navigation after the loading is finished
    if (!isLoading) {
      if (error || !data) {
        navigate("/auth/login", { replace: true });
      } else if (adminOnly && data.role !== "admin") {
        navigate("/unAuthorized");
      }
    }
  }, [data, isLoading, adminOnly, navigate, error]);
  if (isLoading || data == undefined) {
    return <div>Loading...</div>;
  }
  return <Outlet />;
};

export default ProtectedRoute;
