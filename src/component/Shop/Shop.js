import React, { useEffect, useState } from "react";
import "./Shop.css";
import fakeData from "../../resource/ema-john-simple-resources-master/ema-john-simple-resources-master/fakeData";
import Products from "../Products/Products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Cart from "../Cart/Cart";
import {
  addToDatabaseCart,
  getDatabaseCart,
} from "../../resource/ema-john-simple-resources-master/ema-john-simple-resources-master/utilities/databaseManager";
import { Link } from "react-router-dom";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);

  ///data-load-from-server
  useEffect(() => {
    const saveCart = getDatabaseCart();
    const productKeys = Object.keys(saveCart);
    const previousCart = productKeys.map((existingKey) => {
      const products = fakeData.find((pd) => pd.key === existingKey);
      console.log(existingKey, saveCart[existingKey]);
      products.quantity = saveCart[existingKey];
      return products;
    });
    setCart(previousCart);
  });
  const handleProduct = (product) => {
    let toBeAdded = product.key;
    const sameProduct = cart.find((pd) => pd.key === toBeAdded);
    let count = 1;
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter((pd) => pd.key !== toBeAdded);
      newCart = [...others, product];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDatabaseCart(product.key, count);
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
            <Products
              key={pd.key}
              showAddToCart={true}
              handleProduct={handleProduct}
              product={pd}
            ></Products>
          ))}
        </div>
        <div className="counter-section">
          <Cart cart={cart}>
            <Link to="/review">
              <button className="custom">Review Order</button>{" "}
            </Link>
          </Cart>
        </div>
      </div>
    </>
  );
};

export default Shop;
