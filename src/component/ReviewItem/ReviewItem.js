import React from "react";
import { Link } from "react-router-dom";
import "./ReviewItem.css";

const ReviewItem = (props) => {
  //   console.log("yours props", props);
  const { quantity, name, img, key, price } = props.product;
  return (
    <div className="row need-border">
      <div className="col-lg-3">
        <div className="product-img ">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="col-lg-9 mt-5 ">
        <div className="products-list-name mt-2">
          <h4>
            <Link to={"/product/" + key}>{name}</Link>
          </h4>
          <span> Quantity: {quantity}</span>
          <span>Price :${price}</span>
          <button
            className="removeBtn"
            onClick={() => props.handleRemoveCart(key)}
          >
            {" "}
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
