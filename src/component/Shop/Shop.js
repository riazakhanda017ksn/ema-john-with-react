import React, { useEffect, useState } from "react";
import "./Shop.css";
import fakeData from "../../resource/ema-john-simple-resources-master/ema-john-simple-resources-master/fakeData";
import Products from "../Products/Products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Cart from "../Cart/Cart";
import gif from "../../img/tumblr_m4yjyjFVyq1qg6rkio1_500.gif";
import {
  addToDatabaseCart,
  getDatabaseCart,
} from "../../resource/ema-john-simple-resources-master/ema-john-simple-resources-master/utilities/databaseManager";
import { Link } from "react-router-dom";
import { faAutoprefixer } from "@fortawesome/free-brands-svg-icons";
import Pagination from "../Pagination/Pagination";

const Shop = () => {
  ///
  const [productItems, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState(" ");
  ///data-load-from-server
  useEffect(() => {
    fetch(
      "https://fathomless-springs-13781.herokuapp.com/products?search=" + search
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [search]);
  ////=================>
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  ////
  console.log("our own data", productItems);
  useEffect(() => {
    const saveCart = getDatabaseCart();
    const productKeys = Object.keys(saveCart);
    fetch("https://fathomless-springs-13781.herokuapp.com/productsByKeys", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(productKeys),
    })
      .then((res) => res.json())
      .then((data) => setCart(data));
    // console.log("productKeys", productKeys);
    // if (productItems.length > 0) {
    //   const previousCart = productKeys.map((existingKey) => {
    //     const products = productItems.find((pd) => pd.key === existingKey);
    //     // console.log(existingKey, saveCart[existingKey]);
    //     products.quantity = saveCart[existingKey];
    //     return products;
    //   });
    //   setCart(previousCart);
    // }
  }, []);
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
  ////pagination-work
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  ///
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const productsSlice = productItems.slice(indexOfFirstPost, indexOfLastPost);

  //
  document.title = "Shop Now";
  return (
    <>
      <div className="search-product-section">
        <div className="need-margin">
          <input
            onBlur={handleSearch}
            type="search"
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
          {productItems.length === 0 && (
            <div className="img text-center">
              <img src={gif} alt="" />
            </div>
          )}
          {productsSlice.map((pd) => (
            <Products
              key={pd.key}
              showAddToCart={true}
              handleProduct={handleProduct}
              product={pd}
            ></Products>
          ))}
          {/* /// */} <br />
          <Pagination
            postPerPage={postPerPage}
            totalPosts={productItems.length}
            paginate={paginate}
          ></Pagination>
        </div>
        <div className="counter-section mt-2">
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
