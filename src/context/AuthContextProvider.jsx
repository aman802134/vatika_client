import React from "react";
import { useQuery } from "@tanstack/react-query";
import api from "../api/api";
import { AuthContext } from "./AuthContext";

export const AuthContextProvider = ({ children }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["auth"],
    queryFn: async () => {
      const response = await api.get("/auth/me", { withCredentials: true });
      return response.data.user;
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: false,
  });
  return (
    <>
      <AuthContext.Provider value={{ data, isLoading, error }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
