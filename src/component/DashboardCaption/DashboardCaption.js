import React from "react";
import dashboard from "../../video/video.mp4";
import "./DashboardCaption.css";

const DashboardCaption = () => {
  return (
    <div className="dashboard">
      <video src={dashboard} muted loop autoPlay></video>
      <div className="dashboard-overly"></div>
      <div className="main-text container ">
        <h1>Welcome To Your Own Dashboard</h1>
      </div>
    </div>
  );
};

export default DashboardCaption;
