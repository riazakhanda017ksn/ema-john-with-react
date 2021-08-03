import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Products from "../../component/Products/Products";
import img from "../../img/tumblr_m4yjyjFVyq1qg6rkio1_500.gif";

const ProductDetail = () => {
  const { productKey } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  document.title = "Product Details";

  useEffect(() => {
    fetch(
      "https://fathomless-springs-13781.herokuapp.com/product/" + productKey
    )
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [productKey]);

  return (
    <div>
      {loading ? (
        <div className="img text-center">
          <img src={img} alt="" />
        </div>
      ) : (
        <Products showAddToCart={false} product={product}></Products>
      )}
    </div>
  );
};

export default ProductDetail;
