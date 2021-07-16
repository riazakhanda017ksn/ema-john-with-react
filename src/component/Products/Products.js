import React from "react";
import "./Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Products = (props) => {
  const { name, img, price, stock, seller } = props.product;

  return (
    <div className="mb-3">
      <div className="row need-border">
        <div className="col-lg-3 ">
          <div className="product-img ">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="col-lg-9">
          <div className="products-list-name mt-2">
            <h4>{name}</h4>
            <span>by: {seller}</span>
          </div>
          <div className="need-flex">
            <div className="product-list-name-two">
              <p>${price}</p>
              <small>only {stock} left in stock - order soon</small>
              <button onClick={() => props.handleProduct(props.product)}>
                {" "}
                <FontAwesomeIcon icon={faShoppingCart} /> add to cart
              </button>
            </div>
            <div className="product-description"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
