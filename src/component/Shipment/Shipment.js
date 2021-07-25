import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import {
  getDatabaseCart,
  processOrder,
} from "../../resource/ema-john-simple-resources-master/ema-john-simple-resources-master/utilities/databaseManager";
import "./Shipment.css";

const Shipment = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const savedCart = getDatabaseCart();
    const orderCompletion = {
      ...loggedInUser,
      product: savedCart,
      Shipment: data,
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
          <div className="form-for-client-information">
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
        <div className="col-lg-6"></div>
      </div>
    </div>
  );
};

export default Shipment;
