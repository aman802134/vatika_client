import React from "react";
import InfoCard1 from "../../components/AdminDashboard/InfoCard1";
import InfoCard2 from "../../components/AdminDashboard/InfoCard2";
import InfoCard3 from "../../components/AdminDashboard/infoCard3";
import InfoCard4 from "../../components/AdminDashboard/InfoCard4";
import OrderList from "../../components/AdminDashboard/OrderList";
import { Link } from "react-router-dom";

const OverView = () => {
  return (
    <>
      <section className="w-full full py-5 px-5 space-y-4">
        <header className="w-full grid grid-cols-2 gap-2.5">
          <InfoCard2 />
          <InfoCard1 />
          <InfoCard3 />
          <InfoCard4 />
        </header>
        <div className="w-full h-56 boxShadow bg-gray-500 rounded-md"></div>
        <div className="w-full boxShadow rounded-md px-5 py-5">
          <div className="w-full flex justify-between items-center">
            <h3 className="text-lg text-dark-greenish-blue font-serif font-medium">
              Orders
            </h3>
            <span className="text-sm text-dark-green font-serif font-medium underline cursor-pointer">
              <Link to="/dashboard/admin/orders">view all</Link>
            </span>
          </div>
          <div className="w-full h-full py-3">
            <ul className="w-full flex flex-col space-y-3">
              <li className="w-full boxShadow rounded-md">
                <OrderList />
              </li>
              <li className="w-full boxShadow rounded-md">
                <OrderList />
              </li>
              <li className="w-full boxShadow rounded-md">
                <OrderList />
              </li>
              <li className="w-full boxShadow rounded-md">
                <OrderList />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default OverView;
