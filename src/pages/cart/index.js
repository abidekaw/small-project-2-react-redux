import React from "react";
import { connect } from "react-redux";
import Header from "../../components/header";
import Footer from "../../components/footer";
import "./index.css";

const Cartpage = (props) => {
  console.log(props);

  return (
    <>
    <Header />
    <h2 style={{textAlign: 'center'}}>Daftar Keranjang</h2>
    <div className="cartstyle">
      <div className="cartlist">
        {props.carts.length < 1 ? (
          <h2>Cart is empty !</h2>
        ) : (
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Product Name</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {props.carts && props.carts.map((val, key) => {
                const subtotal = val.qty * val.price;
                return (
                  <tr key={key}>
                    <td>{key + 1}</td>
                    <td>{val.productName}</td>
                    <td>
                      <button>-</button>
                      <input value={val.qty} />
                      <button>+</button>
                    </td>
                    <td>${val.price}</td>
                    <td>${subtotal}</td>
                    <td>
                      <button>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      <div className="cartsummary">
        <h2>Total : 200000</h2>
        <button>Checkout</button>
      </div>
    </div>
    <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    // products: state.productReducer.products,
    carts: state.productReducer.carts,
  };
};

export default connect(mapStateToProps, null)(Cartpage);
