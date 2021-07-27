import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../resource/ema-john-simple-resources-master/ema-john-simple-resources-master/images/logo.png";
import "./Header.css";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <>
      <div className="logo-section">
        <img src={logo} alt="" />
      </div>
      <div className="need-flex-for-nav">
        <div className="main-div">
          <div className="navbar-section">
            <ul>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/review">Order Review</Link>
              </li>
              <li>
                <Link to="/inventory">Manage Inventory</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="signOut-section">
          <button onClick={() => setLoggedInUser({})}>
            <Link>SingOut</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
