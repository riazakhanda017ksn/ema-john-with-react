import React, { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import {
  getDatabaseCart,
  processOrder,
} from "../../resource/ema-john-simple-resources-master/ema-john-simple-resources-master/utilities/databaseManager";
import ProcessPayment from "../ProcessPayment/ProcessPayment";
import "./Shipment.css";

const Shipment = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [handlePaymentSuccess, setPaymentSuccess] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setPaymentSuccess(data);
  };

  const handlePaymentSuccessItem = (paymentId) => {
    const savedCart = getDatabaseCart();
    const orderCompletion = {
      ...loggedInUser,
      product: savedCart,
      Shipment: handlePaymentSuccess,
      paymentId,
      date: new Date(),
    };
    fetch("http://localhost:5000/addOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(orderCompletion),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          processOrder();
          alert("your database has been upload in database");
        }
      });
  };

  return (
    <div className="caption-for-shipment">
      <h2>Welcome To Shipment Section</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        esse quam autem nobis architecto iure fuga nisi velit modi illo Lorem
        ipsum dolor sit, amet consectetur adipisicing.
      </p>
      <div className="row px-5">
        <div className="col-lg-6 mt-5">
          <div
            style={{ display: handlePaymentSuccess ? "none" : "block" }}
            className="form-for-client-information"
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name", { required: true })}
                placeholder="Name"
                type="text"
                required
                name="name"
              />{" "}
              <br />
              <input
                defaultValue={loggedInUser.email}
                type="email"
                {...register("email", { required: true })}
                placeholder="Your Email"
                name="email"
                required
              />{" "}
              <br />
              <input
                type="text"
                {...register("address", { required: true })}
                placeholder="Your Address"
                required
                name="address"
              />{" "}
              <br />
              <input
                type="text"
                {...register("phone", { required: true })}
                placeholder="Your Phone"
                required
                name="phone"
              />{" "}
              <br />
              <button type="submit"> Submit </button>
            </form>
          </div>
        </div>
        <div className="col-lg-6 mt-4 px-4">
          <div
            style={{ display: handlePaymentSuccess ? "block" : "none" }}
            className="need-payment"
          >
            <div className="list-for-payment-rules text-left">
              <h4>Rules of payment</h4>
              <ul>
                <li>Must buy a product</li>
                <li>you should review your product</li>
                <li>Provide your real address in shipment form</li>
                <li>Without payment we never delivery any product</li>
              </ul>
            </div>
            <div className="mt-5 pt-2">
              <ProcessPayment
                handlePayment={handlePaymentSuccessItem}
              ></ProcessPayment>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipment;
