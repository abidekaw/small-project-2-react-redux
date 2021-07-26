import React from "react";
import { Container, Row } from "react-bootstrap";
import Header from "../../components/header";
import CardList from "../../components/card-shop"
import Footer from "../../components/footer";
import "./index.css";

const Shop = () => {
  return (
    <Container>
      <Row>
        <Header />
        <div className="flex-parent">
          <div className="flex-child" id="satu">
            <aside id="featured">
              <a href="#">FEATURED</a>
              <a href="#" className="active">CATEGORY 1</a>
              <a href="#">CATEGORY 2</a>
              <a href="#">CATEGORY 3</a>
              <a href="#">CATEGORY 4</a>
              <a href="#">CATEGORY 5</a>
            </aside>
          </div>
          <CardList />
          <div className="flex-child" id="tiga">
            <aside id="filter">
              <a href="#">ALL</a>
              <a href="#" className="active">FILTER 1</a>
              <a href="#">FILTER 2</a>
              <a href="#">FILTER 3</a>
              <a href="#">FILTER 4</a>
              <a href="#">FILTER 5</a>
            </aside>
          </div>
        </div>

        <div className="pagination">
          <a href="#" className="active">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">6</a>
          <a href="#">7</a>
          <a href="#">8</a>
          <a href="#">9</a>
        </div>
        <Footer />
      </Row>
    </Container>
  );
};

export default Shop;
