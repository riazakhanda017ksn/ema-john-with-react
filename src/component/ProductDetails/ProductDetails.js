import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import fakeData from "../../resource/ema-john-simple-resources-master/ema-john-simple-resources-master/fakeData";
import Products from "../Products/Products";
import "./ProductDetails.css";
const ProductDetails = () => {
  const { productKey } = useParams();
  const [product, setProducts] = useState({});
  useEffect(() => {
    fetch("http://localhost:5000/products" + productKey)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [productKey]);
  // const product = products.find((pd) => pd.key === productKey);
  return (
    <div>
      <h6 className="text-left py-3 px-1">
        {" "}
        Yours {productKey} Product Details Here
      </h6>
      <Products showAddToCart={false} product={product}></Products>
    </div>
  );
};

export default ProductDetails;
