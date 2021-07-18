import React from "react";
import { Link } from "react-router-dom";
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
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/review">Order Review</Link>
          </li>
          <li>
            <Link to="/inventory">Manage Inventory here</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
