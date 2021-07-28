import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { addToCart, getProducts } from "../../store/actions/product";
import Header from "../../components/header";
import Footer from "../../components/footer";
// import itemProduct from "../../components/products/itemProduct";
import "./index.css";

const Productpage = (props) => {
  useEffect(() => {
    props.getProducts();
    console.log(props);
  }, []);

  // const product = itemProduct.find((val) => val )
  // console.log(product)

  const handleAddToCart = (id) => {
    props.addToCart(id);
    props.history.push("./cart");
    alert("Added to cart");
  };

  const product = props.product
  console.log(product)

  product.find()

  const toShop = () => {
    props.history.push('/shop')
  }

  return (
    <>
    <Header />
    <div className="wrapper-productpage">
      <div className="left">
        <div className="img">
          {/* <img src={product.image} alt={product.productName} className="responsive" /> */}
        </div>
        <div className="arrow-parent">
          <a className="arrow-child" href="#">
            <img src="/assets/arr-left.svg" alt="arrLeft" width="7" height="13" />
          </a>
          <a className="arrow-child" href="#">
            <img src="/assets/arr-right.svg" alt="arrRight" width="7" height="13" />
          </a>
        </div>
      </div>

      <div className="mid">
        {/* <h1>{val.productName}</h1>
        <h2>${val.discount}</h2>
        <span>${val.price}</span>
        <p>{val.description}</p>
        <label htmlFor="size">Size: </label>
        <select id="size">
          <option>{val.size[0]}</option>
          <option>{val.size[1]}</option>
          <option>{val.size[2]}</option>
        </select>
        <button onClick={(id) => handleAddToCart(val.id)}>ADD TO CART</button> */}
      </div>

      <div className="right">
        <div className="shop">
          <a onClick={() => toShop()}>GO BACK</a>
        </div>
        <div className="for">
          <p>Mens <br/> 100% Cotton</p>
        </div>
      </div>
    </div>
    {/* {props.products && props.products.find((val, key) => (
    ))} */}
    <Footer />
    </>
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

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Productpage)
);
// export default Productpage;