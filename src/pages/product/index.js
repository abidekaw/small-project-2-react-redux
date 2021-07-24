import React, { useEffect } from "react";
import { Container, Row } from "reactstrap";
import { connect } from "react-redux";
import { addToCart, getProducts } from "../../store/actions/product";
import Header from "../../components/header";
import Footer from "../../components/footer";

import "./index.css";
import people from "./people.svg";
import arrLeft from "./arr-left.svg";
import arrRight from "./arr-right.svg";

const Product = (props) => {
  useEffect(() => {
    props.getProducts();
  }, []);

  console.log(props);

  const handleAddToCart = (id) => {
    props.addToCart(id)
    alert('Added to cart')
  };

  return (
    <Container>
      <Row>
        <Header />
        <div className="container">
          <div className="col" className="satu">
            <img
              src={people}
              alt="people"
              width="523"
              height="567"
              className="responsive"
              className="people"
            />
            <div className="arrow-parent">
              <a className="arrow" href="#">
                <img src={arrLeft} alt={arrLeft} width="7" height="13" />
              </a>
              <a className="arrow" href="#">
                <img src={arrRight} alt="arrRight" width="7" height="13" />
              </a>
            </div>
          </div>

          {props.products &&
            props.products.map((val, key) => (
              <div className="col" className="dua" key={key}>
                <h1>{val.productName}</h1>
                <h2>{val.discount}</h2>
                <span>{val.price}</span>
                <p>{val.description}</p>
                <label htmlFor="size">Size: </label>
                <select id="size">
                  <option>{val.size[0]}</option>
                  <option>{val.size[1]}</option>
                  <option>{val.size[2]}</option>
                </select>
                <button onClick={() => handleAddToCart()}>ADD TO CART</button>
              </div>
            ))}

          <div className="col" className="tiga">
            <div className="shop">
              <a href="index.html">GO BACK</a>
            </div>
            <p>
              Mens <br /> 100% Cotton
            </p>
          </div>
        </div>
        <Footer />
      </Row>
    </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(Product);
