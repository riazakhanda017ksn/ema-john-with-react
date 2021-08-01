import React from "react";
import "./Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Products = (props) => {
  console.log(props);
  const { name, img, price, stock, seller, key } = props.product;
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
            <h4>
              <Link to={"/product/" + key}>{name}</Link>
            </h4>
            <span>by: {seller}</span>
          </div>
          <div>
            <div className="product-list-name-two">
              <p>$ {price}</p>
              <small>only {stock} left in stock - order soon</small>
              {props.showAddToCart === true && (
                <button onClick={() => props.handleProduct(props.product)}>
                  {" "}
                  <FontAwesomeIcon icon={faShoppingCart} /> add to cart
                </button>
              )}
            </div>
            <div className="product-description"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
