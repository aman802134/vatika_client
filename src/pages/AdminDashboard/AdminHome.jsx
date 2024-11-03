import Expenses from "./Expenses";
import Products from "./Products";
import TotalOrders from "./TotalOrders";

const AdminHome = () => {
  return (
    <>
      <Expenses />
      <TotalOrders />
      <Products />
    </>
  );
};

export default AdminHome;
