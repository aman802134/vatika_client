import { Outlet } from "react-router-dom";
import Aside from "../components/AdminDashboard/Aside";
import DashBoardHeader from "../components/AdminDashboard/DashBoardHeader";

const AdminDashboard_layout = () => {
  return (
    <>
      <div className="w-full h-full flex gap-3 gradient">
        <Aside />
        <div className="w-full h-full py-2 px-1">
          <DashBoardHeader />
          <main className="w-full py-2 px-1">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard_layout;
