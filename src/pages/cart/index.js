import React from "react";
import { Container, Row } from "reactstrap";
import Footer from "../../components/footer";
import Header from "../../components/header";
import "./index.css";

const Cart = (props) => {
  console.log(props);

  return (
    <Container>
      <Row>
        <Header />
        <h1>cart page</h1>
        <Footer />
      </Row>
    </Container>
  );
};

export default Cart;
