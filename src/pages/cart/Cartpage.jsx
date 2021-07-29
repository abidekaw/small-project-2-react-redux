import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./index.css";

const Cartpage = (props) => {
  console.log(props);

  // const handleAddQty = (id, qty) => {
  //   const data = {
  //     id: id,
  //     qty: qty + 1,
  //   }
  //   props.adjustQty(data)
  //   console.log(props)
  //   setRender(true)
  // }
  // const handleRemoveQty = (id, qty) => {
  //   const data = {
  //     id: id,
  //     qty: qty - 1,
  //   }
  //   props.adjustQty(data)
  //   console.log(props)
  //   setRender(true)
  // }
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getProducts: () => dispatch(getProducts()),
//     addToCart: (id) => dispatch(addToCart(id)),
//   };
// };

export default connect(mapStateToProps, null)(Cartpage);
