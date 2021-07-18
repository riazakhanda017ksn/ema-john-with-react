import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import {
  getDatabaseCart,
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
      </div>
      <div className="counter-section">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Review;
