import { GET_PRODUCTS } from "../constants";

const initialState = {
  products: [],
};

const productReducer = (state = initialState, { type, payload }) => {
  debugger
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };

    // case ADD_TO_CARTS:
    //   const carts = state.carts;
    //   const findProduct = state.products.find((val) => val.id === payload);
    //   carts.push({ ...findProduct, qty: 1 });

      // return {
      //   ...state,
      //   carts: carts,
      // };

    default:
      return state;
  }
};

export default productReducer;
