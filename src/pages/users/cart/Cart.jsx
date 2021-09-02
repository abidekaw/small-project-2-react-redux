import React from "react";
import { connect } from "react-redux";
import { deleteItem } from "../../../store/actions/product";
import Layout from "../../../layouts/Layout";
import "./Cart.css";

const Cart = (props) => {
  const handleDeleteItem = (id) => {
    props.deleteItem(id);
  };

  const handleOnChange = () => {};

  return (
    <Layout>
      <h2 style={{ textAlign: "center" }}>Daftar Keranjang</h2>
      <div className="cartstyled">
        <div className="cartsummary">
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
                {props.carts &&
                  props.carts.map((val, key) => {
                    const subtotal = val.qty * val.discount;
                    return (
                      <tr key={key}>
                        <td>{key + 1}</td>
                        <td>{val.productName}</td>
                        <td>
                          <button>-</button>
                          <input
                            onChange={() => handleOnChange()}
                            value={val.qty}
                          />
                          <button>+</button>
                        </td>
                        <td>${val.discount}</td>
                        <td>${subtotal}</td>
                        <td>
                          <button onClick={() => handleDeleteItem(props.id)}>
                            Delete
                          </button>
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
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    // products: state.productReducer.products,
    carts: state.productReducer.carts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //     getProducts: () => dispatch(getProducts()),
    //     addToCart: (id) => dispatch(addToCart(id)),
    deleteItem: (id) => dispatch(deleteItem(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
