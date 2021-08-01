import React from "react";
import DashboardCaption from "../DashboardCaption/DashboardCaption";
import Sidebar from "../Sidebar/Sidebar";
import "./MainDashboard.css";

const MainDashboard = () => {
  document.title = "Welcome to your own dashboard";
  return (
    <div className="row">
      <div className="col-lg-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-lg-9">
        <DashboardCaption></DashboardCaption>
      </div>
    </div>
  );
};

export default MainDashboard;
