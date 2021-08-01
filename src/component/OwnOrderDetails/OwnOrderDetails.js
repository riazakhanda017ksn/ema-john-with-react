import React from "react";

const OwnOrderDetails = (props) => {
  const { Shipment, email, paymentId, status } = props.listItems;
  return (
    <tr>
      <td>{Shipment?.name}</td>
      <td>{email}</td>
      <td>{Shipment?.phone}</td>
      <td>{Shipment?.address}</td>
      <td>{paymentId}</td>
      <td>{status}</td>
    </tr>
  );
};

export default OwnOrderDetails;
