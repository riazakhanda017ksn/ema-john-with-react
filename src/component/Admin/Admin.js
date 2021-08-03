import React from "react";
import { useForm } from "react-hook-form";
import img from "../../img/5215671.jpg";
import "./Admin.css";

const Admin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const adminData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
    };

    fetch("https://fathomless-springs-13781.herokuapp.com/addAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(adminData),
    }).then((result) => {
      if (result) {
        alert("Admin has been added");
      } else {
        alert("please try again");
      }
    });
  };
  return (
    <>
      <div className="caption-for-shipment py-5">
        <h2>Welcome To Shipment Section</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          esse quam autem nobis architecto iure fuga nisi velit modi illo Lorem
          ipsum dolor sit, amet consectetur adipisicing.
        </p>
      </div>
      <div className="row px-4">
        <div className="col-lg-6 mt-5">
          <div className="form-part">
            <form onSubmit={handleSubmit(onSubmit)}>
              <p>
                <input
                  placeholder="Your Full Name"
                  type="text"
                  {...register("name")}
                  required
                />
              </p>
              <p>
                <input
                  placeholder="Your Email"
                  type="email"
                  {...register("email", { required: true })}
                  required
                />
              </p>
              <p>
                <input
                  placeholder="Your Number"
                  type="text"
                  {...register("phone", { required: true })}
                  required
                />
              </p>
              <p>
                <input
                  placeholder="Your Address"
                  type="text"
                  {...register("address", { required: true })}
                  required
                />
              </p>

              <button type="submit">Make Admin</button>
            </form>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="add-admin">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
