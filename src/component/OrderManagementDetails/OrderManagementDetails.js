import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./OrderManagementDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OrderManagementDetails = (props) => {
  const { email, paymentId, Shipment, _id, status } = props.listItems;

  //delete-order
  // const deleteOrder = id => {
  //   fetch(`https://fathomless-springs-13781.herokuapp.com/deleteOrder/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       if (result) {
  //         alert("order has been deleted");
  //       } else {
  //         alert("Sorry.........");
  //       }
  //     });
  // };

  const deleteOrder = (id) => {
    fetch(`https://fathomless-springs-13781.herokuapp.com/deleteOrder/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert("data has been deleted");
        }
      });
  };

  ///
  const handleOrderStatus = (value, id) => {
    fetch(`https://fathomless-springs-13781.herokuapp.com/update/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ value }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("your data has been loaded");
        } else {
          alert("please update again");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <tr>
      <td>{Shipment?.name}</td>
      <td>{email}</td>
      <td>{Shipment?.phone}</td>
      <td>{Shipment?.address}</td>
      <td>{paymentId}</td>
      <td>
        <div className="menu">
          <ul className="status-meanu">
            <li>
              <a>
                {" "}
                Status <FontAwesomeIcon icon={faChevronCircleDown} />
              </a>
              <ul>
                <li>
                  {status !== "pending" && (
                    <a onClick={() => handleOrderStatus("pending", _id)}>
                      Pending
                    </a>
                  )}
                </li>
                <li>
                  {status !== "OnGoing" && (
                    <a onClick={() => handleOrderStatus("OnGoing", _id)}>
                      OnGoing
                    </a>
                  )}
                </li>
                <li>
                  {status !== "Done" && (
                    <a onClick={() => handleOrderStatus("Done", _id)}>Done</a>
                  )}
                </li>
                <li>
                  <a onClick={() => deleteOrder(_id)}>Delete</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </td>
    </tr>
  );
};

export default OrderManagementDetails;
