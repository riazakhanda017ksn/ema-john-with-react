import React, { useState } from "react";
import "./Shop.css";
import fakeData from "../../resource/ema-john-simple-resources-master/ema-john-simple-resources-master/fakeData";
import Products from "../Products/Products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Cart from "../Cart/Cart";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);
  const handleProduct = (product) => {
    console.log("product has been clicked", product);
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <>
      <div className="search-product-section">
        <div className="need-margin">
          <input
            type="search"
            name=""
            id=""
            placeholder="type here to search"
          />
          <span>
            <a href="">
              {" "}
              <FontAwesomeIcon icon={faShoppingCart} />
            </a>
          </span>
          <p className="counter">{cart.length}</p>
        </div>
      </div>
      <div className="shop-container ">
        <div className="products-items">
          {products.map((pd) => (
            <Products handleProduct={handleProduct} product={pd}></Products>
          ))}
        </div>
        <div className="counter-section">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </>
  );
};

export default Shop;
