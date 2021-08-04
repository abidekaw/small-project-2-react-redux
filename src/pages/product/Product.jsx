import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { addToCart, getProducts } from "../../store/actions/product";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Product.css";

const Product = (props) => {
  useEffect(() => {
    props.getProducts();
  }, []);

  // const products = [
  //   {
  //     id: 1,
  //     image: "https://i.postimg.cc/qqmLF0TR/people.png",
  //     productName: "Color Item Type / One",
  //     price: 39.99,
  //     discount: 19.99,
  //     description: "Kacamata tampan dan berani Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //     size: ["small", "medium", "large"],
  //   },
  // ];

  const handleAddToCart = (id) => {
    props.addToCart(id);
    alert("Added to cart");
    props.history.push("/cart");
  };

  const product = props.products && props.products.find(val => val.id === props.match.params.id);
  console.log(product);
  console.log(props);

  return (
    <>
      <Header />
      <div className="wrapper-productpage">
        <div className="left">
          <div className="img">
            <img
              src={product && product.image}
              alt={product && product.productName}
              className="responsive"
            />
          </div>
          <div className="arrow-parent">
            <Link to="/" className="arrow-child">
              <img
                src="/assets/arr-left.svg"
                alt="arrLeft"
                width="7"
                height="13"
              />
            </Link>
            <Link to="/" className="arrow-child">
              <img
                src="/assets/arr-right.svg"
                alt="arrRight"
                width="7"
                height="13"
              />
            </Link>
          </div>
        </div>

        <div className="mid">
          <h1>{product && product.productName}</h1>
          <h2>${product && product.discount}</h2>
          <span>${product && product.price}</span>
          <p>{product && product.description}</p>
          <label htmlFor="size">Size: </label>
          <select id="size">
            <option>{product && product.size[0]}</option>
            <option>{product && product.size[1]}</option>
            <option>{product && product.size[2]}</option>
          </select>
          <button onClick={() => handleAddToCart(product.id)}>
            ADD TO CART
          </button>
        </div>

        <div className="right">
          <div className="shop">
            <Link to="/shop">GO BACK</Link>
          </div>
          <div className="for">
            <p>
              {" "}
              Mens <br /> 100% Cotton{" "}
            </p>
          </div>
        </div>
      </div>
      {/* {product.map((val, key) => (
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
  connect(mapStateToProps, mapDispatchToProps)(Product)
);
