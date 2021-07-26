import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { dataProduct } from "../products/dataProduct";
import CardProduct from "../products/CardProduct"
import { getProducts, addToCart } from "../../store/actions/product";
import "./index.css";
import { Container, Col, Row, Button } from "react-bootstrap";

const CardList = (props) => {
  useEffect(() => {
    props.getProducts();
  }, []);
  console.log(props);

  const handleAddToCart = (id) => {
    props.addToCart(id);
    console.log(props.history);
    alert("add to cart");
    //props.history.push('/cart)
  };

  return (
    <Container>
      <Row sm={3} md={3} lg={3} xl={3}>
        {dataProduct.map((product) => (
          <Col key={product.id}>
            <CardProduct product={product} />
            <Button
              variant="secondary"
              size="sm"
              onClick={() => handleAddToCart(product.id)}
            >
              Add Cart
            </Button>
          </Col>
        ))}
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

export default connect(mapStateToProps, mapDispatchToProps)(CardList)

