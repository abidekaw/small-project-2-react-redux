import "./index.css";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

const Header = (props) => {
  const toCart = () => {
    props.history.push("/cart");
  };
  const toHomepage = () => {
    props.history.push("/");
  };

  return (
    <div className="header">
      <h2 onClick={() => toHomepage()}>We n A Merch</h2>
      <form>
        <input id="search" type="search" placeholder="PRODUCT" />
        <label htmlFor="search">
          <img src="/assets/search.svg" alt="search" />
        </label>
      </form>
      <div className="keranjang" onClick={() => toCart()}>
        <img src="/assets/shopping-cart.svg" alt="shopingcart" />
        <span>{props.carts.length}</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    // products: state.productReducer.products,
    carts: state.productReducer.carts,
  };
};

export default withRouter(connect(mapStateToProps, null)(Header));
