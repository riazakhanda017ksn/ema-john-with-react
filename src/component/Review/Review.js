import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import happyImage from "../../resource/ema-john-simple-resources-master/ema-john-simple-resources-master/images/giphy.gif";
import {
  getDatabaseCart,
  processOrder,
  removeFromDatabaseCart,
} from "../../resource/ema-john-simple-resources-master/ema-john-simple-resources-master/utilities/databaseManager";
import fakeData from "../../resource/ema-john-simple-resources-master/ema-john-simple-resources-master/fakeData";
import ReviewItem from "../ReviewItem/ReviewItem";
const Review = () => {
  const [cart, setCart] = useState([]);

  const handleRemoveCart = (productKey) => {
    const newCart = cart.filter((pd) => pd.key !== productKey);
    removeFromDatabaseCart(productKey);
    setCart(newCart);
  };
  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
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
  const handlePlaceOrder = () => {
    processOrder();
    setCart([]);
    setOrderPlaced(true);
  };

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
          <button className="custom" onClick={handlePlaceOrder}>
            {" "}
            Place Order
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
