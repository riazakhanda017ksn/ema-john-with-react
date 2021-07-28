import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import happyImage from "../../resource/ema-john-simple-resources-master/ema-john-simple-resources-master/images/giphy.gif";
import {
  getDatabaseCart,
  removeFromDatabaseCart,
} from "../../resource/ema-john-simple-resources-master/ema-john-simple-resources-master/utilities/databaseManager";
import ReviewItem from "../ReviewItem/ReviewItem";
import { useHistory } from "react-router-dom";
import fakeData from "../../resource/ema-john-simple-resources-master/ema-john-simple-resources-master/fakeData";
const Review = () => {
  const [cart, setCart] = useState([]);

  const handleRemoveCart = (productKey) => {
    const newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  };
  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    // fetch("http://localhost:5000/productKeys", {
    //   method: "POST",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify(productKeys),
    // })
    //   .then((res) => res.json())
    //   .then((data) => setCart(data));
    const cartProduct = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      console.log("product", product);
      product.quantity = savedCart[key];
      return product;
    });
    setCart(cartProduct);
  }, []);

  /// show img
  const [orderPlaced, setOrderPlaced] = useState(false);
  const history = useHistory();
  const handleProceedOrder = () => {
    history.push("/shipment");
  };
  console.log("handleProceedOrder", handleProceedOrder);
  let thankYou;
  if (orderPlaced) {
    thankYou = <img src={happyImage} alt="" />;
  }
  return (
    <div className="shop-container">
      <div className="products-items">
        {cart.map((pd) => (
          <ReviewItem
            product={pd}
            key={pd.key}
            handleRemoveCart={handleRemoveCart}
          ></ReviewItem>
        ))}
        {thankYou}
      </div>
      <div className="counter-section">
        <Cart cart={cart}>
          <button className="custom" onClick={handleProceedOrder}>
            {" "}
            Place Order
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
