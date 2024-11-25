import { Outlet } from "react-router-dom";
import Aside from "../components/AdminDashboard/Aside";
import DashBoardHeader from "../components/AdminDashboard/DashBoardHeader";

const AdminDashboard_layout = () => {
  return (
    <>
      <div className="w-full  flex gap-3">
        <Aside />
        <div className="w-full h-[100vh] max-h-[100vh] overflow-y-scroll overflow-x-hidden py-2 px-1">
          <DashBoardHeader />
          <main className="w-full  py-2 px-1">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard_layout;
