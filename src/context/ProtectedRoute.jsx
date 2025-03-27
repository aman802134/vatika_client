import React, { useEffect } from "react";
import { useAuth } from "../customHooks/useAuth";
import { useNavigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ adminOnly = false }) => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useAuth();
  // If error or no user data, redirect to login
  useEffect(() => {
    if (isLoading) return; // Prevent navigation while loading

    if (error || !data) {
      navigate("/auth/login", { replace: true });
      return;
    }

    if (adminOnly && data.role !== "admin") {
      navigate("/unAuthorized", { replace: true });
      return;
    }

    if (!adminOnly && data.role === "user") {
      navigate("/account", { replace: true });
      return;
    }
  }, [data, isLoading, error, navigate, adminOnly]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <Outlet />;
};

export default ProtectedRoute;
