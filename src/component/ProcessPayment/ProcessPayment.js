import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import MyCheckoutForm from "./MyCheckoutForm/MyCheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const ProcessPayment = ({ handlePayment }) => {
  const stripePromise = loadStripe(
    "pk_test_51Ie2ESEWPNeHpTcOcYGgiAyzLn1dWKuMJCypcmUUPkW012cElnHSOpLYEhBmHOQMiE1WGscgo5D7QIWBdM2XqZu500UJpVv7mL"
  );
  return (
    <Elements stripe={stripePromise}>
      <MyCheckoutForm handlePayment={handlePayment}></MyCheckoutForm>
    </Elements>
  );
};

export default ProcessPayment;
