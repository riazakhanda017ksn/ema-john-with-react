import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import OrderManagementDetails from "../OrderManagementDetails/OrderManagementDetails";
import "./OrderManagement.css";

const OrderManagement = () => {
  const [showOrder, setShowOrder] = useState([0]);
  useEffect(() => {
    fetch("http://localhost:5000/userOrder")
      .then((res) => res.json())
      .then((data) => setShowOrder(data));
  }, [0]);
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
                  <th scope="col">Status</th>
                </tr>
              </thead>

              <tbody>
                {showOrder.map((list) => (
                  <OrderManagementDetails
                    listItems={list}
                  ></OrderManagementDetails>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;
