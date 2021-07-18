import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
const Cart = (props) => {
  ///total-cost
  const cart = props.cart;
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total = total + product.price * product.quantity;
  }
  ///shipping
  let shipping = 0;
  if (total > 35) {
    shipping = 0;
  }
  if (total > 15) {
    shipping = 4.99;
  } else if (total > 0) {
    shipping = 12.99;
  }
  ///tax
  const tax = (total / 10).toFixed(2);

  ///total-amount
  const grandTotal = (total + shipping + Number(tax)).toFixed(2);
  ///format_function

  const formatNumber = (num) => {
    const precious = num.toFixed(2);
    return Number(precious);
  };

  return (
    <div className="need-perfect-position">
      <div className="text-center order-caption ">
        <h5>Order Summary</h5>
        <p>Items ordered:{props.cart.length}</p>
      </div>
      <div className="pricing-academy">
        <div className="the-list-of-price-name">
          <ul>
            <li>Items</li>
            <li>Shipping Cost</li>
            <li>Tax + VAT</li>
            <li>
              <span className="need-customize">Order Total</span>
            </li>
          </ul>
        </div>
        <div className="the-list-of-price-name pricing-gap">
          <ul>
            <li>: $ {formatNumber(total)}</li>
            <li>: $ {formatNumber(shipping)}</li>
            <li>: $ {tax}</li>
            <li>
              <span className="need-customize">: $ {grandTotal}</span>{" "}
            </li>{" "}
          </ul>
          <br />
        </div>
      </div>
      <div className="button-section">
        <Link to="/review">
          <button>Replace Order</button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Cart;
