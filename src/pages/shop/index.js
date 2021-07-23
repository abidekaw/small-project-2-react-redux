import React from "react";
import { Container, Row } from "reactstrap";
import { connect } from "react-redux";
import Header from "../../components/header";
import Footer from "../../components/footer";
import './index.css'

const Shop = (props) => {
  return (
    <Container>
      <Row>
        <Header />
        <div className="flex-parent">
          <div className="flex-child" id="satu">
            <aside id="featured">
              <a href="#">FEATURED</a>
              <a href="#" className="active">
                CATEGORY 1
              </a>
              <a href="#">CATEGORY 2</a>
              <a href="#">CATEGORY 3</a>
              <a href="#">CATEGORY 4</a>
              <a href="#">CATEGORY 5</a>
            </aside>
          </div>
          <div className="flex-child" id="dua">
            <div className="card">
              <p>
                {" "}
                <b>TITLE HERE</b> CATEGORY
              </p>
            </div>
            <div className="card">
              <p>
                {" "}
                <b>TITLE HERE</b> CATEGORY
              </p>
            </div>
            <div className="card">
              <p>
                {" "}
                <b>TITLE HERE</b> CATEGORY
              </p>
            </div>
            <div className="card">
              <p>
                {" "}
                <b>TITLE HERE</b> CATEGORY
              </p>
            </div>
            <div className="card">
              <p>
                {" "}
                <b>TITLE HERE</b> CATEGORY
              </p>
            </div>
            <div className="card">
              <p>
                {" "}
                <b>TITLE HERE</b> CATEGORY
              </p>
            </div>
            <div className="card">
              <p>
                {" "}
                <b>TITLE HERE</b> CATEGORY
              </p>
            </div>
            <div className="card">
              <p>
                {" "}
                <b>TITLE HERE</b> CATEGORY
              </p>
            </div>
            <div className="card">
              <p>
                {" "}
                <b>TITLE HERE</b> CATEGORY
              </p>
            </div>
          </div>
          <div className="flex-child" id="tiga">
            <aside id="filter">
              <a href="#">ALL</a>
              <a href="#" className="active">
                FILTER 1
              </a>
              <a href="#">FILTER 2</a>
              <a href="#">FILTER 3</a>
              <a href="#">FILTER 4</a>
              <a href="#">FILTER 5</a>
            </aside>
          </div>
        </div>

        <div className="pagination">
          <a href="#" className="active">
            1
          </a>
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

const mapStateToProps = (state) => ({
  products: state.productReducer.products,
});

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getTodo: () => dispatch(getProduct()),
//     addToCart: () => dispatch(addToCart())
//   }
// };
// export default Shop
export default connect(mapStateToProps)(Shop)