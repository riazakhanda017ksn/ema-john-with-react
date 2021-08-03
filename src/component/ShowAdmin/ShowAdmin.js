import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ShowAdminDetails from "../ShowAdminDetails/ShowAdminDetails";

const ShowAdmin = () => {
  const [admin, setAdmin] = useState([]);
  useEffect(() => {
    fetch("https://fathomless-springs-13781.herokuapp.com/admin")
      .then((res) => res.json())
      .then((data) => setAdmin(data));
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
                  <th scope="col">Remove Admin</th>
                </tr>
              </thead>

              <tbody>
                {admin.map((list) => (
                  <ShowAdminDetails listItems={list}></ShowAdminDetails>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowAdmin;
