import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { addToCart, getProducts } from "../../../store/actions/product";
import Layout from "../../../layouts/Layout";
import "./Product.css";

const Product = (props) => {
  useEffect(() => {
    props.getProducts();
  }, []);

  const handleAddToCart = (id) => {
    props.addToCart(id);
    alert("Added to cart");
    props.history.push("/cart");
  };

  const product = props.products && props.products.find((val) => val.id === parseInt(props.match.params.id));
  // console.log(product);
  // console.log(props);

  return (
    <Layout>
      <div className="wrapper-productpage">
        <div className="left">
          <div className="img">
            <img src={product && product.image} alt={product && product.productName} className="responsive" />
          </div>
          <div className="arrow-parent">
            <Link to="/" className="arrow-child">
              <img src="/assets/images/arr-left.svg" alt="arrLeft" width="7" height="13" />
            </Link>
            <Link to="/" className="arrow-child">
              <img src="/assets/images/arr-right.svg" alt="arrRight" width="7" height="13" />
            </Link>
          </div>
        </div>

        <div className="mid">
          <h1>{product && product.productName}</h1>
          <h2>${product && product.discount}</h2>
          <span>${product && product.price}</span>
          <p>{product && product.caption}</p>
          <p>{product && product.description}</p>
          <label htmlFor="size">Size: </label>
          <select id="size">
            <option>{product && product.size[0]}</option>
            <option>{product && product.size[1]}</option>
            <option>{product && product.size[2]}</option>
          </select>
          <button onClick={() => handleAddToCart(product.id)}>ADD TO CART</button>
        </div>

        <div className="right">
          <div className="shop">
            <Link to="/shop">GO BACK</Link>
          </div>
          <div className="for">
            <p>Mens <br /> 100% Cotton</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.productReducer.products,
    carts: state.productReducer.carts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(getProducts()),
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Product));
