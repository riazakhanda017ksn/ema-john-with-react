import React from "react";
import { Link } from "react-router-dom";
import dashboardVideo from "../../video/pexels-kampus-production-7287519.mp4";
import "./Dashboard.css";

const Dashboard = () => {
  document.title = "Dashboard";
  return (
    <div className="video-section">
      <video src={dashboardVideo} muted loop autoPlay></video>
      <div className="video-overly"></div>
      <div className="text container mt-t">
        <Link to="/main-dashboard">
          <button>Let's Go Dashboard</button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
