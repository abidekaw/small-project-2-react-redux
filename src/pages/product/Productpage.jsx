import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { addToCart, getProducts } from "../../store/actions/product";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import "./ProductPage.css";

const ProductPage = (props) => {
  useEffect(() => {
    props.getProducts();
    console.log(props);
  }, []);

  const products = [
    {
      id: 1,
      image: "https://i.postimg.cc/qqmLF0TR/people.png",
      productName: "Color Item Type / One",
      price: 39.99,
      discount: 19.99,
      description: "Kacamata tampan dan berani Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      size: ["small", "medium", "large"],
    },
  ];

  const handleAddToCart = (id) => {
    props.addToCart(id);
    props.history.push("/cart");
    alert("Added to cart");
  };

  return (
    <>
      <Header />
      {products.map((val, key) => (
        <div className="wrapper-productpage" key={key}>
          <div className="left">
            <div className="img">
              <img
                src={val.image}
                alt={val.productName}
                className="responsive"
              />
            </div>
            <div className="arrow-parent">
              <Link to="/" className="arrow-child">
                <img src="/assets/arr-left.svg" alt="arrLeft" width="7" height="13" />
              </Link>
              <Link to="/" className="arrow-child">
                <img src="/assets/arr-right.svg" alt="arrRight" width="7" height="13" />
              </Link>
            </div>
          </div>

          <div className="mid">
            <h1>{val.productName}</h1>
            <h2>${val.discount}</h2>
            <span>${val.price}</span>
            <p>{val.description}</p>
            <label htmlFor="size">Size: </label>
            <select id="size">
              <option>{val.size[0]}</option>
              <option>{val.size[1]}</option>
              <option>{val.size[2]}</option>
            </select>
            <button onClick={() => handleAddToCart(val.id)}>ADD TO CART</button>
          </div>

          <div className="right">
            <div className="shop">
              <Link to="/shop">GO BACK</Link>
            </div>
            <div className="for">
              <p> Mens <br /> 100% Cotton </p>
            </div>
          </div>
        </div>
      ))}
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
  connect(mapStateToProps, mapDispatchToProps)(ProductPage)
);
