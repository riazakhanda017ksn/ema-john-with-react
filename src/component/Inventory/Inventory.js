import React from "react";
import "./Inventory.css";
import fakeData from "../../resource/ema-john-simple-resources-master/ema-john-simple-resources-master/fakeData";
const Inventory = () => {
  document.title = "Add Product";
  const handleAllProducts = () => {
    console.log("handleAllProducts", handleAllProducts);
    fetch("https://fathomless-springs-13781.herokuapp.com/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(fakeData),
    }).then((result) => {
      if (result) {
        alert("data has been uploaded");
      } else {
        alert("Sorry Product has been uploaded, You cant add new product");
      }
    });
  };
  return (
    <div className="the-main-div-section-for-admin">
      <div className="text-center button-customize">
        <button onClick={handleAllProducts}>Add Products</button>
      </div>
    </div>
  );
};

export default Inventory;
