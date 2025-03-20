import React from "react";
import AdminSideBar from "../components/AdminDashboard/AdminSideBar";
import { Link, Outlet } from "react-router-dom";
import AdminHeader from "../components/AdminDashboard/AdminHeader";

const DashboardLayout = () => {
  return (
    <>
      <div className="w-full h-full">
        <div className="w-full h-[100vh] grid grid-cols-[20%_80%] overflow-y-hidden">
          <div>
            <AdminSideBar />
          </div>
          <main className="w-full h-full flex flex-col">
            <AdminHeader />
            <section className="flex-1">
              <div className="w-full grid grid-cols-[80%_20%]">
                <div className="w-full h-[100vh] pb-32 overflow-y-scroll scrollbar-hidden">
                  <Outlet></Outlet>
                </div>
                <aside className="w-full h-[87vh] overflow-x-hidden overflow-y-scroll scrollbar-hidden boxShadow"></aside>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
