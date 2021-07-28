import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getProducts, addToCart } from "../../store/actions/product";

import "./index.css";

const CardList = (props) => {
  useEffect(() => {
    props.getProducts();
  }, []);

  console.log(props)

  const handleAddToCart = (id) => {
    props.addToCart(id)
    alert("Added to cart")
    props.history.push('/shop')
  };
  console.log(props.history)

  const toProduct = () => {
    props.history.push('/product')
  }

  return (
    <div className="card">
      {props.products && props.products.map((val, key) => (
        <div className="content" key={key}>
          <img src={val.image} alt={val.productName} onClick={() => toProduct()} />
          <p>{val.productName}</p>
          <p>${val.discount}</p>
          <p style={{textDecoration:'line-through'}}>${val.price}</p>
          <button onClick={() => handleAddToCart(val.id)}>Add To Cart</button>
        </div>
      ))}
    </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardList))
