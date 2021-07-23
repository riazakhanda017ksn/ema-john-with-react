import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../App";
import "./Login.css";
import { useHistory, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  initializeLoginFramework,
  handleGoogleSignIn,
  handleSignOut,
  handleFbSignIn,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "./loginManager";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
  });

  initializeLoginFramework();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      handleResponse(res, true);
    });
  };

  // const fbSignIn = () => {
  //   handleFbSignIn().then((res) => {
  //     handleResponse(res, true);
  //   });
  // };

  const signOut = () => {
    handleSignOut().then((res) => {
      handleResponse(res, false);
    });
  };

  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  };

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };
  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password).then(
        (res) => {
          handleResponse(res, true);
        }
      );
    }

    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password).then((res) => {
        handleResponse(res, true);
      });
    }
    e.preventDefault();
  };

  return (
    <div className="row">
      <div className="col-lg-6">
        <div className="email-with-password">
          <div className="new-user px-3">
            {newUser ? (
              <h3>Create An Account</h3>
            ) : (
              <h3 className="position-need">Log In</h3>
            )}
          </div>
          <form onSubmit={handleSubmit}>
            {newUser && (
              <input
                name="name"
                type="text"
                onBlur={handleBlur}
                placeholder="Your name"
              />
            )}
            <br />
            <input
              type="text"
              name="email"
              onBlur={handleBlur}
              placeholder="Your Email address"
              required
            />
            <br />
            <input
              type="password"
              name="password"
              onBlur={handleBlur}
              placeholder="Your Password"
              required
            />
            <br />

            <button type="submit">{newUser ? "Sign up" : "Sign In"}</button>
          </form>
          {newUser ? (
            <div className="need-flex">
              <div className="caption">
                <p> already Have an Account</p>
              </div>
              <div className="create-an-account">
                <p onClick={() => setNewUser(!newUser)}>Log In </p>
              </div>
            </div>
          ) : (
            <div className="need-flex">
              <div className="caption">
                <p>If you are new to the site </p>
              </div>
              <div className="create-an-account">
                <p onClick={() => setNewUser(!newUser)}>Create An Account</p>
              </div>
            </div>
          )}
          <p style={{ color: "red" }}>{user.error}</p>
          {user.success && (
            <p style={{ color: "green" }}>
              User {newUser ? "created" : "Logged In"} successfully
            </p>
          )}
        </div>
      </div>
      <div className="col-lg-6">
        <div className="sign-in">
          <div onClick={googleSignIn} className="google-sign-in">
            <div className="logo">
              <span>
                {" "}
                <FontAwesomeIcon icon={faGoogle} />
              </span>
            </div>
            <div className="title">
              <h3>Sign In With Google</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
