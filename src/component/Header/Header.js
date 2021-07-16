import React from "react";
import logo from "../../resource/ema-john-simple-resources-master/ema-john-simple-resources-master/images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="logo-section">
        <img src={logo} alt="" />
      </div>
      <div className="navbar-section">
        <ul>
          <li>
            <a href="">Shop </a>
          </li>
          <li>
            <a href=""> Order Review</a>
          </li>
          <li>
            <a href=""> Manage Inventory here</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
