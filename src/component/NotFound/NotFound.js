import React from "react";
import "./NotFound.css";
import error from "../../img/error.gif";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Link to="/main-dashboard">
      <div className="error text-center">
        <img src={error} alt="" />
      </div>
    </Link>
  );
};

export default NotFound;
