import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { UserContext } from "../../App";
import OwnOrderDetails from "../OwnOrderDetails/OwnOrderDetails";

const OwnOrder = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [ownOrders, setOwnOrder] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/ownOrder?email=" + loggedInUser.email)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("data", data);
  //       setOwnOrder(data);
  //     });
  // }, [0]);

  useEffect(() => {
    fetch("http://localhost:5000/ownOrder?email=" + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => {
        setOwnOrder(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="background-black">
      <div className="row">
        <div className="col-lg-12 ">
          <div className="table-of-manage-order">
            <table class="table table-borderless py-5">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Address</th>
                  <th scope="col">Payment Id</th>
                  <th scope="col">Order Status</th>
                </tr>
              </thead>

              <tbody>
                {ownOrders.map((list) => (
                  <OwnOrderDetails listItems={list}></OwnOrderDetails>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnOrder;
