import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBlog,
  faBookDead,
  faCameraRetro,
  faComment,
  faEdit,
  faHome,
  faShoppingCart,
  faSignOutAlt,
  faUser,
  faUserPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";
import { faDashcube, faServicestack } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import logo from "../../resource/ema-john-simple-resources-master/ema-john-simple-resources-master/images/logo.png";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../App";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("https://fathomless-springs-13781.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, []);

  return (
    <div className="side-bar">
      <span className="customize mt-5 position-relative">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </span>

      <div className="side-bar-list mt-3">
        <ul>
          <li>
            {" "}
            <span className="mr-3">
              {" "}
              <FontAwesomeIcon icon={faHome} />
            </span>{" "}
            <Link to="/">Home</Link>
          </li>

          <li>
            {" "}
            <span className="mr-3">
              {" "}
              <FontAwesomeIcon icon={faDashcube} />
            </span>{" "}
            <Link to="/main-dashboard">Dashboard</Link>
          </li>

          {isAdmin && (
            <>
              <li>
                {" "}
                <span className="mr-3">
                  <FontAwesomeIcon icon={faEdit} />{" "}
                </span>{" "}
                <Link to="/order-management">Manage Order</Link>
              </li>
              <li>
                {" "}
                <span className="mr-3">
                  <FontAwesomeIcon icon={faServicestack} />{" "}
                </span>{" "}
                <Link to="/inventory">Add Product</Link>
              </li>
              <li>
                {" "}
                <span className="mr-3">
                  {" "}
                  <FontAwesomeIcon icon={faUser} />{" "}
                </span>{" "}
                <Link to="/whoAdmin">Admin</Link>
              </li>

              <li>
                {" "}
                <span className="mr-3">
                  {" "}
                  <FontAwesomeIcon icon={faUserPlus} />{" "}
                </span>{" "}
                <Link to="/add-Admin">Add Admin</Link>
              </li>
            </>
          )}

          <li>
            {" "}
            <span className="mr-3">
              {" "}
              <FontAwesomeIcon icon={faBlog} />
            </span>{" "}
            <Link to="/own-order">My Order</Link>
          </li>
          <li>
            {" "}
            <span className="mr-3">
              {" "}
              <FontAwesomeIcon icon={faBlog} />
            </span>{" "}
            <Link to="/not-found">Blog</Link>
          </li>
          <li>
            {" "}
            <span className="mr-3">
              <FontAwesomeIcon icon={faSignOutAlt} />{" "}
            </span>{" "}
            <Link onClick={() => setLoggedInUser({})}>Log Out</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
