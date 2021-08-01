import React from "react";

const ShowAdminDetails = (props) => {
  const { name, email, phone, address, _id } = props.listItems;
  document.title = "Admin Section";
  const hidden = document.getElementById("delete");
  const deleteEvent = (id) => {
    fetch(`http://localhost:5000/removeAdmin/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          hidden.style.display = "none";
          alert("data has been deleted");
        }
        console.log("result", result);
      });
  };

  ///

  return (
    <>
      <tr id="delete">
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{address}</td>
        <td>
          <button className="remove-admin" onClick={() => deleteEvent(_id)}>
            Remove Admin
          </button>
        </td>
      </tr>
    </>
  );
};

export default ShowAdminDetails;
