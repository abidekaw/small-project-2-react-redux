import { ADD_TO_CARTS, GET_PRODUCTS } from "../constants";

const initialState = {
  products: [],
  cart: [],
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case ADD_TO_CARTS:
      const carts = [];
      const findProduct = state.products.find((val) => val.id == payload);
      carts.push({ ...findProduct, qty: 1 });
      return {
        ...state,
        cart: carts,
      };

    default:
      return state;
  }
};

export default productReducer;
