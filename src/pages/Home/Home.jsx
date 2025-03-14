import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../customHooks/useAuth";
const Home = () => {
  const { data, isLoading } = useAuth();
  if (isLoading || data == undefined) {
    return <h1>just fetching the data</h1>;
  }
  if (data.role == "admin") {
    return <Link to="/dashboard/admin">Dashboard link</Link>;
  }
  return (
    <>
      <h1>this is Home</h1>
    </>
  );
};

export default Home;
