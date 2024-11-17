import React from "react";
import { AdminDashboard } from "../components/admin-dashboard";
import { CustomerDashboard } from "../components/customer-dashboard";
import { useSelector } from "react-redux";

import { RootState } from "../redux/store";


const Dashboard = () => {
 
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div>
      {user ? (
        user.userType === "admin" ? (
          <AdminDashboard></AdminDashboard>
        ) : (
          <CustomerDashboard></CustomerDashboard>
        )
      ) : (
        <></>
      )}
    </div>
  );
};

export default Dashboard;
